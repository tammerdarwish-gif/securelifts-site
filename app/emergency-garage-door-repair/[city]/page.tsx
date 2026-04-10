import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaBolt,
} from "react-icons/fa";

import { getAllCitySlugs, getCityData } from "@/lib/cityPages";

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export default async function EmergencyGarageDoorRepairCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = getCityData(city);

  if (!data) notFound();

  const cityName = data.city;
  const nearbyAreas = data.nearbyAreas ?? [
    `Homes near ${cityName}`,
    `Nearby neighborhoods around ${cityName}`,
    "Surrounding South Florida areas",
  ];

  const emergencies = [
    "Garage door won’t open or close",
    "Broken springs or snapped cables",
    "Door stuck halfway or off track",
    "Loud grinding or sudden failure",
    "Opener not responding",
    "Door fell or became unstable",
  ];

  const reasons = [
    "Fast response and organized scheduling",
    "Clear communication start to finish",
    "Professional workmanship without shortcuts",
    "Proper diagnostics before repair",
    "Reliable parts and long-term fixes",
    "Clean and efficient service experience",
  ];

  const faqs = [
    {
      question: `Do you offer emergency garage door repair in ${cityName}?`,
      answer: `Yes. SecureLifts provides emergency garage door repair in ${cityName} for doors that are stuck, unsafe, off track, or no longer operating properly.`,
    },
    {
      question: "What counts as a garage door emergency?",
      answer:
        "A stuck open door, broken spring, snapped cable, unsafe off-track door, or garage door that will not secure your home should be treated as an emergency.",
    },
    {
      question: "Can you fix a garage door that won’t open or close?",
      answer:
        "Yes. We diagnose the cause quickly and repair the issue safely so the door can operate properly again.",
    },
    {
      question: "Do you offer same-day service?",
      answer:
        "Yes. We offer fast response and same-day emergency service when scheduling allows.",
    },
    {
      question: `Can I book emergency service online in ${cityName}?`,
      answer: `Yes. You can call now or use the Book Service button to request emergency garage door repair in ${cityName}.`,
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
      href: `/off-track-garage-door-repair/${city}`,
      label: `Off-Track Garage Door Repair in ${cityName}`,
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
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-20">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
          {/* LEFT */}
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              <FaMapMarkerAlt className="text-red-600" />
              Emergency Garage Door Repair in {cityName}
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Emergency Garage Door Repair in {cityName}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              When your garage door fails unexpectedly, you need fast, reliable
              service. SecureLifts responds quickly to restore safety and
              function without delays.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span>Fast local response</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:8668281818"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
              >
                <FaPhoneAlt className="text-white" />
                <span className="text-white">(866) 828-1818</span>
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Book Service
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-700">
              <FaClock className="text-red-600" />
              Same-Day Emergency Service
            </div>

            <h2 className="mt-4 text-2xl font-black leading-tight md:text-3xl">
              Need urgent repair in {cityName}?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We respond quickly to secure your home, stabilize the system, and
              restore safe door operation without wasted time.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Broken spring emergencies
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Doors stuck open or closed
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Off-track or unsafe doors
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                Sudden opener failures
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

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <FaBolt className="text-red-600" />
                Urgent Response
              </span>
              <span className="inline-flex items-center gap-2">
                <FaCheckCircle className="text-red-600" />
                Safe Repair Process
              </span>
            </div>
          </div>
        </div>

        {/* BULLETS + IMAGE - same top section, full width */}
        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
          <div className="min-w-0 grid gap-4">
            {emergencies.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-red-600" />
                <span className="flex-1 leading-7 text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="w-full lg:max-w-[360px] lg:justify-self-end">
            <img
              src="/garage-tech.jpg"
              alt="Emergency garage door repair team"
              className="block h-[420px] w-full rounded-2xl border border-slate-200 object-cover object-center shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-black md:text-4xl">
            Why choose SecureLifts
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <FaCheckCircle className="mt-1 text-red-600" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
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
            Emergency garage door repair in {cityName} and nearby areas
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            SecureLifts also helps homeowners in and around {cityName} with
            urgent garage door failures, unsafe doors, broken springs, opener
            failures, and related emergency repair needs.
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

      {/* FAQ */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            FAQs
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Emergency Garage Door Repair Questions in {cityName}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Get quick answers about urgent repairs, scheduling, and what to
            expect when you need emergency garage door service in {cityName}.
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

      {/* RELATED */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Related Services
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            More services in {cityName}
          </h2>
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
      <section className="bg-red-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Need Emergency Garage Door Repair?
          </h2>

          <p className="mt-5 text-lg text-red-100">
            Call now or book online for fast emergency garage door repair in {cityName}.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:8668281818"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 font-bold text-white"
            >
              <FaPhoneAlt className="text-white" />
              <span className="text-white">Call (866) 828-1818</span>
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
            >
              Book Service
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}