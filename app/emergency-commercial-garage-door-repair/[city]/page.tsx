"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound, useParams } from "next/navigation";
import { getCityData, getAllCitySlugs } from "../../lib/cityPages";
import {
  FaCheckCircle,
  FaWarehouse,
  FaTools,
  FaClock,
  FaGoogle,
  FaIndustry,
  FaBolt,
  FaExclamationTriangle,
} from "react-icons/fa";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Securelifts";

function formatCity(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function EmergencyCommercialGarageDoorRepairCityPage() {
  const params = useParams();
  const citySlug = Array.isArray(params?.city) ? params.city[0] : params?.city;

  if (!citySlug) notFound();
const cityData = getCityData(citySlug);

  const city = formatCity(citySlug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Emergency Commercial Garage Door Repair in ${city}`,
        serviceType: "Emergency Commercial Garage Door Repair",
        areaServed: {
          "@type": "City",
          name: city,
        },
        provider: {
          "@type": "LocalBusiness",
          name: "SecureLifts",
          telephone: "+1-866-828-1818",
          url: "https://securelifts.com",
          sameAs: [GOOGLE_REVIEWS_URL],
        },
        url: `https://securelifts.com/emergency-commercial-garage-door-repair/${citySlug}`,
        description: `SecureLifts provides emergency commercial garage door repair in ${city} for warehouses, industrial sites, storefronts, and business properties that need fast response and dependable service.`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://securelifts.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Emergency Commercial Garage Door Repair",
            item: "https://securelifts.com/emergency-commercial-garage-door-repair",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: city,
            item: `https://securelifts.com/emergency-commercial-garage-door-repair/${citySlug}`,
          },
        ],
      },
    ],
  };

  const emergencyIssues = [
    "Commercial door stuck open or closed",
    "Broken spring, cable, or roller causing shutdown",
    "Door off track or unsafe to operate",
    "Operator failure blocking daily workflow",
    "Impact damage affecting access or security",
    "Emergency condition creating business downtime",
  ];

  const emergencyServices = [
    "Emergency commercial garage door repair",
    "Same-day urgent service response",
    "Broken spring and cable correction",
    "Track, roller, and hardware repair",
    "Commercial operator troubleshooting",
    "Temporary stabilization and safe restoration",
  ];

  const propertyTypes = [
    "Warehouses",
    "Industrial facilities",
    "Commercial storefronts",
    "Service bays",
    "Distribution centers",
    "Business rear-access doors",
  ];

  const whyLeft = [
    `Fast emergency response in ${city}`,
    "Focused on reducing downtime and restoring access",
    "Professional communication during urgent situations",
  ];

  const whyRight = [
    "Commercial repair built around real business needs",
    "Dependable service when access cannot wait",
    "Trusted local support across South Florida",
  ];

  const reviews = [
    {
      name: `${city} Operations Manager`,
      text: `SecureLifts responded fast when our commercial door failed and helped us get operations moving again in ${city}.`,
    },
    {
      name: `${city} Property Manager`,
      text: "They handled the emergency professionally, explained the issue clearly, and moved quickly without making the situation worse.",
    },
    {
      name: `${city} Business Owner`,
      text: "Fast arrival, strong communication, and real urgency. Exactly what you want when a commercial door problem affects business.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Script
        id={`schema-emergency-commercial-garage-door-repair-${citySlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />


      {/* HERO */}
      <section className="bg-slate-950 py-32 text-white md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
          <div className="max-w-2xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Emergency Commercial Garage Door Repair {city}
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Emergency Commercial Garage Door Repair in {city}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              When a commercial garage door fails unexpectedly, the problem
              affects access, workflow, safety, and revenue fast. SecureLifts
              provides emergency commercial garage door repair for businesses
              that need rapid response and dependable service without delay.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              The goal is simple: stabilize the situation, restore safe
              operation, and help keep the business moving.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:8668281818"
                className="rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
              >
                Call (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-black"
              >
                Book Service
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <FaBolt />
                Urgent Response
              </span>
              <span className="inline-flex items-center gap-2">
                <FaWarehouse />
                Commercial Focus
              </span>
              <span className="inline-flex items-center gap-2">
                <FaClock />
                Downtime Matters
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image
              src="/loading-dock-door-repair-team.png"
              alt={`Emergency commercial garage door repair team in ${city}`}
              width={900}
              height={700}
              className="h-[460px] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* EMERGENCY ISSUES */}
      <section className="border-t border-slate-100 py-32 md:py-36">
        <div className="mx-auto grid max-w-7xl items-start gap-20 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Emergency Commercial Door Problems
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              When access stops, every minute starts costing the business
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Emergency commercial door problems create immediate disruption.
              They can block shipping, stop workflow, affect safety, or leave
              the property unsecured. The response needs to be fast and the work
              needs to be handled correctly.
            </p>
          </div>

          <div className="grid gap-4">
            {emergencyIssues.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <FaExclamationTriangle className="shrink-0 text-red-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY SERVICES */}
      <section className="border-t border-slate-100 bg-slate-50 py-32 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Emergency Service Options in {city}
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Emergency repair built around speed, access, and safe restoration
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Emergency service should do more than show up. It should help
              stabilize the situation, protect the property, and restore access
              as quickly and safely as possible.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {emergencyServices.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm"
              >
                <div className="flex min-h-[78px] items-center justify-center gap-4 text-center">
                  <FaTools className="shrink-0 text-xl text-red-600" />
                  <p className="max-w-[220px] text-base font-semibold leading-6 text-slate-900">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="border-t border-slate-100 py-32 md:py-36">
        <div className="mx-auto grid max-w-7xl items-start gap-20 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Commercial Properties We Support
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Emergency response across a wide range of business properties
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              SecureLifts supports emergency commercial door repair for
              properties that depend on safe, working access every day. When the
              door problem cannot wait, the response should not wait either.
            </p>
          </div>

          <div className="grid gap-4">
            {propertyTypes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <FaIndustry className="shrink-0 text-red-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-slate-100 py-32 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="pb-10 md:pb-14">
            <h2 className="text-4xl font-black md:text-5xl">
              Why SecureLifts
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              {whyLeft.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <FaCheckCircle className="shrink-0 text-red-600" />
                  <span className="text-lg leading-7">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {whyRight.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <FaCheckCircle className="shrink-0 text-red-600" />
                  <span className="text-lg leading-7">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-8 bg-white md:h-12" />

      {/* REVIEWS */}
      <section className="border-t border-slate-800 bg-slate-950 py-32 text-white md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-3">
                <FaGoogle className="text-2xl text-red-400" />
                <p className="text-base font-bold uppercase tracking-[0.3em] text-red-400">
                  Google Reviews
                </p>
              </div>

              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                Commercial emergencies require trust, speed, and follow-through
              </h2>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:bg-slate-100"
            >
              Read Reviews on Google
            </a>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-3xl bg-white/5 p-8">
                <div className="mb-4 text-yellow-400">★★★★★</div>
                <p className="text-slate-300 leading-7">{review.text}</p>
                <p className="mt-6 font-bold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-red-600 py-32 text-white md:py-36">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Need emergency commercial garage door repair in {city}?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for fast emergency commercial repair that helps
            restore access, reduce downtime, and protect operations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:8668281818"
              className="rounded-xl bg-slate-950 px-8 py-4 font-bold text-white"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-black"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}