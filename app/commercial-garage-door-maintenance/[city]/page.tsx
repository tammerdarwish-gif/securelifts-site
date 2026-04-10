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
  FaClipboardList,
} from "react-icons/fa";

const cityData = {
  "west-palm-beach": {
    city: "West Palm Beach",
    county: "Palm Beach County",
    nearby: "Palm Beach, Lake Worth, Royal Palm Beach, and Wellington",
    intro:
      "West Palm Beach commercial properties need maintenance plans that reduce downtime, protect access, and keep daily operations moving.",
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
    nearby: "Delray Beach, Deerfield Beach, and surrounding South Palm Beach markets",
    intro:
      "Boca Raton businesses benefit from commercial maintenance plans that protect appearance, reliability, and smoother day-to-day performance.",
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
      "Delray Beach commercial properties need maintenance service that catches problems early and keeps garage door systems dependable.",
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
      "Boynton Beach businesses need maintenance plans that improve reliability, reduce repeat repairs, and support long-term door performance.",
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
      "Wellington commercial properties need proactive garage door maintenance that supports access, safety, and smoother operations.",
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
      "Jupiter businesses need commercial maintenance service that helps garage door systems hold up under weather exposure and daily use.",
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
      "Fort Lauderdale commercial buildings need maintenance plans that reduce disruption, protect workflow, and keep doors operating reliably.",
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
      "Hollywood businesses need preventative commercial maintenance that reduces breakdowns and keeps access systems dependable.",
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
      "Miami commercial properties need maintenance plans that support heavy daily use, reduce downtime, and protect long-term access reliability.",
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
      "Hialeah commercial and industrial buildings need proactive maintenance that helps hard-working door systems stay reliable.",
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
      "Doral businesses depend on preventative commercial maintenance to support shipping, receiving, access control, and consistent operations.",
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

export default async function CommercialGarageDoorMaintenanceCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = cityData[city as CityKey];

  if (!data) notFound();

  const servicePoints = [
    {
      title: `Commercial Maintenance in ${data.city}`,
      text: `We inspect and service commercial garage door systems in ${data.city} to help reduce downtime, catch wear early, and keep doors operating more reliably.`,
      icon: <FaTools />,
    },
    {
      title: "Preventive Tune-Ups & Safety Checks",
      text: "We inspect rollers, tracks, hinges, springs, cables, operators, and safety functions to catch issues before they become bigger failures.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Maintenance Reporting & Recommendations",
      text: "We help owners and managers understand what needs attention now, what can wait, and how to avoid repeat disruptions.",
      icon: <FaClipboardList />,
    },
  ];

  const maintenancePlans = [
    {
      title: "Basic Preventive Plan",
      subtitle: "For smaller commercial properties",
      bullets: [
        "Scheduled inspection visits",
        "Lubrication of key moving parts",
        "Basic hardware and balance review",
        "Early wear identification",
      ],
    },
    {
      title: "Priority Service Plan",
      subtitle: "For active business properties",
      bullets: [
        "Routine inspections and tune-ups",
        "Priority scheduling when issues come up",
        "Detailed recommendations on wear items",
        "Reduced risk of unplanned downtime",
      ],
    },
    {
      title: "Multi-Door Property Plan",
      subtitle: "For larger or multi-bay properties",
      bullets: [
        "Service for multiple commercial doors",
        "Structured maintenance tracking",
        "Property-wide inspection coverage",
        "Built for managers who need consistency",
      ],
    },
  ];

  const whyLeft = [
    `Maintenance plans tailored to ${data.city} commercial properties`,
    "Helps reduce downtime before it starts",
    "Professional communication with owners and managers",
  ];

  const whyRight = [
    "We focus on prevention, not just reacting to failures",
    "Service built around long-term reliability",
    `Trusted local support across ${data.county}`,
  ];

  const reviews = [
    {
      name: `${data.city} Property Manager`,
      text: `SecureLifts helped us stay ahead of problems instead of constantly reacting to them. The maintenance approach in ${data.city} has been a real improvement.`,
    },
    {
      name: `${data.city} Business Owner`,
      text: "Clear reporting, professional service, and fewer interruptions. That is exactly what we wanted from a maintenance partner.",
    },
    {
      name: `${data.city} Facility Supervisor`,
      text: "They helped us organize ongoing service better and catch issues early before they turned into bigger problems.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
     

      {/* HERO */}
      <section className="bg-slate-950 py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Commercial Garage Door Maintenance {data.city}
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Commercial Garage Door Maintenance in {data.city}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {data.intro} SecureLifts provides commercial maintenance service
              for business owners, managers, and commercial properties that want
              fewer surprises, smoother operation, and stronger long-term system health.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              We serve businesses across {data.city}, {data.nearby}, with
              maintenance service designed to protect access, reduce breakdowns,
              and support daily operations.
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
                Preventive Scheduling
              </span>
              <span className="inline-flex items-center gap-2">
                <FaWarehouse />
                Commercial Property Support
              </span>
              <span className="inline-flex items-center gap-2">
                <FaStar />
                Long-Term Reliability Focus
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MAINTENANCE MATTERS */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Why Maintenance Matters
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              The real goal is fewer disruptions and better operational consistency
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Commercial maintenance should not feel optional when door systems
              affect workflow, loading, access, staff movement, and business continuity.
              The cost of downtime is usually much higher than the cost of staying ahead of wear.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Reduce unexpected breakdowns",
              "Catch wear before it creates downtime",
              "Improve daily door performance",
              "Protect operators, tracks, springs, and hardware",
              `Support commercial properties in ${data.city}`,
              "Create a more predictable maintenance cycle",
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

      {/* MAINTENANCE SERVICES */}
      <section className="border-t border-slate-100 bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Commercial Maintenance Service
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Maintenance built around real property needs, not generic checklists
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Commercial maintenance should reflect how the building is used,
              how hard the doors work, and how much downtime the property can tolerate.
              That is why the service needs to be structured around actual operating demands.
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

      {/* MAINTENANCE PLANS */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Maintenance Plans
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Flexible plan options for different commercial property needs
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Not every property needs the same maintenance schedule. A smaller
              site with one commercial door should not be treated like a
              warehouse with multiple active bays. SecureLifts can structure
              maintenance around the building, usage level, and operational priority.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {maintenancePlans.map((plan) => (
              <div
                key={plan.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-red-600">
                  <FaClipboardList />
                </div>

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

      {/* PROPERTY TYPES */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Properties We Serve
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Maintenance support across {data.city} and surrounding business markets
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              SecureLifts supports a wide range of commercial properties across{" "}
              {data.city} and nearby areas in {data.county}, with maintenance
              tailored to the building, usage level, and operational risk.
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
            Need commercial garage door maintenance in {data.city}?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for commercial maintenance service and plan options
            designed to reduce downtime, improve reliability, and support your property long-term.
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