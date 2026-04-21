import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaTools,
  FaWarehouse,
  FaClock,
  FaShieldAlt,
  FaIndustry,
  FaExclamationTriangle,
  FaClipboardCheck,
} from "react-icons/fa";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Commercial Garage Door Repair | SecureLifts South Florida",
  description:
    "Commercial garage door repair in South Florida for warehouses, storefronts, industrial sites, service bays, and business facilities. Fast repair for stuck doors, damaged panels, broken springs, operator issues, track damage, and unsafe door movement.",
  alternates: {
    canonical: "https://securelifts.com/commercial-garage-door-repair",
  },
  openGraph: {
    title: "Commercial Garage Door Repair | SecureLifts South Florida",
    description:
      "Fast commercial garage door repair for warehouses, storefronts, industrial sites, and business facilities across South Florida.",
    url: "https://securelifts.com/commercial-garage-door-repair",
    siteName: "SecureLifts",
    type: "website",
  },
};

const repairIssues = [
  "Commercial door will not open or close properly",
  "Door stuck open or stuck closed",
  "Track damage or misalignment",
  "Bent panels or impact damage",
  "Broken springs or tension problems",
  "Worn rollers, hinges, drums, bearings, or hardware",
  "Commercial operator not responding",
  "Unsafe jerking, dragging, or loud grinding movement",
];

const whyUs = [
  "Fast response for business-critical door failures",
  "Commercial-focused troubleshooting, not guesswork",
  "Repair-first recommendations when practical",
  "Clear communication on safety and next steps",
  "Support for warehouses, bays, storefronts, and industrial properties",
  "Long-term reliability mindset instead of short patchwork fixes",
];

const propertyTypes = [
  "Warehouses",
  "Distribution centers",
  "Storefronts",
  "Auto shops and service bays",
  "Industrial buildings",
  "Storage facilities",
  "Loading and receiving areas",
  "Commercial multi-unit properties",
];

const processSteps = [
  {
    title: "1. Inspect the full system",
    text: "We check the door, track, springs, hardware, operator, and safety condition to identify the real cause of the failure.",
  },
  {
    title: "2. Explain the issue clearly",
    text: "You get a direct explanation of what failed, what is unsafe, what can be repaired, and what may need replacement.",
  },
  {
    title: "3. Complete the right repair",
    text: "We handle the corrective work with focus on restoring safe operation and reducing further disruption to the property.",
  },
  {
    title: "4. Help reduce repeat downtime",
    text: "If needed, we recommend maintenance or further corrective work so the same problem does not keep coming back.",
  },
];

const cityLinks = [
  { label: "Commercial Garage Door Repair in Miami", href: "/commercial-garage-door-repair/miami" },
  { label: "Commercial Garage Door Repair in Fort Lauderdale", href: "/commercial-garage-door-repair/fort-lauderdale" },
  { label: "Commercial Garage Door Repair in West Palm Beach", href: "/commercial-garage-door-repair/west-palm-beach" },
  { label: "Commercial Garage Door Repair in Boca Raton", href: "/commercial-garage-door-repair/boca-raton" },
  { label: "Commercial Garage Door Repair in Delray Beach", href: "/commercial-garage-door-repair/delray-beach" },
  { label: "Commercial Garage Door Repair in Miami Beach", href: "/commercial-garage-door-repair/miami-beach" },
];

const relatedPages = [
  {
    title: "Commercial Garage Door Services",
    text: "See the full commercial service overview for repair, installation, maintenance, and emergency support.",
    href: "/commercial-garage-door-services",
  },
  {
    title: "Commercial Garage Door Installation",
    text: "For full replacement or new overhead door systems for business properties.",
    href: "/commercial-garage-door-installation",
  },
  {
    title: "Commercial Garage Door Maintenance",
    text: "Preventive service to reduce costly failures and extend system life.",
    href: "/commercial-garage-door-maintenance",
  },
  {
    title: "Emergency Commercial Door Repair",
    text: "Urgent help for doors affecting access, security, and operations.",
    href: "/emergency-commercial-door-repair",
  },
];

const faqs = [
  {
    q: "What kinds of commercial garage door problems do you repair?",
    a: "SecureLifts repairs stuck doors, damaged tracks, bent panels, broken springs, worn hardware, noisy movement, unsafe travel, and operator-related problems on commercial garage doors.",
  },
  {
    q: "Can you help if the door is affecting operations today?",
    a: "Yes. If a commercial door failure is disrupting deliveries, access, security, or workflow, call right away. Urgent business-impacting issues should be addressed quickly.",
  },
  {
    q: "Do you repair commercial operators too?",
    a: "Yes. We inspect the full system, including the commercial operator, because many door failures involve more than one component.",
  },
  {
    q: "How do we know if repair still makes sense?",
    a: "That depends on the age of the system, severity of the damage, safety condition, repair cost, and whether the same failures keep repeating. We explain the realistic options clearly.",
  },
  {
    q: "Do you work with property managers and commercial facilities?",
    a: "Yes. SecureLifts works with business owners, property managers, facilities, and commercial properties that need dependable repair service and direct communication.",
  },
];

export default function CommercialGarageDoorRepairPage() {
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
    name: "Commercial Garage Door Repair",
    serviceType: "Commercial Garage Door Repair",
    provider: {
      "@type": "GarageDoorRepair",
      name: "SecureLifts",
      telephone: PHONE,
      url: "https://securelifts.com/commercial-garage-door-repair",
    },
    areaServed: [
      { "@type": "Place", name: "South Florida" },
      { "@type": "Place", name: "Palm Beach County" },
      { "@type": "Place", name: "Broward County" },
      { "@type": "Place", name: "Miami-Dade County" },
    ],
    description:
      "Commercial garage door repair for warehouses, storefronts, industrial properties, service bays, and business facilities in South Florida.",
  };

  return (
    <>
      <Script
        id="commercial-repair-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="commercial-repair-faq-schema"
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
                  SecureLifts Commercial Repair
                </span>

                <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Commercial Garage Door Repair in South Florida
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                  When a commercial garage door fails, businesses lose time,
                  access, security, and momentum. SecureLifts provides commercial
                  garage door repair for warehouses, storefronts, industrial sites,
                  service bays, and business facilities across South Florida.
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
                    Fast response for urgent failures
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" />
                    Commercial operators and door systems
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" />
                    Warehouses, bays, and business properties
                  </span>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
                <h2 className="text-2xl font-black tracking-tight">
                  Common repair calls we handle
                </h2>

                <div className="mt-6 grid gap-4">
                  {[
                    "Door stuck open or stuck closed",
                    "Track damage or bent sections",
                    "Broken springs and worn hardware",
                    "Commercial operator problems",
                    "Unsafe movement or loud grinding noise",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/10 p-4">
                      <div className="flex items-start gap-3">
                        <FaTools className="mt-1 text-red-400" />
                        <p className="text-sm font-semibold leading-6 text-slate-100">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-red-600 px-5 py-4 text-sm font-bold text-white">
                  If a commercial door issue is affecting access or operations, call now: {PHONE}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Commercial garage door repair for real business problems
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Commercial repair is not just about getting the door moving again.
              It is about restoring safe operation, protecting access, reducing
              downtime, and helping the property avoid repeat failures.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {repairIssues.map((item) => (
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
                  Why businesses choose SecureLifts for repair
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Commercial clients do not want vague answers or slow reactions.
                  They want a company that understands urgency, communicates clearly,
                  and treats downtime like a real problem.
                </p>

                <div className="mt-8 grid gap-4">
                  {whyUs.map((point) => (
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
                  Properties we commonly support
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {propertyTypes.map((type) => (
                    <div
                      key={type}
                      className="rounded-2xl border border-slate-200 px-4 py-4 text-sm font-bold text-slate-800"
                    >
                      {type}
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-3xl bg-slate-50 p-6">
                  <div className="flex items-start gap-3">
                    <FaWarehouse className="mt-1 text-red-600" />
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-slate-900">
                        Business-first repair thinking
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        A broken commercial door affects employees, deliveries,
                        security, workflow, and customer access. We approach repair
                        work with that reality in mind.
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
                Repair should reduce risk, not just hide the problem
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                The wrong repair costs you twice: once for the bad fix, and again
                when the same issue comes back. SecureLifts focuses on the real
                cause of the problem so businesses can make smarter decisions.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaExclamationTriangle className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">Unsafe doors create real liability</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        If the door is dragging, unstable, misaligned, or dropping,
                        it needs real attention fast.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaClipboardCheck className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">Maintenance can prevent repeat failures</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        Commercial systems take harder use and need stronger upkeep
                        than most residential doors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaIndustry className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">The repair has to fit the building’s use</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        High-cycle traffic, heavier doors, operator demands, and
                        business flow all matter in commercial repair decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                How SecureLifts handles commercial repair
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We keep the repair process direct, professional, and focused on getting the property back in operation safely.
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
                  Need commercial garage door repair right now?
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Call SecureLifts for direct help with commercial garage door failures,
                  unsafe movement, operator problems, and urgent repair needs.
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
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-slate-100"
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
                Commercial garage door repair by city
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Use these city pages to find live local commercial repair coverage in major South Florida markets.
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
                <FaTools className="text-red-600" />
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
              Commercial Garage Door Repair FAQ
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Straight answers to the questions businesses ask before scheduling repair service.
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
                Need dependable commercial garage door repair?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                If your business needs fast commercial garage door repair, call SecureLifts now.
                We will help you move toward the right solution without wasting your time.
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