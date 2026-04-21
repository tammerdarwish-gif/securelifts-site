import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaMapMarkerAlt,
  FaTools,
  FaHome,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

import { getCityData } from "../../lib/cityPages";

export function generateStaticParams() {
  return [];
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = getCityData(city);

  if (!data) notFound();

  const cityName = data.city;

  const replaceReasons = [
    "Severely damaged or bent panels",
    "Door came off track multiple times",
    "Frequent expensive repairs",
    "Outdated or unsafe system",
    "Excessive noise or vibration",
    "Improving home value and appearance",
  ];

  const benefits = [
    "Brand new modern appearance",
    "Smoother and quieter operation",
    "Better safety and reliability",
    "Increased home value",
    "Lower maintenance long-term",
    "Proper installation from the start",
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
      href: `/garage-door-off-track-repair/${city}`,
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
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold">
              <FaMapMarkerAlt className="text-red-500" />
              Garage Door Replacement in {cityName}
            </p>

            <h1 className="mt-5 text-4xl font-black md:text-6xl">
              Garage Door Replacement in {cityName}
            </h1>

            <p className="mt-6 text-lg text-slate-600 md:text-xl">
              If your garage door is beyond repair or costing you more money over
              time, replacement is often the smarter move. SecureLifts provides
              professional garage door replacement in {cityName} with clean
              installation, dependable performance, and a better long-term result.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-600">
              <span className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span>Trusted local service</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:8668281818"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white hover:bg-red-700"
              >
                <FaPhoneAlt />
                (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Book Service
                <FaArrowRight />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border bg-slate-50 p-5"
                >
                  <FaCheckCircle className="mt-1 text-red-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[500px] overflow-hidden rounded-3xl border shadow-lg">
              <img
                src="/garage-door-replacement.jpg"
                alt={`Garage door replacement in ${cityName}`}
                className="h-[260px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO REPLACE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-black">
            When garage door replacement makes more sense
          </h2>

          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Many homeowners keep repairing an aging garage door, but there comes a
            point where replacement is the better financial and safety decision.
            If the system keeps failing, looks worn out, or has major structural
            issues, replacement usually gives you a better long-term result.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {replaceReasons.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border bg-white p-5"
              >
                <FaCheckCircle className="mt-1 text-red-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-black">
            Why choose SecureLifts for replacement
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow">
              <FaHome className="text-2xl text-red-600" />
              <h3 className="mt-4 font-bold">Upgrade your home</h3>
              <p className="mt-2 text-slate-600">
                A new garage door can dramatically improve curb appeal and make
                the home look cleaner, newer, and more valuable.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <FaTools className="text-2xl text-red-600" />
              <h3 className="mt-4 font-bold">Installed correctly</h3>
              <p className="mt-2 text-slate-600">
                Proper installation matters. We focus on fit, balance, operation,
                and long-term reliability from day one.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <FaShieldAlt className="text-2xl text-red-600" />
              <h3 className="mt-4 font-bold">Safer system</h3>
              <p className="mt-2 text-slate-600">
                New doors eliminate many of the safety issues that come with worn,
                damaged, or unstable older systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Related Services
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            More garage door services in {cityName}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore other garage door services available in {cityName}, from
            urgent repairs to full replacement and new installation.
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
          <h2 className="text-4xl font-black">
            Need Garage Door Replacement in {cityName}?
          </h2>

          <p className="mt-5 text-lg text-red-100">
            Call now or book online to replace your garage door with a clean,
            professional installation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:8668281818"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 font-bold text-white"
            >
              <FaPhoneAlt />
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center gap-2 rounded-xl border border-white bg-white px-8 py-4 font-bold text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}