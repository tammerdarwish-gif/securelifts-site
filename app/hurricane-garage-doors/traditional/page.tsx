import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InternalLinkCards from "../../components/InternalLinkCards";
import ServiceSchema from "../../components/ServiceSchema";
import FAQSchema from "../../components/FAQSchema";
import Breadcrumbs from "../../components/Breadcrumbs";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
export const metadata: Metadata = {
  title: "Traditional Hurricane Garage Doors in South Florida | SecureLifts",
  description:
    "SecureLifts installs traditional hurricane garage doors in South Florida with classic curb appeal, storm-ready strength, and premium residential design. Call (866) 828-1818.",
  openGraph: {
    title: "Traditional Hurricane Garage Doors in South Florida | SecureLifts",
    description:
      "Traditional hurricane garage doors in South Florida with classic raised-panel design and storm-ready protection installed by SecureLifts.",
    images: [
      {
        url: "/hurricane-traditional-hero.png",
        width: 1536,
        height: 1024,
        alt: "Traditional hurricane garage door installed on a South Florida home with classic raised-panel design and storm-ready construction",
      },
    ],
  },
};

export default function TraditionalHurricaneGarageDoorsPage() {
  const benefits = [
    {
      icon: "🏡",
      title: "Classic Residential Look",
      text: "Traditional hurricane garage doors keep the familiar raised-panel style homeowners already love while upgrading to a stronger storm-ready system.",
    },
    {
      icon: "🛡️",
      title: "Built for South Florida Weather",
      text: "These doors are made for homeowners who want dependable storm protection without switching to a more modern or decorative design language.",
    },
    {
      icon: "🔧",
      title: "Stronger Daily Reliability",
      text: "You are not only buying storm protection. You are also getting a stronger garage door system built for long-term use and cleaner operation.",
    },
    {
      icon: "✨",
      title: "Timeless Curb Appeal",
      text: "Traditional styles work well on a wide range of homes and stay visually relevant year after year instead of chasing short-term trends.",
    },
  ];

  const designOptions = [
    {
      title: "Short Panel Traditional Doors",
      text: "A clean, classic layout that works well on many South Florida homes and keeps the front elevation balanced.",
    },
    {
      title: "Long Panel Traditional Doors",
      text: "A more refined traditional look with longer raised sections for homeowners who want a slightly upgraded appearance.",
    },
    {
      title: "Traditional Doors with Windows",
      text: "Add top-row windows to improve curb appeal and give the garage door more architectural interest without losing the classic style.",
    },
    {
      title: "Insulated Traditional Hurricane Doors",
      text: "A stronger-feeling system with better comfort, quieter operation, and a more solid long-term result.",
    },
  ];

  const trustItems = [
    {
      icon: "⭐",
      title: "Trusted by South Florida homeowners",
      text: "Traditional styles are often chosen by homeowners who want reliability, familiar curb appeal, and a company that won’t overcomplicate the project.",
    },
    {
      icon: "🛠️",
      title: "Installed clean and correctly",
      text: "Even a classic garage door looks wrong when the fit, spacing, or hardware are off. SecureLifts installs them the right way.",
    },
    {
      icon: "⚡",
      title: "Fast estimates and direct communication",
      text: "Homeowners need clear guidance, honest recommendations, and fast follow-through when replacing or upgrading a garage door.",
    },
  ];

  const reasons = [
    "Traditional styles that still look premium on the home",
    "Storm-ready systems built for South Florida conditions",
    "Help choosing panel style, windows, color, and finish",
    "Professional installation instead of weak builder-grade shortcuts",
    "Repair, replacement, and full new-door installation available",
    "Fast estimates and clear communication from start to finish",
  ];

  const compareStyles = [
    {
      title: "Modern Hurricane Garage Doors",
      href: "/hurricane-garage-doors/modern",
    },
    {
      title: "Carriage House Hurricane Garage Doors",
      href: "/hurricane-garage-doors/carriage-house",
    },
    {
      title: "Custom Hurricane Garage Doors",
      href: "/hurricane-garage-doors/custom",
    },
  ];

  const faqs = [
    {
      question: "Are traditional hurricane garage doors still strong enough for South Florida storms?",
      answer:
        "Yes. Traditional style refers to the look, not a weak build. SecureLifts installs traditional hurricane garage doors designed for stronger storm protection and daily reliability.",
    },
    {
      question: "Can I add windows to a traditional hurricane garage door?",
      answer:
        "Yes. Many homeowners choose top-row windows to improve curb appeal while keeping the overall look classic and clean.",
    },
    {
      question: "Do traditional hurricane garage doors only work on older homes?",
      answer:
        "No. Traditional garage doors work on many home types and are often the safest choice when the homeowner wants a timeless look that will not feel outdated.",
    },
    {
      question: "Can SecureLifts help me choose the right traditional style?",
      answer:
        "Yes. We help homeowners choose the right panel layout, finish, windows, and overall appearance so the door fits the house correctly.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <FAQSchema items={faqs} />

      <ServiceSchema
        name="Traditional Hurricane Garage Doors in South Florida"
        description="SecureLifts installs traditional hurricane garage doors in South Florida with classic curb appeal, storm-ready strength, and premium residential design."
        url="https://securelifts.com/hurricane-garage-doors/traditional"
      />

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          { label: "Hurricane Garage Doors", href: "https://securelifts.com/hurricane-garage-doors" },
          { label: "Traditional Style", href: "https://securelifts.com/hurricane-garage-doors/traditional" },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hurricane Garage Doors", href: "/hurricane-garage-doors" },
          { label: "Traditional Style" },
        ]}
      />
      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden">
        <Image
          src="/traditional-hurricane-garage-doors-hero.jpg"
          alt="Traditional hurricane garage door installed on a South Florida home with classic raised-panel design and storm-ready construction"
          fill
          priority
          className="object-cover object-[68%_42%]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-end px-6 pb-16 pt-32 md:pt-36">
          <div className="max-w-[580px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              SecureLifts Classic Storm-Ready Doors
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.04] text-white md:text-6xl">
              Traditional Hurricane Garage Doors in South Florida
            </h1>

            <p className="mb-8 max-w-[540px] text-lg leading-8 text-white/90">
              Classic curb appeal with real storm-ready strength. SecureLifts
              installs traditional hurricane garage doors that protect the home
              while keeping a clean, timeless residential look.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:18668281818"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
              >
                Call Now – (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
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
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              ⭐ Trusted by South Florida homeowners
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              🛡 Built for hurricane conditions
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              ⚡ Fast quotes and clean installations
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Timeless Style, Real Protection
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              A Better Traditional Garage Door for South Florida Homes
            </h2>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              Traditional hurricane garage doors are the right choice for
              homeowners who want a stronger system without changing the visual
              character of the home. They keep the familiar residential look,
              but upgrade the performance where it matters.
            </p>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              Too many doors either look too plain or feel too weak. SecureLifts
              helps homeowners choose traditional styles that still feel clean,
              well-finished, and built for South Florida weather.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              The result is a garage door that stays visually timeless and gives
              you the confidence of a stronger storm-ready system.
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
              Traditional is ideal for timeless curb appeal, but some homeowners
              still compare modern, carriage-house, or custom styles before
              making the final decision.
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
              Why Homeowners Choose This Style
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Traditional Style with Strong Hurricane Protection
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              This style is chosen by homeowners who want reliable storm
              protection without forcing a more modern or decorative look onto
              the property.
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Traditional Design Options
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Classic Options That Still Feel Premium
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              The best traditional doors do not look cheap or flat. They look
              balanced, well-finished, and right for the home.
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

      {/* TRUST / AUTHORITY DETAILS */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Trust • Urgency • Authority
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Why SecureLifts Wins These Traditional Door Jobs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Homeowners choosing a traditional hurricane garage door want
              something that looks right, works right, and gets installed by a
              company that knows how to keep the project clean.
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
              Why Homeowners Choose SecureLifts for Traditional Hurricane Doors
            </h2>
            <p className="mb-8 text-lg leading-8 text-gray-700">
              Traditional garage doors are easy to underestimate. They still
              need the right proportions, right finish, right window layout, and
              a clean install. SecureLifts helps homeowners get the classic look
              and the storm protection right at the same time.
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
              Need Help Choosing the Right Traditional Style?
            </h3>
            <p className="mb-6 leading-7 text-gray-700">
              Some homeowners want a simpler clean look. Others want more visual
              detail through windows or upgraded panel proportions. We help you
              choose the version that fits the house best.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                What We Help You Decide
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>Panel style and proportions</li>
                <li>Window layout and placement</li>
                <li>Color and finish direction</li>
                <li>Insulated vs non-insulated option</li>
                <li>Best fit for your home’s architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              FAQs
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Traditional Hurricane Garage Door FAQs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Straight answers for homeowners comparing classic storm-ready
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
      <InternalLinkCards
  eyebrow="Compare Hurricane Door Styles"
  heading="Explore Other Hurricane Garage Door Styles"
  intro="Every home needs a different balance of style, protection, and curb appeal. Compare the main hurricane door options below."
  items={[
    {
      title: "All Hurricane Styles",
      text: "Go back to the main hurricane garage door page and compare every style option in one place.",
      href: "/hurricane-garage-doors",
      icon: "🌀",
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
      title: "Custom Doors",
      text: "Tailored hurricane garage doors built around your home’s design.",
      href: "/hurricane-garage-doors/custom",
      icon: "✨",
    },
  ]}
/>

      {/* CTA */}
      <section className="bg-gray-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white/5 px-8 py-14 text-center shadow-xl md:px-12">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Want a Traditional Look Without a Weak Garage Door?
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/85">
            SecureLifts installs traditional hurricane garage doors built for
            South Florida protection, timeless curb appeal, and dependable
            long-term performance.
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