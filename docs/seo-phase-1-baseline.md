# SecureLifts SEO Phase 1 Baseline

Date: 2026-08-23

## Scope

This baseline covers controllable repository behavior: routing, canonicals, indexation directives, sitemap generation, structured data, business identity, lead delivery, analytics code, testimonials, and local-page generation. It does not claim access to Google Search Console, GA4, Google Business Profile, backlink tools, FieldPulse revenue, or third-party directory accounts.

## Baseline findings

- The production build generates about 1,020 pages, including hundreds of service/city combinations.
- The sitemap previously included three advertising pages and two redirect-only pages, and applied deployment-time modification dates.
- Top-level city aliases were incomplete and could expose duplicate city content.
- The root layout forced homepage canonical/index/schema signals onto unrelated routes and 404 output.
- Global FAQ and SearchAction markup did not reliably match visible page behavior.
- Several templates used unsupported `GarageDoorRepair` schema.
- Repeated testimonial names and five-star decorations lacked repository evidence.
- Telephone conversion tracking delayed the native phone action.
- The lead endpoint lacked bounded validation, idempotency, spam protection, and controlled configuration failures.
- FieldPulse attempted to create a second main location after customer creation.
- Direct Google tags and GTM coexist; duplication cannot be decided without inspecting the GTM container.
- Local pages contain extensive templated language. Search Console, analytics, backlink, lead and revenue data are required before consolidation.

## Risk posture

No new mass-generated pages should be added. Existing city pages are retained pending performance evidence. Pages without real local evidence are classified for manual review in `reports/seo-location-page-inventory.csv`.

## Authoritative guidance

- Google recommends choosing one canonical URL and using server-side redirects and sitemap entries consistently.
- Google requires structured data to represent visible, accurate page content.
- Correct structured data enables eligibility; it does not guarantee a search feature or ranking.

