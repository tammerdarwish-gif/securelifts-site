import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ServiceSchema from "../components/ServiceSchema";
import FAQSchema from "../components/FAQSchema";
import InternalLinkCards from "../components/InternalLinkCards";
import Breadcrumbs from "../components/Breadcrumbs";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import ReviewTrustSection from "../components/ReviewTrustSection";
import ProjectGallerySection from "../components/ProjectGallerySection";

export const metadata: Metadata = {
  title: "Hurricane Garage Doors in South Florida | SecureLifts",
  description:
    "SecureLifts installs hurricane garage doors in South Florida built for wind resistance, storm protection, and high-end curb appeal. Call (866) 828-1818 for expert installation and service.",
  openGraph: {
    title: "Hurricane Garage Doors in South Florida | SecureLifts",
    description:
      "SecureLifts installs hurricane garage doors in South Florida built for wind resistance, storm protection, and high-end curb appeal.",
    images: [
      {
        url: "/hurricane-garage-doors-hero.png",
        width: 1536,
        height: 1024,
        alt: "Miami-Dade approved hurricane garage doors installed by SecureLifts in South Florida designed for storm protection, wind resistance, and high-end residential curb appeal",
      },
    ],
  },
};

export default function HurricaneGarageDoorsPage() {
  const styleOptions = [
    {
      icon: "🏡",
      title: "Traditional Hurricane Garage Doors",
      text: "Classic raised-panel looks with reinforced construction designed for Florida homes that need storm protection without losing curb appeal.",
      href: "/hurricane-garage-doors/traditional",
    },
    {
      icon: "⬛",
      title: "Modern Hurricane Garage Doors",
      text: "Clean, contemporary hurricane garage doors with sleek finishes and strong storm-ready performance.",
      href: "/hurricane-garage-doors/modern",
    },
    {
      icon: "🚪",
      title: "Carriage House Hurricane Garage Doors",
      text: "Decorative hurricane garage doors with upscale carriage styling, warmth, and premium curb appeal.",
      href: "/hurricane-garage-doors/carriage-house",
    },
    {
      icon: "✨",
      title: "Custom Hurricane Garage Doors",
      text: "Tailored hurricane garage doors designed around your home’s architecture, finish, and protection needs.",
      href: "/hurricane-garage-doors/custom",
    },
  ];

  const featureCards = [
    {
      icon: "🌀",
      title: "Built for Florida Storm Conditions",
      text: "Hurricane garage doors help protect homes from wind pressure, flying debris exposure, and major structural risk during severe weather.",
    },
    {
      icon: "🛡️",
      title: "Stronger Reinforcement Systems",
      text: "Reinforced tracks, heavier hardware, stronger panels, and upgraded bracing help these doors perform under demanding conditions.",
    },
    {
      icon: "📋",
      title: "Code-Conscious Installation",
      text: "SecureLifts helps homeowners choose door systems that match real-world storm protection needs and local performance expectations.",
    },
    {
      icon: "🏠",
      title: "Curb Appeal Without Weak Design",
      text: "You do not have to settle for an ugly storm door. We build protection into designs that still make the house look high-end.",
    },
  ];

  const compareCards = [
    {
      title: "Wind-Rated Garage Doors",
      text: "Designed to resist higher wind pressures and reduce the risk of door failure during strong storm events.",
      href: "/wind-rated-garage-doors",
    },
    {
      title: "Impact-Rated Garage Doors",
      text: "Built for stronger protection against debris-related damage and storm-driven forces.",
      href: "/impact-rated-garage-doors",
    },
    {
      title: "Miami-Dade Rated Garage Doors",
      text: "For homeowners who want one of the strongest levels of recognized storm-performance standards.",
      href: "/miami-dade-rated-garage-doors",
    },
  ];

  const reasons = [
    "Florida-focused recommendations based on real storm exposure",
    "Professional installation instead of rushed box-store setups",
    "Design options that still look premium on the home",
    "Help choosing the right door style, finish, hardware, and windows",
    "Repair, replacement, and full new-door installation available",
    "Fast estimates and clear communication from start to finish",
  ];

  const faqs = [
    {
      question: "What makes a garage door hurricane-rated?",
      answer:
        "A hurricane-rated garage door is built with stronger reinforcement, upgraded hardware, heavier-duty tracks, and performance characteristics designed to handle severe wind conditions more effectively than a standard door.",
    },
    {
      question: "Do hurricane garage doors have to look bulky or unattractive?",
      answer:
        "No. Modern hurricane garage doors come in traditional, contemporary, carriage-house, and custom designs. You can get serious protection without making the front of the house look cheap.",
    },
    {
      question: "What is the difference between wind-rated and impact-rated garage doors?",
      answer:
        "Wind-rated doors focus on handling higher wind pressure. Impact-rated doors are designed for stronger resistance against debris-related damage as well. Some homeowners need one, and some should consider both performance factors together.",
    },
    {
      question: "Can SecureLifts replace my existing garage door with a hurricane-rated model?",
      answer:
        "Yes. We can remove the old door, help you choose the right replacement, and install a stronger storm-ready system that fits the home and your design goals.",
    },
    {
      question: "Do you offer hurricane garage door repair too?",
      answer:
        "Yes. If your current door is damaged, unsafe, or failing, SecureLifts can inspect it and tell you honestly whether repair makes sense or replacement is the smarter move.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <FAQSchema items={faqs} />
      <ServiceSchema
        name="Hurricane Garage Doors in South Florida"
        description="SecureLifts installs hurricane garage doors in South Florida built for wind resistance, storm protection, and high-end curb appeal."
        url="https://securelifts.com/hurricane-garage-doors"
      />

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          {
            label: "Hurricane Garage Doors",
            href: "https://securelifts.com/hurricane-garage-doors",
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hurricane Garage Doors" },
        ]}
      />

      <section className="relative min-h-[760px] overflow-hidden">
        <Image
          src="/hurricane-garage-doors-hero.png"
          alt="Miami-Dade approved hurricane garage doors installed by SecureLifts in South Florida designed for storm protection, wind resistance, and high-end residential curb appeal"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/18 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-6xl items-end px-6 pb-14 pt-36 md:pt-40">
          <div className="max-w-2xl">
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 md:text-sm"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
            >
              SecureLifts Residential Storm Protection
            </p>

            <h1
              className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ textShadow: "0 3px 14px rgba(0,0,0,0.68)" }}
            >
              Hurricane Garage Doors in South Florida
            </h1>

            <p
              className="mb-7 max-w-xl text-base leading-7 text-white/95 md:text-lg"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.58)" }}
            >
              Stronger protection. Better design. Real Florida performance.
              SecureLifts installs hurricane garage doors for homeowners who
              want storm-ready strength without sacrificing curb appeal.
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
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold !text-gray-900 transition hover:bg-gray-100"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Trusted Service
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Licensed &amp; Insured in Florida
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Storm Ready
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Built for Hurricane Conditions
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Premium Work
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Fast Quotes &amp; Clean Installations
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Why This Matters
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Hurricane Garage Doors Are Not Optional Thinking in South Florida
            </h2>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              A weak garage door is one of the fastest ways a storm can put a
              house at risk. When the door fails, wind pressure can compromise
              the structure, damage the interior, and create far bigger losses
              than most homeowners expect.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              SecureLifts helps homeowners choose hurricane garage doors that
              match the look of the home, the performance needed for Florida
              weather, and the level of long-term durability they actually want.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Fast Direction
            </p>
            <h3 className="mb-4 text-2xl font-bold">
              Not Sure What You Need?
            </h3>
            <p className="mb-6 leading-7 text-gray-700">
              We can help you figure out whether you need wind-rated,
              impact-rated, Miami-Dade rated, or a full hurricane-ready custom
              replacement.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/miami-dade-rated-garage-doors"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Explore Miami-Dade Rated Doors
              </Link>

              <Link
                href="/wind-rated-garage-doors"
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Explore Wind-Rated Doors
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

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Built for Protection
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What Makes Hurricane Garage Doors Different
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              These systems are built for more than looks. The right hurricane
              garage door helps protect the home, supports code-conscious
              installation, and gives homeowners stronger confidence going into
              storm season.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((item) => (
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
              Design Options
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Hurricane Garage Door Styles
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Protection is non-negotiable, but design still matters. Build the
              right look for the home without settling for weak construction.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {styleOptions.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl transition group-hover:scale-105">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mb-5 leading-7 text-gray-700">{item.text}</p>

                <span className="inline-flex items-center font-semibold text-red-600 transition group-hover:text-red-700">
                  Explore this style →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Selection Help
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Compare the Right Storm-Rated Options
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Some homeowners need basic storm reinforcement. Others want
              stronger recognized performance standards. These pages help sort
              that out clearly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {compareCards.map((item) => (
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
              Why Homeowners Call SecureLifts for Hurricane Garage Doors
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Homeowners do not just need a stronger door. They need a company
              that knows how to guide the decision, install it right, and not
              waste time with weak options.
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
        eyebrow="Compare Related Storm Categories"
        heading="Explore More Storm-Rated Garage Door Options"
        intro="Some homeowners want to compare hurricane garage doors with wind-rated, impact-rated, or Miami-Dade rated systems before making the final decision."
        items={[
          {
            title: "Wind-Rated Garage Doors",
            text: "Focused on pressure resistance during severe weather conditions.",
            href: "/wind-rated-garage-doors",
            icon: "💨",
          },
          {
            title: "Impact-Rated Garage Doors",
            text: "Built for stronger resistance to flying debris and impact events.",
            href: "/impact-rated-garage-doors",
            icon: "🛡️",
          },
          {
            title: "Miami-Dade Rated Doors",
            text: "A strong recognized storm-performance option for South Florida homes.",
            href: "/miami-dade-rated-garage-doors",
            icon: "🏝️",
          },
          {
            title: "Book Service",
            text: "Get direct help choosing the right hurricane garage door option for your home.",
            href: "/book-service",
            icon: "📞",
          },
        ]}
      />

      <ProjectGallerySection
        eyebrow="Real Installations"
        heading="Recent Garage Door Projects"
        intro="Real homes. Real installs. Real curb appeal improvements from SecureLifts projects across South Florida."
        images={[
          {
            src: "/hurricane-custom-hero-v3.png",
            alt: "Custom hurricane garage doors installed on a luxury South Florida home",
            title: "Custom Hurricane Garage Doors",
            text: "Premium custom doors designed to upgrade curb appeal while adding stronger storm-ready protection.",
          },
          {
            src: "/hurricane-carriage-house-hero-clean.png",
            alt: "Carriage house hurricane garage doors installed on a South Florida home",
            title: "Carriage House Style",
            text: "Decorative carriage-style doors that bring warmth, character, and stronger storm performance together.",
          },
          {
            src: "/hurricane-modern-hero.png",
            alt: "Modern hurricane garage doors installed on a South Florida home",
            title: "Modern Storm-Rated Doors",
            text: "Clean modern lines, premium design, and storm-ready construction for contemporary homes.",
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

      <section className="bg-gray-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white/5 px-8 py-14 text-center md:px-12">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Get a Hurricane Garage Door That Actually Protects the Home
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/85">
            SecureLifts helps South Florida homeowners choose and install storm
            ready garage doors built for performance, reliability, and real curb
            appeal.
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
              FAQs
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Hurricane Garage Door FAQs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Straight answers for homeowners comparing stronger garage door
              options in South Florida.
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