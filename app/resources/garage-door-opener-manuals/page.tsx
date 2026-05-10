import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import {
  openerManualDocuments,
  openerProducts,
} from "@/lib/openerProducts";

const PHONE_DISPLAY = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Garage Door Opener Manuals & Model Guide | SecureLifts",
  description:
    "Browse SecureLifts garage door opener resources for LiftMaster and Raynor model families, safety notes, programming help, and repair-or-replace guidance.",
  alternates: {
    canonical: "https://securelifts.com/resources/garage-door-opener-manuals",
  },
};

const quickHelp = [
  {
    title: "Remote or keypad not working",
    text: "Check batteries first, then confirm the wall button works. If the wall button works but the remote does not, the issue may be programming, compatibility, or a failed remote.",
  },
  {
    title: "Door reverses or will not close",
    text: "Look for blocked or misaligned photo eyes near the floor. Do not bypass safety sensors. If the door still reverses, the track, travel limits, force setting, or door balance may need service.",
  },
  {
    title: "Opener hums but door will not move",
    text: "Stop using the opener. A broken spring, locked door, stripped gear, or damaged drive system can make the opener strain and cause more damage.",
  },
  {
    title: "Wi-Fi or app setup problem",
    text: "Confirm the home network is stable and that the opener has power. If setup fails repeatedly, the opener may need a reset, updated accessories, or help pairing the account.",
  },
];

const safetyRules = [
  "Do not loosen springs, drums, shaft hardware, cables, or bottom brackets.",
  "Do not force the opener to lift a heavy or unbalanced door.",
  "Do not bypass photo eyes or safety reversal systems.",
  "Disconnect power before checking anything near the opener head or wiring.",
  "Call a professional if the door is crooked, heavy, stuck, off track, or hanging from one side.",
];

export default function GarageDoorOpenerManualsPage() {
  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          { label: "Resources", href: "https://securelifts.com/resources" },
          {
            label: "Garage Door Opener Manuals",
            href: "https://securelifts.com/resources/garage-door-opener-manuals",
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Garage Door Opener Manuals" },
        ]}
      />

      <section className="bg-slate-950 px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-red-400">
            SecureLifts Resource Library
          </p>
          <h1 className="max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
            Garage Door Opener Manuals, Model Names & Setup Help
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Use this page to identify LiftMaster and Raynor opener model
            families, understand private-label naming, and get safe homeowner
            troubleshooting guidance before booking service.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold text-white transition hover:bg-red-700"
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white transition hover:bg-white/15"
            >
              Book Opener Service
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Model Library
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              LiftMaster / Raynor opener name guide
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Many professional opener families are sold under a LiftMaster
              model number and a Raynor private-label name. SecureLifts can help
              with either name.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {openerProducts.map((product) => (
              <article
                key={product.slug}
                id={product.slug}
                className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                  {product.category}
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-tight">
                  {product.shortName} / {product.pairedName}
                </h3>
                <p className="mt-4 text-sm font-bold leading-6 text-slate-700">
                  {product.raynorMatch}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {product.summary}
                </p>
                {product.currentStatus ? (
                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">
                    <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Current model note
                    </span>
                    <span className="mt-2 block">{product.currentStatus}</span>
                  </div>
                ) : null}
                <div className="mt-5 grid gap-2">
                  {product.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    SecureLifts-hosted PDFs
                  </p>
                  <div className="mt-3 grid gap-2">
                    {(openerManualDocuments[product.slug] || []).length > 0 ? (
                      openerManualDocuments[product.slug].map((document) => (
                        <a
                          key={document.href}
                          href={document.href}
                          className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:text-red-600"
                        >
                          <span className="block text-xs uppercase tracking-[0.14em] text-red-600">
                            {document.kind}
                          </span>
                          {document.title}
                        </a>
                      ))
                    ) : (
                      <p className="text-sm font-semibold leading-6 text-slate-600">
                        This older model is handled as a legacy support page.
                        Contact SecureLifts with a photo of the opener label and
                        we can help identify the correct manual or current
                        replacement family.
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href={`/garage-door-opener/${product.slug}`}
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    View SecureLifts Product Page
                  </Link>
                  <Link
                    href="/book-service"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
                  >
                    Ask SecureLifts For Help
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Before You Touch It
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Safe homeowner checks only
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Openers are connected to a heavy moving door. These checks are
              meant to help homeowners understand the problem, not to replace
              professional spring, cable, track, or electrical work.
            </p>
          </div>
          <div className="grid gap-3">
            {safetyRules.map((rule) => (
              <div
                key={rule}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold leading-6 text-slate-800"
              >
                {rule}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Quick Help
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Common opener issues and what they usually mean
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {quickHelp.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl font-black tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-white/80">
            Need The Exact Manual Or A Repair Answer?
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            SecureLifts will help even if you are only researching
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">
            Send the opener model number or a photo of the unit. We can help
            identify the matched LiftMaster/Raynor name and tell you whether the
            issue sounds like programming, sensors, the opener, or the door
            system itself.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-7 py-4 text-base font-bold text-white transition hover:bg-slate-900"
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/40 px-7 py-4 text-base font-bold text-white transition hover:bg-white hover:text-red-600"
            >
              Contact SecureLifts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
