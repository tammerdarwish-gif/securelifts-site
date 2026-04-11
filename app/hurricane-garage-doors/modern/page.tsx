import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceSchema from "../../components/ServiceSchema";
import FAQSchema from "../../components/FAQSchema";
import InternalLinkCards from "../../components/InternalLinkCards";
import Breadcrumbs from "../../components/Breadcrumbs";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ReviewTrustSection from "../../components/ReviewTrustSection";

export const metadata: Metadata = {
  title: "Modern Hurricane Garage Doors in South Florida | SecureLifts",
  description:
    "SecureLifts installs modern hurricane garage doors in South Florida featuring clean design, glass panels, and storm-ready performance. Call (866) 828-1818.",
  openGraph: {
    title: "Modern Hurricane Garage Doors in South Florida | SecureLifts",
    description:
      "Modern hurricane garage doors with glass panels and clean architectural design built for South Florida storms.",
    images: [
      {
        url: "/hurricane-modern-hero.png",
        width: 1536,
        height: 1024,
        alt: "Modern hurricane garage door with full glass panels installed by SecureLifts in South Florida on a contemporary home",
      },
    ],
  },
};

export default function ModernHurricaneGarageDoorsPage() {
  const benefits = [
    {
      icon: "🪟",
      title: "Full Glass Modern Design",
      text: "Sleek glass garage doors create a high-end architectural look while still being engineered for storm-ready performance.",
    },
    {
      icon: "🏡",
      title: "Perfect for Contemporary Homes",
      text: "Modern hurricane garage doors are ideal for new builds, renovations, and properties with clean design lines.",
    },
    {
      icon: "🛡️",
      title: "Storm-Ready Construction",
      text: "Designed to handle South Florida conditions with reinforced frames and durable materials built for real performance.",
    },
    {
      icon: "✨",
      title: "Major Curb Appeal Upgrade",
      text: "A modern glass garage door instantly elevates the entire front of the home and increases perceived property value.",
    },
  ];

  const options = [
    {
      title: "Frameless Glass Garage Doors",
      text: "Minimalist appearance with maximum visibility and a clean luxury finish.",
    },
    {
      title: "Aluminum Frame Glass Doors",
      text: "Stronger structural support with modern black or custom color finishes.",
    },
    {
      title: "Frosted or Tinted Glass Options",
      text: "Maintain privacy while still allowing natural light into the garage space.",
    },
    {
      title: "Custom Panel Layouts",
      text: "Choose the number of sections, glass style, and framing to match your home perfectly.",
    },
  ];

  const reasons = [
    "Expert installation of modern glass garage door systems",
    "Clean alignment and finish that matches high-end homes",
    "Guidance on glass type, tint, and frame selection",
    "Storm-ready systems built for South Florida conditions",
    "Fast turnaround and professional communication",
    "Repair and replacement services available",
  ];

  const compareStyles = [
    {
      title: "Traditional Hurricane Garage Doors",
      text: "Classic raised-panel hurricane garage doors with timeless curb appeal and a clean, familiar look.",
      href: "/hurricane-garage-doors/traditional",
    },
    {
      title: "Carriage House Hurricane Garage Doors",
      text: "Decorative carriage-style hurricane garage doors with premium character, warmth, and upscale curb appeal.",
      href: "/hurricane-garage-doors/carriage-house",
    },
    {
      title: "Custom Hurricane Garage Doors",
      text: "Tailored hurricane garage doors designed around your home’s exact style, finish, and design goals.",
      href: "/hurricane-garage-doors/custom",
    },
  ];

  const faqs = [
    {
      question: "Are glass garage doors strong enough for hurricanes?",
      answer:
        "Yes, when built correctly. Modern hurricane garage doors use reinforced frames and impact-resistant glass options designed for storm performance.",
    },
    {
      question: "Do modern garage doors reduce privacy?",
      answer:
        "They can, but tinted, frosted, or obscure glass options allow you to control visibility while maintaining the modern look.",
    },
    {
      question: "Are modern garage doors high maintenance?",
      answer:
        "Not when installed correctly. Most modern systems use durable aluminum and treated glass designed for long-term use.",
    },
    {
      question: "Do modern garage doors increase home value?",
      answer:
        "Yes. A well-designed modern garage door can significantly increase curb appeal and perceived property value.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <FAQSchema items={faqs} />

      <ServiceSchema
        name="Modern Hurricane Garage Doors in South Florida"
        description="Modern hurricane garage doors in South Florida with premium design, storm-ready strength, and upscale curb appeal."
        url="https://securelifts.com/hurricane-garage-doors/modern"
      />

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          {
            label: "Hurricane Garage Doors",
            href: "https://securelifts.com/hurricane-garage-doors",
          },
          {
            label: "Modern",
            href: "https://securelifts.com/hurricane-garage-doors/modern",
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hurricane Garage Doors", href: "/hurricane-garage-doors" },
          { label: "Modern" },
        ]}
      />

      {/* HERO */}
      <section className="relative min-h-[780px] overflow-hidden">
        <Image
          src="/hurricane-modern.png"
          alt="Modern hurricane garage door with full glass panels installed by SecureLifts in South Florida on a contemporary home"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl items-end px-6 pb-14 pt-36 md:pt-40">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/80">
              SecureLifts Modern Storm Protection
            </p>

            <h1 className="mb-5 text-4xl font-bold text-white md:text-6xl">
              Modern Hurricane Garage Doors in South Florida
            </h1>

            <p className="mb-8 text-lg leading-8 text-white/95 md:text-xl">
              Clean lines. Glass panels. Real storm-ready strength. SecureLifts
              installs modern hurricane garage doors that combine design and
              performance for South Florida homes.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:18668281818"
                className="rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-red-700"
              >
                Call Now – (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Trusted Service
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Licensed &amp; Insured in Florida
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Storm Ready
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Built for Hurricane Conditions
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Premium Work
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Fast Quotes &amp; Clean Installations
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Modern Look, Real Protection
            </p>
            <h2 className="mb-6 text-4xl font-bold">
              Modern Look. Built for Real Storm Conditions.
            </h2>
            <p className="mb-6 text-lg leading-8 text-gray-700">
              Modern hurricane garage doors are designed for homeowners who want
              a clean, high-end look without compromising performance.
            </p>
            <p className="mb-6 text-lg leading-8 text-gray-700">
              SecureLifts installs systems that match your home’s architecture
              while delivering strength where it matters.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              For many South Florida homes, a modern storm-ready garage door is
              one of the fastest ways to upgrade curb appeal while still making
              a smart protection decision.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Compare Hurricane Styles
            </p>
            <h3 className="mb-4 text-2xl font-bold">
              Looking at Other Style Options Too?
            </h3>
            <p className="mb-6 leading-7 text-gray-700">
              Modern is ideal for a clean architectural look, but some homeowners
              still compare traditional, carriage-house, or custom styles before
              making the final decision.
            </p>

            <div className="flex flex-col gap-4">
              {compareStyles.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group block rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500/30"
                >
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mb-4 leading-7 text-gray-700">{item.text}</p>

                  <span className="inline-flex items-center font-semibold text-red-600 transition group-hover:text-red-700">
                    Explore this style →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Why Homeowners Choose This Style
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Why Modern Hurricane Garage Doors Stand Out
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              These systems are chosen by homeowners who want clean lines,
              stronger storm-ready construction, and a high-end front elevation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN OPTIONS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Modern Design Options
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Design Details That Change the Entire Look
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              The right glass, frame finish, and panel layout make the difference
              between a basic modern look and a premium one.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {options.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-7 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SECURELIFTS */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Why SecureLifts
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Why Homeowners Choose SecureLifts for Modern Hurricane Garage Doors
            </h2>
            <p className="mb-8 text-lg leading-8 text-gray-700">
              A modern garage door can upgrade the house fast, but only when the
              product selection and installation are done right. SecureLifts helps
              homeowners get the clean look they want without sacrificing storm
              readiness or long-term performance.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    ✓
                  </div>
                  <p className="leading-7 text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              What We Help You Decide
            </p>
            <h3 className="mb-4 text-2xl font-bold">
              Modern Doors Need the Right Design Choices
            </h3>
            <p className="mb-6 leading-7 text-gray-700">
              The best modern garage doors look intentional, not random. We help
              homeowners choose the glass style, frame finish, layout, and overall
              direction that fits the home correctly.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <ul className="space-y-3 text-gray-700">
                <li>Glass transparency and privacy level</li>
                <li>Frame finish and color direction</li>
                <li>Panel layout and door proportions</li>
                <li>Modern curb appeal vs everyday practicality</li>
                <li>Best fit for the architecture of the home</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <InternalLinkCards
        eyebrow="Compare Hurricane Door Styles"
        heading="Explore Other Hurricane Garage Door Styles"
        intro="Every home needs a different balance of style, protection, and curb appeal. Compare the main hurricane door options below."
        items={[
          {
            title: "Traditional Style",
            text: "Classic raised-panel hurricane garage doors with timeless curb appeal.",
            href: "/hurricane-garage-doors/traditional",
            icon: "🏡",
          },
          {
            title: "All Hurricane Styles",
            text: "Go back to the main hurricane garage door page and compare every style option in one place.",
            href: "/hurricane-garage-doors",
            icon: "🌀",
          },
          {
            title: "Carriage House",
            text: "Decorative carriage-style hurricane garage doors with premium character.",
            href: "/hurricane-garage-doors/carriage-house",
            icon: "🚪",
          },
          {
            title: "Custom Doors",
            text: "Tailored hurricane garage doors built around your home’s design.",
            href: "/hurricane-garage-doors/custom",
            icon: "✨",
          },
        ]}
      />

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
              Modern Hurricane Garage Door FAQs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Straight answers for homeowners comparing modern storm-ready garage
              doors in South Florida.
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
      <section className="bg-gray-900 text-white px-6 py-20 text-center">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white/5 px-8 py-14 shadow-xl md:px-12">
          <h2 className="mb-6 text-4xl font-bold">
            Upgrade to a Modern Storm-Ready Garage Door
          </h2>

          <p className="mb-8 text-lg text-white/80">
            SecureLifts installs modern hurricane garage doors that deliver both
            design and protection.
          </p>

          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <a
              href="tel:18668281818"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-red-700"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}