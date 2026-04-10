
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaMapMarkerAlt,
  FaTools,
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import { getCityData } from "../../lib/cityPages";
function formatCityName(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return [];
}

type CityPageData = {
  city?: string;
  nearbyAreas?: string[];
};

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

  const heroTitle = `Garage Door Opener Repair in ${cityName}`;
  const heroText = `SecureLifts provides fast, professional garage door opener repair in ${cityName}. If your opener is unresponsive, reversing unexpectedly, or struggling to lift the door, we can diagnose and fix it quickly.`;

  const nearbyAreas =
    pageData.nearbyAreas ?? [
      `Homes near ${cityName}`,
      `Nearby neighborhoods around ${cityName}`,
      "Surrounding South Florida areas",
    ];

  const openerProblems = [
    "Garage door opener not responding",
    "Remote not working",
    "Wall button not working",
    "Opener motor runs but door does not move",
    "Door reverses unexpectedly",
    "Sensor problems",
    "Door stops halfway",
    "Noisy opener or grinding sounds",
  ];

  const reasons = [
    "Fast response and organized scheduling",
    "Clear communication from start to finish",
    "Professional workmanship without wasted time",
    "Dependable parts and proper troubleshooting",
    "Cleaner service experience homeowners can trust",
    "Repairs focused on long-term reliability",
  ];

  const localProof = [
    `Responsive service in ${cityName}`,
    "Opener diagnostics handled correctly",
    "Sensors, motors, and controls checked carefully",
    "Cleaner workmanship without wasted time",
  ];

  const trustStats = [
    { label: "Same-day service", value: "Available" },
    { label: "Service area", value: cityName },
    { label: "Repair focus", value: "Garage door openers" },
  ];

  const reviewCards = [
    {
      name: "Michael R.",
      text: `Our opener stopped working without warning and SecureLifts got it repaired fast in ${cityName}.`,
    },
    {
      name: "Jessica T.",
      text: "They explained the issue clearly, fixed the opener properly, and made the whole process feel organized.",
    },
    {
      name: "Daniel P.",
      text: "Fast service, clean work, and no runaround. The garage door opener works smoothly again.",
    },
  ];

  const faqs = [
    {
      question: `Do you repair garage door openers in ${cityName}?`,
      answer: `Yes. SecureLifts provides garage door opener repair in ${cityName}, including motors, remotes, wall controls, sensors, and opener systems that stop or reverse unexpectedly.`,
    },
    {
      question: `Why is my garage door opener not responding?`,
      answer:
        "Common causes include power issues, failed wall controls, sensor problems, worn internal components, or remote programming issues. We diagnose the opener before recommending the right fix.",
    },
    {
      question: `Can you fix garage door opener sensors in ${cityName}?`,
      answer:
        "Yes. If your door will not close, reverses unexpectedly, or has blinking sensor lights, we can inspect and repair alignment or sensor-related problems.",
    },
    {
      question: `Should I repair or replace my garage door opener?`,
      answer:
        "That depends on the age of the opener, the specific failure, and the condition of the rest of the system. We can tell you whether repair makes sense or if replacement is the smarter move.",
    },
    {
      question: `Do you offer same-day opener repair in ${cityName}?`,
      answer:
        `Yes. SecureLifts offers fast response for garage door opener repair in ${cityName}, depending on scheduling and parts availability.`,
    },
    {
      question: `Can I book opener repair online for ${cityName}?`,
      answer:
        `Yes. You can call SecureLifts directly or use the Book Us Now button to schedule garage door opener repair service in ${cityName}.`,
    },
  ];

  const highlightCards = [
    {
      icon: <FaTools className="text-2xl" />,
      title: "Accurate diagnostics",
      text: "We confirm whether the issue is with the opener itself, the safety sensors, the controls, or another part of the door system.",
    },
    {
      icon: <FaBolt className="text-2xl" />,
      title: "Reliable opener repairs",
      text: "We fix common opener problems quickly so the door operates safely and smoothly again without unnecessary replacement.",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Professional service",
      text: "Homeowners get clear communication, clean workmanship, and a repair experience that feels organized from start to finish.",
    },
  ];
  const relatedLinks = [
  {
    href: `/garage-door-repair/${city}`,
    label: `Garage Door Repair in ${cityName}`,
  },
  {
    href: `/broken-spring-repair/${city}`,
    label: `Broken Spring Repair in ${cityName}`,
  },
  
  {
    href: `/off-track-garage-door-repair/${city}`,
    label: `Off-Track Garage Door Repair in ${cityName}`,
  },
  {
    href: `/emergency-garage-door-repair/${city}`,
    label: `Emergency Garage Door Repair in ${cityName}`,
  },
  {
    href: `/garage-door-installation/${city}`,
    label: `Garage Door Installation in ${cityName}`,
  },
  {
    href: `/garage-door-replacement/${city}`,
    label: `Garage Door Replacement in ${cityName}`,
  },
];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO IMAGE ONLY */}
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
          <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                <span className="text-white/70">{stat.label}:</span> {stat.value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              <FaMapMarkerAlt className="text-red-500" />
              Garage Door Opener Repair in {cityName}
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              {heroTitle}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
              {heroText}
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
              <span>Fast response in {cityName}</span>
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
                Book Us Now
                <FaArrowRight className="text-sm" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {localProof.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <FaCheckCircle className="mt-1 text-red-600" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4">
              {openerProblems.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <FaCheckCircle className="mt-1 text-red-600" />
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-700">
              <FaClock className="text-red-600" />
              Same-Day Opener Repair
            </div>

            <h3 className="mt-4 text-2xl font-black leading-tight">
              Need garage door opener repair in {cityName}?
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Fast response. Professional repair. No wasted time. We handle unresponsive openers, reversing doors, bad sensors, and worn opener components with a cleaner service experience.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Remote and wall control issues
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Sensor troubleshooting
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Opener motor problems
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Doors that reverse or stop
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
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Book Us Now
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Why SecureLifts
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Why homeowners in {cityName} choose SecureLifts for opener repair
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Garage door opener problems can come from multiple parts of the system. SecureLifts focuses on accurate diagnosis, dependable repairs, and a smoother service experience.
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

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {reasons.map((r) => (
              <div
                key={r}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <FaCheckCircle className="mt-1 text-red-600" />
                <span className="font-medium text-slate-800">{r}</span>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Customer Trust
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                What customers notice about the service
              </h3>
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
        </div>
      </section>

      {/* NEARBY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Nearby Areas
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Garage door opener repair in {cityName} and nearby areas
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            SecureLifts also helps homeowners in and around {cityName} with opener issues, sensor problems, reversing doors, and related garage door repair needs.
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

      {/* FAQ */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            FAQs
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Garage Door Opener Repair Questions in {cityName}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Get quick answers about scheduling, opener problems, and what to expect when you call SecureLifts for garage door opener repair in {cityName}.
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
      Explore other garage door services available in {cityName}, from urgent
      repairs to full replacement and new installation.
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

      {/* CTA */}
      <section className="bg-red-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Need Garage Door Opener Repair Today?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call now or book online for fast professional garage door opener repair in {cityName}.
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
              Book Us Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}