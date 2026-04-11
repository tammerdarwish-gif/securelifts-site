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
  title: "Custom Hurricane Garage Doors in South Florida | SecureLifts",
  description:
    "SecureLifts installs custom hurricane garage doors in South Florida with premium design, storm-ready strength, and upscale curb appeal. Call (866) 828-1818.",
  openGraph: {
    title: "Custom Hurricane Garage Doors in South Florida | SecureLifts",
    description:
      "Custom hurricane garage doors in South Florida with premium design, storm-ready strength, and upscale curb appeal.",
    images: [
      {
        url: "/hurricane-custom-hero.png",
        width: 1536,
        height: 1024,
        alt: "Custom wood carriage-style hurricane garage doors installed on a luxury stone home in South Florida with happy homeowners standing outside",
      },
    ],
  },
};

export default function CustomHurricaneGarageDoorsPage() {
  const benefits = [
    {
      icon: "✨",
      title: "True Custom Look",
      text: "These are not generic stock doors. Custom hurricane garage doors are built for homeowners who want a stronger door that actually upgrades the look of the home.",
    },
    {
      icon: "🛡️",
      title: "Storm-Ready Strength",
      text: "Custom style does not mean weak. SecureLifts helps homeowners choose doors that combine premium design with real South Florida storm-focused performance.",
    },
    {
      icon: "🏡",
      title: "Designed Around the Property",
      text: "Panel design, proportions, finish, decorative hardware, and overall style should fit the house correctly instead of looking forced.",
    },
    {
      icon: "💎",
      title: "Higher-End Curb Appeal",
      text: "A custom hurricane garage door can become one of the strongest visual upgrades on the entire front of the home.",
    },
  ];

  const options = [
    {
      title: "Custom Carriage-Style Hurricane Doors",
      text: "A richer architectural look with decorative wood-tone finishes, crossbuck details, and premium exterior character.",
    },
    {
      title: "Custom Contemporary Hurricane Doors",
      text: "Clean horizontal lines, sleek finishes, and stronger construction for homes with a more modern design direction.",
    },
    {
      title: "Custom Window & Hardware Layouts",
      text: "Choose windows, handles, hinges, and accents that match the home instead of settling for a limited factory look.",
    },
    {
      title: "Tailored Color & Finish Options",
      text: "Get the exact tone and texture that fits your exterior instead of designing around whatever happens to be in stock.",
    },
  ];

  const trustItems = [
    {
      icon: "⭐",
      title: "Trusted by South Florida Homeowners",
      text: "Homeowners want more than a pretty door. They want confidence that the company installing it will get the design and the build quality right.",
    },
    {
      icon: "🛠️",
      title: "Installed with Real Attention to Detail",
      text: "Custom work requires cleaner execution, better measurements, and a better eye for final appearance than standard installs.",
    },
    {
      icon: "⚡",
      title: "Fast Response & Clear Communication",
      text: "SecureLifts moves quickly, communicates clearly, and helps homeowners make confident decisions without confusion.",
    },
  ];

  const reasons = [
    "Custom hurricane doors built around the home, not generic templates",
    "Help selecting layout, finish, windows, decorative hardware, and overall style",
    "Storm-ready systems designed for South Florida conditions",
    "Professional installation for high-end residential results",
    "Repair, replacement, and full new-door installation available",
    "Clear guidance from concept to final installation",
  ];

  const compareStyles = [
    {
      title: "Traditional Hurricane Garage Doors",
      href: "/hurricane-garage-doors/traditional",
    },
    {
      title: "Modern Hurricane Garage Doors",
      href: "/hurricane-garage-doors/modern",
    },
    {
      title: "Carriage House Hurricane Garage Doors",
      href: "/hurricane-garage-doors/carriage-house",
    },
  ];

  const faqs = [
    {
      question: "What makes a custom hurricane garage door different?",
      answer:
        "A custom hurricane garage door gives you more control over design, finish, layout, hardware, and overall appearance while still being built for stronger South Florida storm protection.",
    },
    {
      question: "Can custom hurricane garage doors still have a carriage-style look?",
      answer:
        "Yes. Many homeowners want a richer carriage or estate-style appearance while still upgrading to a stronger storm-ready system.",
    },
    {
      question:
        "Are custom hurricane garage doors only for very expensive homes?",
      answer:
        "No. They are especially popular on upscale homes, but any homeowner who wants a better-looking and more intentional result can benefit from custom options.",
    },
    {
      question: "Can SecureLifts help me choose the right custom style?",
      answer:
        "Yes. We help homeowners choose the right panel design, finish, windows, hardware, and overall direction so the final garage door fits the property correctly.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <FAQSchema items={faqs} />

      <ServiceSchema
        name="Custom Hurricane Garage Doors in South Florida"
        description="Custom hurricane garage doors in South Florida with premium design, storm-ready strength, and upscale curb appeal."
        url="https://securelifts.com/hurricane-garage-doors/custom"
      />

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          {
            label: "Hurricane Garage Doors",
            href: "https://securelifts.com/hurricane-garage-doors",
          },
          {
            label: "Custom",
            href: "https://securelifts.com/hurricane-garage-doors/custom",
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hurricane Garage Doors", href: "/hurricane-garage-doors" },
          { label: "Custom" },
        ]}
      />

      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden">
        <Image
          src="/hurricane-custom-hero-v3.png"
          alt="Custom wood carriage-style hurricane garage doors installed on a luxury stone home in South Florida with happy homeowners standing outside"
          fill
          priority
          className="object-cover object-[65%_40%]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/48 to-black/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-end px-6 pb-16 pt-32 md:pt-36">
          <div className="max-w-[580px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              SecureLifts Custom Storm-Ready Doors
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.04] text-white md:text-6xl">
              Custom Hurricane Garage Doors in South Florida
            </h1>

            <p className="mb-8 max-w-[540px] text-lg leading-8 text-white/90">
              Premium custom design with real storm-ready strength. SecureLifts
              installs upscale hurricane garage doors built to protect the home
              and upgrade curb appeal at the same time.
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
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100"
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

      {/* INTRO */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Custom Style, Real Protection
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              For Homeowners Who Want More Than a Standard Garage Door
            </h2>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              Some homes deserve more than a standard garage door picked from a
              limited brochure. A custom hurricane garage door gives you control
              over the final look while still upgrading to a stronger system
              built for South Florida weather.
            </p>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              That means better alignment with the architecture, stronger visual
              impact, and a final result that looks intentional instead of
              generic.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              SecureLifts helps homeowners choose custom hurricane garage doors
              that fit the property correctly while still delivering real
              storm-ready performance.
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
              Custom is ideal when you want more freedom, but some homeowners
              still compare traditional, modern, or carriage-house styles before
              making the final call.
            </p>

            <div className="flex flex-col gap-3">
              {compareStyles.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
                >
                  {item.title}
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
              Why Homeowners Choose Custom
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Premium Design Freedom with Hurricane Protection Built In
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Custom hurricane garage doors are ideal for homeowners who want a
              stronger system and a better-looking result than standard options
              usually deliver.
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

      {/* DESIGN OPTIONS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Custom Design Options
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Tailored Custom Hurricane Door Options
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              The point of going custom is not just to be different. It is to
              get a door that fits the home correctly instead of forcing the
              home to fit a standard product.
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

      {/* TRUST / AUTHORITY DETAILS */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Trust • Urgency • Authority
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Why SecureLifts Wins These Higher-End Jobs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Homeowners choosing custom hurricane garage doors are not looking
              for the cheapest option. They are looking for the right company to
              get the design and the install right.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 text-3xl">{item.icon}</div>
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
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Why SecureLifts
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Why Homeowners Choose SecureLifts for Custom Hurricane Doors
            </h2>
            <p className="mb-8 text-lg leading-8 text-gray-700">
              Custom work requires more judgment, more attention to detail, and
              a better eye for what will actually look right on the property.
              SecureLifts helps homeowners avoid expensive design mistakes while
              still getting the stronger system they want.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    ✓
                  </div>
                  <p className="leading-7 text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              Want to Compare Before You Decide?
            </h3>
            <p className="mb-6 leading-7 text-gray-700">
              Custom is the highest-flexibility option, but it helps to compare
              it against the other hurricane garage door styles before making
              the final choice.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/hurricane-garage-doors/traditional"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Traditional Hurricane Garage Doors
              </Link>
              <Link
                href="/hurricane-garage-doors/modern"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Modern Hurricane Garage Doors
              </Link>
              <Link
                href="/hurricane-garage-doors/carriage-house"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Carriage House Hurricane Garage Doors
              </Link>
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
            title: "Modern Style",
            text: "Clean, contemporary hurricane garage doors with a sleek architectural look.",
            href: "/hurricane-garage-doors/modern",
            icon: "⬛",
          },
          {
            title: "Carriage House",
            text: "Decorative carriage-style hurricane garage doors with premium character.",
            href: "/hurricane-garage-doors/carriage-house",
            icon: "🚪",
          },
          {
            title: "All Hurricane Styles",
            text: "Go back to the main hurricane garage door page and compare every style option in one place.",
            href: "/hurricane-garage-doors",
            icon: "🌀",
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
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              FAQs
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Custom Hurricane Garage Door FAQs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Straight answers for homeowners comparing tailored storm-ready
              garage doors in South Florida.
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
            Want a Hurricane Garage Door Built Around Your Home?
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/85">
            SecureLifts installs custom hurricane garage doors built for South
            Florida protection, premium curb appeal, and a better overall final
            result.
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