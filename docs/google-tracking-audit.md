# Google Tracking Audit

Date: 2026-08-23

## IDs found in repository code

| System | ID | Loader |
|---|---|---|
| Google Tag Manager | `GTM-NLKNM4LB` | `app/layout.tsx` |
| Google Ads | `AW-17481132065` | deferred direct gtag loader in `app/layout.tsx` |
| GA4 | `G-NRWSY3V29J` | deferred direct gtag loader in `app/layout.tsx` |
| Additional GA4 | `G-MM5H23RMXS` | deferred direct gtag loader in `app/layout.tsx` |
| Ads phone conversion | `AW-17481132065/F22OCPvmkfQbEKHQ049B` | `app/layout.tsx` |
| Ads lead conversion | `AW-17481132065/F_m9CKXmkfQbEKHQ049B` | `app/layout.tsx` |

## Events found

- `phone_click` from the global passive telephone-link listener.
- Google Ads `conversion` for telephone clicks.
- `generate_lead` after a successful quick-form response.
- Google Ads `conversion` after successful form delivery.
- Both GA4 properties use `send_page_view: true` in direct code.

## Corrections made

- Telephone clicks are no longer blocked with `preventDefault()`.
- No manual delayed navigation remains.
- Lead conversion tracking is non-blocking and fires only after an accepted API response.

## Manual GTM review required

The repository cannot reveal tags configured inside `GTM-NLKNM4LB`. In Google Tag Manager, verify whether the container also loads either GA4 property, Google Ads, Conversion Linker, phone conversions or form conversions. If it does, choose one owner for each tag/event and remove the duplicate implementation only after comparing live Preview/DebugView evidence.

Confirm whether both GA4 properties are intentional. Do not remove either property solely because two IDs exist.

## Acceptance criteria

- One page view per intended GA4 property.
- One phone event and one intended Ads conversion per click.
- One lead event and one intended Ads conversion per accepted lead.
- Native telephone behavior succeeds when analytics is blocked.
- GA4 DebugView and Google Ads diagnostics match the browser event count.

