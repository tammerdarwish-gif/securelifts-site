

import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaExclamationTriangle,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaWarehouse,
  FaClipboardCheck,
  FaDoorOpen,
} from "react-icons/fa";
import { serviceRoutes } from "../../lib/serviceRoutes";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Emergency Commercial Door Repair | SecureLifts South Florida",
  description:
    "Emergency commercial door repair in South Florida for warehouses, storefronts, industrial sites, service bays, and business facilities. Fast response for stuck doors, unsafe movement, broken hardware, operator failures, and urgent access or security issues.",
  alternates: {
    canonical: "https://securelifts.com/emergency-commercial-door-repair",
  },
  openGraph: {
    title: "Emergency Commercial Door Repair | SecureLifts South Florida",
    description:
      "Fast emergency commercial door repair for stuck doors, operator issues, and urgent access or security problems across South Florida.",
    url: "https://securelifts.com/emergency-commercial-door-repair",
    siteName: "SecureLifts",
    type: "website",
  },
};

const urgentIssues = [
  "Commercial door stuck open",
  "Commercial door stuck closed",
  "Door affecting deliveries or business access",
  "Unsafe door movement or dropping",
  "Track damage or severe misalignment",
  "Broken springs or failed hardware",
  "Commercial operator failure",
  "Security issue caused by a non-operational door",
];

const whyUrgentServiceMatters = [
  "Protect building access and security",
  "Reduce downtime for employees and operations",
  "Address safety risks before they get worse",
  "Get the property moving again faster",
  "Prevent additional damage from forced operation",
  "Create a clearer next step under pressure",
];

const whyChooseSecureLifts = [
  "Fast response for business-critical issues",
  "Commercial-focused troubleshooting",
  "Direct communication without fluff",
  "Repair-first approach when practical",
  "Support for warehouses, bays, storefronts, and facilities",
  "Focused on safe operation and real business needs",
];

const processSteps = [
  {
    title: "1. Assess the emergency",
    text: "We identify what failed, what is unsafe, and how the issue is affecting access, security, and business operations.",
  },
  {
    title: "2. Stabilize the situation",
    text: "We focus first on restoring safe operation or helping secure the opening when the door cannot be safely used.",
  },
  {
    title: "3. Complete the right repair",
    text: "We repair the actual problem when possible and explain clearly if more extensive corrective work is needed.",
  },
  {
    title: "4. Help prevent the next emergency",
    text: "If needed, we outline the maintenance or follow-up work that can reduce repeat breakdowns and future disruption.",
  },
];

const cityLinks = [
  {
    label: "Emergency Commercial Door Repair in Miami",
    href: "/emergency-commercial-door-repair/miami",
  },
  {
    label: "Emergency Commercial Door Repair in Fort Lauderdale",
    href: "/emergency-commercial-door-repair/fort-lauderdale",
  },
  {
    label: "Emergency Commercial Door Repair in West Palm Beach",
    href: "/emergency-commercial-door-repair/west-palm-beach",
  },
  {
    label: "Emergency Commercial Door Repair in Boca Raton",
    href: "/emergency-commercial-door-repair/boca-raton",
  },
  {
    label: "Emergency Commercial Door Repair in Delray Beach",
    href: "/emergency-commercial-door-repair/delray-beach",
  },
  {
    label: "Emergency Commercial Door Repair in Miami Beach",
    href: "/emergency-commercial-door-repair/miami-beach",
  },
];

const relatedPages = [
  {
    title: "Commercial Garage Door Services",
    text: "See the full commercial service overview for repair, installation, maintenance, and emergency support.",
    href: serviceRoutes.commercialGarageDoorServices,
  },
  {
    title: "Commercial Garage Door Repair",
    text: "For commercial door problems that need full troubleshooting and corrective repair work.",
    href: serviceRoutes.commercialGarageDoorRepair,
  },
  {
    title: "Commercial Garage Door Installation",
    text: "For full replacement or new commercial overhead door systems.",
    href: serviceRoutes.commercialGarageDoorInstallation,
  },
  {
    title: "Commercial Garage Door Maintenance",
    text: "Preventive maintenance to reduce repeat failures and emergency service calls.",
    href: serviceRoutes.commercialGarageDoorMaintenance,
  },
];

const faqs = [
  {
    q: "What counts as an emergency commercial door issue?",
    a: "A commercial door problem is an emergency when it affects access, security, safety, deliveries, employees, or business operations. Doors stuck open, stuck closed, dropping, misaligned, or failing under use should be addressed quickly.",
  },
  {
    q: "Can you help if the door is stuck open and the building is exposed?",
    a: "Yes. If a commercial door is stuck open and creating a security problem, call right away so the situation can be assessed and the opening can be secured or repaired as quickly as possible.",
  },
  {
    q: "Can you help if the commercial door is unsafe to use?",
    a: "Yes. Unsafe movement, severe noise, dropping, dragging, or visible structural issues should not be ignored. Emergency service is meant to address those high-risk situations.",
  },
  {
    q: "Do you handle commercial operator failures too?",
    a: "Yes. Emergency service includes commercial operator-related issues because many urgent failures involve more than one part of the system.",
  },
  {
    q: "What happens if the door needs more than a quick repair?",
    a: "If the issue requires more extensive corrective work, SecureLifts explains the situation clearly and outlines the most practical next step for safety, reliability, and business continuity.",
  },
];

export default function EmergencyCommercialDoorRepairPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Emergency Commercial Door Repair",
    serviceType: "Emergency Commercial Door Repair",
    provider: {
      "@type": "GarageDoorRepair",
      name: "SecureLifts",
      telephone: PHONE,
      url: "https://securelifts.com/emergency-commercial-door-repair",
    },
    areaServed: [
      { "@type": "Place", name: "South Florida" },
      { "@type": "Place", name: "Palm Beach County" },
      { "@type": "Place", name: "Broward County" },
      { "@type": "Place", name: "Miami-Dade County" },
    ],
    description:
      "Emergency commercial door repair for urgent access, safety, operator, track, spring, and security-related failures in South Florida.",
  };

  return (
    <>
      <Script
        id="emergency-commercial-repair-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="emergency-commercial-repair-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.20),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_28%)]" />
          <div className="sl-container relative py-16 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                  SecureLifts Emergency Commercial Service
                </span>

                <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Emergency Commercial Door Repair in South Florida
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                  When a commercial door fails, businesses can lose access, security,
                  and valuable operating time fast. SecureLifts provides emergency
                  commercial door repair for warehouses, storefronts, service bays,
                  industrial sites, and business facilities across South Florida.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-base font-bold text-white transition hover:bg-red-700"
                  >
                    Call {PHONE}
                  </a>

                  <Link
                    href="/book-service"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
                  >
                    Book Service
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" />
                    Fast response for urgent business issues
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" />
                    Access, safety, and security problems
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" />
                    Commercial doors and operators
                  </span>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
                <h2 className="text-2xl font-black tracking-tight">
                  Urgent issues we respond to
                </h2>

                <div className="mt-6 grid gap-4">
                  {[
                    "Door stuck open and exposing the building",
                    "Door stuck closed and blocking operations",
                    "Unsafe movement, dropping, or dragging",
                    "Operator failure affecting access",
                    "Track or hardware damage causing shutdown",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/10 p-4">
                      <div className="flex items-start gap-3">
                        <FaExclamationTriangle className="mt-1 text-red-400" />
                        <p className="text-sm font-semibold leading-6 text-slate-100">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-red-600 px-5 py-4 text-sm font-bold text-white">
                  If a commercial door problem is affecting security or operations, call now: {PHONE}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Emergency service for real commercial door failures
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Emergency commercial repair is about more than speed. It is about
              addressing unsafe conditions, protecting the building, restoring access,
              and reducing further disruption to the property.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {urgentIssues.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-red-600" />
                  <span className="text-sm font-semibold leading-6 text-slate-800">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="sl-container py-14 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                  Why emergency service matters
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  The longer an urgent commercial door problem sits, the more it can
                  affect security, safety, productivity, and business flow.
                </p>

                <div className="mt-8 grid gap-4">
                  {whyUrgentServiceMatters.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-red-600" />
                      <span className="text-sm font-semibold leading-6 text-slate-800">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-black tracking-tight text-slate-900">
                  Why businesses choose SecureLifts
                </h3>

                <div className="mt-6 grid gap-4">
                  {whyChooseSecureLifts.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-slate-200 px-4 py-4 text-sm font-bold text-slate-800"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-3xl bg-slate-50 p-6">
                  <div className="flex items-start gap-3">
                    <FaWarehouse className="mt-1 text-red-600" />
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-slate-900">
                        Commercial emergencies need a business-first response
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        A stuck or unsafe commercial door affects more than the door.
                        It affects people, property, schedules, and business continuity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Urgent repair should stabilize the situation first
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                The first goal is to reduce risk, secure the property when needed,
                and get the right next move in place. After that, the focus shifts to
                dependable corrective repair.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaShieldAlt className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">Security cannot be ignored</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        A door stuck open or failing under use can leave the property exposed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaClock className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">Downtime costs real money</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        Delays in loading, receiving, access, and workflow create compounding problems fast.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaTools className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">Forced operation makes things worse</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        Trying to keep using a failing commercial door can increase damage and risk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                How SecureLifts handles emergency commercial repair
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We keep the emergency process direct, calm, and focused on the most important thing first.
              </p>

              <div className="mt-8 grid gap-5">
                {processSteps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                  >
                    <h3 className="text-xl font-black tracking-tight text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-red-200 bg-red-50 p-7">
                <h3 className="text-xl font-black tracking-tight text-slate-900">
                  Need emergency commercial door repair right now?
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Call SecureLifts for direct help with urgent commercial door failures,
                  access issues, operator problems, and unsafe conditions.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                  >
                    Call {PHONE}
                  </a>
                  <Link
                    href="/book-service"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
                  >
                    Book Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="sl-container py-14 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Emergency commercial door repair by city
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Use these city pages to find live local emergency commercial repair coverage in major South Florida markets.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {cityLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                >
                  <span>{item.label}</span>
                  <FaArrowRight className="text-red-600" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Related commercial services
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Explore related commercial service pages to compare repair, installation, maintenance, and urgent support.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaDoorOpen className="text-red-600" />
                <h3 className="mt-4 text-xl font-black tracking-tight text-slate-900">
                  {page.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {page.text}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Emergency Commercial Door Repair FAQ
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Straight answers to urgent questions businesses ask when a commercial door fails.
            </p>
          </div>

          <div className="mt-10 grid gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black tracking-tight text-slate-900">
                  {faq.q}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="sl-container pb-14 md:pb-20">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white md:px-12 md:py-14">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Need emergency commercial door repair now?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                If your building is dealing with an urgent commercial door problem,
                call SecureLifts now so we can help you move toward the right solution fast.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-base font-bold text-white transition hover:bg-red-700"
              >
                Call {PHONE}
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
              >
                Book Service
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}