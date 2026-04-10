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
      "West Palm Beach commercial properties need garage door systems that hold up under daily use, support operations, and present a professional appearance.",
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
      "Boca Raton businesses need commercial garage door installation that combines reliable performance, clean appearance, and long-term value.",
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
      "Delray Beach commercial properties need new garage door systems that improve access, strengthen reliability, and support daily business use.",
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
      "Boynton Beach businesses benefit from commercial garage door installation that improves durability, smoother operation, and dependable access.",
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
      "Wellington commercial properties need installed garage door systems that support security, daily workflow, and a professional finished look.",
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
      "Jupiter businesses need commercial garage door installation built for weather exposure, daily use, and dependable long-term operation.",
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
      "Fort Lauderdale commercial buildings need new garage door systems that keep access moving, reduce operational issues, and hold up under constant use.",
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
      "Hollywood businesses need commercial garage door installation that supports workflow, daily reliability, and a stronger long-term system.",
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
      "Miami commercial properties need garage door installation that can handle heavy use, protect access, and keep fast-paced operations moving.",
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
      "Hialeah commercial and industrial buildings need installed garage door systems that work hard, stay reliable, and support demanding daily use.",
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
      "Doral businesses depend on commercial garage door installation that supports shipping, receiving, access control, and operational consistency.",
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

export default async function CommercialGarageDoorInstallationCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = cityData[city as CityKey];

  if (!data) notFound();

  const servicePoints = [
    {
      title: `Commercial Garage Door Installation in ${data.city}`,
      text: `We install commercial overhead, sectional, and roll-up door systems for businesses in ${data.city} that need dependable access and long-term performance.`,
      icon: <FaIndustry />,
    },
    {
      title: "Operators, Tracks & Hardware",
      text: "We install the supporting components that matter, including operators, tracks, rollers, springs, and hardware matched to the door system.",
      icon: <FaTools />,
    },
    {
      title: "Built for Daily Use",
      text: "The goal is not just a new door. It is a commercial system that supports workflow, reliability, and smoother daily operation.",
      icon: <FaShieldAlt />,
    },
  ];

  const whyLeft = [
    `Commercial installation tailored to ${data.city} properties`,
    "Professional communication with owners and managers",
    "Built for long-term reliability and smoother operation",
  ];

  const whyRight = [
    "We match the installation to the property’s real use",
    "Clean finish with attention to alignment and function",
    `Trusted local service across ${data.county}`,
  ];

  const reviews = [
    {
      name: `${data.city} Property Manager`,
      text: `SecureLifts helped us replace an aging commercial door system and the new installation feels stronger, smoother, and better suited to our operation in ${data.city}.`,
    },
    {
      name: `${data.city} Business Owner`,
      text: "They communicated clearly, handled the installation professionally, and delivered a final result that looked and performed right.",
    },
    {
      name: `${data.city} Facility Supervisor`,
      text: "The install was organized, clean, and well executed. They paid attention to the details that actually matter on a commercial property.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      

      {/* HERO */}
      <section className="bg-slate-950 py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Commercial Garage Door Installation {data.city}
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Commercial Garage Door Installation in {data.city}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {data.intro} SecureLifts installs commercial garage door systems
              for business owners, managers, and property operators who need
              stronger performance, better access, and dependable long-term use.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              We serve businesses across {data.city}, {data.nearby}, with
              commercial installation built around the way the property actually
              operates.
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
                Fast Commercial Scheduling
              </span>
              <span className="inline-flex items-center gap-2">
                <FaWarehouse />
                Business Property Installation
              </span>
              <span className="inline-flex items-center gap-2">
                <FaStar />
                Reliable Commercial Performance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NEW INSTALLATION */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              When Installation Makes Sense
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              A new commercial door system should support operations, access, and durability
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Some commercial systems reach the point where repeated repairs no
              longer make sense. A new installation can improve reliability,
              reduce disruption, and give the property a stronger, cleaner, more
              dependable system moving forward.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "The current commercial door system is aging or unreliable",
              "Repair costs are stacking up too often",
              "The property needs stronger daily performance",
              "Access, security, or appearance needs to improve",
              `You need dependable installation service in ${data.city}`,
              "You want a better long-term solution for the property",
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

      {/* INSTALLATION SERVICES */}
      <section className="border-t border-slate-100 bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Commercial Installation Services
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Installation built around the property and the way it is used
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Commercial installation should not be treated like a one-size-fits-all job.
              The right system depends on the building, usage pattern, access
              needs, and the level of reliability the property requires.
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
              Commercial installation across {data.city} and surrounding business markets
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              SecureLifts supports a wide range of commercial properties across{" "}
              {data.city} and nearby areas in {data.county}, with installation
              tailored to the building type and operational demand.
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
            Need commercial garage door installation in {data.city}?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for commercial installation service that improves
            access, supports operations, and delivers a stronger long-term system.
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