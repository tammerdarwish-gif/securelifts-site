# SecureLifts GHL Operating System

## Current Direction

Do not publish more workflows yet. The current job is to design and wire the whole SecureLifts operating system first, then publish only after the full path is reviewed and tested.

The system goal is bigger than one workflow:

- Use GHL as the lead generation, sales follow-up, nurture, review, referral, retention, and reporting command center.
- Use FieldPulse as the service booking, job, technician, and field operations source of truth.
- Keep the website as the conversion front door: forms, phone calls, FieldPulse booking portal, service pages, local SEO pages, and campaign landing pages.
- Make every lead easy to capture, fast to contact, simple to book, cleanly handed to FieldPulse, followed up until sold, reviewed after service, and retained through service plans.

## No-Publish Rule During System Build

Until the system blueprint is complete:

- Do not publish additional draft workflows.
- Do not turn on duplicate workflows.
- Do not send test SMS/email to real customers.
- Do not create new workflows when an existing SecureLifts draft already covers the job.
- Do not use GHL to create a second FieldPulse job path that competes with the website bridge.

Allowed work right now:

- Audit existing workflows.
- Rename and organize draft workflows if needed.
- Rewrite draft copy.
- Add missing safety conditions, tags, tasks, branches, and stop rules.
- Map fields between SecureLifts website, GHL, and FieldPulse.
- Build a final activation checklist for each workflow.

## Whole-System Blueprint

### 1. Lead Capture

Capture every possible lead source into GHL:

- SecureLifts website forms.
- GHL forms and surveys.
- FieldPulse booking portal at `/book-service`.
- Phone calls and missed calls.
- Chat/widget conversations.
- Google Business Profile messages/calls.
- Google Ads and Local Services Ads.
- Facebook and Instagram leads.
- Manual office entries.
- Referral leads.
- Past customers and old estimates.

Required data for every lead:

- Name.
- Phone.
- Email when available.
- Address or service city.
- Service needed.
- Residential or commercial.
- Emergency status.
- Preferred date/time.
- Source.
- SMS opt-in status.
- SecureLifts lead ID.

### 2. Routing And Ownership

Every captured lead should end up with:

- One GHL contact.
- One SecureLifts Service Pipeline opportunity when qualified.
- One clear owner or call task.
- Service/source tags.
- FieldPulse sync status tag.
- No duplicate FieldPulse job unless intentionally created.

Key tags:

- `sl-new-lead`
- `sl-sms-opt-in`
- `sl-fieldpulse-synced`
- `sl-fieldpulse-job-created`
- `sl-fieldpulse-sync-failed`
- `sl-broken-spring`
- `sl-opener-repair`
- `sl-off-track`
- `sl-replacement`
- `sl-installation`
- `sl-hurricane-door`
- `sl-commercial`
- `sl-emergency-repair`
- `sl-maintenance-prospect`

### 3. FieldPulse Connection

FieldPulse should handle the real service work:

- Customer record.
- Job or lead/job record.
- Technician dispatch.
- Scheduling.
- Job notes.
- Completion status.
- Maintenance plan/service history.

GHL should handle the sales and retention layer:

- Contact record.
- Opportunity pipeline.
- Tasks and notifications.
- SMS/email follow-up.
- Reviews.
- Reactivation.
- Service plan marketing.
- Ads and campaign tracking.

The bridge should pass:

- SecureLifts lead ID.
- Contact information.
- Service requested.
- Address.
- Preferred time.
- Notes.
- SMS opt-in.
- Source.
- FieldPulse sync status back to GHL as tags.

Current bridge behavior:

- Creates one SecureLifts lead ID for the website, GHL, and FieldPulse handoff.
- Sends the lead to FieldPulse first.
- Sends the lead to GHL with FieldPulse sync status tags.
- Sends clean customer names to FieldPulse. SecureLifts `SL-...` lead IDs must stay in notes/external reference fields and must not be appended to visible customer names, display names, first names, last names, or company names.
- Website quick-request forms collect service address, city, ZIP, service category, residential/commercial, door/system type, preferred date, and preferred time so FieldPulse receives real job context.
- Customer-facing service choices stay simple: Garage Door Repair, Broken Spring, Opener Problem, Door Off Track, New Garage Door / Replacement, Hurricane-Rated Door Quote, Commercial Door Service, and Other / Not Sure.
- Preferred time choices use 2-hour arrival windows from 8:00 AM through 6:00 PM, plus As soon as possible and Flexible.
- Adds source tags based on the lead source/referrer.
- Reads campaign/source signals such as `campaign_source`, `utm_campaign`, `utm_source`, `utm_medium`, `gclid`, `gbraid`, `wbraid`, and `fbclid`.
- Adds service intent tags based on the requested service.
- Adds `sl-maintenance-prospect` only when the lead asked about maintenance/service plans and has SMS opt-in.

FieldPulse/GHL status truth:

- FieldPulse is the operational source of truth for jobs, visits, estimates, invoices, payments, and completion.
- GHL automations should trigger from confirmed FieldPulse status updates or explicit GHL tags/fields, not guessed job state.
- Do not activate estimate, invoice, review, or service-plan automations until FieldPulse status sync back into GHL is mapped and tested.

### 4. Sales Pipeline

Current pipeline stages:

1. New Lead
2. Contacted
3. Appointment Booked
4. Estimate Sent
5. Job Scheduled
6. Job Completed
7. Review Requested
8. Lost / Nurture

System logic:

- New lead creates/updates contact and opportunity.
- First contact attempt creates a task and moves toward `Contacted`.
- Booking or FieldPulse appointment moves to `Appointment Booked` or `Job Scheduled`.
- Estimate sent moves to `Estimate Sent`.
- Completed job moves to `Job Completed`.
- Review request moves to `Review Requested`.
- No response or declined estimate moves to `Lost / Nurture`.

### 5. Workflow Families To Finish Before Publishing

Lead intake:

- Router to FieldPulse/website bridge.
- Speed-to-lead.
- Missed call rescue.
- FAQ auto reply if it is useful.

Booking and operations:

- Appointment confirmation.
- 24-hour reminder.
- 1-hour reminder.
- No-show or reschedule recovery.

Sales:

- Estimate follow-up.
- No-response lead nurture.
- Commercial lead nurture.
- Hurricane-rated door estimate nurture.

Retention:

- Job-complete satisfaction check.
- Review request.
- Maintenance/service plan offer.
- Past customer reactivation.
- Old estimate reactivation.
- Referral request.

Marketing:

- Emergency repair campaign.
- Broken spring campaign.
- Opener repair campaign.
- Hurricane season campaign.
- Commercial maintenance campaign.
- Review/trust campaign.

Reporting:

- New leads by source.
- Booked jobs by source.
- Estimate sent to won conversion.
- Missed-call recovery rate.
- FieldPulse sync failures.
- Review requests sent and reviews received.
- Service plan opportunities and sold plans.

### 6. Publish Gate

No workflow should go live until it has:

- Correct trigger.
- Correct entry conditions.
- Correct stop conditions.
- No duplicate workflow doing the same job.
- SMS opt-in branch where SMS is used for marketing or follow-up.
- SecureLifts-branded copy.
- Clear internal task/owner.
- Correct pipeline stage movement.
- Correct FieldPulse relationship.
- One controlled test.
- Confirmation that old contacts will not be accidentally enrolled.

## Online Lead Generation System

The online lead engine should make SecureLifts visible, trusted, and easy to book across search, social, review platforms, ads, and the website. GHL should capture and organize the leads. FieldPulse should receive the service/job handoff only after the lead is clean enough for operations.

### Current GHL Lead-Generation Status

Observed in GHL on May 25, 2026:

- Launchpad `Marketing & lead generation` is at 20%.
- Social planner setup is at 50%.
- Facebook/Instagram lead ads setup is at 0%.
- SMS campaign setup is at 0%.
- Facebook integration shows the SecureLifts page is available for Facebook/Instagram lead sync, but the page is not connected yet.
- Google account is present in integrations.
- Google Lead Ads integration is available, but the app is not installed yet.
- LinkedIn, TikTok Lead Ads, TikTok Messaging, and WhatsApp are available as integrations, but they are not connected yet.

Do not connect or install new ad integrations until field mapping and routing rules are ready.

### Public Listing Signals To Clean Up

Observed from public search on May 25, 2026:

- The main SecureLifts website is indexed and shows the current conversion structure: `https://securelifts.com/`.
- Local service pages are indexed, including Miami garage door repair at `https://securelifts.com/miami/`.
- Third-party listings exist, including Chamber of Commerce and BBB profiles.
- Some older public listing signals show older phone/address data, including older phone numbers and an older address. These should be reconciled before pushing more ad traffic.

Preferred public NAP direction unless ownership says otherwise:

- Name: `SecureLifts`
- Legal name inside GHL: `AAA Garage Door Inc.`
- Phone: `(866) 828-1818`
- Website: `https://securelifts.com/`
- Primary service area: Miami-Dade, Broward, and Palm Beach.
- Primary business category: garage door supplier.
- Supporting categories/services: garage door repair, garage door installation, hurricane-rated garage doors, commercial doors, openers, maintenance, and emergency service.

### Listing Foundation

Before scaling ads, make the business profile consistent everywhere:

- GHL Business Profile.
- Google Business Profile.
- Facebook page.
- Instagram profile.
- Bing Places.
- Apple Business Connect.
- Yelp.
- BBB.
- Chamber of Commerce.
- Best Pick Reports.
- Any garage-door-specific directories.

Each listing should use:

- Same business name style.
- Same primary phone number.
- Same website URL.
- Same short description.
- Same service area language.
- Same core services.
- Same booking URL or website URL.
- Real job photos where possible.

Authority build assets now added:

- Directory authority plan: `docs/securelifts-directory-authority-plan.md`.
- Directory tracker: `docs/securelifts-directory-tracker.csv`.
- Listing claim SOP: `docs/securelifts-listing-claim-sop.md`.
- Website global business schema: central SecureLifts identity, service area, phone, legal name, and core services.
- Directory-specific GHL tags should be added only after profile URLs are active or ready to receive traffic.
- Before paid lead scaling, every major profile should use a tracked URL so GHL can show which listings are producing calls, forms, bookings, and service-plan opportunities.

### GHL Source Tags

Use source tags so every online lead can be reported and routed:

- `src-website`
- `src-ghl-form`
- `src-fieldpulse-booking`
- `src-google-business-profile`
- `src-google-lead-ads`
- `src-google-search-ads`
- `src-facebook-lead-ads`
- `src-facebook-message`
- `src-instagram-message`
- `src-tiktok`
- `src-linkedin`
- `src-whatsapp`
- `src-local-services-ads`
- `src-bing-places`
- `src-apple-business-connect`
- `src-yelp`
- `src-bbb`
- `src-chamber`
- `src-nextdoor`
- `src-angi`
- `src-homeadvisor`
- `src-thumbtack`
- `src-houzz`
- `src-porch`
- `src-foursquare`
- `src-data-axle`
- `src-mapquest`
- `src-referral`
- `src-manual-entry`

The website bridge now applies source tags when lead source/referrer data identifies the channel. Default unknown website traffic gets `src-website` so no lead is left unclassified.
Directory authority tags are also recognized when listing tracking URLs use the matching source names from the directory tracker.

Service intent tags should be added separately from source tags:

- `sl-broken-spring`
- `sl-opener-repair`
- `sl-off-track`
- `sl-installation`
- `sl-replacement`
- `sl-hurricane-door`
- `sl-commercial`
- `sl-maintenance-prospect`
- `sl-emergency-repair`

### Online Lead Routing Rules

Every online lead should follow this path:

1. Capture the lead in GHL.
2. Normalize name, phone, email, service, address/city, source, urgency, and SMS opt-in.
3. Add source and service tags.
4. Create or update the GHL contact.
5. Create or update one opportunity in `SecureLifts Service Pipeline`.
6. Hand off to the website/FieldPulse bridge only once.
7. Apply `sl-new-lead` only after the FieldPulse/website handoff is ready.
8. Start sales follow-up from `sl-new-lead`, not directly from every ad/form trigger.

### Facebook And Instagram Lead Ads

Build target:

- Connect the SecureLifts Facebook page in GHL.
- Sync only new leads after mapping is ready.
- Map first name, last name, phone, email, service needed, city, notes, and SMS opt-in if the form collects it.
- Tag with `src-facebook-lead-ads`.
- Route to the same website/FieldPulse bridge instead of creating a separate job path.

Lead form ideas:

- Emergency garage door repair.
- Broken spring repair.
- Hurricane-rated garage door estimate.
- Commercial door repair.
- Garage door replacement estimate.
- Maintenance plan request.

### Google Lead Ads

Build target:

- Install Google Lead Ads only after mapping is defined.
- Connect the Google Ads account that owns SecureLifts campaigns.
- Sync lead forms into GHL.
- Use the `Google Lead Form Submitted` trigger.
- Tag with `src-google-lead-ads`.
- Route through the same lead bridge and pipeline rules.

Google lead form fields to collect:

- Full name.
- Phone.
- Email.
- City or ZIP.
- Service needed.
- Emergency or planned service.
- Preferred contact time.
- SMS opt-in.

### Google Business Profile And Reviews

Build target:

- Make Google Business Profile the trust anchor.
- Route GBP calls/messages/bookings into GHL where possible.
- Use the current website pages as appointment/booking destinations.
- Add fresh project photos weekly.
- Respond to all reviews.
- Use reviews in the website, ads, and landing pages.

Review response priorities:

- Respond to the 25 currently unresponded reviews.
- Mention service category and city naturally when appropriate.
- Keep replies human, short, and specific.

### Social Planner

GHL social planner is partly set up. Use it for consistency before paid ads scale:

- 3 posts per week minimum.
- 1 project proof post.
- 1 educational/trust post.
- 1 offer/service-area post.

Post themes:

- Broken spring warning signs.
- Hurricane-rated door preparation.
- Commercial roll-up door downtime prevention.
- Before/after installation photos.
- Review highlights.
- Maintenance plan benefits.
- Same-day emergency availability.

### Campaign Landing Pages

Each ad/listing campaign should point to a strong page, not the generic homepage when intent is specific:

- Emergency repair -> emergency repair page.
- Broken spring -> spring repair page.
- Opener repair -> opener repair page.
- Hurricane door -> hurricane-rated door page.
- Commercial repair -> commercial/industrial repair page.
- Maintenance plan -> maintenance/service plan page.
- Booking -> `/book-service`.

### Lead Quality Fields

Add or confirm these GHL custom fields before connecting ads:

- `securelifts_lead_id`
- `service_needed`
- `lead_source_page`
- `urgency`
- `sms_optin`
- `preferred_service_time`
- `campaign_source`
- `fieldpulse_sync_status`
- `door_type`
- `residential_or_commercial`

Custom field audit on May 25, 2026:

- Confirmed existing: `service_needed`, `lead_source_page`, `urgency`, `sms_optin`, `preferred_service_time`.
- Added missing field: `securelifts_lead_id`.
- Added missing field: `campaign_source`.
- Added missing field: `fieldpulse_sync_status`.
- Added missing field: `residential_or_commercial` as a Contact dropdown in `Additional Info` with `Residential` and `Commercial` options.
- Added missing field: `door_type` as a Contact dropdown in `Additional Info` with `Garage Door` and `Garage Door Opener` options.
- Confirmed bridge key mismatch fixed for SMS opt-in: the bridge now sends `sms_optin`.
- Bridge now sends `campaign_source`, `fieldpulse_sync_status`, `residential_or_commercial`, and `door_type`, and the matching GHL contact fields exist.
- Bridge now preserves incoming campaign/source values when provided, instead of only storing the default source label.
- Website quick-request forms now collect and pass `residential_or_commercial` and `door_type` into the bridge.
- Form builder still needs these lead-quality fields added to the existing intake form before using them for workflow decisions.

Tag audit on May 25, 2026:

- Existing service/plan tags include `sl-broken-spring`, `sl-commercial`, `sl-emergency-repair`, `silver plan`, `gold plan`, and `platinum plan`.
- Source tags beginning with `src-` were not present at first audit.
- Created or confirmed the full first-pass source-tracking set: `src-website`, `src-ghl-form`, `src-fieldpulse-booking`, `src-google-business-profile`, `src-google-lead-ads`, `src-google-search-ads`, `src-facebook-lead-ads`, `src-facebook-message`, `src-instagram-message`, `src-tiktok`, `src-linkedin`, `src-whatsapp`, `src-local-services-ads`, `src-referral`, and `src-manual-entry`.
- Bridge now separates Facebook messages from Facebook lead ads when the source text includes message, Messenger, or FB message.
- Remaining tag work before ad integrations: confirm any additional platform-specific tags only if the integration requires a separate path.

### Reporting Needed

Track these weekly:

- Leads by source.
- Cost per lead by ad channel.
- Booked appointments by source.
- FieldPulse job created by source.
- Estimate sent by source.
- Won jobs by source.
- Review requests sent.
- Reviews received.
- Missed-call recovered leads.
- Maintenance plan leads and sold plans.

### Build Order For Online Lead Sources

1. Clean business profile/listing data.
2. Confirm GHL custom fields and tags.
3. Confirm website bridge receives all required fields.
4. Create or refine forms for each lead source.
5. Connect Facebook/Instagram lead sync in draft/test mode.
6. Install and map Google Lead Ads.
7. Build reporting views by source.
8. Build campaign landing page tracking.
9. Only then publish/activate ad-source workflows.

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

- `Appointment Confirmation + Reminder` - Draft, 0 enrolled. Contains confirmation email, SMS, and a 24-hour-before-appointment step.
- `Elite Lead Nurture - Garage & Commercial` - Published, 0 enrolled. Contains internal notification, SMS, wait, then a follow-up SMS.
- `FAQ Auto Reply` - Draft, 0 enrolled.
- `Fast 5 Lite` - Draft, 0 enrolled.
- `New Workflow : 1755597651822` - Draft, 0 enrolled.
- `New Workflow : 1759141863105` - Draft, 0 enrolled.
- `New Workflow : 1760448728706` - Draft, 0 enrolled.
- `New Workflow : 1779444480654` - Draft, 0 enrolled.
- `Recipe - Auto Missed Call Text-Back` - Draft, 0 enrolled.
- `Recipe - Auto Missed Call Text-Back` - Published, 1 enrolled.
- `SecureLifts - Elite Review Generation` - Published, 10 enrolled.
- `SecureLifts - Estimate Follow-Up Draft` - Draft, 0 enrolled.
- `SecureLifts - Job Complete Review Request Draft` - Draft, 0 enrolled.
- `SecureLifts - Maintenance Plan Offer Draft` - Draft, 0 enrolled.
- `SecureLifts - Missed Call Rescue Draft` - Draft, 0 enrolled.
- `SecureLifts - New Lead Router to FieldPulse - Draft` - Published on May 25, 2026. Contains a webhook action, then an add-tag action.
- `SecureLifts - New Lead Speed To Lead` - Published on May 25, 2026.
- `SecureLifts - Send Every Lead To Website Bridge` - Published, 2 enrolled.
- `Send Review Request` - Draft, 0 enrolled.
- `Voice Ai End Of Call` - Published, 0 enrolled.
- Workflow dashboard also shows `Needs Review (2)`, so two workflows require review before they should be treated as production-ready.

Before creating any new workflow, inspect existing workflows and choose one of:

- improve the current workflow
- connect the current workflow to the right trigger or pipeline stage
- leave the current workflow alone
- create a new workflow only when no existing draft or published workflow covers that job

## Best Next Moves In GHL

1. Finish the existing `SecureLifts - New Lead Router to FieldPulse - Draft` instead of building a duplicate FieldPulse connector.
2. Audit the webhook payload in that draft and confirm it sends the right lead fields to the website or FieldPulse bridge.
3. Publish only after one controlled test lead confirms the full path: website or GHL form -> GHL contact -> pipeline opportunity -> FieldPulse or website bridge tag.
4. Keep `SecureLifts - New Lead Speed To Lead` connected to the router's `sl-new-lead` tag so the sales workflow starts after the FieldPulse bridge handoff instead of competing with it.
5. Keep `SecureLifts - Elite Review Generation` as the main review engine and fold the older `Send Review Request` draft into it only if it contains useful copy or timing.
6. Use the existing estimate, job-complete, maintenance, missed-call, booking, and appointment workflows as the production set after each is reviewed.

Current access note:

- Browser is on a logged-out GHL page. Continue read/write work inside GHL only after logging back into the SecureLifts location.
- Do not create duplicate workflows when access is restored; resume from the inventory above.

## Production Build Order

Use this order so SecureLifts gets operations first, then marketing scale:

1. Lead intake and routing: make sure every form, call, chat, ad lead, and manual lead becomes a contact and pipeline opportunity.
2. Speed-to-lead: notify the team, create a contact task, and send a fast human-sounding text.
3. Booking and appointment handling: connect booking confirmations, reminders, and no-show recovery.
4. FieldPulse handoff: pass clean lead/job details into the website bridge or FieldPulse path without exposing private keys.
5. Estimate follow-up: follow up automatically until the customer books, declines, or goes to nurture.
6. Job-complete review engine: request feedback first, then request a public review when the customer is happy.
7. Maintenance and reactivation: bring back old customers, older estimates, and commercial maintenance opportunities.

## Existing Draft Ownership

Treat these as the working production candidates:

- `SecureLifts - New Lead Router to FieldPulse - Draft`: primary router for GHL form submissions and website bridge handoff.
- `SecureLifts - New Lead Speed To Lead`: immediate team notification and fast contact attempt.
- `Appointment Confirmation + Reminder`: appointment confirmation and 24-hour reminder.
- `SecureLifts - Estimate Follow-Up Draft`: estimate follow-up sequence.
- `SecureLifts - Job Complete Review Request Draft`: compare against the published review workflow, then merge useful pieces into the main review engine.
- `SecureLifts - Maintenance Plan Offer Draft`: commercial and residential maintenance upsell after completed jobs.
- `SecureLifts - Missed Call Rescue Draft`: replacement candidate for the generic missed-call recipe if it has SecureLifts-specific copy.

Generic or unnamed drafts should stay parked until each is inspected. Rename only after confirming the purpose, trigger, and actions.

## FieldPulse Router Draft

Current audit:

- Trigger: `Form Submitted`, with no filters shown in the workflow canvas.
- Action 1: `Webhook`, method `POST`.
- Webhook URL: `https://securelifts.com/api/lead-webhook`.
- Security header: `x-securelifts-webhook-secret` is configured in GHL. Keep its value private and match it to `LEAD_WEBHOOK_SECRET` in Vercel.
- Custom data section is empty, so the endpoint currently depends on GHL standard contact/form data.
- Action 2: `Add Tag`, currently applying `sl-new-lead`.
- Workflow URL ID: `89797526-04fa-4f72-9f94-bb89b89918f2`.
- Rechecked on May 25, 2026: the webhook URL and security header are configured, and the follow-up tag is `sl-new-lead`.
- Published on May 25, 2026 so GHL form submissions can reach the website bridge and then trigger speed-to-lead follow-up.

Website support:

- `/api/lead-webhook` accepts the GHL webhook.
- If `LEAD_WEBHOOK_SECRET` is set, the endpoint rejects requests that do not include the matching `x-securelifts-webhook-secret` header.
- The endpoint normalizes GHL standard data, contact data, and custom data, then syncs to FieldPulse and HighLevel when environment variables are present.
- The website bridge now creates one SecureLifts lead ID per lead and passes it into FieldPulse customer/job payloads and the GHL contact payload.
- GHL contacts receive FieldPulse sync status tags when the bridge runs: `sl-fieldpulse-synced`, `sl-fieldpulse-job-created`, or `sl-fieldpulse-sync-failed`.
- Maintenance or service-plan interest is tagged as `sl-maintenance-prospect` only when the submitted service contains maintenance or service plan wording and SMS opt-in is present.

GHL form audit on May 25, 2026:

- Existing form: `Elite Lead Intake - Garage & Commercial`.
- Form ID: `hFYyNMFCRjczaMf9jW5C`.
- Current visible fields: first name, last name, phone, email, non-marketing SMS consent, marketing SMS consent, and submit.
- Missing for reliable FieldPulse/GHL routing: service needed, full address or city/ZIP, urgency, preferred service time, residential/commercial, notes, lead source/campaign source, and optional door/system type.
- Consent text still contains placeholders: `[BUSINESS NAME]` and `[USE_CASE_FROM_CAMPAIGN_DESCRIPTION]`.
- Privacy Policy and Terms of Service links still point to `example.com`.
- Do not connect new ad channels to this form until the missing fields and compliance text are fixed.

Recommended webhook fields to confirm in the next GHL session:

- Contact name, phone, email, and full address.
- Service type: repair, installation, commercial, hurricane-rated, maintenance, or estimate.
- Urgency: emergency, same week, flexible, or planned project.
- Door/system details: garage door, commercial roll-up, opener, gate, dock, or other.
- Notes/photos if the form supports them.
- Source: website form, booking page, GHL form, call, Google, Meta, referral, or manual entry.

If custom data stays empty, confirm the website endpoint receives these values from the standard GHL payload before publishing.

## Speed To Lead Draft

Current audit:

- Workflow: `SecureLifts - New Lead Speed To Lead`.
- Workflow URL ID: `9fe13ad0-7474-4e8e-ac2f-f3439cde1229`.
- Status: Published.
- Trigger: changed and saved on May 25, 2026 from raw `Form Submitted` to `Contact Tag`.
- Trigger filter: `Tag Added` includes `sl-new-lead`.
- Published on May 25, 2026 after the trigger was tightened.
- Action sequence currently includes `Add Tag`, `Create Or Update Opportunity`, `Add task after lead to call`, `SMS Opt-In Check`, and an SMS branch.
- Opportunity action points to `SecureLifts Service Pipeline` and stage `New Lead`.
- Opportunity name is `{{contact.name}} - {{contact.service_needed}}`.
- Opportunity source is `Website / GHL Form`.
- Opportunity value is `0`.
- Duplicate opportunities are not allowed.
- GHL shows a deprecation notice for the old create/update opportunity action; replace with the newer create/update opportunity actions later, after the current workflow is verified.
- Task title is `Call new SecureLifts lead now`.
- Task description says to call immediately and move the opportunity forward.
- Task is assigned to Tammer Darwish and due immediately.
- SMS is gated by `SMS Opt-In` being present, which is good for compliance.
- Current SMS copy confirms receipt, says a team member will contact the customer shortly, gives `(866) 828-1818` for urgent service, and includes STOP opt-out language.

Recommended next improvements:

- Keep the trigger on `sl-new-lead` so the FieldPulse router remains the single intake handoff and this workflow handles sales follow-up only.
- Confirm `{{contact.service_needed}}` is populated by every active SecureLifts form; otherwise opportunity names may have a blank service value.

## Estimate Follow-Up Draft

Current audit:

- Workflow: `SecureLifts - Estimate Follow-Up Draft`.
- Workflow URL ID: `98688f76-bb8d-4258-bd39-b16d4f6d544c`.
- Status: Draft.
- Trigger: `Pipeline Stage Changed`.
- Trigger filters: pipeline is `SecureLifts Service Pipeline` and pipeline stage is `Estimate Sent`.
- Action sequence includes wait, SMS, wait, SMS, and a team follow-up task.
- First SMS starts with `Hi, this is SecureLifts. Just checking in on your garage door estimate.`

Recommended before publishing:

- Add an SMS opt-in condition before the SMS actions, or convert non-opted-in estimate follow-up to email/task.
- Keep this workflow separate from the general lead nurture so estimates get sales follow-up only after the opportunity reaches `Estimate Sent`.

## Missed Call Rescue Draft

Current audit:

- Workflow: `SecureLifts - Missed Call Rescue Draft`.
- Workflow URL ID: `abdc0ad5-3fc1-4f05-8808-3d4957718181`.
- Status: Draft.
- Action sequence includes SMS, create/update opportunity, and internal notification.
- A generic `Recipe - Auto Missed Call Text-Back` workflow is already published, so publishing the SecureLifts draft without pausing the generic recipe could create duplicate missed-call messaging.

Recommended before publishing:

- Replace the generic published missed-call recipe with this SecureLifts-branded workflow, rather than running both.
- Confirm the trigger is limited to missed inbound calls for the SecureLifts tracking/main number.

## Appointment Confirmation Draft

Current read-only audit:

- Workflow: `Appointment Confirmation + Reminder`.
- Workflow URL ID: `78c96cdd-0652-4e38-a4ef-a8d0c1102a2f`.
- Status: Draft.
- Trigger: `Appointment Status`, with `Event Type` set to `Normal` and appointment status set to `confirmed`.
- Action sequence includes confirmation email, confirmation SMS, 24-hour-before appointment wait/reminder, and later 1-hour reminder actions.
- Confirmation SMS is SecureLifts-specific and says the garage door appointment is confirmed, asks the customer to reply if anything changes, gives `(866) 828-1818`, and includes STOP opt-out language.
- Confirmation email was rewritten and saved in draft on May 25, 2026.
- Confirmation email subject is `Your SecureLifts Appointment Is Confirmed`.
- Confirmation email body now confirms the SecureLifts appointment, references the appointment start time, tells customers to reply or call `(866) 828-1818` for changes, and includes appointment calendar/cancel/reschedule variables.
- The 24-hour reminder email was rewritten and saved in draft on May 25, 2026.
- The 24-hour reminder email subject is `Reminder: Your SecureLifts Appointment Is Tomorrow`.
- The 24-hour reminder SMS was reviewed and left unchanged because it is already SecureLifts-specific, includes `(866) 828-1818`, and includes STOP opt-out language.
- The 1-hour reminder email was rewritten and saved in draft on May 25, 2026.
- The 1-hour reminder email subject is `Your SecureLifts Appointment Is Coming Up Soon`.
- The 1-hour reminder SMS was reviewed and left unchanged because it is already SecureLifts-specific and includes STOP opt-out language.

Recommended before publishing:

- Confirm the workflow should fire only for actual customer appointments, not internal calendar events.
- Send one internal test only after final approval, then publish if the test looks correct.

## Maintenance Plan Offer Draft

Current audit:

- Workflow: `SecureLifts - Maintenance Plan Offer Draft`.
- Workflow URL ID: `ac537f36-d3d9-4c5f-9efa-13026f3bd026`.
- Status: Draft.
- Trigger: `Contact Tag`, `Tag Added` includes `sl-maintenance-prospect`.
- Existing checks stop the workflow for contacts tagged `silver plan`, `gold plan`, or `platinum plan`.
- The no-plan branch sends an SMS offering maintenance plan details and includes `(866) 828-1818` plus STOP opt-out language.
- The website bridge now uses `sl-maintenance-prospect` for submitted maintenance or service-plan interest only when SMS opt-in is present, so this draft and the website are aligned without texting non-opted-in leads.

Recommended before publishing:

- Add an SMS opt-in condition before the maintenance offer SMS, or convert the first touch to a task/email when SMS opt-in is missing.
- Add a team task when a customer replies YES so SecureLifts can sell the plan quickly.

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

Pipeline ID:

- `I6goGYk9lFWlaKCO8sfU`

Stage IDs:

- Not visible on the GHL pipeline stage screen. Do not guess these values.
- The first required stage ID should be the internal ID for `New Lead`.

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

## Workflow Activation Checklist

Before publishing any draft:

- Confirm the trigger is specific enough to avoid enrolling old contacts by accident.
- Confirm no other published workflow already does the same job.
- Confirm SMS/email copy sounds like SecureLifts and includes a clear next step.
- Confirm stop conditions remove contacts when they book, reply, become completed, or are marked lost.
- Confirm internal notifications go to the right SecureLifts owner.
- Run one controlled test contact before publishing broadly.
- After publishing, watch the first live enrollment and check the contact timeline.

## Reputation Engine

- Respond to the 25 unresponded reviews.
- Turn on a controlled review request workflow after job completion.
- Keep the review link and QR code ready for technicians.
- Add review widget highlights to the website where useful.
- Use positive review themes in ads and landing pages.
- Reputation engine plan: `docs/securelifts-reputation-engine-plan.md`.
- Current GHL review link points to Google via a custom review link.
- Keep Reviews AI in suggestive mode until response style is approved.
- Create QR code assets only after final review link approval.
- Connect non-Google review platforms only after those profiles are claimed and verified.

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

## Vercel Environment Audit

Visible for `securelifts-site` as of May 25, 2026:

- `FIELD_PULSE_CREATE_JOB` - present
- `LEAD_WEBHOOK_SECRET` - present
- `FIELD_PULSE_API_KEY` - present
- `FIELD_PULSE_API_BASE_URL` - present
- `HIGHLEVEL_LOCATION_ID` - present
- `HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN` - present
- `RESEND_FROM_EMAIL` - present
- `RESEND_API_KEY` - present

Still needed for automatic GHL opportunity/card creation:

- `HIGHLEVEL_PIPELINE_ID`
- `HIGHLEVEL_PIPELINE_STAGE_ID`
- Optional: `HIGHLEVEL_DEFAULT_OPPORTUNITY_VALUE`

Until the pipeline ID and stage ID are added, the webhook can still receive leads and sync to FieldPulse/HighLevel contacts, but automatic placement into the SecureLifts Service Pipeline may be skipped.
