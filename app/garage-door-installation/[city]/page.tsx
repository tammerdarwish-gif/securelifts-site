import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaMapMarkerAlt,
  FaTools,
  FaShieldAlt,
  FaHome,
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

  const installBenefits = [
    "Improves curb appeal instantly",
    "Better door balance and smoother operation",
    "Reduced noise and vibration",
    "Stronger safety and reliability",
    "Modern style and design options",
    "Long-term performance with proper installation",
  ];

  const installReasons = [
    "Old or worn-out garage door",
    "Frequent repairs adding up",
    "Bent panels or structural damage",
    "Outdated appearance",
    "Poor door performance or noise",
    "Upgrade for home value",
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
    href: `/emergency-garage-door-repair/${city}`,
    label: `Emergency Garage Door Repair in ${cityName}`,
  },
    {
    href: `/garage-door-replacement/${city}`,
    label: `Garage Door Replacement in ${cityName}`,
  },
];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 items-start">

          {/* LEFT */}
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              <FaMapMarkerAlt className="text-red-500" />
              Garage Door Installation in {cityName}
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Professional Garage Door Installation in {cityName}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
              SecureLifts provides clean, professional garage door installation in {cityName}. 
              Whether you’re replacing an old door or upgrading your home, we install it the right way — 
              balanced, aligned, and built for long-term performance.
            </p>

            {/* TRUST */}
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-1 text-yellow-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </span>
              <span>Trusted local service</span>
            </div>

            {/* CTA */}
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
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold hover:bg-slate-100"
              >
                Book Service
                <FaArrowRight />
              </Link>
            </div>

            {/* BENEFITS */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {installBenefits.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border bg-slate-50 p-5 h-full"
                >
                  <FaCheckCircle className="text-red-600 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[500px]">
              <img
                src="/mew-garage-door-installation.jpg"
                alt="Garage door installation"
                className="w-full h-[250px] object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* WHEN TO REPLACE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-black">
            When installation is the smarter move
          </h2>

          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Not every garage door should be repaired. In many cases, replacing the door 
            is the better long-term investment — improving appearance, reliability, and value.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {installReasons.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border bg-white p-5"
              >
                <FaCheckCircle className="text-red-600 mt-1" />
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
            Why homeowners choose SecureLifts
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow">
              <FaHome className="text-red-600 text-2xl" />
              <h3 className="mt-4 font-bold">Better appearance</h3>
              <p className="mt-2 text-slate-600">
                A new garage door upgrades the entire look of your home.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <FaTools className="text-red-600 text-2xl" />
              <h3 className="mt-4 font-bold">Installed correctly</h3>
              <p className="mt-2 text-slate-600">
                Proper setup prevents future issues and ensures smooth operation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <FaShieldAlt className="text-red-600 text-2xl" />
              <h3 className="mt-4 font-bold">Long-term reliability</h3>
              <p className="mt-2 text-slate-600">
                We focus on performance, not shortcuts.
              </p>
            </div>
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
      <section className="bg-red-600 text-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black">
            Ready for a new garage door?
          </h2>

          <p className="mt-5 text-lg text-red-100">
            Call now or book online for professional garage door installation in {cityName}.
          </p>
<div className="mt-8 flex justify-center gap-4">
  <a
    href="tel:8668281818"
    style={{ backgroundColor: "#000000", color: "#ffffff" }}
    className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold"
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