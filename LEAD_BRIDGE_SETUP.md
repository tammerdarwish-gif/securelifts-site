# SecureLifts Lead Bridge

The website now has two lead paths:

- `/api/send` handles current SecureLifts website forms and also syncs leads.
- `/api/lead-webhook` accepts GoHighLevel workflow webhooks and syncs those leads.

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
- Body: include name, phone, email, address, city, service, message, SMS opt-in, and source page fields.

Do not put API keys in browser-visible code.
