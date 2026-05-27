# SecureLifts Lead Bridge

The website now has two lead paths:

- `/api/send` handles current SecureLifts website forms and also syncs leads.
- `/api/lead-webhook` accepts GoHighLevel workflow webhooks and syncs those leads.
- Each lead is assigned a SecureLifts lead ID. That ID is sent to FieldPulse customer/job payloads and stored on the GHL contact when the matching custom field exists.
- GHL contacts are tagged based on FieldPulse sync status: `sl-fieldpulse-synced`, `sl-fieldpulse-job-created`, or `sl-fieldpulse-sync-failed`.

Required production environment variables:

```env
RESEND_API_KEY=
RESEND_FROM_EMAIL="SecureLifts <bookings@send.securelifts.com>"

HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN=
HIGHLEVEL_LOCATION_ID=7hrTJmU6U7A0rUjbCzBv
HIGHLEVEL_API_VERSION=2023-02-21

FIELD_PULSE_API_KEY=
FIELD_PULSE_API_BASE_URL=https://ywe3crmpll.execute-api.us-east-2.amazonaws.com/stage
FIELD_PULSE_CREATE_JOB=true

LEAD_WEBHOOK_SECRET=
```

In GoHighLevel, add a workflow webhook action for new form/chat leads:

- URL: `https://securelifts.com/api/lead-webhook`
- Method: `POST`
- Header: `x-securelifts-webhook-secret: <same value as LEAD_WEBHOOK_SECRET>`
- Body: include name, phone, email, address, city, service, door/system type, residential/commercial, message, SMS opt-in, campaign/source, and source page fields.
- Add the `sl-new-lead` tag after the webhook succeeds. Sales follow-up workflows should start from that tag, not from the same raw form trigger.
- Avoid having multiple workflows create the same FieldPulse job. The website bridge should be the single FieldPulse handoff path unless a direct FieldPulse integration is intentionally enabled and tested.

Do not put API keys in browser-visible code.
