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
  title: "Carriage House Hurricane Garage Doors in South Florida | SecureLifts",
  description:
    "SecureLifts installs carriage house hurricane garage doors in South Florida with decorative wood-style design, storm-ready strength, and premium curb appeal. Call (866) 828-1818.",
  openGraph: {
    title: "Carriage House Hurricane Garage Doors in South Florida | SecureLifts",
    description:
      "Carriage house hurricane garage doors in South Florida with decorative wood-style design and storm-ready strength installed by SecureLifts.",
    images: [
      {
        url: "/hurricane-carriage-house-hero-clean.png",
        width: 1536,
        height: 1024,
        alt: "Carriage house hurricane garage door installed on a luxury South Florida home with decorative wood-style panels and storm-ready construction",
      },
    ],
  },
};

export default function CarriageHouseHurricaneGarageDoorsPage() {
  const benefits = [
    {
      icon: "🏡",
      title: "Luxury Exterior Look",
      text: "Carriage house hurricane garage doors instantly give the home a richer, more custom appearance without sacrificing strength.",
    },
    {
      icon: "🛡️",
      title: "Storm-Ready Construction",
      text: "These doors are built for South Florida weather with stronger materials, better reinforcement, and real hurricane-focused performance.",
    },
    {
      icon: "✨",
      title: "Decorative Without Looking Cheap",
      text: "The right carriage style should feel premium, intentional, and architecturally matched to the home.",
    },
    {
      icon: "🔧",
      title: "Built for Daily Use Too",
      text: "You are not only upgrading style. You are also investing in a stronger garage door system built for long-term reliability.",
    },
  ];

  const designOptions = [
    {
      title: "Crossbuck Carriage Styles",
      text: "Classic X-pattern carriage designs for homeowners who want a timeless, estate-style appearance.",
    },
    {
      title: "Wood-Look Carriage Doors",
      text: "Get the warmth and upscale look of wood without settling for a plain builder-grade finish.",
    },
    {
      title: "Decorative Hardware Packages",
      text: "Handles, hinges, straps, and accents that make the door feel custom instead of generic.",
    },
    {
      title: "Window Layout Options",
      text: "Choose top-row windows and panel layouts that improve curb appeal while matching the house correctly.",
    },
  ];

  const reasons = [
    "Custom guidance on style, finish, hardware, and overall look",
    "Storm-ready carriage house systems built for South Florida",
    "Professional installation with clean fit and finish",
    "Repair, replacement, and full new-door installation available",
    "Fast estimates and direct communication",
    "Premium design direction instead of builder-grade guessing",
  ];

  const compareStyles = [
    {
      title: "Traditional Hurricane Garage Doors",
      text: "Classic raised-panel hurricane garage doors with timeless curb appeal and a clean, familiar look.",
      href: "/hurricane-garage-doors/traditional",
    },
    {
      title: "Modern Hurricane Garage Doors",
      text: "Clean, contemporary hurricane garage doors with sleek lines and a more architectural appearance.",
      href: "/hurricane-garage-doors/modern",
    },
    {
      title: "Custom Hurricane Garage Doors",
      text: "Tailored hurricane garage doors designed around your home’s exact style, finish, and design goals.",
      href: "/hurricane-garage-doors/custom",
    },
  ];

  const faqs = [
    {
      question: "Can carriage house garage doors still be hurricane-ready?",
      answer:
        "Yes. Carriage house refers to the look, not a weaker build. SecureLifts installs carriage house hurricane garage doors built for stronger South Florida storm protection.",
    },
    {
      question:
        "Do carriage house hurricane garage doors only work on certain homes?",
      answer:
        "They work especially well on luxury homes, Mediterranean homes, estate properties, and homes where the owner wants a warmer, more decorative appearance.",
    },
    {
      question:
        "Can I get a wood-style look without choosing a weak or high-maintenance door?",
      answer:
        "Yes. Many homeowners want the beauty of wood or carriage styling without compromising durability. We help you choose the right material and finish for that.",
    },
    {
      question: "Can SecureLifts help me choose the right carriage style?",
      answer:
        "Yes. We help homeowners choose the right panel design, hardware, windows, finish, and overall look so the door fits the property correctly.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <FAQSchema items={faqs} />

      <ServiceSchema
        name="Carriage House Hurricane Garage Doors in South Florida"
        description="Carriage house hurricane garage doors in South Florida with premium design, storm-ready strength, and upscale curb appeal."
        url="https://securelifts.com/hurricane-garage-doors/carriage-house"
      />

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          {
            label: "Hurricane Garage Doors",
            href: "https://securelifts.com/hurricane-garage-doors",
          },
          {
            label: "Carriage House",
            href: "https://securelifts.com/hurricane-garage-doors/carriage-house",
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hurricane Garage Doors", href: "/hurricane-garage-doors" },
          { label: "Carriage House" },
        ]}
      />

      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden">
        <Image
          src="/hurricane-carriage-house-hero-clean.png"
          alt="Carriage house hurricane garage door installed on a luxury South Florida home with decorative wood-style panels and storm-ready construction"
          fill
          priority
          className="object-cover object-[70%_40%]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-end px-6 pb-16 pt-32 md:pt-36">
          <div className="max-w-[580px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              SecureLifts Decorative Storm-Ready Doors
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.04] text-white md:text-6xl">
              Carriage House Hurricane Garage Doors in South Florida
            </h1>

            <p className="mb-8 max-w-[540px] text-lg leading-8 text-white/90">
              Decorative charm with real storm-ready strength. SecureLifts
              installs carriage house hurricane garage doors that upgrade curb
              appeal while protecting your home in South Florida weather.
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
              Decorative Style, Real Protection
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              A Better Looking Hurricane Garage Door for Higher-End Homes
            </h2>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              A carriage house hurricane garage door should do more than close
              the opening. It should elevate the look of the house, feel
              intentional with the architecture, and still deliver the stronger
              protection South Florida homeowners need.
            </p>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              Too many doors look generic, too flat, or too cheap once they are
              installed. SecureLifts helps homeowners avoid that by choosing a
              carriage style that actually fits the property and still performs
              under serious weather conditions.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              The result is a garage door that improves curb appeal, feels
              custom, and gives you a stronger storm-ready system at the same
              time.
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
              Carriage house is ideal for decorative curb appeal, but some
              homeowners still compare traditional, modern, or fully custom
              styles before making the final call.
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
              Carriage House Style with Strong Hurricane Protection
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              This style is chosen by homeowners who want more warmth, more
              character, and more visual impact than a standard door usually
              delivers.
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

      {/* REAL PROJECT IMAGE SECTION */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Real Project Inspiration
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Carriage House Designs That Upgrade the Entire Property
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              This style works especially well on homes where multiple garage
              doors are part of the visual front elevation. The right design
              makes the whole property look better, not just the door.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/carriage-house-real-install.jpg"
                alt="White carriage-style garage doors on a large luxury residential garage building"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid gap-6 px-8 py-8 md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Clean Multi-Door Layout
                </h3>
                <p className="leading-7 text-gray-700">
                  Carriage styling works extremely well on larger homes with
                  multiple garage bays because it adds character without making
                  the front look flat.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Better Architectural Match
                </h3>
                <p className="leading-7 text-gray-700">
                  The right panel proportions, windows, and hardware can make
                  the garage feel integrated into the home instead of looking
                  like an afterthought.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Built for South Florida
                </h3>
                <p className="leading-7 text-gray-700">
                  SecureLifts helps homeowners choose decorative carriage
                  designs that still meet the real performance demands of South
                  Florida weather.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN OPTIONS */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Carriage House Design Options
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Decorative Options That Still Feel Premium
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              The goal is not to make the door look busy. The goal is to make
              it look custom, warm, and architecturally correct.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {designOptions.map((item) => (
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
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Why SecureLifts
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Why Homeowners Choose SecureLifts for Carriage House Hurricane Doors
            </h2>
            <p className="mb-8 text-lg leading-8 text-gray-700">
              Decorative garage doors are easy to get wrong. The wrong style,
              wrong proportions, or wrong finish can make the house look worse
              instead of better. SecureLifts helps homeowners get both the look
              and the protection right.
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
              Need Help Choosing the Right Carriage Style?
            </h3>
            <p className="mb-6 leading-7 text-gray-700">
              Some homeowners want a more decorative look. Others want cleaner,
              less rustic lines. We help you choose a carriage design that fits
              the property without overdoing it.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                What We Help You Decide
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>Door style and panel layout</li>
                <li>Color and wood-look finish</li>
                <li>Decorative hardware selection</li>
                <li>Window layout and overall balance</li>
                <li>Best fit for your home’s architecture</li>
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
            title: "Modern Style",
            text: "Clean, contemporary hurricane garage doors with a sleek architectural look.",
            href: "/hurricane-garage-doors/modern",
            icon: "⬛",
          },
          {
            title: "All Hurricane Styles",
            text: "Go back to the main hurricane garage door page and compare every style option in one place.",
            href: "/hurricane-garage-doors",
            icon: "🌀",
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
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              FAQs
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Carriage House Hurricane Garage Door FAQs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Straight answers for homeowners comparing decorative storm-ready
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
            Want Decorative Charm Without a Weak Garage Door?
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/85">
            SecureLifts installs carriage house hurricane garage doors built for
            South Florida protection, decorative curb appeal, and strong
            day-to-day reliability.
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
  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg transition hover:bg-gray-100"
>
  <span className="text-slate-900">Book Service</span>
</Link>

          </div>
        </div>
      </section>
    </main>
  );
}