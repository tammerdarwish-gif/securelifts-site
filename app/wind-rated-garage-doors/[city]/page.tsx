import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceSchema from "../../components/ServiceSchema";
import ReviewTrustSection from "../../components/ReviewTrustSection";

export const metadata: Metadata = {
  title: "Wind-Rated Garage Doors in South Florida | SecureLifts",
  description:
    "SecureLifts installs wind-rated garage doors in South Florida built for stronger pressure resistance, storm protection, and premium curb appeal. Call (866) 828-1818.",
  openGraph: {
    title: "Wind-Rated Garage Doors in South Florida | SecureLifts",
    description:
      "SecureLifts installs wind-rated garage doors in South Florida built for stronger pressure resistance, storm protection, and premium curb appeal.",
    images: [
      {
        url: "/wind-rated-garage-doors-hero.png",
        width: 1536,
        height: 1024,
        alt: "Wind-rated garage doors installed by SecureLifts in South Florida built for stronger storm pressure resistance and residential protection",
      },
    ],
  },
};

export default function WindRatedGarageDoorsPage() {
  const benefits = [
    {
      icon: "🌀",
      title: "Built for Higher Wind Pressure",
      text: "Wind-rated garage doors are designed to handle stronger pressure loads during severe weather and reduce the risk of door failure under storm conditions.",
    },
    {
      icon: "🛡️",
      title: "Stronger Reinforcement Systems",
      text: "These systems use upgraded bracing, stronger tracks, heavier-duty hardware, and reinforced door construction for better storm performance.",
    },
    {
      icon: "🏠",
      title: "Protection for One of the Largest Openings on the Home",
      text: "A garage door is one of the biggest vulnerable points on a home. Stronger wind-rated systems help protect that opening when weather turns serious.",
    },
    {
      icon: "🔧",
      title: "Reliable Daily Use Too",
      text: "You are not only buying storm protection. You are also getting a stronger, more dependable door system for long-term everyday performance.",
    },
  ];

  const styleOptions = [
    {
      icon: "🏡",
      title: "Traditional Wind-Rated Garage Doors",
      text: "Classic raised-panel looks with upgraded reinforcement for homeowners who want stronger storm-focused performance without losing timeless curb appeal.",
    },
    {
      icon: "⬛",
      title: "Modern Wind-Rated Garage Doors",
      text: "Contemporary designs with clean lines, strong structure, and a more premium architectural look for South Florida homes.",
    },
    {
      icon: "🚪",
      title: "Carriage House Wind-Rated Garage Doors",
      text: "Decorative carriage-house style with stronger storm-ready construction for homeowners who want appearance and performance together.",
    },
    {
      icon: "✨",
      title: "Custom Wind-Rated Garage Doors",
      text: "Tailored options for homeowners who want a specific look, finish, window layout, and stronger wind-performance protection.",
    },
  ];

  const compareOptions = [
    {
      title: "Hurricane Garage Doors",
      text: "A broader category for homeowners looking for stronger storm-ready garage door protection across multiple weather concerns.",
      href: "/hurricane-garage-doors",
    },
    {
      title: "Impact-Rated Garage Doors",
      text: "For homeowners focused more on resistance to flying debris and storm-driven object impact.",
      href: "/impact-rated-garage-doors",
    },
    {
      title: "Miami-Dade Rated Garage Doors",
      text: "For homeowners comparing one of the strongest recognized storm-performance categories commonly associated with South Florida demand.",
      href: "/miami-dade-rated-garage-doors",
    },
  ];

  const whyChooseUs = [
    "Straight guidance on whether wind-rated is the right fit for your home",
    "Professional installation instead of weak box-store setups",
    "Premium design options, not just basic utility looks",
    "Help selecting style, windows, color, hardware, and performance level",
    "Repair, replacement, and full new-door installation available",
    "South Florida-focused service built around real storm risk",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assess the Home",
      text: "We evaluate the home, exposure level, current door system, and what level of wind-focused protection makes sense.",
    },
    {
      number: "02",
      title: "Compare Wind-Rated Options",
      text: "We walk you through style choices, performance levels, and system options so the decision is based on real value, not guesswork.",
    },
    {
      number: "03",
      title: "Professional Installation",
      text: "SecureLifts installs the complete wind-rated garage door system with proper fit, hardware, and long-term performance in mind.",
    },
    {
      number: "04",
      title: "Final Testing & Walkthrough",
      text: "We verify operation, safety, finish quality, and overall function before the project is complete.",
    },
  ];

  const faqs = [
    {
      question: "What is a wind-rated garage door?",
      answer:
        "A wind-rated garage door is a stronger door system designed to handle higher wind pressure loads during major weather events compared with a standard garage door.",
    },
    {
      question: "Is a wind-rated garage door the same as an impact-rated garage door?",
      answer:
        "No. Wind-rated focuses on pressure resistance. Impact-rated focuses more on resisting damage from flying debris. Some homeowners compare both when deciding what level of storm protection they want.",
    },
    {
      question: "Do wind-rated garage doors still look good on the home?",
      answer:
        "Yes. Homeowners can choose traditional, modern, carriage-house, and custom styles without settling for a plain or unattractive look.",
    },
    {
      question: "Can SecureLifts replace my current garage door with a wind-rated model?",
      answer:
        "Yes. We can inspect the existing setup, recommend the right wind-rated replacement options, and install a stronger system that fits the home.",
    },
    {
      question: "Do you also repair storm-damaged garage doors?",
      answer:
        "Yes. If your current garage door is damaged, unsafe, or no longer performing well, SecureLifts can inspect it and tell you honestly whether repair or replacement makes more sense.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <ServiceSchema
  name="Garage Door Services in South Florida"
  description="Garage door repair, installation, spring replacement, opener service, and hurricane-rated garage doors in South Florida."
  url="https://securelifts.com"
/>
      {/* HERO */}
      <section className="relative min-h-[820px] overflow-hidden">
        <Image
          src="/wind-rated-garage-doors-hero.png"
          alt="Wind-rated garage doors installed by SecureLifts in South Florida built for stronger storm pressure resistance and residential protection"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[820px] max-w-7xl items-end px-6 pb-14 pt-36 md:pt-40">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-sm">
              <p
                className="text-xs font-semibold uppercase tracking-[0.24em] text-white/90 md:text-sm"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
              >
                SecureLifts Storm-Rated Garage Door Systems
              </p>
            </div>

            <h1
              className="mb-5 text-4xl font-bold leading-tight text-white md:text-6xl"
              style={{ textShadow: "0 3px 16px rgba(0,0,0,0.72)" }}
            >
              Wind-Rated Garage Doors in South Florida
            </h1>

            <p
              className="mb-8 max-w-2xl text-lg leading-8 text-white/95 md:text-xl"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.62)" }}
            >
              Stronger pressure resistance for homeowners who want more than a
              basic garage door. SecureLifts installs wind-rated garage doors
              built for South Florida weather, daily reliability, and premium
              curb appeal.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:18668281818"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold !text-white shadow-lg transition hover:bg-red-700"
              >
                Call Now – (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold !text-gray-900 shadow-lg transition hover:bg-gray-100"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + SIDE CTA */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Why This Category Matters
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              Built to Handle Stronger Wind Pressure During Severe Weather
            </h2>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              During major storms, the garage door can become one of the most
              vulnerable openings on the home. When pressure builds and the door
              is not built to handle it, the consequences can go far beyond the
              garage itself.
            </p>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              Wind-rated garage doors are designed for homeowners who want a
              stronger system built around storm pressure performance, daily
              durability, and better long-term reliability.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              SecureLifts helps you choose a wind-rated door that fits the home,
              matches your design goals, and gives you more confidence going
              into storm season.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Compare Before You Buy
            </p>
            <h3 className="mb-4 text-2xl font-bold">
              Looking at Other Storm-Rated Options Too?
            </h3>
            <p className="mb-6 leading-7 text-gray-700">
              Wind-rated doors focus on pressure resistance. You may also want
              to compare hurricane, impact-rated, or Miami-Dade rated options
              depending on your home and protection goals.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/miami-dade-rated-garage-doors"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Explore Miami-Dade Rated Doors
              </Link>

              <Link
                href="/hurricane-garage-doors"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Explore Hurricane Garage Doors
              </Link>

              <Link
                href="/impact-rated-garage-doors"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Explore Impact-Rated Doors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Stronger by Design
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Why Homeowners Choose Wind-Rated Garage Doors
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              These systems are chosen by homeowners who want stronger resistance
              to storm pressure, better structural support, and more confidence
              during South Florida weather events.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-7 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STYLES */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Design Options
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Wind-Rated Styles That Still Look Premium
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Wind-rated does not have to mean plain or bulky. The right system
              can protect the home while still upgrading the exterior.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {styleOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE OPTIONS */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Compare Storm Categories
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Compare Wind-Rated to Other Storm-Focused Options
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Some homeowners know they want stronger wind pressure performance.
              Others want to compare categories before making the final decision.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {compareOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mb-5 leading-7 text-gray-700">{item.text}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center font-semibold text-red-600 transition hover:text-red-700"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              How We Handle It
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Our Wind-Rated Garage Door Process
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Better guidance, cleaner installation, stronger final result.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 text-3xl font-bold text-red-600">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="leading-7 text-gray-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SECURELIFTS */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Why SecureLifts
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Why Homeowners Trust SecureLifts for Wind-Rated Garage Doors
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Wind-rated systems need more than a product brochure. They need
              the right recommendation, clean installation, and a company that
              understands South Florida storm pressure demands.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-lg text-green-600">
                  ✓
                </div>
                <p className="text-lg leading-7 text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReviewTrustSection
  heading="Why South Florida Homeowners Choose SecureLifts"
  intro="When South Florida homeowners invest in stronger garage doors, they want a company that communicates clearly, installs cleanly, and delivers results that actually hold up."
  reviews={[
    {
      name: "Michael R.",
      text: "Fast response, professional service, and the garage door works better than ever.",
    },
    {
      name: "Jessica T.",
      text: "They showed up on time, explained everything clearly, and got it done right.",
    },
    {
      name: "Daniel P.",
      text: "Best garage door company I’ve dealt with. Clean work and excellent communication.",
    },
    {
      name: "Alicia T.",
      text: "The whole process felt organized and professional from the estimate to the final install.",
    },
  ]}
/>
      {/* FAQ */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              FAQs
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Wind-Rated Garage Door FAQs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Straight answers for homeowners comparing stronger storm-pressure
              garage door systems in South Florida.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.question}
                </h3>
                <p className="leading-7 text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white/5 px-8 py-14 text-center shadow-xl md:px-12">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Ready for Stronger Wind Pressure Protection?
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/85">
            SecureLifts helps South Florida homeowners choose and install
            wind-rated garage doors built for protection, performance, and
            premium curb appeal.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:18668281818"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold !text-white shadow-lg transition hover:bg-red-700"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold !text-gray-900 shadow-lg transition hover:bg-gray-100"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}