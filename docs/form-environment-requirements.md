# Lead Form Environment Requirements

Date: 2026-08-23

No secret values belong in this document.

## Required

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Sends the primary lead notification email. Missing configuration returns a controlled 503 response. |

## Recommended

| Variable | Purpose |
|---|---|
| `RESEND_FROM_EMAIL` | Verified Resend sender identity. The application retains verified-domain fallback senders. |
| `FIELD_PULSE_API_KEY` | Enables FieldPulse customer/job synchronization. |
| `HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN` | Enables GoHighLevel contact/opportunity synchronization. |

## Optional FieldPulse controls

`FIELD_PULSE_API_BASE_URL`, `FIELD_PULSE_CREATE_JOB`, `FIELD_PULSE_CREATE_LOCATION`, `FIELD_PULSE_CREATE_VISIT`, `FIELD_PULSE_JOB_STATUS`, `FIELD_PULSE_JOB_STATUS_ID`, `FIELD_PULSE_JOB_STATUS_WORKFLOW_ID`, `FIELD_PULSE_JOB_TYPE`, `FIELD_PULSE_JOB_TYPE_ID`, `FIELD_PULSE_BILLING_CODE`, `FIELD_PULSE_VISIT_STATUS`, and `FIELD_PULSE_VISIT_TITLE`.

Separate location creation is disabled unless `FIELD_PULSE_CREATE_LOCATION=true`. When enabled, it creates a non-main location to avoid the observed duplicate-main-location error.

## Optional HighLevel controls

`HIGHLEVEL_API_BASE_URL`, `HIGHLEVEL_API_VERSION`, `HIGHLEVEL_LOCATION_ID`, `HIGHLEVEL_PIPELINE_ID`, `HIGHLEVEL_PIPELINE_STAGE_ID`, and `HIGHLEVEL_DEFAULT_OPPORTUNITY_VALUE`.

## Delivery behavior

- Browser success is returned only after Resend accepts the lead email.
- CRM synchronization runs after the response and logs provider status with the lead ID.
- Invalid payloads return 400; oversized payloads return 413; missing email configuration/provider failure returns controlled 503.
- Responses do not expose provider payloads, credentials or stack traces.
- Honeypot and stable lead IDs reduce obvious spam and repeated submissions.
- Automated tests validate pure normalization only and never contact real providers.

