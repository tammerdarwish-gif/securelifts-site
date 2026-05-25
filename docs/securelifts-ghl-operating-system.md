# SecureLifts GHL Operating System

## Current Signals

- Location: SecureLifts, Miami, FL.
- Pipelines: old Demo Pipeline exists, and SecureLifts Service Pipeline exists with 8 stages.
- Reputation is strong: 5.0 average rating and 50 reviews.
- Review operations need tightening: 25 reviews are unresponded and review requests are barely being used.
- Website code can sync leads to HighLevel and FieldPulse when production environment variables are configured.
- FieldPulse booking is embedded at `/book-service`.
- Existing workflow work must be preserved and extended, not duplicated.

## Existing Workflow Inventory

Visible workflow list items as of May 25, 2026:

- `Appointment Confirmation + Reminder` - Draft
- `Elite Lead Nurture - Garage & Commercial` - Published
- `FAQ Auto Reply` - Draft
- Workflow dashboard also shows `Needs Review (2)`, so two workflows require review before they should be treated as production-ready.

Before creating any new workflow, inspect existing workflows and choose one of:

- improve the current workflow
- connect the current workflow to the right trigger or pipeline stage
- leave the current workflow alone
- create a new workflow only when no existing draft or published workflow covers that job

## Pipeline To Build

Current SecureLifts Service Pipeline stages:

1. New Lead
2. Contacted
3. Appointment Booked
4. Estimate Sent
5. Job Scheduled
6. Job Completed
7. Review Requested
8. Lost / Nurture

Recommended later additions if the team wants more operational precision:

- Needs Contact
- Waiting On Customer
- Job In Progress
- Won / Repeat Customer

## Lead Intake Rules

- Website form, FieldPulse booking, chat, missed call, Google Business Profile, Google Ads, Facebook/Instagram leads, and manual entries should all land in GHL.
- Every new lead should be tagged by source and service type.
- Emergency, commercial, hurricane-rated, and installation leads should get priority tags.
- Every qualified lead should create or update an opportunity in the SecureLifts service pipeline.

## Workflows To Build

- Speed-to-lead alert: notify the team immediately when a new lead arrives.
- Missed call text-back: reply quickly and create a task.
- New lead nurture: call/SMS/email follow-up until contacted or booked.
- Booking confirmation: confirm appointment details and set expectations.
- Appointment reminder: remind customers before service.
- Post-service follow-up: thank the customer, ask if everything was handled, then request a review.
- No-response recovery: follow up with unresponsive leads over several days.
- Estimate follow-up: follow up after quotes, especially hurricane-rated and installation jobs.
- Win-back campaign: re-engage old leads and past customers.

## Reputation Engine

- Respond to the 25 unresponded reviews.
- Turn on a controlled review request workflow after job completion.
- Keep the review link and QR code ready for technicians.
- Add review widget highlights to the website where useful.
- Use positive review themes in ads and landing pages.

## Marketing Campaigns

- Emergency repair campaign: broken spring, stuck door, door off-track.
- Hurricane season campaign: hurricane-rated, wind-rated, impact-rated, Miami-Dade approved doors.
- Commercial maintenance campaign: warehouses, roll-up doors, loading docks, property managers.
- Re-activation campaign: past customers and older estimates.
- Review-led trust campaign: 5-star proof, before/after projects, fast service promises.

## Setup Values Needed

To make website leads create GHL opportunities, add these production variables in Vercel:

- `HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN`
- `HIGHLEVEL_LOCATION_ID`
- `HIGHLEVEL_PIPELINE_ID`
- `HIGHLEVEL_PIPELINE_STAGE_ID`
- `HIGHLEVEL_DEFAULT_OPPORTUNITY_VALUE`

HighLevel's Opportunities API supports creating opportunities through `POST /opportunities/` with pipeline, stage, location, contact, status, and value data.
