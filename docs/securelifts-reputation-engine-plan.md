# SecureLifts Reputation Engine Plan

## Current Rule

Do not send customer review requests, connect new review platforms, activate WhatsApp, or create public-facing QR/materials without owner approval. This document is the build map for the reputation system.

Google Business Profile should not be changed from this work. Use it as the example/source of truth. The primary category to carry into other profiles is `Garage Door Supplier`; repair, installation, openers, hurricane-rated doors, commercial doors, and emergency service are supporting services/categories.

## GHL Reputation Audit

Observed in GHL on May 25, 2026:

- Reputation overview showed `5.0` average rating and `50` total reviews.
- Sentiment showed `92%` positive, `0%` negative, and `8%` neutral.
- Review request history showed at least one phone review request sent from Tammer Darwish.
- Reviews AI is set to `Suggestive`, not automatic response publishing.
- Review link is configured as a custom Google review link:
  - `https://search.google.com/local/writereview?placeid=ChIJH0s9aAC72YgR7o_w6Xvs4rQ`
- Review balancing is off/disabled because only the custom link is selected.
- SMS review requests are enabled.
- SMS timing: send immediately after check-in.
- SMS repeat setting: do not repeat.
- SMS maximum retries: `1`.
- SMS template status: one live template named `New Template`.
- SMS template copy is generic and uses `{{location.name}}`.
- Email review requests are enabled.
- Email timing: send `4 Hours` after check-in.
- Email repeat setting: every `3 Days`.
- Email maximum retries: `3`.
- Email templates use the subject `Would you recommend us?`.
- WhatsApp review requests are not connected.
- Review QR code has not been created yet.
- Spam review detection is off.
- Review integrations show Google Business Profile connected.
- Review integrations show Facebook, BBB, Foursquare, HomeAdvisor, Houzz, Angi, and many others not connected.

## Reputation Build Priorities

### 1. Keep Review AI Suggestive

Leave Reviews AI in `Suggestive` mode until the response style is fully approved. Automatic public replies should not be turned on yet.

### 2. Improve Review Request Copy

Replace generic templates later with SecureLifts-specific copy. Suggested SMS:

`Hi {{contact.first_name}}, thank you for choosing SecureLifts. If our team did a great job, would you mind leaving a quick review? Your feedback helps local customers choose a company they can trust. {{reputation.review_link}} Reply STOP to opt out.`

Suggested email subject:

`How did SecureLifts do?`

Suggested email body:

`Thank you for choosing SecureLifts. Your feedback helps our team improve and helps other South Florida customers find a garage door company they can trust. If you have a minute, please share your experience here: {{reputation.review_link}}`

### 3. Create Review QR Assets Later

Create a review QR code only after confirming the Google review link and final design. Use QR on:

- Technician leave-behind card.
- Invoice footer.
- Service van card.
- Office follow-up materials.
- Maintenance plan handout.

### 4. Turn On Spam Detection Later

Spam detection is currently off. Turning it on is likely useful because it can keep suspected spam reviews out of widgets and stop automatic replies to spam, but save the setting only after owner approval.

### 5. Connect Review Platforms Only After Profiles Are Claimed

Do not connect review integrations for Facebook, BBB, Angi, HomeAdvisor, Houzz, or others until each profile is claimed and verified. Otherwise GHL may connect to the wrong or incomplete public profile.

## Review Response Library

Happy customer:

`Thank you for choosing SecureLifts. We are glad our team could help with your garage door service and appreciate you trusting us with your home or business.`

Detailed positive review:

`Thank you for the thoughtful review. We appreciate the opportunity to help and are glad the SecureLifts team delivered the service, communication, and reliability you expected.`

Commercial customer:

`Thank you for trusting SecureLifts with your commercial door service. We know uptime matters, and we appreciate the opportunity to support your business.`

Installation customer:

`Thank you for choosing SecureLifts for your garage door installation. We appreciate your trust and hope the new door serves you safely and reliably for years.`

Neutral review:

`Thank you for the feedback. We appreciate the opportunity to improve and would welcome a chance to learn more so our team can make the experience better.`

Negative review:

`We are sorry this was your experience. Please contact SecureLifts at (866) 828-1818 so our team can review what happened and work toward a fair resolution.`

## Operating Rhythm

Daily:

- Check new reviews.
- Respond to all reviews that need a human response.
- Watch for negative or neutral feedback.
- Confirm review requests are not being sent to unqualified contacts.

Weekly:

- Review request count.
- New reviews received.
- Review request conversion rate.
- Unresponded reviews.
- Average rating.
- Review sources.
- New photos or project proof to support reputation.

Monthly:

- Audit Google Business Profile review link.
- Check GHL review templates.
- Refresh QR code assets if the review link changes.
- Check which external platforms are ready to connect into GHL.

## Activation Gate

Before changing live review request behavior:

- Confirm the review link.
- Confirm SMS opt-in logic.
- Confirm review request timing after completed service.
- Confirm review request should not go to cancelled, disputed, no-show, or unhappy customers.
- Confirm template copy.
- Run one internal test contact.
- Verify no duplicate workflow also sends review requests.
