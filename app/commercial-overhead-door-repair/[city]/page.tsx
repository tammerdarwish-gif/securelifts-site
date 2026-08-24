import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import VerifiedReviewLinks from "@/app/components/VerifiedReviewLinks";
import { notFound } from "next/navigation";
import {
  FaCheckCircle,
  FaWarehouse,
  FaTools,
  FaClock,
  FaGoogle,
  FaIndustry,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

import { getAllCitySlugs, getCityData } from "@/lib/cityPages";

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Securelifts";

const cityOverrides = {
  "west-palm-beach": {
    city: "West Palm Beach",
    county: "Palm Beach County",
    nearby: "Palm Beach, Lake Worth, Royal Palm Beach, and Wellington",
    intro:
      "West Palm Beach commercial properties need garage door systems that keep loading, access, and operations moving without delays.",
  },
  "boca-raton": {
    city: "Boca Raton",
    county: "Palm Beach County",
    nearby:
      "Delray Beach, Deerfield Beach, and surrounding South Palm Beach markets",
    intro:
      "Boca Raton businesses need commercial overhead door repair that protects access, supports operations, and reflects a professional standard.",
  },
  "delray-beach": {
    city: "Delray Beach",
    county: "Palm Beach County",
    nearby: "Boca Raton, Boynton Beach, and nearby coastal markets",
    intro:
      "Delray Beach commercial properties need dependable overhead door repair that reduces downtime and keeps business access reliable.",
  },
  "boynton-beach": {
    city: "Boynton Beach",
    county: "Palm Beach County",
    nearby: "Lake Worth, Delray Beach, and surrounding business corridors",
    intro:
      "Boynton Beach businesses need commercial overhead door systems that operate reliably and support daily workflow without disruption.",
  },
  wellington: {
    city: "Wellington",
    county: "Palm Beach County",
    nearby: "Royal Palm Beach, West Palm Beach, and nearby western communities",
    intro:
      "Wellington commercial properties need responsive overhead door repair that protects access, equipment, and operational continuity.",
  },
  jupiter: {
    city: "Jupiter",
    county: "Palm Beach County",
    nearby:
      "Palm Beach Gardens, North Palm Beach, and surrounding northern markets",
    intro:
      "Jupiter businesses need commercial overhead door repair built for weather exposure, daily use, and dependable long-term performance.",
  },
  "fort-lauderdale": {
    city: "Fort Lauderdale",
    county: "Broward County",
    nearby: "Oakland Park, Hollywood, and nearby Broward business markets",
    intro:
      "Fort Lauderdale commercial properties need fast overhead door repair to keep access, deliveries, and daily operations moving.",
  },
  hollywood: {
    city: "Hollywood",
    county: "Broward County",
    nearby:
      "Fort Lauderdale, Pembroke Pines, and surrounding Broward locations",
    intro:
      "Hollywood businesses need reliable overhead door repair that reduces downtime and supports daily commercial use.",
  },
  miami: {
    city: "Miami",
    county: "Miami-Dade County",
    nearby: "Doral, Hialeah, Kendall, and surrounding Miami-Dade markets",
    intro:
      "Miami commercial properties rely on overhead door systems that can handle heavy use, protect access, and keep fast-paced operations moving.",
  },
  hialeah: {
    city: "Hialeah",
    county: "Miami-Dade County",
    nearby: "Miami, Doral, Medley, and nearby industrial corridors",
    intro:
      "Hialeah commercial and industrial buildings need hard-working overhead door repair backed by fast response and dependable service.",
  },
  doral: {
    city: "Doral",
    county: "Miami-Dade County",
    nearby: "Miami, Hialeah, and surrounding logistics-heavy business markets",
    intro:
      "Doral businesses depend on commercial overhead door repair that supports shipping, receiving, access control, and daily operational flow.",
  },
} as const;

type OverrideKey = keyof typeof cityOverrides;

type CommercialCityData = {
  city: string;
  county: string;
  nearby: string;
  intro: string;
};

function normalizeCounty(county?: string) {
  if (county === "Palm Beach") return "Palm Beach County";
  if (county === "Broward") return "Broward County";
  if (county === "Miami-Dade") return "Miami-Dade County";
  return "South Florida";
}

function getCommercialCityData(slug: string): CommercialCityData | undefined {
  const override = cityOverrides[slug as OverrideKey];

  if (override) {
    return {
      city: override.city,
      county: override.county,
      nearby: override.nearby,
      intro: override.intro,
    };
  }

  const base = getCityData(slug) as
    | { city?: string; county?: string; nearbyAreas?: string[] }
    | undefined;

  if (!base?.city) return undefined;

  const county = normalizeCounty(base.county);
  const nearby =
    base.nearbyAreas && base.nearbyAreas.length > 0
      ? base.nearbyAreas.join(", ")
      : `nearby ${county} business areas`;

  return {
    city: base.city,
    county,
    nearby,
    intro: `${base.city} commercial properties need dependable overhead door repair that keeps access open, supports workflow, and lowers avoidable downtime.`,
  };
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = getCommercialCityData(city);

  if (!data) {
    return {
      title: "Commercial Overhead Door Repair | SecureLifts",
      description: "Commercial overhead door repair by SecureLifts.",
    };
  }

  return {
    title: `Commercial Overhead Door Repair in ${data.city} | SecureLifts`,
    description: `SecureLifts provides commercial overhead door repair in ${data.city} for warehouses, industrial buildings, and business properties that need fast response and dependable repair work.`,
    alternates: {
      canonical: `https://securelifts.com/commercial-overhead-door-repair/${city}`,
    },
    openGraph: {
      title: `Commercial Overhead Door Repair in ${data.city} | SecureLifts`,
      description: `Fast commercial overhead door repair in ${data.city} for warehouses, industrial buildings, and business properties.`,
      url: `https://securelifts.com/commercial-overhead-door-repair/${city}`,
      siteName: "SecureLifts",
      type: "website",
    },
  };
}

export default async function CommercialOverheadDoorRepairCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = getCommercialCityData(city);

  if (!data) notFound();

  const siteUrl = `https://securelifts.com/commercial-overhead-door-repair/${city}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Commercial Overhead Door Repair in ${data.city}`,
        serviceType: "Commercial Overhead Door Repair",
        areaServed: [
          { "@type": "City", name: data.city },
          { "@type": "AdministrativeArea", name: data.county },
        ],
        provider: {
          "@type": "LocalBusiness",
          name: "SecureLifts",
          telephone: "+1-866-828-1818",
          url: "https://securelifts.com",
          sameAs: [GOOGLE_REVIEWS_URL],
        },
        url: siteUrl,
        description: `SecureLifts provides commercial overhead door repair in ${data.city} for warehouses, industrial buildings, and business properties that need fast response and dependable repair work.`,
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
            name: data.city,
            item: siteUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Do you provide fast commercial overhead door repair in ${data.city}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes. SecureLifts provides fast commercial overhead door repair in ${data.city} for business properties that need safe access restored quickly and downtime reduced.`,
            },
          },
          {
            "@type": "Question",
            name: `What types of overhead door problems do you fix in ${data.city}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "We repair damaged sections, worn tracks, broken springs, cables, operator issues, unstable movement, and doors that are no longer opening or closing properly.",
            },
          },
          {
            "@type": "Question",
            name: `Do you work on warehouses and industrial properties in ${data.city}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes. SecureLifts works on warehouses, industrial sites, service buildings, and other commercial properties in ${data.city}.`,
            },
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
    {
      title: "Commercial overhead door repair",
      text: `Fast repair support for overhead door systems in ${data.city} that are affecting safety, access, and workflow.`,
      icon: <FaTools className="text-xl text-red-600" />,
    },
    {
      title: "Track and hardware repair",
      text: "Correction for damaged tracks, worn hinges, loose hardware, and related issues that affect movement and stability.",
      icon: <FaShieldAlt className="text-xl text-red-600" />,
    },
    {
      title: "Spring and cable replacement",
      text: "Repair or replacement for high-stress components that commonly create failure, instability, or unsafe operation.",
      icon: <FaCheckCircle className="text-xl text-red-600" />,
    },
    {
      title: "Section and panel correction",
      text: "Repair work for visible damage, impact issues, and sections that affect operation or the professional appearance of the property.",
      icon: <FaIndustry className="text-xl text-red-600" />,
    },
    {
      title: "Operator and opening system service",
      text: "Support for motors, controls, and overhead door opening systems that are inconsistent, unreliable, or fully down.",
      icon: <FaTools className="text-xl text-red-600" />,
    },
    {
      title: "Emergency overhead door repair",
      text: `Fast response when a commercial overhead door problem in ${data.city} is disrupting operations and needs immediate attention.`,
      icon: <FaClock className="text-xl text-red-600" />,
    },
  ];

  const whyLeft = [
    `Fast response for commercial properties in ${data.city}`,
    "Focused on reducing downtime for operations",
    "Professional communication from start to finish",
  ];

  const whyRight = [
    "Repair work built for commercial use",
    "Reliable service for warehouses and industrial sites",
    `Trusted local support across ${data.county}`,
  ];

  const relatedLinks = [
    {
      href: `/commercial-garage-door-repair/${city}`,
      label: `Commercial Garage Door Repair in ${data.city}`,
    },
    {
      href: `/commercial-garage-door-installation/${city}`,
      label: `Commercial Garage Door Installation in ${data.city}`,
    },
    {
      href: `/commercial-garage-door-service/${city}`,
      label: `Commercial Garage Door Service in ${data.city}`,
    },
    {
      href: `/warehouse-door-repair/${city}`,
      label: `Warehouse Door Repair in ${data.city}`,
    },
    {
      href: `/garage-door-repair/${city}`,
      label: `Garage Door Repair in ${data.city}`,
    },
    {
      href: `/emergency-garage-door-repair/${city}`,
      label: `Emergency Garage Door Repair in ${data.city}`,
    },
  ];

  const faqs = [
    {
      question: `Do you provide fast commercial overhead door repair in ${data.city}?`,
      answer: `Yes. SecureLifts provides fast commercial overhead door repair in ${data.city} for properties that need safe access restored quickly and business disruption reduced.`,
    },
    {
      question: `What types of overhead door problems do you fix in ${data.city}?`,
      answer:
        "We repair damaged sections, worn tracks, broken springs, cables, operator issues, unstable movement, and doors that are no longer opening or closing properly.",
    },
    {
      question: `Do you work on warehouses and industrial properties in ${data.city}?`,
      answer: `Yes. We work on warehouses, industrial sites, storage facilities, service buildings, and other business properties in ${data.city}.`,
    },
    {
      question: `Can you handle emergency overhead door repair in ${data.city}?`,
      answer: `Yes. When an overhead door issue is affecting operations, SecureLifts can respond quickly to restore safer, more reliable access in ${data.city}.`,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Script
        id={`schema-commercial-overhead-door-repair-${city}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-slate-950 py-32 text-white md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
          <div className="max-w-2xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Commercial Overhead Door Repair {data.city}
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Commercial Overhead Door Repair in {data.city}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              {data.intro} SecureLifts provides dependable overhead door repair
              for warehouses, industrial buildings, and business properties that
              need strong service without delays.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              We serve businesses across {data.city}, {data.nearby}, with repair
              service built to restore safe operation, reduce downtime, and keep
              the property moving.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-red-500" />
                Fast commercial overhead door response
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-red-500" />
                Warehouses and industrial property support
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-red-500" />
                Emergency repair available
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-red-500" />
                Service across {data.county}
              </div>
            </div>

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
              alt={`Commercial overhead door repair in ${data.city}`}
              width={900}
              height={700}
              className="h-[460px] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Commercial Overhead Doors
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Repair that protects access, safety, and workflow in {data.city}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Commercial overhead doors are critical to loading, receiving,
            security, and day-to-day business movement. When the system stops
            working right, the cost is not just the repair itself. The real cost
            is downtime, delay, and disruption.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            SecureLifts provides commercial overhead door repair in {data.city}
            for properties that need faster diagnosis, dependable repair work,
            and a cleaner service experience from start to finish.
          </p>
        </div>
      </section>

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

      <section className="border-t border-slate-100 bg-slate-50 py-32 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Overhead Door Repair Services in {data.city}
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

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {overheadServices.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 py-32 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="pb-10 md:pb-14">
            <h2 className="text-4xl font-black md:text-5xl">
              Why SecureLifts for commercial overhead door repair in {data.city}
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
              className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-black"            >
              Read Reviews on Google
            </a>
          </div>

          <div className="mt-20"><VerifiedReviewLinks /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Related Services
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            More garage door services in {data.city}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore additional residential and commercial garage door services
            available in {data.city}, including repairs, installations, and
            emergency service.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
            >
              <span>{link.label}</span>
              <FaArrowRight className="text-red-600" />
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              FAQs
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Commercial overhead door repair questions in {data.city}
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

      <section className="bg-red-600 py-32 text-white md:py-36">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Need commercial overhead door repair in {data.city}?
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
