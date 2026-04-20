import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

const PHONE_DISPLAY = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "About SecureLifts | Garage Door Company in South Florida",
  description:
    "Learn about SecureLifts, a licensed and insured garage door company serving South Florida with repair, installation, opener service, maintenance, and commercial door solutions.",
  alternates: {
    canonical: "https://securelifts.com/about",
  },
  openGraph: {
    title: "About SecureLifts | Garage Door Company in South Florida",
    description:
      "Meet SecureLifts and learn how we serve homeowners, businesses, and property managers with dependable garage door service across South Florida.",
    url: "https://securelifts.com/about",
    siteName: "SecureLifts",
    type: "website",
  },
};

const values = [
  {
    title: "Do the Right Thing",
    text: "We believe long-term trust beats short-term profit. Customers need the truth about repair versus replacement, not pressure.",
  },
  {
    title: "Show Up Ready",
    text: "Garage door problems disrupt homes and businesses fast. We focus on responsive service, clear communication, and getting the job handled properly.",
  },
  {
    title: "Protect Safety First",
    text: "Garage doors are heavy systems with springs, cables, rollers, tracks, and openers that must work together safely. We take that seriously.",
  },
  {
    title: "Build for the Long Run",
    text: "We are not trying to win one job. We are trying to become the company customers trust every time they need garage door service.",
  },
];

const serviceGroups = [
  "Garage door repair",
  "Garage door installation",
  "Broken spring repair",
  "Garage door opener repair and replacement",
  "Garage door maintenance",
  "Off-track garage door repair",
  "Cable and roller replacement",
  "Commercial and overhead door service",
];

const reasons = [
  "Licensed and insured service",
  "Residential and commercial capabilities",
  "Repair-first mindset when practical",
  "Premium replacement options when needed",
  "Clear recommendations without fluff",
  "Focused on long-term customer trust",
  "South Florida market knowledge",
  "Built to support both homeowners and businesses",
];

const faqs = [
  {
    q: "What does SecureLifts do?",
    a: "SecureLifts provides garage door repair, installation, opener service, maintenance, spring repair, and commercial door solutions for homes and businesses.",
  },
  {
    q: "Do you only serve residential customers?",
    a: "No. SecureLifts serves both residential and commercial customers, including businesses and properties that need dependable overhead and garage door service.",
  },
  {
    q: "Do you help with garage door openers too?",
    a: "Yes. SecureLifts handles garage door opener repair, replacement, smart opener upgrades, and service for older opener systems when practical.",
  },
  {
    q: "Why choose SecureLifts over another garage door company?",
    a: "Because customers need honest recommendations, dependable work, and a company that treats safety, communication, and follow-through seriously.",
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About SecureLifts",
    url: "https://securelifts.com/about",
    description:
      "About SecureLifts, a licensed and insured garage door company serving South Florida.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "SecureLifts",
      url: "https://securelifts.com",
      telephone: PHONE_DISPLAY,
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
  };

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
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Script
        id="about-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
                About SecureLifts
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-5xl xl:text-6xl">
                Built to earn trust one garage door at a time
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                SecureLifts is a garage door company focused on dependable
                service, honest recommendations, and long-term customer
                relationships. We serve South Florida with repair, installation,
                opener service, maintenance, and commercial solutions.
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
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Book Service
                </Link>
              </div>

              <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-200 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Licensed & Insured
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Residential & Commercial
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Repair & Installation
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  South Florida Focus
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <div className="relative h-[360px] w-full md:h-[460px]">
                <Image
                  src="/images/about/about-securelifts-team.jpg"
                  alt="SecureLifts garage door team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Who We Are
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                A garage door company built on follow-through
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                SecureLifts was built around a simple idea: customers should be
                able to call a garage door company and get honest help, clear
                communication, and work that actually solves the problem.
              </p>
              <p>
                We handle the jobs homeowners and businesses deal with every
                day, from broken springs and opener issues to door replacements,
                maintenance, and commercial service. We focus on doing the work
                right and recommending what makes sense, not what sounds biggest
                on paper.
              </p>
              <p>
                Our goal is not to be just another service company. Our goal is
                to become the name customers trust when they need dependable
                garage door service in South Florida.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                What We Do
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Garage door services for homes and businesses
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We are built to handle core garage door service needs across
                residential and commercial properties.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {serviceGroups.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold leading-6 text-slate-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative h-[340px] w-full md:h-[460px]">
                  <Image
                    src="/images/about/about-garage-door-service.jpg"
                    alt="SecureLifts garage door service in South Florida"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  Why Customers Choose Us
                </p>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  Clear recommendations. Better service. Less nonsense.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  The best service companies make things easier for the customer.
                  That means explaining the issue clearly, showing the right
                  options, and doing work that holds up.
                </p>

                <div className="mt-8 grid gap-x-6 gap-y-4 md:grid-cols-2">
                  {reasons.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold leading-6 text-slate-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                Our Standards
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                What drives the way we operate
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                A strong company is not built just by getting leads. It is built
                by how it handles people, problems, and reputation over time.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7"
                >
                  <h3 className="text-2xl font-black tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-200">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Service Area
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Serving South Florida with room to grow
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We are focused on serving South Florida strongly, with the kind
                of service quality that supports long-term growth and a stronger
                reputation over time.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Palm Beach County",
                  "Broward County",
                  "Miami-Dade County",
                  "Residential properties",
                  "Commercial properties",
                  "Property managers and businesses",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-base leading-7 text-slate-600">
                If you need garage door repair, installation, opener service, or
                commercial overhead door help in South Florida, SecureLifts is
                positioned to help.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                FAQ
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                About SecureLifts
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-black tracking-tight">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
              Ready To Work With SecureLifts?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Call a garage door company built to do the job right
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Whether you need repair, installation, opener service, or
              commercial help, SecureLifts is ready to help you move forward.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
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
                Book Service
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}