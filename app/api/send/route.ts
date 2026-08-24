import { Resend } from "resend";
import { after } from "next/server";
import { syncLead } from "@/lib/leadSync";
import { normalizeAndValidateLead } from "@/lib/leadRequest";

const MAX_REQUEST_BYTES = 32_000;
const recentLeads = new Map<string, "processing" | "complete">();

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const FROM_EMAILS = Array.from(
  new Set(
    [
      process.env.RESEND_FROM_EMAIL,
      "SecureLifts <bookings@send.securelifts.com>",
      "SecureLifts <bookings@securelifts.com>",
    ].filter((value): value is string => Boolean(value))
  )
);

function serviceUnavailable() {
  return Response.json(
    {
      success: false,
      error: "Online booking is temporarily unavailable. Please call SecureLifts at (866) 828-1818.",
    },
    { status: 503 }
  );
}

export async function POST(req: Request) {
  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return Response.json({ success: false, error: "Request is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const validation = normalizeAndValidateLead(body);
  if (!validation.ok) {
    return Response.json(
      {
        success: false,
        error: "error" in validation ? validation.error : "Invalid request.",
      },
      { status: 400 }
    );
  }

  const lead = validation.value;
  if (lead.website) {
    return Response.json({ success: true, leadId: lead.leadId });
  }

  const existingState = recentLeads.get(lead.leadId);
  if (existingState === "complete") {
    return Response.json({ success: true, duplicate: true, leadId: lead.leadId });
  }
  if (existingState === "processing") {
    return Response.json(
      { success: false, error: "This request is already being processed." },
      { status: 409 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("LEAD DELIVERY CONFIGURATION ERROR", { leadId: lead.leadId });
    return serviceUnavailable();
  }

  if (recentLeads.size >= 1_000) recentLeads.clear();
  recentLeads.set(lead.leadId, "processing");

  const resend = new Resend(apiKey);
  const emailPayload = {
    to: "info@securelifts.com",
    replyTo: lead.email || undefined,
    subject: `New ${lead.service} Lead - SecureLifts`,
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #111827; line-height: 1.6;">
        <h2 style="margin-bottom: 16px;">New Service Request</h2>
        <p><strong>Lead ID:</strong> ${escapeHtml(lead.leadId)}</p>
        <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
        <p><strong>Service Address:</strong> ${escapeHtml(lead.address)}</p>
        <p><strong>City:</strong> ${escapeHtml(lead.city)}</p>
        <p><strong>ZIP Code:</strong> ${escapeHtml(lead.zip)}</p>
        <p><strong>Service:</strong> ${escapeHtml(lead.service)}</p>
        <p><strong>Preferred Date:</strong> ${escapeHtml(lead.date)}</p>
        <p><strong>Preferred Time:</strong> ${escapeHtml(lead.time)}</p>
        <p><strong>SMS Opt-In:</strong> ${lead.smsOptIn ? "Yes" : "No"}</p>
        <p><strong>Message:</strong> ${escapeHtml(lead.message)}</p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p><strong>Lead Source Page:</strong> ${escapeHtml(lead.sourcePage)}</p>
        <p><strong>Referrer:</strong> ${escapeHtml(lead.referrer)}</p>
      </div>
    `,
  };

  let emailSent = false;
  for (const from of FROM_EMAILS) {
    try {
      const result = await resend.emails.send({ from, ...emailPayload });
      if (!result.error) {
        emailSent = true;
        break;
      }
      console.error("RESEND API ERROR", { leadId: lead.leadId, from, error: result.error });
    } catch (error) {
      console.error("RESEND SEND ERROR", { leadId: lead.leadId, from, error });
    }
  }

  if (!emailSent) {
    recentLeads.delete(lead.leadId);
    return serviceUnavailable();
  }

  recentLeads.set(lead.leadId, "complete");
  after(async () => {
    const leadSyncResult = await syncLead(lead);
    console.info("LEAD ACCEPTED", {
      leadId: lead.leadId,
      fieldPulse: leadSyncResult.fieldPulse.success,
      highLevel: leadSyncResult.highLevel.success,
    });
  });

  return Response.json({ success: true, leadId: lead.leadId });
}
