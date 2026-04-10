import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import InternalLinkCards from "../components/InternalLinkCards";
import Breadcrumbs from "../components/Breadcrumbs";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import ServiceSchema from "../components/ServiceSchema";
import FAQSchema from "../components/FAQSchema";
import ReviewTrustSection from "../components/ReviewTrustSection";

export const metadata: Metadata = {
  title: "Impact-Rated Garage Doors in South Florida | SecureLifts",
  description:
    "SecureLifts installs impact-rated garage doors in South Florida designed for debris resistance, storm protection, and reliable performance. Call (866) 828-1818.",
  openGraph: {
    title: "Impact-Rated Garage Doors in South Florida | SecureLifts",
    description:
      "SecureLifts installs impact-rated garage doors in South Florida designed for debris resistance, storm protection, and reliable performance.",
    images: [
      {
        url: "/impact-rated-garage-doors-hero.png",
        width: 1536,
        height: 1024,
        alt: "Impact-rated garage doors installed by SecureLifts in South Florida",
      },
    ],
  },
};

export default function ImpactRatedGarageDoorsPage() {
  const benefits = [
    {
      icon: "💨",
      title: "Built for Flying Objects During Storms",
      text: "Impact-rated garage doors are engineered to resist debris impact and wind-driven weather, not just strong pressure alone.",
    },
    {
      icon: "🔨",
      title: "Heavy-Duty Glass & Materials",
      text: "Impact-resistant materials absorb shock without cracking or breaking, helping keep the door functioning and the home protected.",
    },
    {
      icon: "🏗️",
      title: "Durable Construction That Lasts",
      text: "Built with reinforced frames, commercial-grade hardware, and materials designed for serious repeated impact and durability.",
    },
    {
      icon: "🛡️",
      title: "Reliable Performance After Storms",
      text: "Unlike standard doors that can be damaged by a single storm event, impact-rated systems are built to protect again after severe weather.",
    },
  ];

  const styleOptions = [
    {
      icon: "🌀",
      title: "Impact-Resistant Glass Garage Doors",
      text: "Premium glass panels that provide both style and protection against debris impact, creating a modern architectural look.",
    },
    {
      icon: "⬛",
      title: "Reinforced Solid Impact-Rated Doors",
      text: "Full-panel impact-rated doors with heavy-duty construction and industrial-grade hardware for maximum debris protection.",
    },
    {
      icon: "🎯",
      title: "Partial Impact Protection Options",
      text: "Hybrid systems with impact-resistant sections where weather exposure is highest, balancing cost and protection.",
    },
    {
      icon: "✨",
      title: "Customized Impact-Rated Solutions",
      text: "Built to your specifications with the design, color, finish, window layout, and impact rating level that matches your needs.",
    },
  ];

  const compareOptions = [
    {
      title: "Miami-Dade Rated Garage Doors",
      text: "One of the strongest recognized storm-performance categories for homeowners who want maximum certification and protection.",
      href: "/miami-dade-rated-garage-doors",
    },
    {
      title: "Hurricane Garage Doors",
      text: "A broader category for homeowners looking for stronger storm-ready garage door protection and wind performance.",
      href: "/hurricane-garage-doors",
    },
    {
      title: "Wind-Rated Garage Doors",
      text: "Focused on wind pressure performance and resistance to sustained high-velocity forces during severe weather.",
      href: "/wind-rated-garage-doors",
    },
  ];

  const whyChooseUs = [
    "Expert guidance on whether impact-rated is the best choice for your property location",
    "Full installation of impact-rated systems with proper testing and commissioning",
    "Design options that look high-end while delivering serious protection",
    "Help selecting glass, materials, hardware, colors, and performance specifications",
    "Repair and replacement services for damaged or worn impact-rated doors",
    "South Florida expertise on local weather concerns and impact risks",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assess Your Exposure",
      text: "We evaluate where your property sits, what debris risks exist, and what level of impact protection makes sense.",
    },
    {
      number: "02",
      title: "Compare Impact-Rated Options",
      text: "We show you the design choices, material options, and performance levels available for impact-rated garage doors.",
    },
    {
      number: "03",
      title: "Professional Installation",
      text: "SecureLifts installs the complete system with proper anchoring, alignment, and testing to ensure full impact protection.",
    },
    {
      number: "04",
      title: "Final Inspection & Testing",
      text: "We verify operation, safety features, and durability before you take over day-to-day use of the new system.",
    },
  ];

  const faqs = [
    {
      question: "What does impact-rated mean for a garage door?",
      answer:
        "Impact-rated refers to garage doors engineered and tested to resist damage from flying debris and wind-driven objects during severe weather events.",
    },
    {
      question: "How is impact-rated different from wind-rated garage doors?",
      answer:
        "Wind-rated doors focus on pressure resistance. Impact-rated doors focus on resisting damage from objects striking the door. The strongest systems are often compared across both categories.",
    },
    {
      question: "What materials are used in impact-rated garage doors?",
      answer:
        "High-quality impact-rated doors use reinforced steel frames, impact-resistant glass or panels, commercial-grade hardware, and heavily engineered tracks and springs.",
    },
    {
      question: "Can SecureLifts design a custom impact-rated door for my home?",
      answer:
        "Yes. We work with homeowners to match design preferences, color, window options, and specific impact protection levels to fit the property.",
    },
    {
      question: "How much more do impact-rated garage doors cost than standard doors?",
      answer:
        "Impact-rated systems cost more than basic doors because of materials, engineering, and performance testing. We help you understand the value and available options before you decide.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <FAQSchema items={faqs} />
      <ServiceSchema
        name="Impact-Rated Garage Doors in South Florida"
        description="SecureLifts installs impact-rated garage doors in South Florida designed for debris resistance, storm protection, and reliable performance."
        url="https://securelifts.com/impact-rated-garage-doors"
      />

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          {
            label: "Impact-Rated Garage Doors",
            href: "https://securelifts.com/impact-rated-garage-doors",
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Impact-Rated Garage Doors" },
        ]}
      />

      {/* HERO */}
      <section className="relative min-h-[820px] overflow-hidden">
        <Image
          src="/impact-rated-garage-doors-hero.png"
          alt="Impact-rated garage doors installed by SecureLifts in South Florida"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[820px] max-w-7xl items-end px-6 pb-14 pt-36 md:pt-40">
          <div className="max-w-3xl rounded-3xl bg-black/35 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-sm">
              <p
                className="text-xs font-semibold uppercase tracking-[0.24em] text-white/90 md:text-sm"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
              >
                SecureLifts Storm-Rated Garage Door Systems
              </p>
            </div>

            <h1
              className="mb-5 text-4xl font-black leading-tight text-white md:text-6xl"
              style={{ textShadow: "0 3px 16px rgba(0,0,0,0.72)" }}
            >
              Impact-Rated Garage Doors in South Florida
            </h1>

            <p
              className="mb-8 max-w-2xl text-lg leading-8 text-white/95 md:text-xl"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.62)" }}
            >
              Debris-resistant garage doors designed to protect your home from
              flying objects during severe storms. SecureLifts installs
              impact-rated systems built for real weather durability, long-term
              reliability, and premium curb appeal.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:18668281818"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-red-700"
              >
                Call Now – (866) 828-1818
              </a>

              <Link
  href="/book-service"
  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold shadow-lg transition hover:bg-slate-100"
  style={{ color: "#0f172a" }}
>
  <span style={{ color: "#0f172a" }}>Book Service</span>
</Link>
            </div>
          </div>
        </div>
      </section>
      {/* TRUST STRIP */}
<section className="bg-white px-6 py-8">
  <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
        Trusted Service
      </p>
      <p className="text-lg font-semibold text-slate-900">
        Licensed &amp; Insured in Florida
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
        Debris Protection
      </p>
      <p className="text-lg font-semibold text-slate-900">
        Built for Impact Conditions
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
        Premium Work
      </p>
      <p className="text-lg font-semibold text-slate-900">
        Fast Quotes &amp; Clean Installations
      </p>
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
              Garage Doors Built to Resist Impact Damage, Not Just Wind Pressure
            </h2>
            <p className="mb-5 text-lg leading-8 text-slate-700">
              During a major storm, a garage door faces two major threats: intense wind
              pressure trying to force it open, and flying debris trying to punch
              through it. Impact-rated garage doors are engineered specifically to
              handle the second threat with materials and construction designed to
              absorb shock and resist penetration.
            </p>
            <p className="mb-5 text-lg leading-8 text-slate-700">
              In South Florida, debris impact is a real concern for homeowners who
              want doors that will stay functional after a storm, not doors that
              are cracked, damaged, or unable to close properly.
            </p>
            <p className="text-lg leading-8 text-slate-700">
              SecureLifts helps you find an impact-rated system that matches your
              property&apos;s exposure level, looks premium on the home, and gets
              installed with the care it deserves.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Compare Before You Buy
            </p>
            <h3 className="mb-4 text-2xl font-bold">
              Still Shopping for the Right Storm-Rated Door?
            </h3>
            <p className="mb-6 leading-7 text-slate-700">
              Impact-rated doors are strong for debris resistance. You might also
              want to compare hurricane, wind-rated, or Miami-Dade rated options
              depending on your location and protection goals.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/miami-dade-rated-garage-doors"
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Explore Miami-Dade Rated Doors
              </Link>

              <Link
                href="/hurricane-garage-doors"
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Explore Hurricane Doors
              </Link>

              <Link
                href="/wind-rated-garage-doors"
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Explore Wind-Rated Doors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Stronger by Design
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Why Homeowners Choose Impact-Rated Garage Doors
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Impact-rated garage doors are selected by homeowners who understand
              that storm protection means more than just wind pressure resistance.
              They want doors that can survive a direct hit from flying debris and
              remain fully functional.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="leading-7 text-slate-700">{item.text}</p>
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
              Impact-Rated Styles That Look Premium and Perform
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Impact-rated does not mean industrial or plain. Modern impact-rated
              systems come in contemporary glass designs, classic solid panels,
              hybrid configurations, and custom options that look high-end on
              residential homes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {styleOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE OPTIONS */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Compare Storm Categories
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Compare Impact-Rated Doors to Other Storm-Focused Options
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Some homeowners know they want debris resistance. Others want to
              compare impact-rated systems against broader hurricane, wind-rated,
              or Miami-Dade rated options before deciding.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {compareOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mb-5 leading-7 text-slate-700">{item.text}</p>
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              How We Work
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              The SecureLifts Process for Impact-Rated Door Installation
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700">
                  {step.number}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Why SecureLifts
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Expert Service for Impact-Rated Garage Door Installation & Repair
            </h2>
            <p className="mb-8 text-lg leading-8 text-slate-700">
              Impact-rated garage doors require more than just knowing the
              product. They need proper installation, testing, and follow-up
              service from a team that understands South Florida weather and the
              importance of getting it right.
            </p>

            <div className="space-y-3">
              {whyChooseUs.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    ✓
                  </div>
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-3xl border border-slate-200 shadow-lg lg:h-full lg:min-h-[520px]">
            <Image
              src="/impact-rated-installation.jpg"
              alt="SecureLifts technician installing impact-rated garage door"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <InternalLinkCards
        eyebrow="Related Storm Door Options"
        heading="Compare Impact-Rated Doors with Other Garage Door Categories"
        intro="Homeowners often compare impact-rated doors with broader hurricane systems and other storm-performance options before making the final decision."
        items={[
          {
            title: "Hurricane Garage Doors",
            text: "See the full hurricane garage door category and compare available styles.",
            href: "/hurricane-garage-doors",
            icon: "🌀",
          },
          {
            title: "Miami-Dade Rated Garage Doors",
            text: "See one of the strongest recognized storm-performance categories for South Florida homes.",
            href: "/miami-dade-rated-garage-doors",
            icon: "🏝️",
          },
          {
            title: "Wind-Rated Garage Doors",
            text: "Compare pressure-focused storm protection options.",
            href: "/wind-rated-garage-doors",
            icon: "💨",
          },
          {
            title: "Book Service",
            text: "Talk to SecureLifts about the best storm-rated option for your home.",
            href: "/book-service",
            icon: "📞",
          },
        ]}
      />

      <ReviewTrustSection
        heading="Why Homeowners in South Florida Choose SecureLifts"
        intro="When homeowners in South Florida invest in stronger garage doors, they want a company that communicates clearly, installs cleanly, and delivers results that actually hold up."
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
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Questions
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Frequently Asked About Impact-Rated Garage Doors
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  {faq.question}
                </h3>
                <p className="leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Ready for Impact-Rated Protection?
          </h2>

          <p className="mb-8 text-lg leading-8 text-slate-600">
            Schedule a consultation with SecureLifts to discuss impact-rated
            garage door options for your South Florida home. We will assess your
            exposure, show you design choices, and help you understand the
            protection and value you get.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:18668281818"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-red-700"
            >
              Call (866) 828-1818
            </a>
 <Link
            href="/book-service"
            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold"
          >
            Book Free Consultation
          </Link>
          </div>
        </div>
      </section>
    </main>
  );
}