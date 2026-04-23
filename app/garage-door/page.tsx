import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Garage Doors | Styles, Options & Pricing | SecureLifts South Florida",
  description:
    "Explore garage door styles, materials, hurricane-rated options, and pricing guidance for South Florida homes. Compare modern, traditional, carriage house, and impact-rated garage doors with SecureLifts.",
  alternates: {
    canonical: "https://securelifts.com/garage-doors",
  },
  openGraph: {
    title: "Garage Doors | Styles, Options & Pricing | SecureLifts South Florida",
    description:
      "Compare garage door styles, materials, and pricing ranges for South Florida homes with SecureLifts.",
    url: "https://securelifts.com/garage-doors",
    siteName: "SecureLifts",
    type: "website",
  },
};

const styleCards = [
  {
    title: "Modern Garage Doors",
    text: "Clean lines, glass options, sleek finishes, and a stronger architectural look for contemporary homes.",
    href: "/hurricane-garage-doors/modern",
    image: "/images/reviews/miami-beach-case-study.jpg",
  },
  {
    title: "Traditional Garage Doors",
    text: "Classic raised-panel and long-panel styles that fit most homes and neighborhoods well.",
    href: "/hurricane-garage-doors/traditional",
    image: "/images/reviews/coconut-creek-case-study.jpg",
  },
  {
    title: "Hurricane-Rated Garage Doors",
    text: "Built for South Florida storm conditions with stronger performance, better protection, and more confidence.",
    href: "/hurricane-garage-doors",
    image: "/images/reviews/coconut-grove-case-study.jpg",
  },
  {
    title: "Garage Door Installation",
    text: "Already know what you want? Go straight to our installation page and get moving.",
    href: "/garage-door-installation",
    image: "/images/reviews/pinecrest-case-study.jpg",
  },
];

const materialOptions = [
  {
    title: "Steel Garage Doors",
    text: "The most common choice for strength, value, and clean long-term performance.",
  },
  {
    title: "Insulated Doors",
    text: "A better fit when quieter operation, better comfort, and stronger overall performance matter.",
  },
  {
    title: "Glass & Aluminum",
    text: "Premium modern look for upscale homes, contemporary architecture, and statement curb appeal.",
  },
  {
    title: "Wood-Look Finishes",
    text: "Get the warmth of a richer finish without committing to a full wood door setup.",
  },
];

const pricingBands = [
  {
    title: "Value-Focused Doors",
    range: "$1,500 – $3,000+",
    text: "Best for homeowners who want a clean, reliable new door without stepping into premium custom territory.",
  },
  {
    title: "Mid-Range Upgrades",
    range: "$3,000 – $6,000+",
    text: "A strong fit for better materials, insulation, upgraded design, and improved finished appearance.",
  },
  {
    title: "Premium & Modern Doors",
    range: "$6,000 – $15,000+",
    text: "For high-end modern, full-view, luxury, and stronger statement-style garage door projects.",
  },
];

const fitGuidance = [
  {
    title: "Best for Budget-Conscious Homes",
    text: "Traditional or value-focused steel doors usually make the most sense when the goal is strong appearance without overspending.",
  },
  {
    title: "Best for High-End Homes",
    text: "Modern glass, flush designs, and premium finishes work best when curb appeal and architectural impact matter.",
  },
  {
    title: "Best for Storm Protection",
    text: "Hurricane-rated and impact-rated options are the right move when storm performance and code-driven protection matter most.",
  },
  {
    title: "Best for Daily Comfort",
    text: "Insulated doors are a stronger fit when noise, heat, smoother operation, and overall feel matter more long term.",
  },
];

const openerUpsells = [
  "Smart opener upgrades with app control",
  "Quiet belt-drive systems for attached garages",
  "Wall-mount opener options for premium setups",
  "Battery backup for stronger convenience and preparedness",
];

const faqs = [
  {
    q: "What is the best garage door style for my home?",
    a: "That depends on the architecture of the home, the budget, the neighborhood feel, and whether you want a classic, modern, or storm-focused upgrade. The right choice should match both appearance and performance goals.",
  },
  {
    q: "How much do new garage doors cost in South Florida?",
    a: "That depends on door size, material, insulation, design, wind rating, and how premium the final setup is. Most projects fall into value, mid-range, or premium pricing tiers rather than one flat number.",
  },
  {
    q: "Are modern garage doors always the most expensive?",
    a: "Not always, but premium modern designs, full-view glass, custom finishes, and stronger upgraded systems usually land higher than standard traditional doors.",
  },
  {
    q: "Should I replace the opener when replacing the garage door?",
    a: "In many cases, yes. If the opener is aging, underpowered, loud, or outdated, replacing it with the new door often creates a better long-term system.",
  },
];

export default function GarageDoorsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Garage Doors",
    url: "https://securelifts.com/garage-doors",
    description:
      "Garage door styles, materials, pricing guidance, and product options for South Florida homeowners.",
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
        id="garage-doors-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Script
        id="garage-doors-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
                SecureLifts Garage Door Selection
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-5xl xl:text-6xl">
                Garage Doors Designed for Performance, Security & Curb Appeal
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Explore garage door styles, materials, and pricing guidance for
                South Florida homes. Whether you want a modern statement door, a
                traditional upgrade, or stronger hurricane protection, this page
                helps you choose the right direction first.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold text-white transition hover:bg-red-700"
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

              <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-200 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Style-First Selection
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Pricing Guidance
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Hurricane Options
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Opener Upgrade Paths
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <div className="relative h-[340px] w-full md:h-[460px]">
                <Image
                  src="/images/reviews/miami-beach-case-study.jpg"
                  alt="Premium garage door options by SecureLifts"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Choose Your Direction
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Start with the style that fits your home
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                This page is built to help homeowners choose first, not just read
                generic service copy. Pick the direction that fits the property,
                the look you want, and the budget range you are aiming for.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {styleCards.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {item.text}
                    </p>
                    <span className="mt-5 inline-block text-sm font-bold text-red-600">
                      Explore options →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Materials & Door Types
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Compare the main garage door material directions
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Material changes the look, feel, price range, insulation, and
                long-term performance of the door. This is where homeowners start
                getting more clarity on what actually fits.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {materialOptions.map((item) => (
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

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Pricing Guidance
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Garage door pricing in South Florida
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Pricing depends on size, design, material, insulation, wind rating,
              and how premium the final setup becomes. These ranges help guide the
              conversation without boxing the project into one flat number.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pricingBands.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-2xl font-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-2xl font-black text-red-600">
                    {item.range}
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Best Fit Guidance
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Choose based on your real goal, not just the lowest number
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Most homeowners do better when they choose based on the result they
                want instead of chasing the cheapest option first.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {fitGuidance.map((item) => (
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

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Complete The System
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                The door is only part of the upgrade
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A stronger finished result often means upgrading the opener at the
                same time. That is especially true when the current opener is old,
                loud, underpowered, or not built for the type of door being installed.
              </p>

              <div className="mt-8 space-y-4">
                {openerUpsells.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold leading-6 text-slate-800"
                  >
                    <span className="mt-0.5 text-red-600">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/garage-door-opener"
                  className="inline-flex items-center text-base font-bold text-red-600 transition hover:text-red-700"
                >
                  Explore garage door opener options →
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Smart Next Step
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-tight">
                Want help choosing the right garage door?
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                If you already know the style you want, go straight to installation.
                If you want guidance, call SecureLifts and we will help narrow the
                options based on your home, budget, and goals.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-base font-bold text-white transition hover:bg-red-700"
                >
                  Call {PHONE}
                </a>

                <Link
                  href="/garage-door-installation"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-6 py-4 text-base font-bold text-slate-900 transition hover:bg-slate-50"
                >
                  Go To Installation Page
                </Link>
              </div>
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
                Garage door selection questions
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
              Ready To Choose Your Garage Door?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Call SecureLifts to compare garage door options for your home
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              We will help you narrow the choices, explain realistic price ranges,
              and guide you toward the right door without the usual confusion.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold text-white transition hover:bg-red-700"
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
