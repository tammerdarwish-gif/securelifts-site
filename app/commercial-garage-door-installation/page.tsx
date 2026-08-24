import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { BUSINESS_SCHEMA_REFERENCE } from "@/lib/siteIdentity";
import {
  FaCheckCircle,
  FaArrowRight,
  FaDoorOpen,
  FaShieldAlt,
  FaIndustry,
  FaClipboardCheck,
  FaTools,
  FaBuilding,
} from "react-icons/fa";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Commercial Garage Door Installation | SecureLifts South Florida",
  description:
    "Commercial garage door installation in South Florida for warehouses, storefronts, service bays, industrial properties, and business facilities. SecureLifts installs sectional doors, insulated overhead doors, full-view commercial doors, and more.",
  alternates: {
    canonical: "https://securelifts.com/commercial-garage-door-installation",
  },
  openGraph: {
    title: "Commercial Garage Door Installation | SecureLifts South Florida",
    description:
      "Professional commercial garage door installation for warehouses, storefronts, industrial sites, and business facilities across South Florida.",
    url: "https://securelifts.com/commercial-garage-door-installation",
    siteName: "SecureLifts",
    type: "website",
  },
};

const installationTypes = [
  "Sectional commercial overhead doors",
  "Insulated commercial garage doors",
  "Full-view glass commercial doors",
  "Service bay and shop doors",
  "Warehouse and industrial overhead doors",
  "Replacement of aging or damaged door systems",
  "Commercial operator and opener setup",
  "New system installation for business properties",
];

const whyInstallNew = [
  "Old commercial door is no longer reliable",
  "Existing system is unsafe or repeatedly failing",
  "Door has major structural damage",
  "Building needs a cleaner, more modern appearance",
  "Upgrading insulation, durability, or usage capacity",
  "Operator and door system no longer fit business needs",
];

const propertyTypes = [
  "Warehouses",
  "Distribution centers",
  "Commercial storefronts",
  "Auto shops and service bays",
  "Industrial facilities",
  "Storage and fleet buildings",
  "Receiving and loading areas",
  "Commercial multi-unit properties",
];

const processSteps = [
  {
    title: "1. Evaluate the property and door needs",
    text: "We look at the building, opening size, daily usage, safety requirements, operator needs, and what kind of door system makes sense for the property.",
  },
  {
    title: "2. Recommend the right commercial setup",
    text: "You get a direct recommendation based on use case, budget, durability, appearance, and long-term performance rather than guesswork.",
  },
  {
    title: "3. Install the system correctly",
    text: "We install the commercial door and related components with focus on proper fit, safe operation, and dependable daily use.",
  },
  {
    title: "4. Test and review operation",
    text: "We verify movement, setup, balance, safety, and overall system performance so the property is left with a working commercial door system.",
  },
];

const cityLinks = [
  { label: "Commercial Garage Door Installation in Miami", href: "/commercial-garage-door-installation/miami" },
  { label: "Commercial Garage Door Installation in Fort Lauderdale", href: "/commercial-garage-door-installation/fort-lauderdale" },
  { label: "Commercial Garage Door Installation in West Palm Beach", href: "/commercial-garage-door-installation/west-palm-beach" },
  { label: "Commercial Garage Door Installation in Boca Raton", href: "/commercial-garage-door-installation/boca-raton" },
  { label: "Commercial Garage Door Installation in Delray Beach", href: "/commercial-garage-door-installation/delray-beach" },
  { label: "Commercial Garage Door Installation in Miami Beach", href: "/commercial-garage-door-installation/miami-beach" },
];

const relatedPages = [
  {
    title: "Commercial Garage Door Services",
    text: "See the full commercial service overview for repair, installation, maintenance, and emergency support.",
    href: "/commercial-garage-door-services",
  },
  {
    title: "Commercial Garage Door Repair",
    text: "For existing commercial doors that need troubleshooting, corrective repair, or operator service.",
    href: "/commercial-garage-door-repair",
  },
  {
    title: "Commercial Garage Door Maintenance",
    text: "Preventive service to reduce breakdowns and extend system life.",
    href: "/commercial-garage-door-maintenance",
  },
  {
    title: "Emergency Commercial Door Repair",
    text: "Urgent help when the door is affecting access, security, or operations.",
    href: "/emergency-commercial-door-repair",
  },
];

const faqs = [
  {
    q: "What kinds of commercial doors do you install?",
    a: "SecureLifts installs a range of commercial overhead door systems, including sectional commercial doors, insulated doors, full-view doors, service bay doors, and heavy-duty business door systems.",
  },
  {
    q: "How do we know what commercial door is right for our building?",
    a: "That depends on the type of property, traffic level, daily usage, insulation needs, opening size, appearance goals, and whether the system needs to support heavier-duty operation. We recommend the setup based on real use, not guesswork.",
  },
  {
    q: "Can you replace an old or damaged commercial garage door?",
    a: "Yes. SecureLifts handles replacement of aging, unsafe, or damaged commercial garage door systems when replacement is the smarter long-term move.",
  },
  {
    q: "Do you install commercial operators too?",
    a: "Yes. We look at the full system, including operator needs, so the installed setup fits the property and usage demands.",
  },
  {
    q: "Do you work with businesses and property managers?",
    a: "Yes. SecureLifts works with business owners, property managers, facilities, and commercial properties that need dependable commercial garage door installation and clear communication.",
  },
];

export default function CommercialGarageDoorInstallationPage() {
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
    name: "Commercial Garage Door Installation",
    serviceType: "Commercial Garage Door Installation",
    provider: {
      ...BUSINESS_SCHEMA_REFERENCE,
    },
    areaServed: [
      { "@type": "Place", name: "South Florida" },
      { "@type": "Place", name: "Palm Beach County" },
      { "@type": "Place", name: "Broward County" },
      { "@type": "Place", name: "Miami-Dade County" },
    ],
    description:
      "Commercial garage door installation for warehouses, storefronts, industrial facilities, service bays, and business properties in South Florida.",
  };

  return (
    <>
      <Script
        id="commercial-installation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="commercial-installation-faq-schema"
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
                  SecureLifts Commercial Installation
                </span>

                <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Commercial Garage Door Installation in South Florida
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                  SecureLifts installs commercial garage doors for warehouses,
                  storefronts, industrial properties, service bays, and business
                  facilities across South Florida. We focus on safe operation,
                  proper fit, dependable performance, and a setup that matches
                  how the building actually works.
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
                    Warehouses, storefronts, bays, and industrial properties
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" />
                    Replacement and new system installation
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" />
                    Commercial-focused planning and setup
                  </span>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
                <h2 className="text-2xl font-black tracking-tight">
                  Installation situations we commonly handle
                </h2>

                <div className="mt-6 grid gap-4">
                  {[
                    "Replacing an aging or damaged commercial door",
                    "Installing a better system for heavier use",
                    "Upgrading appearance for a storefront or business property",
                    "Adding insulated or more durable overhead doors",
                    "Installing a door and operator system that fits the building properly",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/10 p-4">
                      <div className="flex items-start gap-3">
                        <FaDoorOpen className="mt-1 text-red-400" />
                        <p className="text-sm font-semibold leading-6 text-slate-100">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-red-600 px-5 py-4 text-sm font-bold text-white">
                  Need a new commercial door system for your property? Call now: {PHONE}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Commercial installation built around the property’s real needs
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Commercial garage door installation is not just about putting in
              a new door. It is about choosing a system that fits the building,
              the daily use, the traffic level, the appearance goals, and the
              long-term reliability the property actually needs.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {installationTypes.map((item) => (
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
                  When commercial garage door installation makes sense
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Sometimes repair is the right move. Other times, continuing to
                  repair the wrong system just costs the property more in money,
                  downtime, and frustration.
                </p>

                <div className="mt-8 grid gap-4">
                  {whyInstallNew.map((point) => (
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
                    <FaBuilding className="mt-1 text-red-600" />
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-slate-900">
                        Installation decisions should fit the building
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        Traffic level, operator demands, opening size, insulation,
                        appearance, and heavier-duty use all matter when choosing
                        the right commercial garage door setup.
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
                A good installation should improve the whole operation
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                The wrong commercial door system creates long-term headaches.
                The right installation improves access, appearance, security,
                reliability, and day-to-day operation for the property.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaShieldAlt className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">Safety matters from day one</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        Commercial systems should be installed with safe operation,
                        correct setup, and real long-term use in mind.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaClipboardCheck className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">The system should match the workload</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        A building with heavier daily use needs a setup that can
                        actually handle the job.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <FaIndustry className="mt-1 text-red-400" />
                    <div>
                      <p className="font-bold">Commercial installation is not one-size-fits-all</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        Warehouses, storefronts, service bays, and industrial
                        spaces do not all need the same solution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                How SecureLifts handles commercial installation
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We keep the installation process direct, professional, and focused on fit, function, and long-term performance.
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
                  Need a commercial garage door company that installs the right system?
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Call SecureLifts for direct help with commercial garage door
                  installation, replacement, and proper setup for your property.
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
                Commercial garage door installation by city
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Use these city pages to find live local commercial installation coverage in major South Florida markets.
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
              Explore related commercial service pages to compare installation, repair, maintenance, and urgent support.
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
              Commercial Garage Door Installation FAQ
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Straight answers to common questions businesses ask before choosing a new commercial door system.
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
                Need dependable commercial garage door installation?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                If your property needs a new commercial garage door system, call SecureLifts now.
                We will help you choose the right setup and move forward without wasting time.
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
