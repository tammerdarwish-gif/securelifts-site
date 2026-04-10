import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ServiceSchema from "../components/ServiceSchema";
import FAQSchema from "../components/FAQSchema";
import InternalLinkCards from "../components/InternalLinkCards";
import Breadcrumbs from "../components/Breadcrumbs";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import ReviewTrustSection from "../components/ReviewTrustSection";

export const metadata: Metadata = {
  title: "Garage Door Repair in South Florida | SecureLifts",
  description:
    "SecureLifts provides fast, professional garage door repair in South Florida for broken springs, opener issues, off-track doors, cables, rollers, and more. Call (866) 828-1818.",
  openGraph: {
    title: "Garage Door Repair in South Florida | SecureLifts",
    description:
      "Fast, professional garage door repair in South Florida for broken springs, opener issues, off-track doors, cables, rollers, and more.",
    images: [
      {
        url: "/garage-door-repair-hero.png",
        width: 1536,
        height: 1024,
        alt: "SecureLifts technician performing garage door repair in South Florida",
      },
    ],
  },
};

export default function GarageDoorRepairPage() {
  const repairProblems = [
    {
      icon: "🛠️",
      title: "Broken Springs",
      text: "A broken spring can stop the door completely or make it unsafe to operate. This is one of the most common repair calls we handle.",
    },
    {
      icon: "🚪",
      title: "Off-Track Garage Doors",
      text: "When a garage door comes off track, it can bind, shake, or get stuck halfway. It needs proper correction before more damage happens.",
    },
    {
      icon: "⚙️",
      title: "Opener Problems",
      text: "If the opener hums, clicks, reverses, or stops responding, we diagnose the issue quickly and repair the system the right way.",
    },
    {
      icon: "🔩",
      title: "Cables, Rollers & Hardware",
      text: "Worn rollers, frayed cables, loose hinges, and damaged hardware can cause noisy movement, poor balance, and unsafe operation.",
    },
  ];

  const repairBenefits = [
    {
      icon: "⚡",
      title: "Fast Response for Urgent Repairs",
      text: "Garage door problems disrupt the whole day. SecureLifts moves quickly to get the door safe, functional, and back in service.",
    },
    {
      icon: "✅",
      title: "Honest Repair Recommendations",
      text: "Not every bad door needs replacement. We tell you directly when repair makes sense and when replacement is the smarter move.",
    },
    {
      icon: "🏠",
      title: "Residential Repair Focus",
      text: "We help homeowners protect access, security, and convenience with repairs that are done cleanly and professionally.",
    },
    {
      icon: "🔧",
      title: "Long-Term Reliability",
      text: "The goal is not just to get the door moving again. The goal is to fix it correctly so it stays dependable.",
    },
  ];

  const serviceAreas = [
    {
      title: "Garage Door Repair by City",
      text: "Find repair service near you across South Florida with local city pages built for faster navigation and local relevance.",
      href: "/garage-door-repair/miami",
    },
    {
      title: "Garage Door Opener Repair",
      text: "If your opener is failing, reversing, or not responding properly, compare our dedicated opener repair service.",
      href: "/garage-door-opener-repair",
    },
    {
      title: "Broken Spring Repair",
      text: "One of the most common garage door failures. Fast spring replacement can restore safe door operation quickly.",
      href: "/broken-spring-repair",
    },
    {
      title: "Off-Track Garage Door Repair",
      text: "When the door is jammed, crooked, or off-track, quick correction can prevent more damage.",
      href: "/garage-door-off-track-repair",
    },
  ];

  const reasons = [
  "Same-day service available across South Florida",
  "Technicians who actually know what they’re doing",
  "No upselling — just real solutions",
  "Clean installs that protect your home long-term",
  "Fast response and clear communication",
  "Residential & commercial expertise",
];
  const cityLinks = [
    "Miami",
    "Fort Lauderdale",
    "Boca Raton",
    "Delray Beach",
    "West Palm Beach",
    "Wellington",
  ];

  const faqs = [
    {
      question: "What garage door problems do you repair most often?",
      answer:
        "We commonly repair broken springs, opener problems, off-track doors, damaged rollers, worn cables, noisy operation, bent hardware, and doors that will not open or close properly.",
    },
    {
      question: "Can you tell me if my garage door should be repaired or replaced?",
      answer:
        "Yes. We look at the condition of the door, the cost of repair, the age of the system, and the overall safety of the setup. Then we give you a direct recommendation.",
    },
    {
      question: "Do you offer same-day garage door repair?",
      answer:
        "In many cases, yes. Fast response matters because a broken garage door affects security, access, and the homeowner’s entire day.",
    },
    {
      question: "Do you repair garage door openers too?",
      answer:
        "Yes. We handle opener troubleshooting and repair along with the mechanical door system so you do not have to guess where the real issue is.",
    },
    {
      question: "What if my garage door is making loud noise but still works?",
      answer:
        "That usually means something is wearing out, misaligned, or failing under load. Fixing it early can prevent a more expensive breakdown later.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <FAQSchema items={faqs} />
      <ServiceSchema
        name="Garage Door Repair in South Florida"
        description="SecureLifts provides fast, professional garage door repair in South Florida for broken springs, opener issues, off-track doors, cables, rollers, and more."
        url="https://securelifts.com/garage-door-repair"
      />

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          {
            label: "Garage Door Repair",
            href: "https://securelifts.com/garage-door-repair",
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Garage Door Repair" },
        ]}
      />

     <section className="relative min-h-[760px] overflow-hidden">
  <Image
    src="/garage-door-repair-v2hero.jpg"
    alt="SecureLifts garage door repair technician working on a garage door in South Florida"
    fill
    priority
    className="object-cover object-[66%_center] md:object-[78%_center]"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/52 via-transparent to-black/10" />

  <div className="relative z-10 mx-auto flex min-h-[760px] max-w-6xl items-end px-6 pb-14 pt-36 md:pt-40">
    <div className="max-w-[560px]">
      <p
        className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 md:text-sm"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
      >
        SecureLifts Fast Repair Service
      </p>

      <h1
        className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl"
        style={{ textShadow: "0 3px 14px rgba(0,0,0,0.68)" }}
      >
        Garage Door Repair in South Florida
      </h1>

      <p
        className="mb-7 max-w-xl text-base leading-7 text-white/95 md:text-lg"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.58)" }}
      >
        Fast, professional repair for broken springs, opener failures, off-track
        doors, worn rollers, cables, and more. SecureLifts helps homeowners get
        the door working again without wasting time.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="tel:18668281818"
          className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold !text-white transition hover:bg-red-700"
        >
          Call Now – (866) 828-1818
        </a>

        <Link
          href="/book-service"
          className="inline-flex items-center justify-center rounded-lg border border-white/70 bg-white px-8 py-4 text-lg font-semibold !text-gray-900 shadow-sm transition hover:bg-gray-100"
        >
          Book Service
        </Link>
      </div>
    </div>
  </div>
</section>
      <section className="sl-section bg-white">
  <div className="sl-container">
    <div className="text-center mb-12">
      <p className="sl-eyebrow text-red-600">Common Issues</p>
      <h2 className="sl-heading-lg">
        We Fix Garage Door Problems Fast
      </h2>
      <p className="sl-copy max-w-2xl mx-auto">
        Most garage door issues get worse if ignored. We fix them quickly before they turn into expensive problems.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {[
        "Broken Springs",
        "Garage Door Openers",
        "Off-Track Doors",
        "Snapped Cables",
      ].map((item) => (
        <div key={item} className="sl-card text-center">
          <h3 className="text-lg font-semibold mb-2">{item}</h3>
          <p className="text-sm text-slate-600">
            Fast repair and reliable solutions done right the first time.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="bg-white px-6 py-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Fast Response
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Repair Help Across South Florida
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Honest Service
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Repair When It Makes Sense
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Daily Reliability
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Built Around Homeowner Needs
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Daily Income Service Category
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Garage Door Repair Is One of the Most Important Service Pages on the Site
            </h2>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              Repair is where daily service demand lives. Homeowners are not
              browsing for fun when their garage door will not open, is hanging
              crooked, is making loud noise, or becomes unsafe. They need help
              quickly.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              This page needs to do one thing well: make it easy for people in
              South Florida to trust SecureLifts, understand what gets repaired,
              and call or book service without hesitation.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Fast Direction
            </p>
            <h3 className="mb-4 text-2xl font-bold">
              Need Repair Near You?
            </h3>
            <p className="mb-6 leading-7 text-gray-700">
              Jump into local pages or compare the most common repair services
              people call for when the garage door stops working right.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/garage-door-repair/miami"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Garage Door Repair in Miami
              </Link>

              <Link
                href="/broken-spring-repair"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Broken Spring Repair
              </Link>

              <Link
                href="/garage-door-opener-repair"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Garage Door Opener Repair
              </Link>

              <Link
                href="/garage-door-off-track-repair"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Off-Track Garage Door Repair
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Common Repair Calls
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              The Garage Door Problems Homeowners Call About Most
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Most repair jobs start with the same thing: the door stops working
              the way it should. These are the most common issues SecureLifts
              helps resolve.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {repairProblems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
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

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Why Repair Calls Convert
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Homeowners Choose SecureLifts for Garage Door Repair
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Homeowners want speed, clarity, and a company that does not waste
              their time. Repair pages need to feel practical, trustworthy, and
              ready to solve the problem now.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {repairBenefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
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

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Service Navigation
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Go Straight to the Repair Service You Need
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              This section helps visitors move fast, which is exactly what a
              repair-focused page should do.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceAreas.map((item) => (
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

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Why SecureLifts
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Homeowners Keep Calling SecureLifts for Repair Work
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Fast repair is important, but trust is what gets the call. This
              section should make that trust easy to feel.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((item) => (
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

      <InternalLinkCards
        eyebrow="Repair Services"
        heading="Explore Related Garage Door Repair Services"
        intro="These are some of the most common pages homeowners compare when the door stops working right."
        items={[
          {
            title: "Broken Spring Repair",
            text: "Fast spring replacement for one of the most common garage door failures.",
            href: "/broken-spring-repair",
            icon: "🛠️",
          },
          {
            title: "Garage Door Opener Repair",
            text: "Troubleshoot motor, sensor, remote, and opener performance issues.",
            href: "/garage-door-opener-repair",
            icon: "⚙️",
          },
          {
            title: "Garage Door Off-Track Repair",
            text: "Correct crooked, jammed, or unsafe off-track garage doors.",
            href: "/garage-door-off-track-repair",
            icon: "🚪",
          },
          {
            title: "Book Service",
            text: "Schedule a repair appointment with SecureLifts right now.",
            href: "/book-service",
            icon: "📞",
          },
        ]}
      />

      <ReviewTrustSection
        heading="Why South Florida Homeowners Choose SecureLifts"
        intro="When garage doors fail, homeowners want fast communication, clean work, and real solutions. That is what gets calls converted into booked jobs."
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
            text: "The whole process felt organized and professional from the estimate to the final repair.",
          },
        ]}
      />
      <section className="bg-red-600 text-white py-6">
  <div className="sl-container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
    <p className="text-lg font-semibold">
      Limited Time Offer – $25 OFF Any Garage Door Repair
    </p>

    <div className="flex gap-4">
      <a
              href="tel:18668281818"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold !text-gray-900 transition hover:bg-gray-100"
            >
              Call (866) 828-1818
            </a>

      <Link
        href="/book-service"
        className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold !text-white transition hover:bg-red-700"
      >
        Book Service
      </Link>
    </div>
  </div>
</section>

      <section className="bg-gray-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white/5 px-8 py-14 text-center md:px-12">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Need Garage Door Repair Today?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/85">
            Call SecureLifts now for fast, professional garage door repair in
            South Florida. Broken spring, opener issue, off-track door, noisy
            hardware, or general failure — we help homeowners get it fixed.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:18668281818"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold !text-white transition hover:bg-red-700"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold !text-gray-900 transition hover:bg-gray-100"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Service Areas
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Garage Door Repair in Key South Florida Cities
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Explore local repair pages for some of the main South Florida
              markets SecureLifts serves.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {cityLinks.map((city) => (
              <Link
                key={city}
                href={`/garage-door-repair/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              FAQs
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Garage Door Repair FAQs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Straight answers for homeowners needing garage door repair in
              South Florida.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {item.question}
                </h3>
                <p className="leading-7 text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}