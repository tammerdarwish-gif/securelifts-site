# Manual Business Data Review

Date: 2026-08-23

## Canonical code identity

- Public name: SecureLifts
- Legal entity: AAA Garage Door Inc.
- Display relationship: AAA Garage Door Inc. DBA SecureLifts
- Website: https://securelifts.com
- Primary phone: (866) 828-1818 / +1-866-828-1818
- Primary email: info@securelifts.com
- Service area: South Florida; Miami-Dade, Broward and Palm Beach counties
- Hours: Monday–Friday 8:00 AM–5:00 PM; Saturday 9:00 AM–4:00 PM; Sunday closed
- BBB description: BBB A+ Rated; do not describe SecureLifts as BBB Accredited

These values are centralized in `lib/siteIdentity.ts`.

## Confirmed primary location

Management confirmed on 2026-08-24 that `8570 NW 70th St., Miami, FL 33166` is staffed by SecureLifts, has permanent SecureLifts signage and receives customers during published business hours. It is now the website's canonical storefront address and is emitted in the business schema.

Management confirmed the published hours on 2026-08-24. These hours are centralized in `lib/siteIdentity.ts`, displayed on the contact page and emitted through `OpeningHoursSpecification` in the business schema.

Management confirmed on 2026-08-24 that the correct website claim is `BBB A+ Rated`. The live BBB profile shows an A+ rating and explicitly states that SecureLifts is not BBB Accredited. Website components must not use the BBB Accredited label or accreditation seal.

The proposed `5000 Lake Worth Rd Unit 505, Greenacres, FL 33463` location is not published. It must not be added until management confirms that it is operational, separately staffed during published hours, has permanent SecureLifts signage and receives customers.

## Conflicts reported outside current source code

Historical combinations involving 7501 NW 52nd St., 7516 NW 54th St., 8461 Lake Worth Rd. and several older telephone numbers still require account-level correction across BBB, Chamber, Bing Places, Apple Business Connect, social/manufacturer listings and data aggregators. Best Pick and Google currently use the confirmed 8570 NW 70th St. location, though external telephone numbers still require review.

## Required management confirmations

- Whether legacy/tracking telephone numbers remain operational and where they are intentionally used.
- Verified license number, hours, warranties, affiliations, dealer status, review counts and other proof before publication.

Do not create fake branches, virtual-office listings or unstaffed profiles.
