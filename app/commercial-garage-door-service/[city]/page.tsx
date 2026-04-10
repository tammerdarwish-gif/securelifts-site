"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound, useParams } from "next/navigation";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaTools,
  FaWarehouse,
  FaIndustry,
  FaGoogle,
} from "react-icons/fa";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Securelifts";

const cityData = {
  "west-palm-beach": {
    city: "West Palm Beach",
    county: "Palm Beach County",
    nearby: "Palm Beach, Lake Worth, Royal Palm Beach, and Wellington",
    intro:
      "West Palm Beach commercial properties need garage door systems that keep loading, access, and operations moving without delays.",
    propertiesLeft: [
      "Warehouses",
      "Commercial plazas",
      "Storage facilities",
      "Retail buildings",
    ],
    propertiesRight: [
      "Industrial buildings",
      "Auto service facilities",
      "Service properties",
      "Mixed-use commercial spaces",
    ],
  },
  "boca-raton": {
    city: "Boca Raton",
    county: "Palm Beach County",
    nearby:
      "Delray Beach, Deerfield Beach, and surrounding South Palm Beach markets",
    intro:
      "Boca Raton businesses need commercial garage door service that protects access, supports operations, and reflects a professional standard.",
    propertiesLeft: [
      "Retail centers",
      "Office service properties",
      "Storage facilities",
      "Warehouses",
    ],
    propertiesRight: [
      "Commercial condos",
      "Business parks",
      "Auto facilities",
      "Mixed-use developments",
    ],
  },
  "delray-beach": {
    city: "Delray Beach",
    county: "Palm Beach County",
    nearby: "Boca Raton, Boynton Beach, and nearby coastal markets",
    intro:
      "Delray Beach commercial properties need dependable garage door service that reduces downtime and keeps business access reliable.",
    propertiesLeft: [
      "Commercial plazas",
      "Retail buildings",
      "Warehouses",
      "Storage properties",
    ],
    propertiesRight: [
      "Industrial units",
      "Service facilities",
      "Auto businesses",
      "Multi-bay properties",
    ],
  },
  "boynton-beach": {
    city: "Boynton Beach",
    county: "Palm Beach County",
    nearby: "Lake Worth, Delray Beach, and surrounding business corridors",
    intro:
      "Boynton Beach businesses need commercial garage door systems that operate reliably and support daily workflow without disruption.",
    propertiesLeft: [
      "Warehouses",
      "Commercial plazas",
      "Storage sites",
      "Industrial buildings",
    ],
    propertiesRight: [
      "Retail centers",
      "Service companies",
      "Auto shops",
      "Mixed-use properties",
    ],
  },
  "wellington": {
    city: "Wellington",
    county: "Palm Beach County",
    nearby: "Royal Palm Beach, West Palm Beach, and nearby western communities",
    intro:
      "Wellington commercial properties need responsive garage door service that protects access, equipment, and operational continuity.",
    propertiesLeft: [
      "Service buildings",
      "Commercial plazas",
      "Storage units",
      "Auto facilities",
    ],
    propertiesRight: [
      "Warehouse spaces",
      "Business parks",
      "Mixed-use properties",
      "Commercial service centers",
    ],
  },
  "jupiter": {
    city: "Jupiter",
    county: "Palm Beach County",
    nearby:
      "Palm Beach Gardens, North Palm Beach, and surrounding northern markets",
    intro:
      "Jupiter businesses need commercial garage door service built for weather exposure, daily use, and dependable long-term performance.",
    propertiesLeft: [
      "Warehouses",
      "Commercial properties",
      "Storage facilities",
      "Service buildings",
    ],
    propertiesRight: [
      "Retail units",
      "Industrial spaces",
      "Auto businesses",
      "Business park properties",
    ],
  },
  "fort-lauderdale": {
    city: "Fort Lauderdale",
    county: "Broward County",
    nearby: "Oakland Park, Hollywood, and nearby Broward business markets",
    intro:
      "Fort Lauderdale commercial properties need fast garage door service to keep access, deliveries, and daily operations moving.",
    propertiesLeft: [
      "Warehouses",
      "Storage facilities",
      "Retail properties",
      "Commercial plazas",
    ],
    propertiesRight: [
      "Industrial units",
      "Service facilities",
      "Auto businesses",
      "Mixed-use buildings",
    ],
  },
  "hollywood": {
    city: "Hollywood",
    county: "Broward County",
    nearby:
      "Fort Lauderdale, Pembroke Pines, and surrounding Broward locations",
    intro:
      "Hollywood businesses need reliable overhead and roll-up door service that reduces downtime and supports daily commercial use.",
    propertiesLeft: [
      "Retail buildings",
      "Commercial plazas",
      "Storage sites",
      "Warehouses",
    ],
    propertiesRight: [
      "Industrial properties",
      "Service shops",
      "Auto facilities",
      "Mixed-use commercial spaces",
    ],
  },
  miami: {
    city: "Miami",
    county: "Miami-Dade County",
    nearby: "Doral, Hialeah, Kendall, and surrounding Miami-Dade markets",
    intro:
      "Miami commercial properties rely on garage door systems that can handle heavy use, protect access, and keep fast-paced operations moving.",
    propertiesLeft: [
      "Warehouses",
      "Distribution properties",
      "Retail buildings",
      "Storage facilities",
    ],
    propertiesRight: [
      "Industrial sites",
      "Service companies",
      "Auto facilities",
      "Commercial multi-bay spaces",
    ],
  },
  hialeah: {
    city: "Hialeah",
    county: "Miami-Dade County",
    nearby: "Miami, Doral, Medley, and nearby industrial corridors",
    intro:
      "Hialeah commercial and industrial buildings need hard-working garage door systems backed by fast repair and dependable service.",
    propertiesLeft: [
      "Industrial buildings",
      "Warehouses",
      "Storage properties",
      "Service bays",
    ],
    propertiesRight: [
      "Auto businesses",
      "Distribution spaces",
      "Commercial shops",
      "Business properties",
    ],
  },
  doral: {
    city: "Doral",
    county: "Miami-Dade County",
    nearby: "Miami, Hialeah, and surrounding logistics-heavy business markets",
    intro:
      "Doral businesses depend on commercial garage door service that supports shipping, receiving, access control, and daily operational flow.",
    propertiesLeft: [
      "Warehouses",
      "Distribution centers",
      "Commercial logistics sites",
      "Storage facilities",
    ],
    propertiesRight: [
      "Service buildings",
      "Industrial units",
      "Auto properties",
      "Business parks",
    ],
  },
} as const;

type CityKey = keyof typeof cityData;

export default function CommercialGarageDoorServiceCityPage() {
  const params = useParams();
  const citySlug = Array.isArray(params?.city) ? params.city[0] : params?.city;
  const data = citySlug ? cityData[citySlug as CityKey] : undefined;

  if (!data) notFound();

  const siteUrl = `https://securelifts.com/commercial-garage-door-service/${citySlug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Commercial Garage Door Service in ${data.city}`,
        serviceType: "Commercial Garage Door Service",
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
        description: `${data.intro} SecureLifts provides commercial garage door repair, service, and maintenance support in ${data.city}.`,
      },
      {
        "@type": "LocalBusiness",
        name: "SecureLifts",
        telephone: "+1-866-828-1818",
        url: "https://securelifts.com",
        sameAs: [GOOGLE_REVIEWS_URL],
        areaServed: [data.city, data.county],
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
            name: "Commercial Garage Door Service",
            item: "https://securelifts.com/commercial-garage-door-service",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.city,
            item: siteUrl,
          },
        ],
      },
    ],
  };

  const servicePoints = [
    {
      title: `Commercial Garage Door Repair in ${data.city}`,
      text: `We repair overhead doors, sectional doors, roll-up doors, and related commercial systems for businesses in ${data.city}.`,
      icon: <FaTools />,
    },
    {
      title: "Commercial Operators, Tracks & Hardware",
      text: "We inspect and service motors, tracks, rollers, springs, cables, hinges, and related hardware affecting daily performance.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Maintenance Plans for Lower Downtime",
      text: "We help owners and managers reduce repeat breakdowns with structured service built around property needs.",
      icon: <FaCheckCircle />,
    },
  ];

  const maintenancePlans = [
    {
      title: "Essential Plan",
      subtitle: "For smaller commercial properties",
      bullets: [
        "Scheduled inspections",
        "Lubrication of key moving parts",
        "Basic hardware and safety review",
        "Early wear identification",
      ],
    },
    {
      title: "Priority Property Plan",
      subtitle: "For active business locations",
      bullets: [
        "Routine service visits",
        "Priority scheduling when issues come up",
        "Detailed recommendations on wear items",
        "Reduced risk of surprise downtime",
      ],
    },
    {
      title: "Multi-Door Facility Plan",
      subtitle: "For warehouses and multi-bay properties",
      bullets: [
        "Coverage for multiple door systems",
        "Structured maintenance tracking",
        "Property-wide inspection support",
        "Built for managers who need consistency",
      ],
    },
  ];

  const whyLeft = [
    `Fast response for commercial properties in ${data.city}`,
    "Reliable service focused on keeping operations moving",
    "Professional communication with owners and managers",
  ];

  const whyRight = [
    "We work to reduce downtime, not just patch problems",
    "Service built around long-term reliability",
    `Trusted local support across ${data.county}`,
  ];

  const reviews = [
    {
      name: `${data.city} Property Manager`,
      text: `SecureLifts responded quickly when our commercial door failed and helped us get access restored fast in ${data.city}.`,
    },
    {
      name: `${data.city} Business Owner`,
      text: "Professional communication, solid workmanship, and a clear understanding of how important commercial access is to daily workflow.",
    },
    {
      name: `${data.city} Facility Supervisor`,
      text: "They fixed the immediate issue, explained the root cause, and gave useful guidance to reduce future downtime.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Script
        id={`schema-commercial-garage-door-service-${citySlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      

      <section className="bg-slate-950 py-28 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="max-w-2xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Commercial Garage Door Service {data.city}
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Commercial Garage Door Service in {data.city}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              {data.intro} SecureLifts provides commercial garage door repair,
              service, and maintenance support for business owners, managers,
              and commercial properties that need strong communication and
              dependable results.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              We serve businesses across {data.city}, {data.nearby}, with
              commercial service built to keep access moving and downtime lower.
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
                Fast Commercial Response
              </span>
              <span className="inline-flex items-center gap-2">
                <FaWarehouse />
                Business Property Service
              </span>
              <span className="inline-flex items-center gap-2">
                <FaStar />
                Reliable Commercial Support
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image
              src="/commercial-warehouse-service.png"
              alt={`Commercial warehouse garage door service in ${data.city}`}
              width={900}
              height={700}
              className="h-[460px] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Real Solutions for Commercial Door Problems
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              In {data.city}, downtime is the real cost
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A commercial door issue can slow loading, block access, affect
              staff workflow, and create avoidable disruption. The right service
              should restore safe operation quickly and support the way the
              property actually runs.
            </p>

            <div className="mt-10 grid gap-4">
              {[
                "Broken panels, springs, cables, or rollers",
                "Doors not opening, closing, or rolling smoothly",
                "Loading dock doors inoperable or unsafe",
                "Operator issues or malfunctions",
                "Emergency repair to keep operations moving",
                "Maintenance plans to keep the property ready for use",
              ].map((item) => (
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

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg">
            <Image
              src="/commercial-dock-door-service.png"
              alt={`Commercial dock and overhead door service in ${data.city}`}
              width={900}
              height={700}
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Commercial Service Categories
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Repair, installation, and maintenance built around operations
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Commercial service should support access, reliability, workflow,
              and long-term system performance.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {servicePoints.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-red-600">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Maintenance Plans
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Strong maintenance plans reduce downtime before it starts
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Commercial properties do not all need the same maintenance schedule.
              The right plan should fit the property, the usage level, and the
              risk of operational disruption.
            </p>
          </div>

          <div className="grid gap-6">
            {maintenancePlans.map((plan) => (
              <div
                key={plan.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {plan.subtitle}
                </p>

                <div className="mt-6 space-y-4">
                  {plan.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 shrink-0 text-red-600" />
                      <span className="leading-7 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Properties We Serve
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Commercial support across {data.city} and surrounding business markets
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              SecureLifts supports a wide range of commercial properties across{" "}
              {data.city} and nearby areas in {data.county}.
            </p>
          </div>

          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-6">
                {data.propertiesLeft.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="shrink-0 text-red-600" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {data.propertiesRight.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="shrink-0 text-red-600" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-4xl font-black md:text-5xl">
            Why SecureLifts
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              {whyLeft.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="shrink-0 text-red-600" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {whyRight.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="shrink-0 text-red-600" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 inline-flex items-center gap-3">
                <FaGoogle className="text-2xl text-red-400" />
                <p className="text-base font-bold uppercase tracking-[0.3em] text-red-400">
                  Google Reviews
                </p>
              </div>
              <h2 className="text-4xl font-black md:text-5xl">
                Reputation matters when commercial clients choose a service partner
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

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-3xl bg-white/5 p-8">
                <div className="mb-4 text-yellow-400">★★★★★</div>
                <p className="text-slate-300">{review.text}</p>
                <p className="mt-6 font-bold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-28 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Need commercial garage door service in {data.city}?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for commercial service that helps keep your
            property moving, your access reliable, and your downtime lower.
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