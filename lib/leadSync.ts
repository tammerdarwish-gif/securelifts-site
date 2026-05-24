
export type LeadInput = {
  name?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  service?: string;
  date?: string;
  time?: string;
  message?: string;
  smsOptIn?: boolean;
  sourcePage?: string;
  referrer?: string;
};

type SyncResult = {
  enabled: boolean;
  success: boolean;
  skipped?: boolean;
  error?: string;
  details?: unknown;
};

const DEFAULT_FIELD_PULSE_API_BASE_URL =
  "https://ywe3crmpll.execute-api.us-east-2.amazonaws.com/stage";

const DEFAULT_HIGHLEVEL_LOCATION_ID = "7hrTJmU6U7A0rUjbCzBv";
const DEFAULT_HIGHLEVEL_API_BASE_URL = "https://services.leadconnectorhq.com";
const DEFAULT_HIGHLEVEL_API_VERSION = "2023-02-21";

function asString(value: unknown) {
  if (typeof value === "string") {    return value.trim();  }  if (typeof value === "number" && Number.isFinite(value)) {    return String(value);  }  return "";
}

function asBoolean(value: unknown) {
  return value === true || value === "true" || value === "yes" || value === "1";
}

function splitName(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" "),
  };
}

function compactObject<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== "" && entry != null)
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

async function parseJsonSafely(response: Response) {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function postJson(
  url: string,
  payload: Record<string, unknown>,
  headers: HeadersInit
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(payload),
  });

  const data = await parseJsonSafely(response);

  if (!response.ok) {
    return {
      success: false,
      status: response.status,
      data,
    };
  }

  return {
    success: true,
    status: response.status,
    data,
  };
}

function pickField(source: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = source[key];
    if (value != null && value !== "") {
      return value;
    }
  }

  return "";
}

export function normalizeLead(input: unknown): LeadInput {
  const body = isRecord(input) ? input : {};
  const contact = isRecord(body.contact) ? body.contact : {};
  const customData = isRecord(body.customData) ? body.customData : {};
  const merged = {
    ...body,
    ...contact,
    ...customData,
  };

  const name =
    asString(
      pickField(merged, [
        "name",
        "fullName",
        "full_name",
        "contactName",
        "contact_name",
      ])
    ) ||
    [pickField(merged, ["firstName", "first_name"]), pickField(merged, ["lastName", "last_name"])]
      .map(asString)
      .filter(Boolean)
      .join(" ");

  const split = splitName(name);

  return {
    name,
    firstName:
      asString(pickField(merged, ["firstName", "first_name"])) || split.firstName,
    lastName:
      asString(pickField(merged, ["lastName", "last_name"])) || split.lastName,
    phone: asString(pickField(merged, ["phone", "phoneNumber", "phone_number"])),
    email: asString(pickField(merged, ["email", "emailAddress", "email_address"])),
    address: asString(
      pickField(merged, ["address", "address1", "street", "streetAddress"])
    ),
    city: asString(pickField(merged, ["city"])),
    state: asString(pickField(merged, ["state", "region"])),
    zip: asString(pickField(merged, ["zip", "postalCode", "postal_code"])),
    service: asString(
      pickField(merged, ["service", "serviceNeeded", "service_needed", "Service Needed"])
    ),
    date: asString(pickField(merged, ["date", "preferredDate", "preferred_date"])),
    time: asString(
      pickField(merged, ["time", "preferredTime", "preferred_time", "Preferred Service Time"])
    ),
    message: asString(
      pickField(merged, ["message", "notes", "note", "description", "Reason For Call"])
    ),
    smsOptIn: asBoolean(
      pickField(merged, ["smsOptIn", "sms_opt_in", "SMS Opt-In"])
    ),
    sourcePage: asString(
      pickField(merged, ["sourcePage", "source_page", "page", "url"])
    ),
    referrer: asString(pickField(merged, ["referrer", "referer"])),
  };
}

function leadNotes(lead: LeadInput) {
  return [
    lead.message && `Message: ${lead.message}`,
    lead.service && `Service: ${lead.service}`,
    lead.date && `Preferred date: ${lead.date}`,
    lead.time && `Preferred time: ${lead.time}`,
    `SMS opt-in: ${lead.smsOptIn ? "Yes" : "No"}`,
    lead.sourcePage && `Source page: ${lead.sourcePage}`,
    lead.referrer && `Referrer: ${lead.referrer}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function leadDisplayName(lead: LeadInput) {
  return (
    lead.name ||
    [lead.firstName, lead.lastName].filter(Boolean).join(" ") ||
    lead.phone ||
    lead.email ||
    "SecureLifts Website Lead"
  );
}

function extractCreatedId(data: unknown) {
    if (Array.isArray(data)) {
          for (const item of data) {
                  const nested = extractCreatedId(item);
                  if (nested) {
                            return nested;
                  }
          }
          return "";
    }

  
  if (!isRecord(data)) {
    return "";
  }

  const directId = asString(
    data.id ?? data.customerId ?? data.customer_id ?? data.customerID ?? data.contactId ?? data.contact_id
  );

  if (directId) {
    return directId;
  }

  for (const key of ["data", "customer", "customers", "result", "results", "item", "items", "record", "records"] as const) {
    if (data[key] != null) {
      const nested = extractCreatedId(data[key]);
      if (nested) {
        return nested;
      }
    }
  }

  return "";
}

export async function syncLeadToFieldPulse(lead: LeadInput): Promise<SyncResult> {
  const apiKey = process.env.FIELD_PULSE_API_KEY;

  if (!apiKey) {
    return {
      enabled: false,
      success: true,
      skipped: true,
      error: "FIELD_PULSE_API_KEY is not set",
    };
  }

  const baseUrl = (
    process.env.FIELD_PULSE_API_BASE_URL || DEFAULT_FIELD_PULSE_API_BASE_URL
  ).replace(/\/$/, "");

  const headers = {
    "x-api-key": apiKey,
  };

  const originalName = leadDisplayName(lead); const uniqueLeadId = `SL-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`; const displayName = `${originalName} - ${uniqueLeadId}`;
  const fieldPulseCustomer = compactObject({
    firstName: displayName,
    first_name: displayName,
    lastName: uniqueLeadId,
    last_name: uniqueLeadId,
    name: displayName,
    fullName: displayName,
    full_name: displayName,
    displayName,
    display_name: displayName,
    display: displayName,
    companyName: displayName,
    company_name: displayName,
    phone: lead.phone,
    email: lead.email,
    address: lead.address,
    city: lead.city,
    state: lead.state || "FL",
    zip: lead.zip,
    postalCode: lead.zip,
    postal_code: lead.zip,
    accountStatus: "Active",
    account_status: "Active",
    leadSource: "SecureLifts Website / GoHighLevel",
    lead_source: "SecureLifts Website / GoHighLevel",
    notes: leadNotes(lead),
  });
  const customerPayload = {
    ...fieldPulseCustomer,
    customer: fieldPulseCustomer,
  };

  const customerResult = await postJson(`${baseUrl}/customers`, customerPayload, headers);

  if (!customerResult.success) {
    console.error("FIELD PULSE CUSTOMER SYNC ERROR:", {
      ...customerResult,
      payloadKeys: Object.keys(fieldPulseCustomer),
    });

    return {
      enabled: true,
      success: false,
      error: "Could not create FieldPulse customer lead",
      details: customerResult,
    };
  }

  if (process.env.FIELD_PULSE_CREATE_JOB !== "true") {
    return {
      enabled: true,
      success: true,
      details: {
        customer: customerResult.data,
      },
    };
  }

  const customerId = extractCreatedId(customerResult.data);  const jobType = process.env.FIELD_PULSE_JOB_TYPE || "New Lead";  const jobTypeId = process.env.FIELD_PULSE_JOB_TYPE_ID || "";  const billingCode = Number(process.env.FIELD_PULSE_BILLING_CODE || 1);  const jobStatus = Number(process.env.FIELD_PULSE_JOB_STATUS || 1);

  const jobPayload = compactObject({
    customerId,
    customer_id: customerId,    customerID: customerId,    customer: { id: customerId },    jobType,    job_type: jobType,    jobTypeName: jobType,    job_type_name: jobType,    jobTypeId: jobTypeId,    job_type_id: jobTypeId,    billing: billingCode,    billingCode,    billing_code: billingCode,    billingType: billingCode,    billing_type: billingCode,
    title: lead.service || "SecureLifts Service Lead",
    name: lead.service || "SecureLifts Service Lead",
    description: leadNotes(lead),
    notes: leadNotes(lead),
    address: lead.address,
    city: lead.city,
    state: lead.state || "FL",
    zip: lead.zip,
    status: jobStatus,    statusId: jobStatus,    status_id: jobStatus,
    source: "SecureLifts Website / GoHighLevel",
  });

  const jobResult = await postJson(`${baseUrl}/jobs`, jobPayload, headers);

  if (!jobResult.success) {
    console.error("FIELD PULSE JOB SYNC ERROR:", jobResult);
  }

  return {
    enabled: true,
    success: true,
    details: {
      customer: customerResult.data,
      job: jobResult.success ? jobResult.data : null,
      jobError: jobResult.success ? null : jobResult,
    },
  };
}

export async function syncLeadToHighLevel(lead: LeadInput): Promise<SyncResult> {
  const token = process.env.HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN;

  if (!token) {
    return {
      enabled: false,
      success: true,
      skipped: true,
      error: "HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN is not set",
    };
  }

  const baseUrl = (
    process.env.HIGHLEVEL_API_BASE_URL || DEFAULT_HIGHLEVEL_API_BASE_URL
  ).replace(/\/$/, "");
  const locationId =
    process.env.HIGHLEVEL_LOCATION_ID || DEFAULT_HIGHLEVEL_LOCATION_ID;
  const version =
    process.env.HIGHLEVEL_API_VERSION || DEFAULT_HIGHLEVEL_API_VERSION;

  const headers = {
    Authorization: `Bearer ${token}`,
    Version: version,
  };

  const contactResult = await postJson(
    `${baseUrl}/contacts/upsert`,
    compactObject({
      locationId,
      firstName: lead.firstName,
      lastName: lead.lastName,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      address1: lead.address,
      city: lead.city,
      state: lead.state || "FL",
      postalCode: lead.zip,
      source: "SecureLifts Website",
      tags: [
        "sl-new-lead",
        lead.smsOptIn ? "sl-sms-opt-in" : "",
        serviceToTag(lead.service),
      ].filter(Boolean),
      customFields: [
        { key: "service_needed", field_value: lead.service },
        { key: "lead_source_page", field_value: lead.sourcePage },
        { key: "urgency", field_value: lead.service?.toLowerCase().includes("emergency") ? "Emergency" : "Normal" },
        { key: "sms_opt_in", field_value: lead.smsOptIn ? "Yes" : "No" },
        { key: "preferred_service_time", field_value: [lead.date, lead.time].filter(Boolean).join(" ") },
      ].filter((field) => field.field_value),
    }),
    headers
  );

  if (!contactResult.success) {
    console.error("HIGHLEVEL CONTACT SYNC ERROR:", contactResult);
    return {
      enabled: true,
      success: false,
      error: "Could not upsert HighLevel contact",
      details: contactResult,
    };
  }

  return {
    enabled: true,
    success: true,
    details: contactResult.data,
  };
}

function serviceToTag(service = "") {
  const value = service.toLowerCase();

  if (value.includes("spring")) return "sl-broken-spring";
  if (value.includes("opener")) return "sl-opener-repair";
  if (value.includes("install")) return "sl-installation";
  if (value.includes("hurricane") || value.includes("impact") || value.includes("wind")) {
    return "sl-hurricane-door";
  }
  if (value.includes("commercial")) return "sl-commercial";
  if (value.includes("emergency")) return "sl-emergency-repair";

  return "";
}

export async function syncLead(leadInput: unknown) {
  const lead = normalizeLead(leadInput);

  const [fieldPulse, highLevel] = await Promise.allSettled([
    syncLeadToFieldPulse(lead),
    syncLeadToHighLevel(lead),
  ]);

  return {
    lead,
    fieldPulse:
      fieldPulse.status === "fulfilled"
        ? fieldPulse.value
        : {
            enabled: true,
            success: false,
            error: fieldPulse.reason instanceof Error ? fieldPulse.reason.message : "FieldPulse sync failed",
          },
    highLevel:
      highLevel.status === "fulfilled"
        ? highLevel.value
        : {
            enabled: true,
            success: false,
            error: highLevel.reason instanceof Error ? highLevel.reason.message : "HighLevel sync failed",
          },
  };
}
