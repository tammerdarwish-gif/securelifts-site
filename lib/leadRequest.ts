import type { LeadInput } from "@/lib/leadSync";

export type ValidatedLead = LeadInput & {
  leadId: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  service: string;
  website: string;
};

type ValidationResult =
  | { ok: true; value: ValidatedLead }
  | { ok: false; error: string };

function text(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().replace(/\s+/g, " ").slice(0, maxLength)
    : "";
}

function normalizePhone(value: unknown) {
  const digits = text(value, 40).replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length >= 11 && digits.length <= 15) return `+${digits}`;
  return "";
}

export function normalizeAndValidateLead(input: unknown): ValidationResult {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, error: "Invalid request" };
  }

  const body = input as Record<string, unknown>;
  const leadId = text(body.leadId, 100) || crypto.randomUUID();
  const name = text(body.name, 120);
  const phone = normalizePhone(body.phone);
  const email = text(body.email, 254).toLowerCase();
  const address = text(body.address, 240);
  const city = text(body.city, 100);
  const service = text(body.service, 120);

  if (!name || !phone || !address || !city || !service) {
    return { ok: false, error: "Enter a valid name, phone number, address, city, and service." };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  return {
    ok: true,
    value: {
      leadId,
      name,
      phone,
      email,
      address,
      city,
      state: text(body.state, 30) || "FL",
      zip: text(body.zip, 12),
      service,
      date: text(body.date, 20),
      time: text(body.time, 60),
      message: text(body.message, 2000),
      smsOptIn: body.smsOptIn === true,
      sourcePage: text(body.sourcePage, 500),
      referrer: text(body.referrer, 500),
      campaignSource: text(body.campaignSource, 200),
      website: text(body.website, 200),
    },
  };
}
