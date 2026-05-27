import { Resend } from "resend";
import { syncLead } from "@/lib/leadSync";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const FROM_EMAILS = [
  process.env.RESEND_FROM_EMAIL,
  "SecureLifts <bookings@send.securelifts.com>",
  "SecureLifts <bookings@securelifts.com>",
].filter((value): value is string => Boolean(value));

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return Response.json(
        {
          success: false,
          error: "Missing API key",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const {
      name,
      phone,
      email,
      address,
      city,
      zip,
      service,
      date,
      time,
      message,
      smsOptIn,
      sourcePage,
      referrer,
    } = body ?? {};

    if (!name || !phone || !address || !city || !service) {
      return Response.json(
        {
          success: false,
          error: "Missing required lead details",
        },
        { status: 400 }
      );
    }

    const leadSyncResult = await syncLead(body);

    const replyTo =
      typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? email
        : undefined;

    const emailPayload = {
      to: "info@securelifts.com",
      replyTo,
      subject: `New ${escapeHtml(service)} Lead - SecureLifts`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #111827; line-height: 1.6;">
          <h2 style="margin-bottom: 16px;">New Service Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Service Address:</strong> ${escapeHtml(address)}</p>
          <p><strong>City:</strong> ${escapeHtml(city)}</p>
          <p><strong>ZIP Code:</strong> ${escapeHtml(zip)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Preferred Date:</strong> ${escapeHtml(date)}</p>
          <p><strong>Preferred Time:</strong> ${escapeHtml(time)}</p>
          <p><strong>SMS Opt-In:</strong> ${smsOptIn ? "Yes" : "No"}</p>
          <p><strong>Message:</strong> ${escapeHtml(message)}</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p><strong>Lead Source Page:</strong> ${escapeHtml(sourcePage)}</p>
          <p><strong>Referrer:</strong> ${escapeHtml(referrer)}</p>
          <p><strong>FieldPulse Sync:</strong> ${escapeHtml(JSON.stringify(leadSyncResult))}</p>
        </div>
      `,
    };

    for (const from of FROM_EMAILS) {
      try {
        const result = await resend.emails.send({
          from,
          ...emailPayload,
        });

        if (!result.error) {
          return Response.json({
            success: true,
            result,
            leadSync: leadSyncResult,
          });
        }

        console.error("RESEND API ERROR:", { from, error: result.error });
      } catch (error) {
        console.error("RESEND SEND ATTEMPT ERROR:", { from, error });
      }
    }

    return Response.json(
      {
        success: false,
        error: "The request could not be sent. Please call SecureLifts now.",
      },
      { status: 500 }
    );
  } catch (error: unknown) {
    console.error("FULL SEND ERROR:", error);

    return Response.json(
      {
        success: false,
        error: "The request could not be sent. Please call SecureLifts now.",
      },
      { status: 500 }
    );
  }
}
