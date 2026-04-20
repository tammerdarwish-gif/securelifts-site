import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

const PHONE_DISPLAY = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title:
    "Garage Door Installation in Coconut Grove, FL | Case Study | SecureLifts",
  description:
    "See how SecureLifts completed a premium 3-door garage door installation in Coconut Grove, FL using Clopay Gallery Steel doors and LiftMaster 98022 wall-mount openers.",
  alternates: {
    canonical:
      "https://securelifts.com/portfolio/garage-door-installation-coconut-grove",
  },
  openGraph: {
    title:
      "Garage Door Installation in Coconut Grove, FL | Case Study | SecureLifts",
    description:
      "A premium Coconut Grove garage door installation featuring three Clopay Gallery Steel doors and LiftMaster 98022 wall-mount openers.",
    url: "https://securelifts.com/portfolio/garage-door-installation-coconut-grove",
    siteName: "SecureLifts",
    type: "article",
  },
};

const projectHighlights = [
  "3 custom garage doors installed",
  "Clopay Gallery Steel collection",
  "LiftMaster 98022 wall-mount openers",
  "Arched opening integration",
  "Quiet operation and cleaner garage layout",
  "Premium curb appeal upgrade",
];

const homeownerGoals = [
  "Match the home’s arched openings and Mediterranean-style architecture",
  "Capture the warm appearance of real wood without the maintenance",
  "Handle South Florida heat, humidity, and coastal conditions",
  "Deliver quieter, cleaner, more reliable operation",
  "Increase curb appeal and long-term property value",
];

const solutionPoints = [
  "Three Clopay Gallery Steel garage doors selected for premium carriage-house style with steel durability",
  "Custom fitment to align cleanly with the home’s arched openings",
  "Wood-tone finish chosen to complement the home’s exterior character",
  "Three LiftMaster 98022 wall-mount openers installed for quieter, space-saving operation",
  "Full system designed to improve appearance, reliability, and daily usability",
];

const featureCards = [
  {
    title: "Architectural Precision",
    text: "Each door was selected and fitted to work with the home’s arched openings so the finished result feels intentional, balanced, and high-end.",
  },
  {
    title: "Wood Look Without Wood Problems",
    text: "The final look delivers the depth and warmth of stained wood while avoiding the constant maintenance real wood often demands in South Florida.",
  },
  {
    title: "Quiet, Clean Operation",
    text: "The wall-mount opener setup helps create a cleaner ceiling area while supporting quieter, smoother everyday use.",
  },
  {
    title: "Value-Adding Curb Appeal",
    text: "Because garage doors take up a major portion of the front elevation, this upgrade created a major visual improvement for the home.",
  },
];

const openerBenefits = [
  "Wall-mount design frees overhead ceiling space",
  "Quieter performance for a more premium experience",
  "myQ smart control and remote monitoring",
  "Automatic lock support for stronger security",
  "Reliable performance for a multi-door garage setup",
];

const processSteps = [
  "Site preparation and layout review",
  "Measurement confirmation",
  "Part and site preparation",
  "Panel installation and structural setup",
  "Spring system installation",
  "Door balancing and hardware completion",
  "Sensor and automatic lock installation",
  "Opener installation and programming",
  "Final testing, adjustment, and walkthrough",
];

const faqs = [
  {
    q: "What garage doors were installed in this Coconut Grove project?",
    a: "This project featured three Clopay Gallery Steel garage doors selected for their carriage-house appearance, steel durability, and fit with the home’s architecture.",
  },
  {
    q: "Why were LiftMaster 98022 openers chosen?",
    a: "They were chosen because wall-mount openers create a cleaner garage layout, support quiet performance, and offer modern smart-control and security features.",
  },
  {
    q: "Was this a standard garage door installation?",
    a: "No. This project involved three doors, custom-fit architectural considerations, and a higher-end finish requirement, making it more complex than a typical standard installation.",
  },
  {
    q: "Is this type of garage door good for South Florida homes?",
    a: "Yes. Steel doors with the right finish and build quality are a strong fit for South Florida because they offer durability, curb appeal, and lower maintenance than real wood.",
  },
];

export default function CoconutGroveCaseStudyPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Garage Door Installation in Coconut Grove, FL",
    description:
      "SecureLifts completed a premium three-door garage door installation in Coconut Grove, FL using Clopay Gallery Steel doors and LiftMaster 98022 wall-mount openers.",
    mainEntityOfPage:
      "https://securelifts.com/portfolio/garage-door-installation-coconut-grove",
    author: {
      "@type": "Organization",
      name: "SecureLifts",
    },
    publisher: {
      "@type": "Organization",
      name: "SecureLifts",
      url: "https://securelifts.com",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://securelifts.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://securelifts.com/portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Garage Door Installation in Coconut Grove, FL",
        item: "https://securelifts.com/portfolio/garage-door-installation-coconut-grove",
      },
    ],
  };

  return (
    <>
      <Script
        id="coconut-grove-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="coconut-grove-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="coconut-grove-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
                SecureLifts Case Study
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-5xl xl:text-6xl">
                Garage Door Installation in Coconut Grove, FL
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                SecureLifts completed a premium three-door installation for a
                private home in Coconut Grove using Clopay Gallery Steel doors
                and LiftMaster 98022 wall-mount openers to deliver stronger curb
                appeal, quieter operation, and a more premium overall finish.
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

              <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-200 sm:grid-cols-2 xl:grid-cols-3">
                {projectHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <div className="relative h-[360px] w-full md:h-[480px]">
                <Image
                  src="/images/case-studies/coconut-grove/coconut-grove-hero.jpg"
                  alt="Premium garage door installation in Coconut Grove, Florida"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_320px]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Project Summary
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                A high-end garage door upgrade for a premium Coconut Grove home
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                This project involved installing three garage doors for a
                private residence in Coconut Grove, one of Miami’s most
                desirable residential areas. The home required a finished look
                that matched its architecture while also improving reliability,
                security, and day-to-day operation.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Standard off-the-shelf solutions were not the right fit. The
                homeowner needed doors that looked premium, worked cleanly with
                the home’s arched openings, and could hold up better in South
                Florida conditions.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Project Value
              </p>
              <p className="mt-3 text-4xl font-black tracking-tight text-slate-900">
                $15,685
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                  x3 9x8 insulated hurricane impact-rated doors
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                  x3 LiftMaster 98022 wall-mount openers
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                  Premium architectural fit and finish
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-[320px] w-full md:h-[440px]">
                <Image
                  src="/images/case-studies/coconut-grove/coconut-grove-review.jpg"
                  alt="Customer review for Coconut Grove garage door installation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Client Feedback
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Complex project. Strong result.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                This installation was more complex than a standard residential
                job because the home featured three garage doors and extended
                height openings. To make sure the job was executed correctly,
                the company owner personally visited the site and oversaw the
                installation.
              </p>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-1 text-red-600" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-lg leading-none">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  My garage door installation was not easy. I had three garage
                  doors with height extenders. The owner of the company came on
                  site to make sure all was being done correctly and the result
                  was amazing.
                </p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-lg font-black tracking-tight">Eric Z.</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    @eric
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  Homeowner Goals
                </p>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  What this project needed to accomplish
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {homeownerGoals.map((goal) => (
                  <div
                    key={goal}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold leading-6 text-slate-800"
                  >
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                Our Solution
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Clopay Gallery Steel doors with LiftMaster 98022 openers
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                For this Coconut Grove home, SecureLifts paired premium-looking
                Clopay Gallery Steel doors with LiftMaster 98022 wall-mount
                openers to create a cleaner, quieter, and more refined final
                result.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {solutionPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold leading-6 text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative h-[340px] w-full md:h-[460px]">
                <Image
                  src="/images/case-studies/coconut-grove/clopay-gallery-steel.jpg"
                  alt="Clopay Gallery Steel garage door installed by SecureLifts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Why This Product Fit
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Premium appearance with stronger long-term practicality
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Clopay Gallery Steel doors were the right fit for this project
                because they delivered the visual style the home needed while
                offering the durability and lower-maintenance benefits of steel.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {featureCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                  >
                    <h3 className="text-lg font-black tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Opener Upgrade
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Why the LiftMaster 98022 was the right opener choice
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The LiftMaster 98022 wall-mount opener gave this project a
                better ceiling layout, quieter everyday operation, and a more
                premium finished feel.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {openerBenefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold leading-6 text-slate-800 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-[340px] w-full md:h-[460px]">
                <Image
                  src="/images/case-studies/coconut-grove/liftmaster-98022.jpg"
                  alt="LiftMaster 98022 wall mount opener installed by SecureLifts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Installation Process
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                How the installation was handled
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                This project followed a structured installation process to keep
                the job clean, safe, and precise from measurement through final
                testing.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-lg font-black text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-tight">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Why This Matters
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Why Clopay Gallery Steel is a strong fit for Coconut Grove homes
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                In neighborhoods like Coconut Grove, homeowners want products
                that balance architectural fit, curb appeal, and durability.
                This project shows how the right steel door can deliver a strong
                luxury look without the drawbacks of real wood.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Strong fit for humid and coastal conditions",
                "Better alignment with custom architectural openings",
                "Lower maintenance than real wood",
                "High visual impact on the front elevation",
              ].map((item) => (
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
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                FAQ
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Coconut Grove garage door installation questions
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-black tracking-tight">{faq.q}</h3>
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
              Planning A Premium Garage Door Upgrade?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Talk to SecureLifts about your garage door project
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Whether you need a high-end installation, quieter opener setup, or
              the right door for your home’s architecture, SecureLifts can help
              you choose the right path and get it done right.
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