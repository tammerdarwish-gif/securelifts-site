import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaTools,
  FaWarehouse,
  FaIndustry,
} from "react-icons/fa";

const cityData = {
  "west-palm-beach": {
    city: "West Palm Beach",
    county: "Palm Beach County",
    nearby: "Palm Beach, Lake Worth, Royal Palm Beach, and Wellington",
    intro:
      "West Palm Beach commercial properties need garage door systems that stay dependable under daily use, heat, humidity, and operational pressure.",
    propertiesLeft: [
      "Warehouses",
      "Storage facilities",
      "Commercial plazas",
      "Retail buildings",
    ],
    propertiesRight: [
      "Auto service shops",
      "Industrial spaces",
      "Service properties",
      "Mixed-use commercial buildings",
    ],
  },
  "boca-raton": {
    city: "Boca Raton",
    county: "Palm Beach County",
    nearby: "Delray Beach, Deerfield Beach, and surrounding South Palm Beach markets",
    intro:
      "Boca Raton businesses need commercial garage door service that protects access, supports daily operations, and reflects a professional standard.",
    propertiesLeft: [
      "Retail buildings",
      "Commercial plazas",
      "Storage facilities",
      "Warehouses",
    ],
    propertiesRight: [
      "Auto facilities",
      "Office service properties",
      "Business parks",
      "Mixed-use commercial sites",
    ],
  },
  "delray-beach": {
    city: "Delray Beach",
    county: "Palm Beach County",
    nearby: "Boca Raton, Boynton Beach, and nearby coastal markets",
    intro:
      "Delray Beach commercial doors need fast, dependable service when business access, workflow, or safety is on the line.",
    propertiesLeft: [
      "Commercial plazas",
      "Retail properties",
      "Warehouses",
      "Storage buildings",
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
      "Boynton Beach businesses need commercial garage door systems that open reliably, close securely, and support daily operations without unnecessary downtime.",
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
      "Mixed-use commercial properties",
    ],
  },
  "wellington": {
    city: "Wellington",
    county: "Palm Beach County",
    nearby: "Royal Palm Beach, West Palm Beach, and nearby western communities",
    intro:
      "Wellington commercial properties need responsive garage door service that helps protect access, equipment, and business continuity.",
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
    nearby: "Palm Beach Gardens, North Palm Beach, and surrounding northern markets",
    intro:
      "Jupiter businesses need commercial garage door repair that stands up to daily use and supports smooth access for staff, vehicles, and operations.",
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
      "Fort Lauderdale commercial buildings need fast garage door service to keep loading, access, and operations moving without avoidable delays.",
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
    nearby: "Fort Lauderdale, Pembroke Pines, and surrounding Broward locations",
    intro:
      "Hollywood commercial properties need reliable overhead and roll-up door service that reduces downtime and supports daily business demands.",
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
  "miami": {
    city: "Miami",
    county: "Miami-Dade County",
    nearby: "Doral, Hialeah, Kendall, and surrounding Miami-Dade markets",
    intro:
      "Miami commercial properties rely on garage door systems that can handle heavy use, protect access, and support fast-paced operations.",
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
  "hialeah": {
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
  "doral": {
    city: "Doral",
    county: "Miami-Dade County",
    nearby: "Miami, Hialeah, and surrounding logistics-heavy business markets",
    intro:
      "Doral businesses depend on commercial garage doors for access, shipping, receiving, and daily operational flow. Reliable service matters.",
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

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

export default async function CommercialGarageDoorRepairCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = cityData[city as CityKey];

  if (!data) notFound();

  const servicePoints = [
    {
      title: `Commercial Garage Door Repair in ${data.city}`,
      text: `We repair overhead doors, sectional doors, and roll-up systems for businesses in ${data.city} that need reliable access and reduced downtime.`,
      icon: <FaTools />,
    },
    {
      title: "Commercial Operators, Tracks & Hardware",
      text: "We inspect and repair motors, tracks, rollers, springs, cables, hinges, and related door hardware affecting commercial performance.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Maintenance to Reduce Future Downtime",
      text: "We help commercial property owners and managers catch problems early and keep systems performing more reliably over time.",
      icon: <FaCheckCircle />,
    },
  ];

  const whyLeft = [
    `Fast response for commercial properties in ${data.city}`,
    "Reliable repair work focused on operations",
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
      

      {/* HERO */}
      <section className="bg-slate-950 py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Commercial Garage Door Repair {data.city}
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Commercial Garage Door Repair in {data.city}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {data.intro} SecureLifts provides commercial garage door repair
              for business owners, managers, and commercial properties that need
              fast response, strong communication, and dependable results.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              We serve businesses across {data.city}, {data.nearby}, with
              commercial service built to keep access moving and downtime lower.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:8668281818"
                className="rounded-xl bg-red-600 px-8 py-4 font-bold text-white hover:bg-red-700"
              >
                Call (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="rounded-xl border border-white px-8 py-4 font-bold hover:bg-white hover:text-black"
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
        </div>
      </section>

      {/* COMMON COMMERCIAL NEEDS */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Common Commercial Needs
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              In {data.city}, downtime is the real cost
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A commercial door issue can slow loading, block access, affect
              staff workflow, and create avoidable disruption. The right repair
              service should restore safe operation quickly and support the way
              the property actually runs.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Commercial door is unreliable or jammed",
              "Operator is inconsistent or failing",
              "Tracks, rollers, cables, or springs show wear",
              "Business access is being affected",
              `You need dependable service in ${data.city}`,
              "You want fewer repeat breakdowns",
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
      </section>

      {/* COMMERCIAL REPAIR SERVICES */}
      <section className="border-t border-slate-100 bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Commercial Repair Services
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Commercial service that supports operations, access, and reliability
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Commercial repair should do more than solve an emergency in the
              moment. It should protect access, reduce repeat issues, and help
              the property keep functioning without unnecessary delays.
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

      {/* PROPERTY TYPES */}
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
              {data.city} and nearby areas in {data.county}, with service
              tailored to the building and the way it is actually used.
            </p>
          </div>

          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="mb-8 inline-flex rounded-xl bg-red-50 p-3 text-red-600">
              <FaWarehouse className="text-xl" />
            </div>

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

      {/* WHY SECURELIFTS */}
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

      {/* CUSTOMER FEEDBACK */}
      <section className="border-t border-slate-800 bg-slate-950 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-4xl font-black md:text-5xl">
            Customer Feedback
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
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

      {/* FINAL CTA */}
      <section className="bg-red-600 py-28 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Need commercial garage door repair in {data.city}?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for commercial repair service that helps keep your
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
              className="rounded-xl border border-white px-8 py-4 font-bold hover:bg-white hover:text-black"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}