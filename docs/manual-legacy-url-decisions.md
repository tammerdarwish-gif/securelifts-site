# Manual Legacy URL Decisions

Date: 2026-08-23

## Implemented

The supplied 404 examples with clear current equivalents are permanently redirected in `next.config.ts`, including old service, city, product, portfolio, policy and manual paths. All valid top-level city aliases redirect to `/garage-door-repair/{city}`. `/locations/{city}-fl` redirects to the same canonical city page.

Advertising pages remain real landing pages but are excluded from the organic sitemap. They should be given `noindex, follow` if they are intended only for paid campaigns; this requires confirming campaign usage before changing indexation.

PDF resources use HTTP `Link` canonical headers. Filenames and capitalization should not be renamed without checking external links and Search Console.

## Intentionally unresolved

| Legacy item | Decision needed |
|---|---|
| `/customer-portal` | Confirm whether FieldPulse or another real customer portal exists. Keep a controlled 404 when no equivalent exists. |
| Old URLs not present in supplied exports | Obtain full Search Console 404/redirect export and backlink data before mapping. |
| Typo PDF path containing `/Clopay/nsulated` | Confirm the intended file and whether the typo URL has links before redirecting. |
| Old tracked telephone/address landing pages | Confirm whether they generated leads or backlinks before consolidation. |

## Redirect rules

- Redirect only to the closest relevant equivalent.
- Never redirect unrelated missing content to the homepage.
- Avoid loops and update internal links to final URLs.
- Retain valuable permanent redirects indefinitely.

