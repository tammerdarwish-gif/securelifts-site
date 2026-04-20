import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

const PHONE_DISPLAY = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title:
    "Garage Door Installation in Pinecrest, FL | Case Study | SecureLifts",
  description:
    "See how SecureLifts completed a premium garage door installation in Pinecrest, FL featuring Raynor Encore 200 doors and a high-end finished look.",
  alternates: {
    canonical:
      "https://securelifts.com/portfolio/garage-door-installation-pinecrest",
  },
  openGraph: {
    title:
      "Garage Door Installation in Pinecrest, FL | Case Study | SecureLifts",
    description:
      "Premium garage door installation in Pinecrest featuring Raynor Encore 200 doors for a strong curb-appeal upgrade.",
    url: "https://securelifts.com/portfolio/garage-door-installation-pinecrest",
    siteName: "SecureLifts",
    type: "article",
  },
};

const highlights = [
  "Premium Pinecrest installation",
  "Raynor Encore 200 garage doors",
  "High-end curb appeal upgrade",
  "Clean architectural fit",
  "Improved daily operation",
  "Stronger finished exterior look",
];

const goals = [
  "Upgrade the overall appearance of the home",
  "Choose a garage door style that matched the property better",
  "Improve reliability and daily function",
  "Add long-term value through stronger curb appeal",
  "Deliver a cleaner and more premium finished look",
];

const solution = [
  "Installed Raynor Encore 200 garage doors for a stronger architectural fit",
  "Matched the door style to the home's upscale residential look",
  "Delivered a cleaner finished appearance across the front elevation",
  "Improved overall garage door function and reliability",
  "Created a more valuable and visually appealing exterior result",
];

const features = [
  {
    title: "Better Curb Appeal",
    text: "Because garage doors take up a major portion of the front exterior, this upgrade created a major visual improvement right away.",
  },
  {
    title: "Premium Fit",
    text: "The selected door style worked better with the home's look and made the entire façade feel more finished.",
  },
  {
    title: "Stronger Daily Use",
    text: "The project was not just about looks. It also improved the reliability and overall operation of the garage system.",
  },
  {
    title: "Long-Term Value",
    text: "A quality garage door upgrade adds both functional value and visual value to a property like this one in Pinecrest.",
  },
];

const productBenefits = [
  "Strong residential curb appeal",
  "Clean panel design and upscale look",
  "Good fit for higher-end residential homes",
  "Reliable long-term door performance",
];

const processSteps = [
  "Initial property review",
  "Precise door measurements",
  "Material and site prep",
  "Removal of existing setup",
  "New door installation",
  "Spring and hardware setup",
  "System balancing and adjustment",
  "Final testing and walkthrough",
];

const faqs = [
  {
    q: "What garage doors were installed in this Pinecrest project?",
    a: "This project featured Raynor Encore 200 garage doors selected for their premium residential look and strong curb-appeal impact.",
  },
  {
    q: "Why was this installation a good fit for Pinecrest?",
    a: "Homes in Pinecrest often benefit from upgrades that improve both architectural appearance and property value, and the selected door style supported both.",
  },
  {
    q: "Was this project focused only on aesthetics?",
    a: "No. The project improved the look of the home, but it also improved reliability, function, and the overall finished quality of the garage door system.",
  },
  {
    q: "Can a garage door upgrade really improve home value?",
    a: "Yes. A garage door is one of the most visible parts of a home’s exterior, so the right upgrade can create a major curb-appeal improvement.",
  },
];

export default function PinecrestCaseStudyPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Garage Door Installation in Pinecrest, FL",
    description:
      "SecureLifts completed a premium garage door installation in Pinecrest, FL using Raynor Encore 200 doors to improve curb appeal and overall property presentation.",
    mainEntityOfPage:
      "https://securelifts.com/portfolio/garage-door-installation-pinecrest",
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
        name: "Garage Door Installation in Pinecrest, FL",
        item: "https://securelifts.com/portfolio/garage-door-installation-pinecrest",
      },
    ],
  };

  return (
    <>
      <Script
        id="pinecrest-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="pinecrest-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="pinecrest-breadcrumb-schema"
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
                Garage Door Installation in Pinecrest, FL
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                SecureLifts completed a premium garage door installation in
                Pinecrest designed to improve curb appeal, strengthen the
                finished look of the property, and deliver a cleaner, more
                upscale result using Raynor Encore 200 doors.
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
                {highlights.map((item) => (
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
                  src="/images/case-studies/pinecrest/pinecrest-hero.jpg"
                  alt="Premium garage door installation in Pinecrest, Florida"
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
                A curb-appeal upgrade for a premium Pinecrest home
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                This project focused on upgrading the garage doors of a
                high-end Pinecrest property with a stronger, more refined look.
                Because garage doors take up a major portion of the front
                exterior, the right selection had a major impact on the home’s
                appearance.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                SecureLifts installed Raynor Encore 200 garage doors to deliver
                a cleaner, more premium finished result while also improving the
                reliability and day-to-day performance of the system.
              </p>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Project Value
              </p>
              <p className="mt-3 text-4xl font-black tracking-tight text-slate-900">
                $20,454
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                  Raynor Encore 200 doors
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                  Premium residential installation
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                  High-visibility curb appeal upgrade
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
                  src="/images/case-studies/pinecrest/pinecrest-detail.jpg"
                  alt="Detailed view of Pinecrest garage door installation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Project Intent
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                This project had to look better and feel better
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                On a home like this, the garage doors are too visible to treat
                like an afterthought. The goal was to install a door style that
                improved the exterior visually while also creating a stronger
                long-term ownership experience.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                That meant choosing doors that looked appropriate for the home,
                performed reliably, and upgraded the overall feel of the
                property instead of just replacing old material with more of the
                same.
              </p>
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
                  What this Pinecrest project needed to accomplish
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {goals.map((goal) => (
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
                Raynor Encore 200 doors for a stronger finished look
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                SecureLifts selected Raynor Encore 200 garage doors to give
                this Pinecrest property a more refined, higher-value appearance
                while improving the overall performance of the garage door
                system.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {solution.map((item) => (
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
                  src="/images/case-studies/pinecrest/raynor-encore-200.jpg"
                  alt="Raynor Encore 200 garage door installed by SecureLifts"
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
                The right product for a more premium residential result
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The Raynor Encore 200 was a strong match for this project
                because it helped elevate the appearance of the home while still
                supporting the practical performance a homeowner expects from a
                daily-use garage system.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {features.map((item) => (
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
                Product Benefits
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Why this style works for homes like this
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                This installation was about more than a replacement. It was
                about choosing a style that made the property look more complete
                and more valuable from the street.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {productBenefits.map((item) => (
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
                  src="/images/case-studies/pinecrest/pinecrest-exterior.jpg"
                  alt="Exterior Pinecrest home with upgraded garage doors"
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
                How the Pinecrest installation was handled
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                This project followed a structured process to keep the job
                accurate, clean, and properly finished from start to final
                walkthrough.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                Why this type of case study helps you win more work
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                This kind of page shows more than words. It proves the level of
                homes you work on, the kind of finished results you deliver, and
                the type of upgrades customers trust you to handle.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Luxury residential proof",
                "Stronger curb-appeal messaging",
                "Better local trust in Pinecrest",
                "Useful internal link target for service pages",
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
                Pinecrest garage door installation questions
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
              Planning A Garage Door Upgrade?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Talk to SecureLifts about your Pinecrest project
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Whether you want better curb appeal, stronger daily operation, or
              a more premium exterior result, SecureLifts can help you choose
              the right garage door solution and get it done right.
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