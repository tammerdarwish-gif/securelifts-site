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

import { getCityData } from "@/lib/cityPages";

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

  const heroTitle = `Off-Track Garage Door Repair in ${cityName}`;
  const heroText = `SecureLifts provides fast, professional off-track garage door repair in ${cityName}. If your door is crooked, jammed, dragging, or came off the tracks, we fix it safely and quickly before the damage gets worse.`;

  const nearbyAreas =
    pageData.nearbyAreas ?? [
      `Homes near ${cityName}`,
      `Nearby neighborhoods around ${cityName}`,
      "Surrounding South Florida areas",
    ];

  const offTrackProblems = [
    "Garage door came off track",
    "Door stuck halfway",
    "Crooked or uneven door",
    "Rollers popped out of track",
    "Door dragging or grinding",
    "Bent or damaged tracks",
    "Door won’t close properly",
    "Door jams when opening",
  ];

  const localProof = [
    `Responsive service in ${cityName}`,
    "Track and roller alignment checked carefully",
    "Panels, hinges, and hardware inspected for hidden damage",
    "Cleaner workmanship without wasted time",
  ];

  const damageRisks = [
    "Off-track doors can bend sections and crack panels",
    "Misalignment can strain the opener and rollers",
    "Running the door can worsen cable and hinge damage",
    "Fast repair can prevent a full replacement situation",
  ];

  const reasons = [
    "Fast response and organized scheduling",
    "Safe track realignment process",
    "Clear communication from start to finish",
    "Professional workmanship",
    "No unnecessary replacements",
    "Reliable long-term fixes",
  ];

  const reviewCards = [
    {
      name: "Michael R.",
      text: `The door came off track and SecureLifts got it straightened out fast in ${cityName}. They caught damage we would have missed.`,
    },
    {
      name: "Jessica T.",
      text: "They explained why the door came off track, fixed it properly, and made the whole process feel organized and professional.",
    },
    {
      name: "Daniel P.",
      text: "Fast service, clean work, and no runaround. The door runs smoothly again and they checked the whole system.",
    },
  ];

  const faqs = [
    {
      question: `Can you fix an off-track garage door in ${cityName}?`,
      answer: `Yes. SecureLifts handles off-track garage door repair in ${cityName}, including realigning tracks, resetting rollers, and fixing damaged components.`,
    },
    {
      question: `Is it safe to use my garage door if it’s off track?`,
      answer:
        "No. Using an off-track door can cause more damage and become a safety hazard. It is best to stop using it and get it repaired professionally.",
    },
    {
      question: `What causes a garage door to go off track?`,
      answer:
        "Common causes include broken cables, impact damage, worn rollers, bent tracks, loose hardware, or a door that has been forced while jammed.",
    },
    {
      question: `Can an off-track door lead to more expensive repairs?`,
      answer:
        "Yes. If the door keeps running while misaligned, it can damage panels, hinges, tracks, rollers, cables, and even the opener. That is why fast repair matters.",
    },
    {
      question: `Will I need a new garage door if mine came off track?`,
      answer:
        "Not always. Many off-track doors can be repaired. But if the door has severe panel damage, bent sections, or major structural wear, replacement may be the smarter long-term move.",
    },
    {
      question: `Do you offer same-day off-track repair in ${cityName}?`,
      answer: `Yes. We provide fast response for off-track garage door repair in ${cityName}, depending on scheduling and the condition of the system.`,
    },
    {
      question: `Can I book off-track repair online?`,
      answer: `Yes. Call or book online for fast off-track garage door repair service in ${cityName}.`,
    },
  ];

  const highlightCards = [
    {
      icon: <FaTools className="text-2xl" />,
      title: "Safe realignment",
      text: "We reset rollers, tracks, and hardware carefully so the door moves correctly again without forcing damaged parts.",
    },
    {
      icon: <FaBolt className="text-2xl" />,
      title: "Fast diagnosis",
      text: "We identify whether the real issue is the track, cable, rollers, hinges, opener strain, or damage caused after the door slipped out of place.",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Repair vs replacement guidance",
      text: "If the door is too damaged to make repair the smart move, we tell you directly and help you compare replacement options.",
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
      href: `/garage-door-opener-repair/${city}`,
      label: `Garage Door Opener Repair in ${cityName}`,
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
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              <FaMapMarkerAlt className="text-red-500" />
              Off-Track Garage Door Repair in {cityName}
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              {heroTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
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
                Book Service
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

            <div className="mt-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Why fast repair matters
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                Off-track damage can spread through the whole system
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                An off-track garage door is not just a track issue. Once the door starts dragging or twisting, it can damage panels, rollers, hinges, cables, and the opener. The sooner it gets corrected, the better the chance of avoiding more expensive repairs.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {damageRisks.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <FaCheckCircle className="mt-1 text-red-600" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <img
                src="/offtrack-worse.jpg"
                alt={`Off-track garage door repair in ${cityName}`}
                className="block h-[300px] w-full object-cover object-center md:h-[360px] lg:h-[420px]"
              />
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-700">
                <FaClock className="text-red-600" />
                Same-Day Off-Track Repair
              </div>

              <h2 className="mt-4 text-2xl font-black leading-tight md:text-3xl">
                Off-track problems can turn into full door replacement
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                A door that jumps track can bend sections, strain the opener, damage rollers, and crack panels. Fast repair protects the system. If the damage is too far gone, replacement may be the smarter long-term move.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                  Roller and track realignment
                </div>
                <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                  Cable and hinge inspection
                </div>
                <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                  Panel damage evaluation
                </div>
                <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                  Replacement guidance if needed
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
                  Book Service
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Common Off-Track Problems
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Signs your garage door needs off-track repair in {cityName}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            If the door looks crooked, sounds rough, or stops moving normally, the system should be inspected before more parts get damaged.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {offTrackProblems.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <FaCheckCircle className="mt-1 text-red-600" />
              <span className="font-medium text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Why SecureLifts
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Why homeowners in {cityName} choose SecureLifts for off-track repair
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Off-track garage doors need more than a quick shove back into place. We inspect the cause, correct the alignment, and tell you honestly whether repair or replacement is the smarter move.
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
                New Door Sales Opportunity
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                Some off-track doors are repairable. Some are better replaced.
              </h3>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                This page should also convert replacement leads. If the door has severe section damage, bent panels, cracked reinforcement points, or major wear, we can help you compare repair versus new door installation.
              </p>
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Nearby Areas
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Off-track garage door repair in {cityName} and nearby areas
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            SecureLifts also helps homeowners in and around {cityName} with off-track garage doors, jammed rollers, bent tracks, and related garage door repair or replacement needs.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {nearbyAreas.map((area) => (
            <span
              key={area}
              className="rounded-full bg-slate-100 px-4 py-2"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            FAQs
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Off-Track Garage Door Repair Questions in {cityName}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Get quick answers about safety, track damage, repair urgency, and when an off-track door may push you toward replacement.
          </p>

          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white/5 p-5 rounded-xl"
              >
                <h3 className="font-bold">{faq.question}</h3>
                <p className="text-slate-300 mt-2">{faq.answer}</p>
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

      <section className="bg-red-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Need Off-Track Garage Door Repair Today?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call now or book online for fast professional off-track garage door repair in {cityName}. If the damage is too severe, we can also help with replacement options.
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