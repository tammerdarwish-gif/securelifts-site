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
  FaDoorOpen,
  FaClipboardCheck,
  FaExclamationTriangle,
} from "react-icons/fa";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Commercial Garage Door Services | SecureLifts South Florida",
  description:
    "Commercial garage door services in South Florida for warehouses, storefronts, industrial sites, service bays, and business facilities. Repair, installation, maintenance, emergency service, and operator solutions from SecureLifts.",
  alternates: {
    canonical: "https://securelifts.com/commercial-garage-door-services",
  },
  openGraph: {
    title: "Commercial Garage Door Services | SecureLifts South Florida",
    description:
      "Commercial garage door repair, installation, maintenance, emergency service, and operator solutions for businesses across South Florida.",
    url: "https://securelifts.com/commercial-garage-door-services",
    siteName: "SecureLifts",
    type: "website",
  },
};

const serviceCards = [
  {
    title: "Commercial Garage Door Repair",
    text: "Fast troubleshooting and repair for damaged doors, noisy doors, stuck doors, operator issues, broken hardware, worn rollers, track damage, and unsafe operation.",
    href: "/commercial-garage-door-repair",
  },
  {
    title: "Commercial Door Installation",
    text: "Professional installation for sectional overhead doors, insulated commercial doors, full-view doors, service bay doors, and heavy-duty business applications.",
    href: "/commercial-garage-door-installation",
  },
  {
    title: "Preventive Maintenance",
    text: "Routine inspections, lubrication, adjustment, hardware checks, balance checks, and early issue detection to reduce downtime and protect your operation.",
    href: "/commercial-garage-door-maintenance",
  },
  {
    title: "Emergency Commercial Service",
    text: "Urgent help for doors that are stuck open, stuck closed, unsafe to operate, off track, or disrupting deliveries, access, security, and business flow.",
    href: "/emergency-commercial-door-repair",
  },
];

const trustPoints = [
  "Commercial-focused service for business properties and higher-cycle door systems",
  "Fast response for urgent door failures affecting access, security, and operations",
  "Clear communication on repair options, safety issues, and recommended next steps",
  "Long-term mindset focused on reliability, not temporary patchwork",
  "Support for property managers, facility managers, business owners, and contractors",
  "Service aligned with real business needs: uptime, safety, durability, and accountability",
];

const propertyTypes = [
  "Warehouses",
  "Distribution buildings",
  "Commercial storefronts",
  "Auto shops and service bays",
  "Industrial facilities",
  "Storage facilities",
  "Loading and receiving areas",
  "Multi-unit commercial properties",
];

const problemsWeFix = [
  "Door will not open or close properly",
  "Commercial operator not responding",
  "Track damage or door misalignment",
  "Bent panels or impact damage",
  "Worn rollers, hinges, drums, or bearings",
  "Broken springs or tension problems",
  "Unsafe movement, jerking, or loud grinding noise",
  "Seal, hardware, and structural wear from heavy use",
];

const processSteps = [
  {
    title: "1. Evaluate the issue",
    text: "We assess the actual condition of the door, hardware, operator, track system, and safety risks instead of guessing from symptoms alone.",
  },
  {
    title: "2. Explain what matters",
    text: "You get a direct explanation of what failed, what is unsafe, what can be repaired, and whether replacement makes more sense long term.",
  },
  {
    title: "3. Complete the right work",
    text: "We handle the repair, installation, or corrective work with focus on dependable performance and reduced operational disruption.",
  },
  {
    title: "4. Help prevent repeat failures",
    text: "When needed, we outline maintenance or upgrade recommendations so the same issue does not keep costing you time and money.",
  },
];

const faqs = [
  {
    q: "What types of commercial garage doors do you service?",
    a: "SecureLifts services a wide range of commercial and industrial-style overhead doors, including sectional doors, service bay doors, insulated commercial doors, and high-use business entry systems.",
  },
  {
    q: "Can you help if our commercial garage door is affecting operations today?",
    a: "Yes. If a door failure is creating access, security, loading, or workflow problems, call right away. Urgent commercial issues should be addressed as quickly as possible.",
  },
  {
    q: "Do you offer commercial garage door maintenance?",
    a: "Yes. Preventive maintenance helps reduce downtime, catch wear early, improve safety, and extend the life of commercial door systems and operators.",
  },
  {
    q: "How do we know whether to repair or replace the commercial door?",
    a: "That depends on the age of the system, the severity of the damage, frequency of failures, safety condition, and whether repairs still make financial sense compared with replacement.",
  },
  {
    q: "Do you work with property managers and commercial facilities?",
    a: "Yes. SecureLifts works with business owners, property managers, facilities, and commercial properties that need reliable garage door service and clear communication.",
  },
];

export default function CommercialGarageDoorServicesPage() {
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
    name: "Commercial Garage Door Services",
    serviceType: "Commercial Garage Door Services",
    provider: {
      "@type": "GarageDoorRepair",
      name: "SecureLifts",
      telephone: PHONE,
      url: "https://securelifts.com/commercial-garage-door-services",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "South Florida",
      },
      {
        "@type": "Place",
        name: "Palm Beach County",
      },
      {
        "@type": "Place",
        name: "Broward County",
      },
      {
        "@type": "Place",
        name: "Miami-Dade County",
      },
    ],
    description:
      "Commercial garage door repair, installation, maintenance, and emergency service for warehouses, storefronts, industrial properties, and business facilities in South Florida.",
  };

  return (
    <>
      <Script
        id="commercial-services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="commercial-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.20),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_28%)]" />
          <div className="sl-container relative py-16 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                  SecureLifts Commercial Division
                </span>

                <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Commercial Garage Door Services for South Florida Businesses
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                  When a commercial garage door fails, it is not just an inconvenience.
                  It can slow deliveries, interrupt workflow, create safety issues,
                  expose your building, and cost real money. SecureLifts provides
                  commercial garage door repair, installation, maintenance, and
                  emergency service built around uptime, safety, and dependable performance.
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
                    className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:bg-slate-100"
                  >
                    Book Commercial Service
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" />
                    Repair, install, maintain, and upgrade
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" />
                    Warehouses, bays, storefronts, industrial sites
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" />
                    Fast response for urgent business issues
                  </span>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
                <h2 className="text-2xl font-black tracking-tight">
                  Why businesses call SecureLifts
                </h2>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-start gap-3">
                      <FaWarehouse className="mt-1 text-red-400" />
                      <div>
                        <p className="font-bold">Business-first mindset</p>
                        <p className="mt-1 text-sm leading-6 text-slate-200">
                          We understand that commercial door issues affect access,
                          security, schedules, employees, tenants, customers, and revenue.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-start gap-3">
                      <FaShieldAlt className="mt-1 text-red-400" />
                      <div>
                        <p className="font-bold">Safety and accountability</p>
                        <p className="mt-1 text-sm leading-6 text-slate-200">
                          Commercial systems take more abuse and carry more risk.
                          We focus on safe operation and durable solutions, not quick guesses.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-start gap-3">
                      <FaClock className="mt-1 text-red-400" />
                      <div>
                        <p className="font-bold">Downtime matters</p>
                        <p className="mt-1 text-sm leading-6 text-slate-200">
                          We help businesses get doors working again so operations
                          can move forward with less disruption.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-red-600 px-5 py-4 text-sm font-bold text-white">
                  Need urgent help with a stuck, unsafe, or non-operational commercial door?
                  Call now: {PHONE}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Complete Commercial Garage Door Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              This page is not here just to say we do commercial work. It is here
              to make it obvious that SecureLifts can support real business properties,
              real operational demands, and real commercial garage door problems.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-black tracking-tight text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {card.text}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-red-600 transition hover:text-red-700"
                >
                  Learn More
                  <FaArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="sl-container py-14 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                  Built to earn trust, not just traffic
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Commercial clients do not want fluff. They want to know whether
                  the company they call understands urgency, communicates clearly,
                  shows up prepared, and protects the business from repeat problems.
                  That is how SecureLifts approaches commercial work.
                </p>

                <div className="mt-8 grid gap-4">
                  {trustPoints.map((point) => (
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

                <h3 className="mt-10 text-2xl font-black tracking-tight text-slate-900">
                  Common commercial door problems we handle
                </h3>
                <div className="mt-6 grid gap-4">
                  {problemsWeFix.map((problem) => (
                    <div
                      key={problem}
                      className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
                    >
                      <FaTools className="mt-1 shrink-0 text-red-600" />
                      <span className="text-sm font-semibold leading-6 text-slate-800">
                        {problem}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Commercial service should reduce risk
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                The wrong commercial garage door company costs you twice:
                first in bad repairs, then again when the same issue comes back.
                We focus on getting to the root of the problem, explaining what matters,
                and helping you make the right move for safety, cost, and uptime.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaExclamationTriangle className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">Unsafe operation is a real business liability</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        If the door is unstable, dragging, dropping, misaligned, or
                        unreliable, it needs real attention, not delay.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaClipboardCheck className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">Maintenance is cheaper than repeated downtime</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        Commercial systems take harder use. Routine service can catch
                        wear before it turns into a bigger access or security issue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaIndustry className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">The solution has to fit the building’s real use</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        High-cycle usage, heavier doors, operator demands, traffic flow,
                        and frequency of use all matter in commercial decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                How SecureLifts handles commercial jobs
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We keep the process straightforward, professional, and focused on results.
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
                  Need a commercial garage door company that treats your property like a real operation?
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Call SecureLifts. We are not trying to look commercial. We are built
                  to serve commercial clients who need the job handled seriously.
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
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50"
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
                Related commercial and industrial services
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                These supporting pages help visitors find the exact service they need
                and strengthen the commercial service cluster for SEO the right way.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link
                href="/commercial-garage-door-repair"
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaTools className="text-red-600" />
                <h3 className="mt-4 text-xl font-black tracking-tight text-slate-900">
                  Commercial Repair
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Repairs for damaged, stuck, noisy, and unreliable commercial doors.
                </p>
              </Link>

              <Link
                href="/commercial-garage-door-installation"
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaDoorOpen className="text-red-600" />
                <h3 className="mt-4 text-xl font-black tracking-tight text-slate-900">
                  Commercial Installation
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  New door installation for commercial properties and business facilities.
                </p>
              </Link>

              <Link
                href="/commercial-garage-door-maintenance"
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaClipboardCheck className="text-red-600" />
                <h3 className="mt-4 text-xl font-black tracking-tight text-slate-900">
                  Maintenance
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Preventive service to reduce breakdowns and extend system life.
                </p>
              </Link>

              <Link
                href="/industrial-door-repair"
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaIndustry className="text-red-600" />
                <h3 className="mt-4 text-xl font-black tracking-tight text-slate-900">
                  Industrial Door Repair
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Specialized support for industrial and heavy-duty door environments.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Commercial Garage Door Services FAQ
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Clear answers to the questions businesses ask before scheduling service.
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
                Need dependable commercial garage door service?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                If your business needs commercial garage door repair, installation,
                maintenance, or urgent support, call SecureLifts now. We will help
                you move toward the right solution without wasting your time.
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
  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-100"
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