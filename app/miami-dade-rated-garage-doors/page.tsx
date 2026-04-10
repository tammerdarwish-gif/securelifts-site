import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ServiceSchema from "../components/ServiceSchema";
import FAQSchema from "../components/FAQSchema";
import InternalLinkCards from "../components/InternalLinkCards";
import Breadcrumbs from "../components/Breadcrumbs";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import ReviewTrustSection from "../components/ReviewTrustSection";

type IconCardItem = {
  icon: string;
  title: string;
  text: string;
};

type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

type CompareOption = {
  title: string;
  text: string;
  href: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

function SectionIntro({
  eyebrow,
  title,
  intro,
  eyebrowColor = "text-blue-700",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  eyebrowColor?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p
        className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h2>
      {intro ? <p className="text-lg leading-8 text-slate-600">{intro}</p> : null}
    </div>
  );
}

function TrustStrip() {
  const items = [
    {
      eyebrow: "Trusted Service",
      text: "Licensed & Insured in Florida",
    },
    {
      eyebrow: "Local Response",
      text: "Fast Response in South Florida",
    },
    {
      eyebrow: "Premium Work",
      text: "Premium Installation & Repair",
    },
  ];

  return (
    <section className="bg-white px-6 py-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.text}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              {item.eyebrow}
            </p>
            <p className="text-lg font-semibold text-slate-900">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function IconCardGrid({ items, columns = "md:grid-cols-2 xl:grid-cols-4" }: { items: IconCardItem[]; columns?: string }) {
  return (
    <div className={`grid gap-6 ${columns}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
            {item.icon}
          </div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h3>
          <p className="leading-7 text-slate-700">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

function CompareCardGrid({ items }: { items: CompareOption[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="mb-3 text-2xl font-semibold text-slate-900">{item.title}</h3>
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
  );
}

function ProcessGrid({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step) => (
        <div
          key={step.number}
          className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
        >
          <div className="mb-4 text-3xl font-bold text-red-600">{step.number}</div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900">{step.title}</h3>
          <p className="leading-7 text-slate-700">{step.text}</p>
        </div>
      ))}
    </div>
  );
}

function ChecklistGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-lg text-green-600">
            ✓
          </div>
          <p className="text-lg leading-7 text-slate-800">{item}</p>
        </div>
      ))}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Miami-Dade Rated Garage Doors in South Florida | SecureLifts",
  description:
    "SecureLifts installs Miami-Dade rated garage doors in South Florida built for stronger wind resistance, storm protection, and premium curb appeal. Call (866) 828-1818 for expert installation and service.",
  openGraph: {
    title: "Miami-Dade Rated Garage Doors in South Florida | SecureLifts",
    description:
      "SecureLifts installs Miami-Dade rated garage doors in South Florida built for stronger wind resistance, storm protection, and premium curb appeal.",
    images: [
      {
        url: "/miami-dade-rated-garage-doors-hero.png",
        width: 1536,
        height: 1024,
        alt: "Miami-Dade rated garage doors installed by SecureLifts in South Florida with premium residential design and storm-ready protection",
      },
    ],
  },
};

export default function MiamiDadeRatedGarageDoorsPage() {
  const benefits: IconCardItem[] = [
    {
      icon: "🛡️",
      title: "Higher-Level Storm Protection",
      text: "Miami-Dade rated garage doors are built for homeowners who want one of the strongest recognized levels of storm-ready residential door performance.",
    },
    {
      icon: "🌀",
      title: "Built for South Florida Conditions",
      text: "These systems are chosen by homeowners who take wind pressure, storm exposure, and structural protection seriously.",
    },
    {
      icon: "🏠",
      title: "Strength Without Ugly Design",
      text: "You do not have to settle for a basic-looking door just because you want stronger performance. The right door can protect and still look high-end.",
    },
    {
      icon: "🔧",
      title: "Installation Matters",
      text: "A strong product still needs a proper installation. SecureLifts installs complete door systems with long-term performance in mind.",
    },
  ];

  const styleOptions: IconCardItem[] = [
    {
      icon: "🏡",
      title: "Traditional Miami-Dade Rated Doors",
      text: "Classic raised-panel looks with stronger storm-ready construction for homes that need protection without losing timeless curb appeal.",
    },
    {
      icon: "⬛",
      title: "Modern Miami-Dade Rated Doors",
      text: "Contemporary lines, cleaner profiles, and premium finishes built into stronger South Florida-ready garage door systems.",
    },
    {
      icon: "🚪",
      title: "Carriage House Miami-Dade Rated Doors",
      text: "Decorative carriage-style looks for homeowners who want a premium architectural appearance with real storm-focused strength.",
    },
    {
      icon: "✨",
      title: "Custom Miami-Dade Rated Doors",
      text: "Tailored solutions for homeowners who want a specific look, window design, finish, or upgraded exterior statement.",
    },
  ];

  const compareOptions: CompareOption[] = [
    {
      title: "Hurricane Garage Doors",
      text: "A broader category for homeowners looking for stronger storm-ready garage door protection in South Florida.",
      href: "/hurricane-garage-doors",
    },
    {
      title: "Impact-Rated Garage Doors",
      text: "For homeowners focused on stronger resistance against debris-related storm conditions and exterior impact concerns.",
      href: "/impact-rated-garage-doors",
    },
    {
      title: "Wind-Rated Garage Doors",
      text: "For homeowners comparing options designed around higher wind pressure performance and storm-force resistance.",
      href: "/wind-rated-garage-doors",
    },
  ];

  const whyChooseUs = [
    "Straight guidance on whether Miami-Dade rated is the right move for your home",
    "Professional installation instead of weak one-size-fits-all setups",
    "Premium design options, not just builder-grade looks",
    "Help choosing style, color, windows, and hardware",
    "Repair, replacement, and full new-door installation available",
    "South Florida-focused service built around real storm concerns",
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Evaluate the Home",
      text: "We look at the existing garage door setup, the home style, and what level of storm protection makes the most sense.",
    },
    {
      number: "02",
      title: "Choose the Right Door",
      text: "We help you compare design, performance, budget, and long-term value so you do not overbuy or under-protect.",
    },
    {
      number: "03",
      title: "Professional Installation",
      text: "SecureLifts installs the complete garage door system with proper attention to fit, function, and clean final appearance.",
    },
    {
      number: "04",
      title: "Final Testing & Walkthrough",
      text: "We make sure the system operates correctly, looks right on the house, and is ready for dependable daily use.",
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: "What does Miami-Dade rated mean for a garage door?",
      answer:
        "It refers to a garage door system built to meet one of the strongest recognized levels of storm-performance expectations commonly associated with demanding South Florida conditions.",
    },
    {
      question: "Do I need a Miami-Dade rated garage door?",
      answer:
        "That depends on your location, storm exposure, protection goals, and how strong of a system you want on the house. For many South Florida homeowners, it is one of the smartest categories to consider.",
    },
    {
      question: "Can Miami-Dade rated doors still look high-end?",
      answer:
        "Yes. Homeowners can choose traditional, modern, carriage-house, and custom looks without settling for a plain or unattractive design.",
    },
    {
      question:
        "Can SecureLifts replace my current garage door with a Miami-Dade rated model?",
      answer:
        "Yes. We can inspect the current setup, recommend the right replacement options, and install a stronger storm-ready system that fits the home.",
    },
    {
      question: "Do you also repair storm-damaged garage doors?",
      answer:
        "Yes. If your current garage door is damaged, failing, or unsafe, SecureLifts can inspect it and tell you honestly whether repair makes sense or replacement is the better move.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <FAQSchema items={faqs} />
      <ServiceSchema
        name="Miami-Dade Rated Garage Doors in South Florida"
        description="SecureLifts installs Miami-Dade rated garage doors in South Florida built for stronger wind resistance, storm protection, and premium curb appeal."
        url="https://securelifts.com/miami-dade-rated-garage-doors"
      />

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          {
            label: "Miami-Dade Rated Garage Doors",
            href: "https://securelifts.com/miami-dade-rated-garage-doors",
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Miami-Dade Rated Garage Doors" },
        ]}
      />

      <section className="relative min-h-[820px] overflow-hidden">
        <Image
          src="/miami-dade-rated-garage-doors-hero.png"
          alt="Miami-Dade rated garage doors installed by SecureLifts in South Florida with premium residential design and storm-ready protection"
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
              Miami-Dade Rated Garage Doors in South Florida
            </h1>

            <p
              className="mb-8 max-w-2xl text-lg leading-8 text-white/95 md:text-xl"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.62)" }}
            >
              Stronger storm protection for homeowners who do not want to gamble
              with a weak garage door. SecureLifts installs Miami-Dade rated
              garage doors built for serious wind performance, long-term
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

      <TrustStrip />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Why This Category Matters
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              One of the Strongest Storm-Focused Garage Door Choices for South Florida Homes
            </h2>
            <p className="mb-5 text-lg leading-8 text-slate-700">
              In South Florida, the garage door is not just another exterior feature. It is one of the most important pressure points on the home during major storms. When the wrong system fails, the damage can go far beyond the garage itself.
            </p>
            <p className="mb-5 text-lg leading-8 text-slate-700">
              Miami-Dade rated garage doors are chosen by homeowners who want a stronger level of confidence during hurricane season and do not want to cut corners on one of the biggest openings in the house.
            </p>
            <p className="text-lg leading-8 text-slate-700">
              SecureLifts helps you choose a system that looks right on the home, matches the level of protection you actually want, and gets installed the right way.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Compare Before You Buy
            </p>
            <h3 className="mb-4 text-2xl font-bold">
              Not Sure If Miami-Dade Rated Is the Right Fit?
            </h3>
            <p className="mb-6 leading-7 text-slate-700">
              Some homeowners need the strongest recognized storm-focused option. Others may be comparing broader hurricane, wind-rated, or impact-rated categories first.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/hurricane-garage-doors"
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Explore Hurricane Garage Doors
              </Link>

              <Link
                href="/wind-rated-garage-doors"
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Explore Wind-Rated Garage Doors
              </Link>

              <Link
                href="/impact-rated-garage-doors"
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-900 transition hover:border-red-200 hover:shadow-sm"
              >
                Explore Impact-Rated Garage Doors
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Stronger by Design"
            title="Why Homeowners Choose Miami-Dade Rated Garage Doors"
            intro="Homeowners looking for serious storm protection usually want more than standard reinforcement. They want a category associated with stronger performance expectations in demanding South Florida conditions."
            eyebrowColor="text-green-600"
          />
          <IconCardGrid items={benefits} />
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Design Options"
            title="Miami-Dade Rated Styles That Still Look High-End"
            intro="Stronger performance does not mean you need to settle for a plain, bulky, or cheap-looking garage door. The right system can protect the home and upgrade the exterior at the same time."
          />
          <IconCardGrid items={styleOptions} columns="md:grid-cols-2" />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Compare Storm Categories"
            title="Compare the Right Garage Door Protection Options"
            intro="The right decision depends on your home, your protection goals, and how seriously you want to upgrade one of the largest openings on the property."
            eyebrowColor="text-red-600"
          />
          <CompareCardGrid items={compareOptions} />
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="How We Handle It"
            title="Our Miami-Dade Rated Garage Door Process"
            intro="Clean process. Better guidance. Stronger final result."
          />
          <ProcessGrid steps={processSteps} />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Why SecureLifts"
            title="Why Homeowners Trust SecureLifts for Miami-Dade Rated Doors"
            intro="Homeowners need more than product options. They need real guidance, clean installation, and a company that understands storm protection and curb appeal together."
            eyebrowColor="text-green-600"
          />
          <ChecklistGrid items={whyChooseUs} />
        </div>
      </section>

      <InternalLinkCards
        eyebrow="Related Storm Door Options"
        heading="Compare Miami-Dade Rated Doors with Other Garage Door Categories"
        intro="Homeowners often compare Miami-Dade rated doors with hurricane, impact-rated, and wind-rated systems before making the final decision."
        items={[
          {
            title: "Hurricane Garage Doors",
            text: "See the full hurricane garage door category and compare available styles.",
            href: "/hurricane-garage-doors",
            icon: "🌀",
          },
          {
            title: "Impact-Rated Garage Doors",
            text: "Compare debris-focused storm protection options.",
            href: "/impact-rated-garage-doors",
            icon: "🛡️",
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

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            eyebrow="FAQs"
            title="Miami-Dade Rated Garage Door FAQs"
            intro="Straight answers for homeowners comparing stronger storm-rated garage door systems in South Florida."
            eyebrowColor="text-slate-500"
          />

          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="leading-7 text-slate-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white/5 px-8 py-14 text-center shadow-xl md:px-12">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Get a Miami-Dade Rated Garage Door Built for Real Storm Protection
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/85">
            SecureLifts helps South Florida homeowners choose and install stronger garage door systems without sacrificing the look of the home. If you want top-tier storm-focused protection, this is where to start.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:18668281818"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-xl border border-white bg-white px-8 py-4 text-lg font-semibold shadow-lg transition hover:bg-slate-100"
              style={{ color: "#0f172a" }}
            >
              <span style={{ color: "#0f172a" }}>Book Service</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}