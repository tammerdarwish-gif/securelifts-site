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
  FaStar,
  FaGoogle,
  FaIndustry,
} from "react-icons/fa";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Securelifts";

function formatCity(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CommercialOverheadDoorRepairCityPage() {
  const params = useParams();
  const citySlug = Array.isArray(params?.city) ? params.city[0] : params?.city;

  if (!citySlug) notFound();

  const city = formatCity(citySlug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Commercial Overhead Door Repair in ${city}`,
        serviceType: "Commercial Overhead Door Repair",
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
        url: `https://securelifts.com/commercial-overhead-door-repair/${citySlug}`,
        description: `SecureLifts provides commercial overhead door repair in ${city} for warehouses, industrial buildings, and business properties that need fast response and dependable repair work.`,
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
            name: "Commercial Overhead Door Repair",
            item: "https://securelifts.com/commercial-overhead-door-repair",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: city,
            item: `https://securelifts.com/commercial-overhead-door-repair/${citySlug}`,
          },
        ],
      },
    ],
  };

  const issues = [
    "Overhead door not opening or closing properly",
    "Damaged sections, tracks, or hardware",
    "Broken springs or worn cables",
    "Door off track or jamming during use",
    "Operator problems affecting daily access",
    "Unsafe movement or unstable operation",
  ];

  const overheadServices = [
    "Commercial overhead door repair",
    "Track and hardware repair",
    "Spring and cable replacement",
    "Section and panel correction",
    "Operator and opening system service",
    "Emergency overhead door repair",
  ];

  const whyLeft = [
    `Fast response for commercial properties in ${city}`,
    "Focused on reducing downtime for operations",
    "Professional communication from start to finish",
  ];

  const whyRight = [
    "Repair work built for commercial use",
    "Reliable service for warehouses and industrial sites",
    "Trusted local support across South Florida",
  ];

  const reviews = [
    {
      name: `${city} Warehouse Manager`,
      text: `SecureLifts responded quickly when our overhead door failed and helped us keep operations moving in ${city}.`,
    },
    {
      name: `${city} Operations Supervisor`,
      text: "Professional communication, strong workmanship, and a clear understanding of how overhead door downtime affects the business.",
    },
    {
      name: `${city} Property Manager`,
      text: "They fixed the issue fast, explained what caused it, and got the overhead door working properly again without wasting time.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Script
        id={`schema-commercial-overhead-door-repair-${citySlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      

      {/* HERO */}
      <section className="bg-slate-950 py-32 text-white md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
          <div className="max-w-2xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Commercial Overhead Door Repair {city}
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Commercial Overhead Door Repair in {city}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              When a commercial overhead door fails, it affects workflow,
              access, safety, and daily operations fast. SecureLifts provides
              dependable overhead door repair for warehouses, industrial
              buildings, and business properties that need strong service
              without delays.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              The goal is simple: restore safe operation, reduce downtime, and
              keep the property moving.
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
                <FaWarehouse />
                Commercial Focus
              </span>
              <span className="inline-flex items-center gap-2">
                <FaIndustry />
                Built for Business Properties
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image
      src="/securelifts-commercial-warehouse-repair.png"
              alt={`Commercial overhead door repair in ${city}`}
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
              Common Overhead Door Issues
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              When overhead doors fail, the disruption hits operations fast
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Commercial overhead doors handle repeated daily use. Wear,
              hardware failure, impact damage, and operator issues can create
              delays, safety risks, and access problems that need immediate
              attention.
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
              Overhead Door Repair Services in {city}
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Commercial overhead door repair built around speed and reliability
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Overhead door service should restore safe access quickly, support
              reliable operation, and reduce disruption to the property’s daily
              workflow.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {overheadServices.map((item) => (
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

      {/* WHY SECURELIFTS */}
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

      {/* SECTION BREAK */}
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
            Need commercial overhead door repair in {city}?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for fast commercial overhead door repair that helps
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