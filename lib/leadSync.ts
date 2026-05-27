
export type LeadInput = {
  leadId?: string;
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
  doorType?: string;
  residentialOrCommercial?: string;
  date?: string;
  time?: string;
  message?: string;
  smsOptIn?: boolean;
  sourcePage?: string;
  referrer?: string;
  campaignSource?: string;
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

function cleanFieldValue(value: unknown) {
  const text = asString(value);

  if (!text || text.includes("{{") || text.includes("}}")) {
    return "";
  }

  return text;
}

function asBoolean(value: unknown) {
  return value === true || value === "true" || value === "yes" || value === "1";
}

function createLeadId() {
  return `SL-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
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

async function putJson(
  url: string,
  payload: Record<string, unknown>,
  headers: HeadersInit
) {
  const response = await fetch(url, {
    method: "PUT",
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

async function getJson(url: string, headers: HeadersInit) {
  const response = await fetch(url, {
    method: "GET",
    headers,
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
    cleanFieldValue(
      pickField(merged, [
        "name",
        "fullName",
        "full_name",
        "contactName",
        "contact_name",
      ])
    ) ||
    [pickField(merged, ["firstName", "first_name"]), pickField(merged, ["lastName", "last_name"])]
      .map(cleanFieldValue)
      .filter(Boolean)
      .join(" ");

  const split = splitName(name);
  const firstNameValue = cleanFieldValue(
    pickField(merged, ["firstName", "first_name"])
  );
  const lastNameValue = cleanFieldValue(
    pickField(merged, ["lastName", "last_name"])
  );
  const firstNameSplit = firstNameValue && !lastNameValue ? splitName(firstNameValue) : null;

  return {
    leadId:
      cleanFieldValue(
        pickField(merged, [
          "leadId",
          "lead_id",
          "externalLeadId",
          "external_lead_id",
          "securelifts_lead_id",
        ])
      ) || createLeadId(),
    name,
    firstName:
      firstNameSplit?.firstName || firstNameValue || split.firstName,
    lastName:
      lastNameValue || firstNameSplit?.lastName || split.lastName,
    phone: cleanFieldValue(pickField(merged, ["phone", "phoneNumber", "phone_number"])),
    email: cleanFieldValue(pickField(merged, ["email", "emailAddress", "email_address"])),
    address: cleanFieldValue(
      pickField(merged, ["address", "address1", "street", "streetAddress"])
    ),
    city: cleanFieldValue(pickField(merged, ["city"])),
    state: cleanFieldValue(pickField(merged, ["state", "region"])),
    zip: cleanFieldValue(pickField(merged, ["zip", "postalCode", "postal_code"])),
    service: cleanFieldValue(
      pickField(merged, ["service", "serviceNeeded", "service_needed", "Service Needed"])
    ),
    doorType: cleanFieldValue(
      pickField(merged, [
        "doorType",
        "door_type",
        "Door / System Type",
        "Door Type",
        "system_type",
      ])
    ),
    residentialOrCommercial: cleanFieldValue(
      pickField(merged, [
        "residentialOrCommercial",
        "residential_or_commercial",
        "Residential or Commercial",
        "customer_type",
      ])
    ),
    date: cleanFieldValue(pickField(merged, ["date", "preferredDate", "preferred_date"])),
    time: cleanFieldValue(
      pickField(merged, ["time", "preferredTime", "preferred_time", "Preferred Service Time"])
    ),
    message: cleanFieldValue(
      pickField(merged, ["message", "notes", "note", "description", "Reason For Call"])
    ),
    smsOptIn: asBoolean(
      pickField(merged, ["smsOptIn", "sms_opt_in", "SMS Opt-In"])
    ),
    sourcePage: cleanFieldValue(
      pickField(merged, ["sourcePage", "source_page", "page", "url"])
    ),
    referrer: cleanFieldValue(pickField(merged, ["referrer", "referer"])),
    campaignSource: cleanFieldValue(
      pickField(merged, [
        "campaignSource",
        "campaign_source",
        "utm_campaign",
        "utm_source",
        "utm_medium",
        "utm_content",
        "utm_term",
        "gclid",
        "gbraid",
        "wbraid",
        "fbclid",
        "source",
      ])
    ),
  };
}

function leadNotes(lead: LeadInput) {
  return [
    lead.leadId && `SecureLifts lead ID: ${lead.leadId}`,
    lead.message && `Message: ${lead.message}`,
    lead.service && `Service: ${lead.service}`,
    lead.doorType && `Door / system type: ${lead.doorType}`,
    lead.residentialOrCommercial &&
      `Residential or commercial: ${lead.residentialOrCommercial}`,
    lead.date && `Preferred date: ${lead.date}`,
    lead.time && `Preferred time: ${lead.time}`,
    `SMS opt-in: ${lead.smsOptIn ? "Yes" : "No"}`,
    lead.sourcePage && `Source page: ${lead.sourcePage}`,
    lead.referrer && `Referrer: ${lead.referrer}`,
    lead.campaignSource && `Campaign source: ${lead.campaignSource}`,
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

function fieldPulseAddress(lead: LeadInput) {
  const state = lead.state || "FL";

  return compactObject({
    address: lead.address,
    address1: lead.address,
    address_1: lead.address,
    street: lead.address,
    streetAddress: lead.address,
    street_address: lead.address,
    service_address_1: lead.address,
    service_address_city: lead.city,
    service_address_state: state,
    service_address_zip_code: lead.zip,
    city: lead.city,
    state,
    zip: lead.zip,
    zip_code: lead.zip,
    postalCode: lead.zip,
    postal_code: lead.zip,
  });
}

function fieldPulseLocationString(lead: LeadInput) {
  return [lead.address, lead.city, lead.state || "FL", lead.zip]
    .filter(Boolean)
    .join(", ");
}

function parsePreferredTime(value: string) {
  const normalized = value.trim().toLowerCase();

  if (normalized === "as soon as possible" || normalized === "flexible") {
    return {
      start: "08:00:00",
      end: "10:00:00",
    };
  }

  const match = value.match(
    /^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)\s+-\s+(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/i
  );

  if (!match) {
    return null;
  }

  const to24Hour = (
    hourValue: string,
    minuteValue: string | undefined,
    periodValue: string
  ) => {
    let hour = Number(hourValue);
    const minute = Number(minuteValue || 0);
    const period = periodValue.toUpperCase();

    if (period === "PM" && hour !== 12) {
      hour += 12;
    }

    if (period === "AM" && hour === 12) {
      hour = 0;
    }

    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;
  };

  return {
    start: to24Hour(match[1], match[2], match[3]),
    end: to24Hour(match[4], match[5], match[6]),
  };
}

function fieldPulseJobSchedule(lead: LeadInput) {
  if (!lead.date || !lead.time) {
    return {};
  }

  const parsedTime = parsePreferredTime(lead.time);

  if (!parsedTime) {
    return {};
  }

  const startTime = `${lead.date} ${parsedTime.start}`;
  const endTime = `${lead.date} ${parsedTime.end}`;

  return {
    start_time: startTime,
    end_time: endTime,
    due_date: startTime,
    customer_arrival_window_start_time: startTime,
    customer_arrival_window_end_time: endTime,
  };
}

function fieldPulseLocation(
  lead: LeadInput,
  originalName: string,
  customerId?: string
) {
  return compactObject({
    object_type: "customer",
    object_id: customerId ? Number(customerId) : undefined,
    title: `Service Address - ${originalName}`,
    address_1: lead.address,
    city: lead.city,
    state: lead.state || "FL",
    zip_code: lead.zip,
    notes: leadNotes(lead),
    is_main_location: true,
    is_primary_location: true,
  });
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

  for (const key of ["response", "data", "customer", "customers", "result", "results", "item", "items", "record", "records"] as const) {
    if (data[key] != null) {
      const nested = extractCreatedId(data[key]);
      if (nested) {
        return nested;
      }
    }
  }

  return "";
}

async function findFieldPulseCustomer(
  baseUrl: string,
  headers: HeadersInit,
  lead: LeadInput
) {
  const searches = [lead.phone, lead.email, leadDisplayName(lead)].filter(Boolean);

  for (const search of searches) {
    const result = await getJson(
      `${baseUrl}/customers?search=${encodeURIComponent(search)}&limit=5`,
      headers
    );

    if (!result.success) {
      continue;
    }

    const customerId = extractCreatedId(result.data);

    if (customerId) {
      return result;
    }
  }

  return null;
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

  const originalName = leadDisplayName(lead);
  const uniqueLeadId = lead.leadId || createLeadId();
  const addressFields = fieldPulseAddress(lead);
  const initialLocation = fieldPulseLocation(lead, originalName);
  const fieldPulseCustomer = compactObject({
    externalId: uniqueLeadId,
    external_id: uniqueLeadId,
    leadId: uniqueLeadId,
    lead_id: uniqueLeadId,
    firstName: lead.firstName || originalName,
    first_name: lead.firstName || originalName,
    lastName: lead.lastName,
    last_name: lead.lastName,
    display_name: originalName,
    phone: lead.phone,
    email: lead.email,
    ...addressFields,
    accountStatus: "Active",
    account_status: "Active",
    leadSource: "SecureLifts Website / GoHighLevel",
    lead_source: "SecureLifts Website / GoHighLevel",
    source: "SecureLifts Website / GoHighLevel",
    notes: leadNotes(lead),
    locations: lead.address ? [initialLocation] : undefined,
  });

  let customerResult = await postJson(`${baseUrl}/customers`, fieldPulseCustomer, headers);

  if (!customerResult.success) {
    const existingCustomerResult = await findFieldPulseCustomer(baseUrl, headers, lead);

    if (existingCustomerResult?.success) {
      customerResult = existingCustomerResult;
    } else {
      console.error("FIELD PULSE CUSTOMER SYNC ERROR:", {
        ...customerResult,
        payloadKeys: Object.keys(fieldPulseCustomer),
      });

      return {
        enabled: true,
        success: false,
        error: "Could not create or retrieve FieldPulse customer lead",
        details: customerResult,
      };
    }
  }

  const customerId = extractCreatedId(customerResult.data);

  if (!customerId) {
    return {
      enabled: true,
      success: false,
      error: "FieldPulse customer was created or found, but no customer ID was returned",
      details: customerResult,
    };
  }

  let locationResult:
    | Awaited<ReturnType<typeof postJson>>
    | { success: false; skipped: true; data: string }
    | null = null;

  if (
    lead.address &&
    customerId &&
    process.env.FIELD_PULSE_CREATE_LOCATION !== "false"
  ) {
    locationResult = await postJson(
      `${baseUrl}/locations`,
      fieldPulseLocation(lead, originalName, customerId),
      headers
    );

    if (!locationResult.success) {
      console.error("FIELD PULSE LOCATION SYNC ERROR:", locationResult);
    }
  }

  if (process.env.FIELD_PULSE_CREATE_JOB === "false") {
    return {
      enabled: true,
      success: true,
      details: {
        customer: customerResult.data,
        location: locationResult?.success ? locationResult.data : null,
        locationError:
          locationResult && !locationResult.success ? locationResult : null,
      },
    };
  }

  const locationId =
    locationResult?.success ? extractCreatedId(locationResult.data) : "";
  const locationText = fieldPulseLocationString(lead);
  const jobType = process.env.FIELD_PULSE_JOB_TYPE || "service";
  const jobTypeId = process.env.FIELD_PULSE_JOB_TYPE_ID || "";
  const billingCode = Number(process.env.FIELD_PULSE_BILLING_CODE || 1);
  const jobStatus = Number(process.env.FIELD_PULSE_JOB_STATUS || 1);
  const jobStatusWorkflowId = Number(process.env.FIELD_PULSE_JOB_STATUS_WORKFLOW_ID || 0);

  const jobPayload = compactObject({
    customer_id: Number(customerId),
    project_id: undefined,
    job_type: jobType,
    subtitle: lead.service || "SecureLifts Service Lead",
    status: jobStatus,
    status_id: jobStatus,
    status_workflow_id: jobStatusWorkflowId || undefined,
    billing: billingCode,
    notes: lead.message || lead.service || "SecureLifts service request",
    field_notes: leadNotes(lead),
    location: locationText,
    location_id: locationId,
    job_type_id: jobTypeId,
    type: "job",
  });

  const jobResult = await postJson(`${baseUrl}/jobs`, jobPayload, headers);

  if (!jobResult.success) {
    console.error("FIELD PULSE JOB SYNC ERROR:", jobResult);
  }

  const jobId = jobResult.success ? extractCreatedId(jobResult.data) : "";
  const scheduleFields = fieldPulseJobSchedule(lead);
  const scheduleResult =
    jobId && Object.keys(scheduleFields).length
      ? await putJson(
          `${baseUrl}/jobs/${jobId}`,
          {
            ...jobPayload,
            ...scheduleFields,
          },
          headers
        )
      : null;

  if (scheduleResult && !scheduleResult.success) {
    console.error("FIELD PULSE JOB SCHEDULE UPDATE ERROR:", scheduleResult);
  }

  return {
    enabled: true,
    success: true,
    details: {
      customer: customerResult.data,
      location: locationResult?.success ? locationResult.data : null,
      locationError:
        locationResult && !locationResult.success ? locationResult : null,
      job: jobResult.success ? jobResult.data : null,
      jobError: jobResult.success ? null : jobResult,
      schedule: scheduleResult?.success ? scheduleResult.data : null,
      scheduleError:
        scheduleResult && !scheduleResult.success ? scheduleResult : null,
    },
  };
}

type HighLevelSyncContext = {
  fieldPulse?: SyncResult;
};

function fieldPulseTags(context?: HighLevelSyncContext) {
  const fieldPulse = context?.fieldPulse;

  if (!fieldPulse?.enabled) {
    return [];
  }

  if (!fieldPulse.success) {
    return ["sl-fieldpulse-sync-failed"];
  }

  const details = isRecord(fieldPulse.details) ? fieldPulse.details : {};

  return [
    "sl-fieldpulse-synced",
    details.job ? "sl-fieldpulse-job-created" : "",
  ].filter(Boolean);
}

function uniqueTags(tags: string[]) {
  return Array.from(new Set(tags.filter(Boolean)));
}

function leadSourceText(lead: LeadInput) {
  return [lead.sourcePage, lead.referrer, lead.campaignSource]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function leadSourceLabel(lead: LeadInput) {
  const value = leadSourceText(lead);

  if (value.includes("fieldpulse")) return "SecureLifts FieldPulse Booking";
  if (
    value.includes("leadconnector") ||
    value.includes("gohighlevel") ||
    value.includes("securelifts form")
  ) {
    return "SecureLifts GHL Form";
  }
  if (
    value.includes("facebook message") ||
    value.includes("messenger") ||
    value.includes("fb message")
  ) {
    return "SecureLifts Facebook Message";
  }
  if (value.includes("facebook")) return "SecureLifts Facebook Lead Ads";
  if (value.includes("instagram")) return "SecureLifts Instagram";
  if (value.includes("tiktok")) return "SecureLifts TikTok";
  if (value.includes("linkedin")) return "SecureLifts LinkedIn";
  if (value.includes("whatsapp")) return "SecureLifts WhatsApp";
  if (
    value.includes("google lead") ||
    value.includes("google lead ads")
  ) {
    return "SecureLifts Google Lead Ads";
  }
  if (
    value.includes("google ads") ||
    value.includes("google search") ||
    value.includes("paid search") ||
    value.includes("cpc") ||
    value.includes("gclid") ||
    value.includes("gbraid") ||
    value.includes("wbraid")
  ) {
    return "SecureLifts Google Search Ads";
  }
  if (
    value.includes("google business") ||
    value.includes("business profile") ||
    value.includes("gbp") ||
    value.includes("maps.google")
  ) {
    return "SecureLifts Google Business Profile";
  }
  if (value.includes("local services") || value.includes("lsa")) {
    return "SecureLifts Local Services Ads";
  }
  if (value.includes("bing places") || value.includes("bing_places")) {
    return "SecureLifts Bing Places";
  }
  if (
    value.includes("apple business") ||
    value.includes("apple_business_connect")
  ) {
    return "SecureLifts Apple Business Connect";
  }
  if (value.includes("yelp")) return "SecureLifts Yelp";
  if (value.includes("bbb")) return "SecureLifts BBB";
  if (value.includes("chamber")) return "SecureLifts Chamber";
  if (value.includes("nextdoor")) return "SecureLifts Nextdoor";
  if (value.includes("angi")) return "SecureLifts Angi";
  if (value.includes("homeadvisor")) return "SecureLifts HomeAdvisor";
  if (value.includes("thumbtack")) return "SecureLifts Thumbtack";
  if (value.includes("houzz")) return "SecureLifts Houzz";
  if (value.includes("porch")) return "SecureLifts Porch";
  if (value.includes("foursquare")) return "SecureLifts Foursquare";
  if (value.includes("data_axle") || value.includes("data axle")) {
    return "SecureLifts Data Axle";
  }
  if (value.includes("mapquest")) return "SecureLifts MapQuest";
  if (value.includes("clopay")) return "SecureLifts Clopay";
  if (value.includes("liftmaster")) return "SecureLifts LiftMaster";
  if (value.includes("best_pick_reports") || value.includes("best pick")) {
    return "SecureLifts Best Pick Reports";
  }
  if (value.includes("tellows")) return "SecureLifts Tellows";
  if (value.includes("showmelocal")) return "SecureLifts ShowMeLocal";
  if (value.includes("cylex")) return "SecureLifts Cylex";
  if (value.includes("brownbook")) return "SecureLifts Brownbook";
  if (value.includes("hotfrog")) return "SecureLifts HotFrog";
  if (value.includes("n49")) return "SecureLifts n49";
  if (value.includes("iglobal")) return "SecureLifts iGlobal";
  if (
    value.includes("my_local_services") ||
    value.includes("my local services")
  ) {
    return "SecureLifts My Local Services";
  }
  if (value.includes("uscity")) return "SecureLifts USCity";
  if (value.includes("navmii")) return "SecureLifts Navmii";
  if (value.includes("where_to") || value.includes("where to")) {
    return "SecureLifts Where To";
  }
  if (value.includes("aroundme")) return "SecureLifts AroundMe";
  if (value.includes("merchantcircle")) return "SecureLifts MerchantCircle";
  if (value.includes("tupalo")) return "SecureLifts Tupalo";
  if (value.includes("citysquares")) return "SecureLifts CitySquares";
  if (value.includes("8coupons")) return "SecureLifts 8coupons";
  if (value.includes("elocal")) return "SecureLifts eLocal";
  if (value.includes("yellowpagesgoesgreen")) {
    return "SecureLifts YellowPagesGoesGreen";
  }
  if (value.includes("yellowpages")) return "SecureLifts Yellowpages.com";
  if (value.includes("golocal247")) return "SecureLifts GoLocal247";
  if (value.includes("opendi")) return "SecureLifts Opendi";
  if (value.includes("ibegin")) return "SecureLifts iBegin";
  if (value.includes("ezlocal")) return "SecureLifts EZlocal";
  if (value.includes("propertycapsule")) return "SecureLifts PropertyCapsule";
  if (value.includes("judysbook")) return "SecureLifts JUDYSBOOK";
  if (value.includes("acompio")) return "SecureLifts Acompio";
  if (value.includes("referral")) return "SecureLifts Referral";
  if (value.includes("manual")) return "SecureLifts Manual Entry";

  return "SecureLifts Website";
}

function sourceToTags(lead: LeadInput) {
  const value = leadSourceText(lead);

  if (value.includes("fieldpulse")) return ["src-fieldpulse-booking"];
  if (
    value.includes("leadconnector") ||
    value.includes("gohighlevel") ||
    value.includes("securelifts form")
  ) {
    return ["src-ghl-form"];
  }
  if (
    value.includes("facebook message") ||
    value.includes("messenger") ||
    value.includes("fb message")
  ) {
    return ["src-facebook-message"];
  }
  if (value.includes("facebook")) return ["src-facebook-lead-ads"];
  if (value.includes("instagram")) return ["src-instagram-message"];
  if (value.includes("tiktok")) return ["src-tiktok"];
  if (value.includes("linkedin")) return ["src-linkedin"];
  if (value.includes("whatsapp")) return ["src-whatsapp"];
  if (
    value.includes("google lead") ||
    value.includes("google lead ads")
  ) {
    return ["src-google-lead-ads"];
  }
  if (
    value.includes("google ads") ||
    value.includes("google search") ||
    value.includes("paid search") ||
    value.includes("cpc") ||
    value.includes("gclid") ||
    value.includes("gbraid") ||
    value.includes("wbraid")
  ) {
    return ["src-google-search-ads"];
  }
  if (
    value.includes("google business") ||
    value.includes("business profile") ||
    value.includes("gbp") ||
    value.includes("maps.google")
  ) {
    return ["src-google-business-profile"];
  }
  if (value.includes("local services") || value.includes("lsa")) {
    return ["src-local-services-ads"];
  }
  if (value.includes("bing places") || value.includes("bing_places")) {
    return ["src-bing-places"];
  }
  if (
    value.includes("apple business") ||
    value.includes("apple_business_connect")
  ) {
    return ["src-apple-business-connect"];
  }
  if (value.includes("yelp")) return ["src-yelp"];
  if (value.includes("bbb")) return ["src-bbb"];
  if (value.includes("chamber")) return ["src-chamber"];
  if (value.includes("nextdoor")) return ["src-nextdoor"];
  if (value.includes("angi")) return ["src-angi"];
  if (value.includes("homeadvisor")) return ["src-homeadvisor"];
  if (value.includes("thumbtack")) return ["src-thumbtack"];
  if (value.includes("houzz")) return ["src-houzz"];
  if (value.includes("porch")) return ["src-porch"];
  if (value.includes("foursquare")) return ["src-foursquare"];
  if (value.includes("data_axle") || value.includes("data axle")) {
    return ["src-data-axle"];
  }
  if (value.includes("mapquest")) return ["src-mapquest"];
  if (value.includes("clopay")) return ["src-clopay"];
  if (value.includes("liftmaster")) return ["src-liftmaster"];
  if (value.includes("best_pick_reports") || value.includes("best pick")) {
    return ["src-best-pick-reports"];
  }
  if (value.includes("tellows")) return ["src-tellows"];
  if (value.includes("showmelocal")) return ["src-showmelocal"];
  if (value.includes("cylex")) return ["src-cylex"];
  if (value.includes("brownbook")) return ["src-brownbook"];
  if (value.includes("hotfrog")) return ["src-hotfrog"];
  if (value.includes("n49")) return ["src-n49"];
  if (value.includes("iglobal")) return ["src-iglobal"];
  if (
    value.includes("my_local_services") ||
    value.includes("my local services")
  ) {
    return ["src-my-local-services"];
  }
  if (value.includes("uscity")) return ["src-uscity"];
  if (value.includes("navmii")) return ["src-navmii"];
  if (value.includes("where_to") || value.includes("where to")) {
    return ["src-where-to"];
  }
  if (value.includes("aroundme")) return ["src-aroundme"];
  if (value.includes("merchantcircle")) return ["src-merchantcircle"];
  if (value.includes("tupalo")) return ["src-tupalo"];
  if (value.includes("citysquares")) return ["src-citysquares"];
  if (value.includes("8coupons")) return ["src-8coupons"];
  if (value.includes("elocal")) return ["src-elocal"];
  if (value.includes("yellowpagesgoesgreen")) {
    return ["src-yellowpagesgoesgreen"];
  }
  if (value.includes("yellowpages")) return ["src-yellowpages"];
  if (value.includes("golocal247")) return ["src-golocal247"];
  if (value.includes("opendi")) return ["src-opendi"];
  if (value.includes("ibegin")) return ["src-ibegin"];
  if (value.includes("ezlocal")) return ["src-ezlocal"];
  if (value.includes("propertycapsule")) return ["src-propertycapsule"];
  if (value.includes("judysbook")) return ["src-judysbook"];
  if (value.includes("acompio")) return ["src-acompio"];
  if (value.includes("referral")) return ["src-referral"];
  if (value.includes("manual")) return ["src-manual-entry"];

  return ["src-website"];
}

function fieldPulseStatusLabel(context?: HighLevelSyncContext) {
  const fieldPulse = context?.fieldPulse;

  if (!fieldPulse?.enabled) return "Not enabled";
  if (fieldPulse.success) return "Synced";

  return "Sync failed";
}

export async function syncLeadToHighLevel(
  lead: LeadInput,
  context?: HighLevelSyncContext
): Promise<SyncResult> {
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
      source: leadSourceLabel(lead),
      tags: uniqueTags([
        "sl-new-lead",
        lead.smsOptIn ? "sl-sms-opt-in" : "",
        ...sourceToTags(lead),
        serviceToTag(lead.service, lead.smsOptIn),
        ...fieldPulseTags(context),
      ]),
      customFields: [
        { key: "securelifts_lead_id", field_value: lead.leadId },
        { key: "service_needed", field_value: lead.service },
        { key: "door_type", field_value: lead.doorType },
        {
          key: "residential_or_commercial",
          field_value: lead.residentialOrCommercial,
        },
        { key: "lead_source_page", field_value: lead.sourcePage },
        {
          key: "campaign_source",
          field_value: lead.campaignSource || leadSourceLabel(lead),
        },
        {
          key: "fieldpulse_sync_status",
          field_value: fieldPulseStatusLabel(context),
        },
        {
          key: "urgency",
          field_value: lead.service?.toLowerCase().includes("emergency")
            ? "Emergency"
            : "Normal",
        },
        { key: "sms_optin", field_value: lead.smsOptIn ? "Yes" : "No" },
        {
          key: "preferred_service_time",
          field_value: [lead.date, lead.time].filter(Boolean).join(" "),
        },
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

  const pipelineId = process.env.HIGHLEVEL_PIPELINE_ID;
  const pipelineStageId = process.env.HIGHLEVEL_PIPELINE_STAGE_ID;
  const contactId = extractCreatedId(contactResult.data);
  const defaultOpportunityValue = Number(
    process.env.HIGHLEVEL_DEFAULT_OPPORTUNITY_VALUE || 0
  );
  const opportunityName = [
    leadDisplayName(lead),
    lead.service || "SecureLifts Service Lead",
  ]
    .filter(Boolean)
    .join(" - ");

  let opportunity: SyncResult = {
    enabled: false,
    success: true,
    skipped: true,
    error: "HIGHLEVEL_PIPELINE_ID or HIGHLEVEL_PIPELINE_STAGE_ID is not set",
  };

  if (pipelineId && pipelineStageId) {
    if (!contactId) {
      opportunity = {
        enabled: true,
        success: false,
        error: "Could not find HighLevel contact ID for opportunity creation",
        details: contactResult.data,
      };
    } else {
      const opportunityResult = await postJson(
        `${baseUrl}/opportunities/`,
        compactObject({
          locationId,
          contactId,
          pipelineId,
          pipelineStageId,
          status: "open",
          name: opportunityName,
          monetaryValue: Number.isFinite(defaultOpportunityValue)
            ? defaultOpportunityValue
            : 0,
          source: leadSourceLabel(lead),
        }),
        headers
      );

      if (!opportunityResult.success) {
        console.error("HIGHLEVEL OPPORTUNITY SYNC ERROR:", opportunityResult);
        opportunity = {
          enabled: true,
          success: false,
          error: "Could not create HighLevel opportunity",
          details: opportunityResult,
        };
      } else {
        opportunity = {
          enabled: true,
          success: true,
          details: opportunityResult.data,
        };
      }
    }
  }

  return {
    enabled: true,
    success: opportunity.success,
    details: {
      contact: contactResult.data,
      opportunity,
    },
  };
}

function serviceToTag(service = "", smsOptIn = false) {
  const value = service.toLowerCase();

  if (value.includes("spring")) return "sl-broken-spring";
  if (value.includes("opener")) return "sl-opener-repair";
  if (value.includes("off track") || value.includes("off-track")) return "sl-off-track";
  if (value.includes("replace") || value.includes("replacement")) return "sl-replacement";
  if (value.includes("install")) return "sl-installation";
  if (value.includes("hurricane") || value.includes("impact") || value.includes("wind")) {
    return "sl-hurricane-door";
  }
  if (value.includes("commercial")) return "sl-commercial";
  if (value.includes("emergency")) return "sl-emergency-repair";
  if (
    smsOptIn &&
    (value.includes("maintenance") || value.includes("service plan"))
  ) {
    return "sl-maintenance-prospect";
  }

  return "";
}

export async function syncLead(leadInput: unknown) {
  const lead = normalizeLead(leadInput);

  let fieldPulse: SyncResult;

  try {
    fieldPulse = await syncLeadToFieldPulse(lead);
  } catch (error) {
    fieldPulse = {
      enabled: true,
      success: false,
      error: error instanceof Error ? error.message : "FieldPulse sync failed",
    };
  }

  let highLevel: SyncResult;

  try {
    highLevel = await syncLeadToHighLevel(lead, { fieldPulse });
  } catch (error) {
    highLevel = {
      enabled: true,
      success: false,
      error: error instanceof Error ? error.message : "HighLevel sync failed",
    };
  }

  return {
    lead,
    fieldPulse,
    highLevel,
  };
}
