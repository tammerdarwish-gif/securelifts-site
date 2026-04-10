"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound, useParams } from "next/navigation";
import {
  FaCheckCircle,
  FaWarehouse,
  FaTools,
  FaClock,
  FaGoogle,
  FaIndustry,
  FaStore,
} from "react-icons/fa";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Securelifts";

function formatCity(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CommercialRollUpDoorRepairCityPage() {
  const params = useParams();
  const citySlug = Array.isArray(params?.city) ? params.city[0] : params?.city;

  if (!citySlug) notFound();

  const city = formatCity(citySlug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Commercial Roll-Up Door Repair in ${city}`,
        serviceType: "Commercial Roll-Up Door Repair",
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
        url: `https://securelifts.com/commercial-roll-up-door-repair/${citySlug}`,
        description: `SecureLifts provides commercial roll-up door repair in ${city} for warehouses, service bays, storefronts, and business properties that need fast response and dependable repair work.`,
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
            name: "Commercial Roll-Up Door Repair",
            item: "https://securelifts.com/commercial-roll-up-door-repair",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: city,
            item: `https://securelifts.com/commercial-roll-up-door-repair/${citySlug}`,
          },
        ],
      },
    ],
  };

  const issues = [
    "Roll-up door not opening or closing properly",
    "Bent slats, damaged curtain, or alignment issues",
    "Broken springs, cables, or barrel assembly problems",
    "Door jamming during daily use",
    "Motor or operator problems affecting access",
    "Unsafe or unreliable roll-up door movement",
  ];

  const rollUpServices = [
    "Commercial roll-up door repair",
    "Slat and curtain correction",
    "Track and guide repair",
    "Spring and tension service",
    "Operator and motor repair",
    "Emergency roll-up door service",
  ];

  const propertyTypes = [
    "Warehouses",
    "Service bays",
    "Commercial storefronts",
    "Industrial buildings",
    "Auto facilities",
    "Rear access business doors",
  ];

  const whyLeft = [
    `Fast response for commercial properties in ${city}`,
    "Focused on reducing downtime for operations",
    "Professional communication from start to finish",
  ];

  const whyRight = [
    "Repair work built for daily commercial use",
    "Reliable service for warehouses, storefronts, and industrial sites",
    "Trusted local support across South Florida",
  ];

  const reviews = [
    {
      name: `${city} Business Owner`,
      text: `SecureLifts responded quickly when our roll-up door failed and helped us get access restored fast in ${city}.`,
    },
    {
      name: `${city} Operations Supervisor`,
      text: "Professional communication, strong workmanship, and a clear understanding of how important dependable access is to daily operations.",
    },
    {
      name: `${city} Property Manager`,
      text: "They fixed the issue fast, explained what caused it, and got the roll-up door working properly again without wasting time.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Script
        id={`schema-commercial-roll-up-door-repair-${citySlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

     

      {/* HERO */}
      <section className="bg-slate-950 py-32 text-white md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
          <div className="max-w-2xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Commercial Roll-Up Door Repair {city}
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Commercial Roll-Up Door Repair in {city}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              When a commercial roll-up door fails, it affects access, workflow,
              security, and daily operations immediately. SecureLifts provides
              fast roll-up door repair for warehouses, service bays, storefronts,
              and commercial properties that need dependable service without delays.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              The goal is simple: restore safe operation, reduce downtime, and
              get the business moving again.
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
                <FaClock />
                Fast Response
              </span>
              <span className="inline-flex items-center gap-2">
                <FaStore />
                Storefront & Bay Access
              </span>
              <span className="inline-flex items-center gap-2">
                <FaIndustry />
                Built for Commercial Use
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image
              src="/Commercial-roll-up-door-repair.jpg"
              alt={`Commercial roll-up door repair team in ${city}`}
              width={900}
              height={700}
              className="h-[460px] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* COMMON ISSUES */}
      <section className="border-t border-slate-100 py-32 md:py-36">
        <div className="mx-auto grid max-w-7xl items-start gap-20 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Common Roll-Up Door Issues
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              When roll-up doors fail, access problems hit the business fast
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Commercial roll-up doors handle repeated daily use. Wear, damage,
              tension problems, and operator issues can create delays, security
              concerns, and lost time. The repair needs to be handled quickly
              and correctly.
            </p>
          </div>

          <div className="grid gap-4">
            {issues.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <FaCheckCircle className="shrink-0 text-red-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-slate-100 bg-slate-50 py-32 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Roll-Up Door Repair Services in {city}
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Commercial roll-up door repair built around speed and reliability
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Roll-up door service should restore access quickly, support safe
              operation, and reduce disruption to the property’s daily workflow.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {rollUpServices.map((item) => (
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
              Properties We Serve
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Roll-up door service across a wide range of commercial properties
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              SecureLifts works on roll-up doors used in warehouses, service
              areas, rear access points, and business properties that depend on
              reliable opening and closing every day.
            </p>
          </div>

          <div className="grid gap-4">
            {propertyTypes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <FaWarehouse className="shrink-0 text-red-600" />
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

      {/* GOOGLE REVIEWS */}
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
                Commercial clients care about speed, communication, and follow-through
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
            Need commercial roll-up door repair in {city}?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for fast commercial roll-up door repair that helps
            keep access, workflow, and operations moving.
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