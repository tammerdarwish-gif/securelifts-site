import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaClipboardCheck,
  FaTools,
  FaClock,
  FaShieldAlt,
  FaIndustry,
  FaExclamationTriangle,
} from "react-icons/fa";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Commercial Garage Door Maintenance | SecureLifts South Florida",
  description:
    "Commercial garage door maintenance in South Florida. Prevent breakdowns, reduce downtime, and extend the life of your door systems with professional service from SecureLifts.",
  alternates: {
    canonical: "https://securelifts.com/commercial-garage-door-maintenance",
  },
  openGraph: {
    title: "Commercial Garage Door Maintenance | SecureLifts South Florida",
    description:
      "Preventive maintenance for commercial garage doors, operators, and high-cycle systems across South Florida.",
    url: "https://securelifts.com/commercial-garage-door-maintenance",
    siteName: "SecureLifts",
    type: "website",
  },
};

const maintenanceIncludes = [
  "Full system inspection (door, track, hardware, operator)",
  "Lubrication of moving parts",
  "Spring and tension check",
  "Roller, hinge, and bearing inspection",
  "Track alignment and adjustment",
  "Operator performance check",
  "Safety system verification",
  "Early problem detection before failure",
];

const whyMaintenance = [
  "Reduce unexpected breakdowns",
  "Prevent costly emergency repairs",
  "Extend system lifespan",
  "Improve safety for employees and property",
  "Keep operations running without interruption",
  "Avoid repeat service calls for the same issue",
];

const warningSigns = [
  "Door is getting louder over time",
  "Jerky or uneven movement",
  "Slower opening or closing speed",
  "Visible wear on rollers, hinges, or cables",
  "Operator struggling or hesitating",
  "Door coming slightly off alignment",
];

const processSteps = [
  {
    title: "1. Inspect the full system",
    text: "We check all major components, not just the obvious issue, to identify wear and risk areas.",
  },
  {
    title: "2. Service and adjust",
    text: "We lubricate, tighten, align, and correct small issues before they turn into bigger failures.",
  },
  {
    title: "3. Identify future risks",
    text: "We point out parts that are wearing down so you can plan instead of getting hit with downtime.",
  },
  {
    title: "4. Keep your system running",
    text: "The goal is simple: fewer breakdowns, safer operation, and better long-term performance.",
  },
];

const relatedPages = [
  {
    title: "Commercial Garage Door Services",
    href: "/commercial-garage-door-services",
  },
  {
    title: "Commercial Garage Door Repair",
    href: "/commercial-garage-door-repair",
  },
  {
    title: "Commercial Garage Door Installation",
    href: "/commercial-garage-door-installation",
  },
  {
    title: "Emergency Commercial Door Repair",
    href: "/emergency-commercial-door-repair",
  },
];

const faqs = [
  {
    q: "How often should commercial garage doors be serviced?",
    a: "It depends on usage. High-cycle commercial doors should be serviced more frequently to prevent wear-related failures and downtime.",
  },
  {
    q: "Is maintenance really necessary if the door is working?",
    a: "Yes. Most major failures start as small issues. Maintenance catches those early before they become expensive problems.",
  },
  {
    q: "Can maintenance reduce emergency repairs?",
    a: "Absolutely. Preventive service is one of the best ways to avoid sudden breakdowns that interrupt business operations.",
  },
  {
    q: "Do you service commercial operators too?",
    a: "Yes. Maintenance includes checking operator performance, responsiveness, and safety systems.",
  },
];

export default function CommercialGarageDoorMaintenancePage() {
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

  return (
    <>
      <Script
        id="maintenance-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="bg-slate-950 text-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-black">
              Commercial Garage Door Maintenance
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-slate-200">
              Maintenance is what keeps commercial doors from failing at the worst time.
              SecureLifts helps businesses reduce downtime, prevent breakdowns,
              and extend the life of their garage door systems.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href={PHONE_HREF}
                className="bg-red-600 px-6 py-4 rounded-xl font-bold hover:bg-red-700"
              >
                Call {PHONE}
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100"
              >
                Book Service
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <h2 className="text-3xl font-black">
            What commercial maintenance includes
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {maintenanceIncludes.map((item) => (
              <div key={item} className="flex gap-3 bg-slate-50 p-5 rounded-2xl border">
                <FaCheckCircle className="text-red-600 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section className="bg-slate-50 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black">
              Why maintenance matters for commercial doors
            </h2>

            <div className="mt-10 grid md:grid-cols-2 gap-4">
              {whyMaintenance.map((item) => (
                <div key={item} className="flex gap-3 bg-white p-5 rounded-2xl border">
                  <FaClipboardCheck className="text-red-600 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WARNING SIGNS */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <h2 className="text-3xl font-black">
            Signs your commercial door needs maintenance
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {warningSigns.map((item) => (
              <div key={item} className="flex gap-3 bg-slate-50 p-5 rounded-2xl border">
                <FaExclamationTriangle className="text-red-600 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-slate-950 text-white px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black">
              How we handle maintenance
            </h2>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {processSteps.map((step) => (
                <div key={step.title} className="bg-white/10 p-6 rounded-2xl">
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="mt-2 text-slate-200">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <h2 className="text-3xl font-black">
            Related Commercial Services
          </h2>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {relatedPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-6 border rounded-2xl hover:shadow"
              >
                <h3 className="font-bold">{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white px-6 py-20 text-center">
          <h2 className="text-4xl font-black">
            Prevent breakdowns before they cost you
          </h2>

          <p className="mt-4 text-lg">
            Call SecureLifts or book service to keep your commercial doors running.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="bg-black px-8 py-4 rounded-xl font-bold"
            >
              Call {PHONE}
            </a>

            <Link
              href="/book-service"
              className="border border-white px-8 py-4 rounded-xl font-bold"
            >
              Book Service
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}