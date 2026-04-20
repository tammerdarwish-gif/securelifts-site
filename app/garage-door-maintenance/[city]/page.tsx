import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaMapMarkerAlt,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
  FaCogs,
  FaWrench,
  FaBolt,
} from "react-icons/fa";

import { getAllCitySlugs, getCityData } from "@/lib/cityPages";

function formatCityName(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

type CityPageData = {
  city?: string;
  nearbyAreas?: string[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = getCityData(city) as CityPageData | undefined;

  const cityName = data?.city?.trim() || formatCityName(city);
  const title = `Garage Door Maintenance in ${cityName} | SecureLifts`;
  const description = `Professional garage door maintenance in ${cityName}. Tune-ups, safety inspections, lubrication, balancing, and preventive service to keep your garage door operating safely and reliably.`;
  const canonical = `https://securelifts.com/garage-door-maintenance/${city}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "SecureLifts",
      type: "website",
      images: [
        {
          url: "/garage-door-maintenance-plans.png",
          width: 1200,
          height: 630,
          alt: `Garage door maintenance plans and preventive service in ${cityName}`,
        },
      ],
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = getCityData(city);

  if (!data) {
    notFound();
  }

  const pageData = data as CityPageData;
  const cityName = pageData.city?.trim() || formatCityName(city);

  const maintenanceItems = [
    "Full garage door tune-up and operational inspection",
    "Spring, cable, hinge, and fastener wear check",
    "Roller condition and track alignment inspection",
    "Door balance test and opener performance review",
    "Safety sensor inspection and reversal test",
    "Lubrication of moving parts and hardware tightening",
  ];

  const benefits = [
    "Helps reduce surprise breakdowns and emergency service calls",
    "Keeps the garage door moving smoother and quieter",
    "Catches worn parts before they create bigger repair costs",
    "Improves safety and long-term system reliability",
  ];

  const highlightCards = [
    {
      icon: <FaTools />,
      title: "Preventive tune-ups",
      text: `Routine garage door maintenance in ${cityName} helps catch wear early before it turns into a broken spring, damaged cable, or opener failure.`,
    },
    {
      icon: <FaShieldAlt />,
      title: "Safer operation",
      text: "A maintenance visit checks critical safety points so the door opens, closes, and reverses the way it should.",
    },
    {
      icon: <FaClock />,
      title: "Longer system life",
      text: "Regular inspections, lubrication, and adjustments help reduce strain across the entire garage door system.",
    },
  ];

  const planCards = [
    {
      title: "Basic Tune-Up",
      icon: <FaCogs />,
      text: "Best for homeowners who want a general inspection, lubrication, and adjustment visit to keep the door operating correctly.",
      points: [
        "Operational inspection",
        "Lubrication of moving parts",
        "Basic safety check",
      ],
    },
    {
      title: "Preventive Maintenance",
      icon: <FaWrench />,
      text: "Ideal for homeowners who want a more detailed service visit focused on wear points, balance, and future repair risk.",
      points: [
        "Tune-up and balancing",
        "Roller, hinge, spring, and cable inspection",
        "Hardware tightening and opener check",
      ],
    },
    {
      title: "Priority Care",
      icon: <FaBolt />,
      text: "A stronger maintenance option for doors with heavier use, aging hardware, or homeowners who want more proactive upkeep.",
      points: [
        "Full preventive inspection",
        "Higher attention to worn or aging parts",
        "Recommended next-step planning",
      ],
    },
  ];

  const nearbyAreas =
    pageData.nearbyAreas ?? [
      `Homes near ${cityName}`,
      `Neighborhoods around ${cityName}`,
      "Nearby South Florida areas",
    ];

  const faqs = [
    {
      question: `Do you offer garage door maintenance in ${cityName}?`,
      answer: `Yes. SecureLifts provides garage door maintenance in ${cityName} including tune-ups, inspections, lubrication, balancing, and preventive service to help keep the system operating safely and reliably.`,
    },
    {
      question: "What is included in a garage door maintenance visit?",
      answer:
        "A maintenance visit can include inspecting springs, cables, rollers, hinges, opener settings, safety sensors, door balance, track condition, hardware tightness, and lubrication of moving parts.",
    },
    {
      question: "How often should a garage door be serviced?",
      answer:
        "Most homeowners should schedule maintenance at least once a year. Doors with heavier daily use or older hardware may benefit from more frequent service.",
    },
    {
      question: "Can maintenance help prevent broken springs or cables?",
      answer:
        "Maintenance cannot stop every failure, but it can identify wear earlier, reduce strain on the system, and lower the chance of bigger breakdowns being ignored.",
    },
    {
      question: "Why is my garage door getting louder over time?",
      answer:
        "Noise often comes from worn rollers, loose hardware, lack of lubrication, or a door that is not balanced correctly. Maintenance helps address those issues before they worsen.",
    },
    {
      question: "Do you inspect the opener during maintenance?",
      answer:
        "Yes. We check opener performance, sensor alignment, reversal behavior, and general operation as part of a full-system maintenance visit.",
    },
    {
      question: `Is garage door maintenance worth it in ${cityName} if the door still works?`,
      answer:
        "Yes. The best time to service a garage door is before it fails. Preventive maintenance helps avoid emergency breakdowns, unsafe operation, and surprise repair costs.",
    },
    {
      question: `Can I book garage door maintenance online for ${cityName}?`,
      answer: `Yes. You can call SecureLifts directly or use the Book Service button to schedule garage door maintenance in ${cityName}.`,
    },
  ];

  const reviewCards = [
    {
      name: "Michael R.",
      text: `They caught wear early during maintenance in ${cityName} and helped us avoid a much bigger repair later.`,
    },
    {
      name: "Jessica T.",
      text: "The service felt organized, professional, and much more thorough than a basic tune-up from most companies.",
    },
    {
      name: "Daniel P.",
      text: "Door runs smoother, quieter, and more reliably now. Strong communication and clean work from start to finish.",
    },
  ];

  const relatedLinks = [
    {
      href: `/garage-door-repair/${city}`,
      label: `Garage Door Repair in ${cityName}`,
    },
    {
      href: `/garage-door-opener-repair/${city}`,
      label: `Garage Door Opener Repair in ${cityName}`,
    },
    {
      href: `/garage-door-cable-repair/${city}`,
      label: `Garage Door Cable Repair in ${cityName}`,
    },
    {
      href: `/garage-door-off-track-repair/${city}`,
      label: `Off-Track Garage Door Repair in ${cityName}`,
    },
    {
      href: `/broken-spring-repair/${city}`,
      label: `Broken Spring Repair in ${cityName}`,
    },
    {
      href: `/emergency-garage-door-repair/${city}`,
      label: `Emergency Garage Door Repair in ${cityName}`,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="h-[300px] w-full md:h-[420px] lg:h-[520px]"
          style={{
            backgroundImage: "url('/securelifts-van.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent px-6 pb-6 pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-3">
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <span className="text-white/70">Service:</span> Garage Door Maintenance
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <span className="text-white/70">Area:</span> {cityName}
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <span className="text-white/70">Focus:</span> Preventive Care
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              <FaMapMarkerAlt className="text-red-500" />
              Garage Door Maintenance in {cityName}
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Garage Door Maintenance in {cityName}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
              Prevent costly failures before they happen. SecureLifts provides professional garage door maintenance in {cityName} with tune-ups, inspections, lubrication, balancing, and full-system checks designed to keep your door operating safely, quietly, and reliably.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span>Trusted local service</span>
              <span className="text-slate-300">•</span>
              <span>Preventive maintenance in {cityName}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:8668281818"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-red-700"
              >
                <FaPhoneAlt className="text-white" />
                <span className="text-white">(866) 828-1818</span>
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Book Service
                <FaArrowRight className="text-sm" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <FaCheckCircle className="mt-1 text-red-600" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                What’s Included
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                What’s included in a garage door maintenance visit
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                A good maintenance visit should do more than spray lubricant and leave. SecureLifts looks at the moving parts, checks the overall condition of the system, and helps identify wear before it turns into a bigger repair problem.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {maintenanceItems.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <FaCheckCircle className="mt-1 text-red-600" />
                    <span className="font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-700">
              <FaClock className="text-red-600" />
              Preventive Service Available
            </div>

            <h3 className="mt-4 text-2xl font-black leading-tight">
              Need garage door maintenance in {cityName}?
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Routine service helps reduce stress on the system, identify worn parts early, and keep the garage door operating more smoothly. This is the smarter time to address problems before they become emergency repairs.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Tune-ups and lubrication
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Spring, cable, and roller inspection
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Balance and opener testing
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Preventive safety review
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:8668281818"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-red-700"
              >
                <FaPhoneAlt className="text-white" />
                <span className="text-white">(866) 828-1818</span>
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Book Service
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Why SecureLifts
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Why homeowners in {cityName} schedule maintenance with SecureLifts
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A maintenance visit should make the system safer, quieter, and more dependable. It should also help you avoid the surprise breakdowns that usually happen at the worst time.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {highlightCards.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-red-50 p-4 text-red-600">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Maintenance Plan Options
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Maintenance options built for different homeowners
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Some homeowners just want a clean tune-up. Others want a stronger preventive visit that helps them stay ahead of aging parts and heavier daily use. The goal is to match the level of maintenance to the condition of the system and how much reliability you want.
            </p>

            <div className="mt-8 grid gap-4">
              {planCards.map((plan) => (
                <div
                  key={plan.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 text-red-600">
                    {plan.icon}
                    <h3 className="text-2xl font-bold text-slate-900">{plan.title}</h3>
                  </div>
                  <p className="mt-4 leading-7 text-slate-600">{plan.text}</p>
                  <div className="mt-5 grid gap-3">
                    {plan.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <FaCheckCircle className="mt-1 text-red-600" />
                        <span className="font-medium text-slate-800">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
            <img
              src="/garage-door-maintenance-plans.png"
              alt="SecureLifts garage door maintenance plan options"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Customer Trust
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              What customers notice after maintenance service
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reviewCards.map((review) => (
              <div
                key={review.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="mt-4 leading-7 text-slate-600">{review.text}</p>
                <p className="mt-5 font-bold text-slate-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Nearby Areas
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Garage door maintenance in {cityName} and nearby areas
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            SecureLifts helps homeowners in and around {cityName} keep their garage door systems operating reliably with tune-ups, preventive inspections, and maintenance service built to reduce future breakdowns.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {nearbyAreas.map((area) => (
            <span key={area} className="rounded-full bg-slate-100 px-4 py-2">
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            FAQs
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Garage Door Maintenance FAQs
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Get quick answers about tune-ups, preventive care, maintenance timing, and what to expect when you schedule garage door maintenance in {cityName} with SecureLifts.
          </p>

          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-bold">{faq.question}</h3>
                <p className="mt-2 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Related Services
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            More garage door services in {cityName}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore more garage door services available in {cityName}, from repairs and opener work to emergency service and broken spring replacement.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
            >
              <span>{item.label}</span>
              <FaArrowRight className="text-red-600" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-red-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Need Garage Door Maintenance in {cityName}?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call now or book online for preventive garage door maintenance in {cityName} with SecureLifts.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:8668281818"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-slate-950"
            >
              <FaPhoneAlt className="text-slate-950" />
              <span className="text-slate-950">Call (866) 828-1818</span>
            </a>

            <Link
              href="/book-service"
              className="inline-flex rounded-xl border border-white px-8 py-4 font-bold text-white"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}