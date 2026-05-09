import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTools,
  FaShieldAlt,
  FaBolt,
  FaArrowRight,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { getAllCitySlugs, getCityData } from "@/lib/cityPages";
import {
  generateServiceCityMetadata,
  serviceCitySeoConfigs,
} from "@/lib/serviceCitySeo";
import LocalServiceSeoBlock from "@/app/components/LocalServiceSeoBlock";

function formatCityName(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  return generateServiceCityMetadata(
    city,
    serviceCitySeoConfigs.garageDoorCableRepair
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = getCityData(city) as
    | { city?: string; nearbyAreas?: string[] }
    | undefined;

  if (!cityData) return notFound();

  const cityName = cityData.city?.trim() || formatCityName(city);
  const nearbyAreas = cityData?.nearbyAreas?.slice(0, 4) ?? [
    `Homes near ${cityName}`,
    `Nearby neighborhoods around ${cityName}`,
    "Surrounding South Florida areas",
    "Nearby residential communities",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Garage Door Cable Repair in ${cityName}`,
        serviceType: "Garage Door Cable Repair",
        areaServed: {
          "@type": "City",
          name: cityName,
        },
        provider: {
          "@type": "LocalBusiness",
          name: "SecureLifts",
          telephone: "+1-866-828-1818",
          url: "https://securelifts.com",
        },
        url: `https://securelifts.com/garage-door-cable-repair/${city}`,
        description: `SecureLifts provides garage door cable repair in ${cityName} for broken, loose, frayed, and off-drum cables that affect safe door operation.`,
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
            name: "Garage Door Cable Repair",
            item: "https://securelifts.com/garage-door-cable-repair",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: cityName,
            item: `https://securelifts.com/garage-door-cable-repair/${city}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Do you offer same-day garage door cable repair in ${cityName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes. SecureLifts provides fast garage door cable repair in ${cityName} for broken, loose, and off-drum cables that need immediate attention.`,
            },
          },
          {
            "@type": "Question",
            name: `Is it safe to use my garage door if the cable is broken?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. A broken or loose cable can make the garage door unstable and unsafe. Using the door can cause additional damage or injury.",
            },
          },
          {
            "@type": "Question",
            name: `What causes garage door cables to fail?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Garage door cables usually fail from wear, rust, fraying, improper tension, off-track movement, or stress caused by worn springs and hardware.",
            },
          },
        ],
      },
    ],
  };

  const trustStats = [
    { label: "Same-day service", value: "Available" },
    { label: "Service area", value: cityName },
    { label: "Repair focus", value: "Cable repair" },
  ];

  const localProof = [
    `Fast response in ${cityName}`,
    "Safe correction of broken and loose cables",
    "Full inspection of balance, rollers, and tracks",
    "Cleaner workmanship without wasted time",
  ];

  const reviewCards = [
    {
      name: "Michael R.",
      text: `SecureLifts fixed our broken garage door cable fast in ${cityName} and made sure the whole system was safe before leaving.`,
    },
    {
      name: "Jessica T.",
      text: "They explained clearly why the cable failed, fixed the issue the right way, and the door feels balanced again.",
    },
    {
      name: "Daniel P.",
      text: "Fast service, clean work, and no runaround. They fixed the cable problem before it turned into a bigger repair.",
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
      href: `/garage-door-off-track-repair/${city}`,
      label: `Off-Track Garage Door Repair in ${cityName}`,
    },
    {
      href: `/garage-door-opener-repair/${city}`,
      label: `Garage Door Opener Repair in ${cityName}`,
    },
    {
      href: `/garage-door-roller-replacement/${city}`,
      label: `Garage Door Roller Replacement in ${cityName}`,
    },
    {
      href: `/emergency-garage-door-repair/${city}`,
      label: `Emergency Garage Door Repair in ${cityName}`,
    },
  ];

  const faqs = [
    {
      question: `Do you offer same-day garage door cable repair in ${cityName}?`,
      answer: `Yes. SecureLifts provides fast response for garage door cable repair in ${cityName}, including broken, loose, and off-drum cable issues.`,
    },
    {
      question: `What are the signs of a broken garage door cable?`,
      answer:
        "Common signs include a crooked door, one side lifting higher than the other, a loose hanging cable, noisy movement, or a door that gets stuck halfway.",
    },
    {
      question: `Is it safe to use my garage door if the cable is broken?`,
      answer:
        "No. A broken or loose cable can make the door unstable and unsafe. It is best to stop using the door and call for professional repair.",
    },
    {
      question: `Do you fix garage door cables that come off the drum?`,
      answer:
        "Yes. We repair cables that slip off the drum, reset cable tension, inspect door balance, and check the surrounding hardware for related issues.",
    },
    {
      question: `What causes garage door cables to fail?`,
      answer:
        "Garage door cables usually fail from wear, fraying, rust, improper tension, off-track movement, or strain caused by worn springs and other hardware.",
    },
    {
      question: `Can I book garage door cable repair online for ${cityName}?`,
      answer:
        `Yes. You can call SecureLifts directly or use the Book Service button to schedule cable repair service in ${cityName}.`,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Script
        id={`schema-garage-door-cable-repair-${city}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
          <div>
            <p className="text-red-500 font-semibold uppercase tracking-widest">
              Emergency Garage Door Service
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
              Garage Door Cable Repair in {cityName}
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Broken or loose garage door cables can cause the door to jam,
              tilt, bind, or become dangerous. SecureLifts fixes cable issues
              fast and restores safe, stable door operation.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-400 max-w-xl">
              We help homeowners throughout {cityName} and nearby areas with
              broken cable replacement, off-drum cable repair, loose cable
              correction, and full safety inspection to prevent the problem from
              getting worse.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-300 md:grid-cols-2 max-w-2xl">
              {trustStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <FaCheckCircle className="text-red-500" />
                  <span>
                    <span className="text-slate-400">{stat.label}:</span> {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="tel:8668281818"
                className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded-xl font-bold flex items-center gap-2"
              >
                <FaPhoneAlt /> Call (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="border border-white px-6 py-4 rounded-xl font-bold text-white hover:bg-white hover:text-black"
              >
                Book Service
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span>Trusted local service</span>
              <span className="text-slate-500">•</span>
              <span>Fast response in {cityName}</span>
            </div>
          </div>

          <div className="flex justify-center mt-10 lg:mt-0">
            <img
              src="/images/approved/cable-repair-full-card.jpg"
              className="w-full max-h-[500px] object-contain rounded-2xl"
              alt="Broken garage door cable"
            />
          </div>
        </div>
      </section>

      <section className="bg-red-50 px-6 py-16">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-black text-red-700">
              ⚠️ Cable Problems Get Worse Fast
            </h2>

            <p className="mt-4 text-lg text-slate-700">
              When a cable breaks, the door becomes unstable. Using it can
              damage rollers, tracks, springs, or even the opener.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Door looks uneven",
                "One side lifting higher",
                "Cable hanging loose",
                "Door stuck halfway",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <FaExclamationTriangle className="text-red-600 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-red-500 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3">
              <FaExclamationTriangle className="text-red-600 text-3xl" />
              <h3 className="text-xl font-black text-red-700 uppercase">
                DO NOT USE THE DOOR
              </h3>
            </div>

            <p className="mt-4 font-semibold text-slate-800">
              Operating an off-track or broken cable door can cause serious
              damage or injury. Stop using it and call immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Cable Repair Services
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              What we fix in {cityName}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              SecureLifts repairs garage door cable problems that affect safe
              movement, door balance, and overall reliability. We do not just
              swap a part and leave. We inspect the system so the same issue
              does not come right back.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              "Broken cable replacement",
              "Cable off drum repair",
              "Loose cable reset",
              "Door balance correction",
              "Roller and track inspection",
              "Full safety check",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-200"
              >
                <FaCheckCircle className="text-green-600 mt-1" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {localProof.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <FaMapMarkerAlt className="mt-1 text-red-600" />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Why SecureLifts
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Why homeowners in {cityName} choose SecureLifts
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Cable issues can turn into bigger repairs fast. We focus on quick
              response, safe repair, and checking the full door system before
              putting it back into use.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <FaBolt className="text-red-600 text-2xl" />
              <h3 className="mt-4 font-bold text-lg">Fast response</h3>
              <p className="text-slate-600 mt-2 leading-7">
                We handle cable issues before they turn into major failures or
                unsafe door movement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <FaShieldAlt className="text-red-600 text-2xl" />
              <h3 className="mt-4 font-bold text-lg">Safe repair</h3>
              <p className="text-slate-600 mt-2 leading-7">
                We correct the cable issue the right way before putting the door
                back into use.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <FaTools className="text-red-600 text-2xl" />
              <h3 className="mt-4 font-bold text-lg">Full inspection</h3>
              <p className="text-slate-600 mt-2 leading-7">
                We check springs, rollers, balance, and tracks — not just the
                cables alone.
              </p>
            </div>
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Nearby Areas
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Garage door cable repair in {cityName} and nearby areas
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            SecureLifts also helps homeowners in and around {cityName} with
            broken cables, uneven doors, off-drum cable issues, and related
            garage door repair needs.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {nearbyAreas.map((area) => (
            <span
              key={area}
              className="rounded-full bg-slate-100 px-4 py-2 text-slate-700"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              FAQs
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Garage door cable repair questions in {cityName}
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
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
            Explore other garage door services available in {cityName}, from
            urgent repairs to full system correction and related hardware
            service.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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

      <LocalServiceSeoBlock
        cityName={cityName}
        citySlug={city}
        servicePath="garage-door-cable-repair"
        serviceName="Garage Door Cable Repair"
        nearbyAreas={nearbyAreas}
      />

      <section className="bg-red-600 text-white px-6 py-20 text-center">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Need cable repair in {cityName}?
          </h2>

          <p className="mt-4 text-lg text-red-50">
            Call now or book online for fast professional garage door cable
            repair in {cityName}.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:8668281818"
              className="bg-white text-red-600 px-6 py-4 rounded-xl font-bold flex items-center gap-2"
            >
              <FaPhoneAlt /> Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="border border-white px-6 py-4 rounded-xl font-bold text-white hover:bg-white hover:text-red-600"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
