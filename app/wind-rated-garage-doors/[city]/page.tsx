import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceSchema from "../../components/ServiceSchema";
import ReviewTrustSection from "../../components/ReviewTrustSection";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";
const BASE_URL = "https://securelifts.com";

type PageParams = {
  city: string;
};

type CityInsight = {
  areaLine: string;
  localNeed: string;
  neighborhoodNote: string;
  nearbyAreas: string[];
};

const validWindRatedCitySlugs = [
  "miami",
  "miami-beach",
  "hialeah",
  "kendall",
  "homestead",
  "doral",
  "cutler-bay",
  "pembroke-pines",
  "miramar",
  "hollywood",
  "fort-lauderdale",
  "davie",
  "sunrise",
  "plantation",
  "coral-springs",
  "parkland",
  "tamarac",
  "deerfield-beach",
  "pompano-beach",
  "oakland-park",
  "lauderhill",
  "boynton-beach",
  "delray-beach",
  "boca-raton",
  "highland-beach",
  "lighthouse-point",
  "west-palm-beach",
  "palm-beach",
  "palm-beach-gardens",
  "jupiter",
  "juno-beach",
  "north-palm-beach",
  "lake-worth",
  "wellington",
  "greenacres",
  "royal-palm-beach",
  "loxahatchee",
  "riviera-beach",
  "tequesta",
  "stuart",
  "port-st-lucie",
];

const validWindRatedCitySlugSet = new Set(validWindRatedCitySlugs);

const cityInsights: Record<string, CityInsight> = {
  "fort-lauderdale": {
    areaLine:
      "From Las Olas and Victoria Park to Coral Ridge, Rio Vista, Imperial Point, and nearby coastal neighborhoods, Fort Lauderdale homes need garage doors that can handle daily use and serious storm-season pressure.",
    localNeed:
      "Fort Lauderdale properties can face coastal wind exposure, older garage door systems, and high curb-appeal expectations, so the right wind-rated replacement has to balance strength, appearance, and clean installation.",
    neighborhoodNote:
      "We help Fort Lauderdale homeowners compare traditional, modern, carriage-house, and custom wind-rated garage door options that fit the home instead of looking like a basic replacement.",
    nearbyAreas: ["Wilton Manors", "Oakland Park", "Lauderdale-by-the-Sea", "Pompano Beach"],
  },
  "north-palm-beach": {
    areaLine:
      "From Anchorage Drive and Prosperity Farms Road to homes near the Intracoastal, North Palm Beach homeowners often want garage doors that look clean while adding stronger storm-pressure performance.",
    localNeed:
      "North Palm Beach homes can have higher-end exterior expectations and real storm-season exposure, so the right wind-rated door should protect the opening without lowering the look of the property.",
    neighborhoodNote:
      "SecureLifts helps North Palm Beach homeowners compare wind-rated doors that match coastal architecture, modern upgrades, and long-term daily reliability.",
    nearbyAreas: ["Palm Beach Gardens", "Juno Beach", "Lake Park", "Singer Island"],
  },
  "boca-raton": {
    areaLine:
      "From East Boca and Mizner-area homes to gated communities west of I-95, Boca Raton homeowners often want stronger garage door protection without sacrificing curb appeal.",
    localNeed:
      "Boca Raton homes frequently need a better balance of style, HOA-friendly design direction, storm pressure resistance, and clean installation quality.",
    neighborhoodNote:
      "We help Boca Raton homeowners compare wind-rated garage doors by style, color, window layout, hardware, and performance level before ordering.",
    nearbyAreas: ["Delray Beach", "Highland Beach", "Deerfield Beach", "Parkland"],
  },
  "royal-palm-beach": {
    areaLine:
      "From Madison Green and Crestwood to homes near Southern Boulevard and State Road 7, Royal Palm Beach homeowners need reliable garage doors built for daily use and storm-season peace of mind.",
    localNeed:
      "Royal Palm Beach homes often need practical, attractive wind-rated door upgrades that improve storm pressure resistance while keeping the exterior clean and family-friendly.",
    neighborhoodNote:
      "SecureLifts helps Royal Palm Beach homeowners choose the right wind-rated garage door style, opener pairing, hardware, and installation plan for the home.",
    nearbyAreas: ["Wellington", "Loxahatchee", "West Palm Beach", "Lake Worth"],
  },
};

function formatCityName(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getCityInsight(slug: string, cityName: string): CityInsight {
  return (
    cityInsights[slug] || {
      areaLine: `SecureLifts installs wind-rated garage doors in ${cityName} for homeowners who want stronger storm-pressure performance, reliable daily use, and a finished look that fits the property.`,
      localNeed: `${cityName} homeowners need garage door options that can handle South Florida storm-season conditions without settling for a plain, weak, or poorly installed system.`,
      neighborhoodNote: `We help ${cityName} homeowners compare styles, colors, windows, hardware, and wind-rated system options before the project is ordered.`,
      nearbyAreas: ["West Palm Beach", "Boca Raton", "Fort Lauderdale", "Miami"],
    }
  );
}

export function generateStaticParams() {
  return validWindRatedCitySlugs.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { city } = await params;

  if (!validWindRatedCitySlugSet.has(city)) {
    notFound();
  }

  const cityName = formatCityName(city);
  const canonical = `${BASE_URL}/wind-rated-garage-doors/${city}`;

  return {
    title: `Wind-Rated Garage Doors in ${cityName}, FL | SecureLifts`,
    description: `SecureLifts installs wind-rated garage doors in ${cityName}, FL built for stronger pressure resistance, storm protection, daily reliability, and curb appeal. Call ${PHONE}.`,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `Wind-Rated Garage Doors in ${cityName}, FL | SecureLifts`,
      description: `Wind-rated garage door installation in ${cityName}, FL with stronger storm-pressure performance, professional installation, and premium design options.`,
      url: canonical,
      siteName: "SecureLifts",
      type: "website",
      images: [
        {
          url: "/wind-rated-garage-doors-hero.png",
          width: 1536,
          height: 1024,
          alt: `Wind-rated garage doors installed by SecureLifts in ${cityName}, Florida`,
        },
      ],
    },
  };
}

export default async function WindRatedGarageDoorsCityPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { city } = await params;

  if (!validWindRatedCitySlugSet.has(city)) {
    notFound();
  }

  const cityName = formatCityName(city);
  const insight = getCityInsight(city, cityName);
  const canonicalUrl = `${BASE_URL}/wind-rated-garage-doors/${city}`;

  const benefits = [
    {
      icon: "🌀",
      title: "Built for Higher Wind Pressure",
      text: `Wind-rated garage doors in ${cityName} are selected to handle stronger pressure loads during severe weather and reduce the risk of door failure under storm conditions.`,
    },
    {
      icon: "🛡️",
      title: "Stronger Reinforcement Systems",
      text: "These systems can include upgraded bracing, stronger tracks, heavier-duty hardware, and reinforced door construction for better storm-focused performance.",
    },
    {
      icon: "🏠",
      title: "Protect a Major Opening on the Home",
      text: "The garage door is one of the largest vulnerable openings on a home. A stronger wind-rated system helps protect that opening when weather turns serious.",
    },
    {
      icon: "🔧",
      title: "Reliable Daily Use Too",
      text: "A properly installed wind-rated garage door should improve storm readiness while still operating smoothly for everyday use.",
    },
  ];

  const styleOptions = [
    {
      icon: "🏡",
      title: "Traditional Wind-Rated Garage Doors",
      text: `Classic raised-panel looks with upgraded reinforcement for ${cityName} homeowners who want storm-focused performance and timeless curb appeal.`,
      href: "/hurricane-garage-doors/traditional",
    },
    {
      icon: "⬛",
      title: "Modern Wind-Rated Garage Doors",
      text: "Contemporary designs with clean lines, stronger structure, glass options, and a more architectural look.",
      href: "/hurricane-garage-doors/modern",
    },
    {
      icon: "🚪",
      title: "Carriage House Wind-Rated Garage Doors",
      text: "Decorative carriage-house style with stronger storm-ready construction for homeowners who want appearance and performance together.",
      href: "/hurricane-garage-doors/carriage-house",
    },
    {
      icon: "✨",
      title: "Custom Wind-Rated Garage Doors",
      text: "Tailored options for homeowners who want a specific look, finish, window layout, and wind-performance direction.",
      href: "/hurricane-garage-doors/custom",
    },
  ];

  const compareOptions = [
    {
      title: "Hurricane Garage Doors",
      text: "A broader category for homeowners looking for storm-ready garage door protection across multiple weather concerns.",
      href: "/hurricane-garage-doors",
    },
    {
      title: "Impact-Rated Garage Doors",
      text: "For homeowners focused more on resistance to flying debris and storm-driven object impact.",
      href: "/impact-rated-garage-doors",
    },
    {
      title: "Miami-Dade Rated Garage Doors",
      text: "For homeowners comparing one of the strongest recognized storm-performance categories commonly associated with South Florida demand.",
      href: "/miami-dade-rated-garage-doors",
    },
  ];

  const whyChooseUs = [
    `Local guidance for wind-rated garage doors in ${cityName}`,
    "Professional installation instead of weak box-store setups",
    "Premium design options, not just basic utility looks",
    "Help selecting style, windows, color, hardware, and performance level",
    "Repair, replacement, and full new-door installation available",
    "South Florida-focused service built around real storm risk",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assess the Home",
      text: `We evaluate the home in ${cityName}, current door system, exposure level, and what level of wind-focused protection makes sense.`,
    },
    {
      number: "02",
      title: "Compare Wind-Rated Options",
      text: "We walk you through styles, colors, window layouts, hardware, and performance levels so the decision is based on value, not guesswork.",
    },
    {
      number: "03",
      title: "Professional Installation",
      text: "SecureLifts installs the complete wind-rated garage door system with proper fit, hardware, and long-term performance in mind.",
    },
    {
      number: "04",
      title: "Final Testing & Walkthrough",
      text: "We verify operation, safety, finish quality, and overall function before the project is complete.",
    },
  ];

  const faqs = [
    {
      question: `Do you install wind-rated garage doors in ${cityName}, FL?`,
      answer: `Yes. SecureLifts installs wind-rated garage doors in ${cityName} and nearby South Florida areas with professional guidance on style, performance level, and installation requirements.`,
    },
    {
      question: "What is a wind-rated garage door?",
      answer:
        "A wind-rated garage door is a stronger door system designed to handle higher wind pressure loads during major weather events compared with a standard garage door.",
    },
    {
      question: "Is a wind-rated garage door the same as an impact-rated garage door?",
      answer:
        "No. Wind-rated focuses on pressure resistance. Impact-rated focuses more on resisting damage from flying debris. Some homeowners compare both when deciding what level of storm protection they want.",
    },
    {
      question: `Can SecureLifts replace my current garage door in ${cityName} with a wind-rated model?`,
      answer:
        "Yes. We can inspect the existing setup, recommend the right wind-rated replacement options, and install a stronger system that fits the home.",
    },
    {
      question: "Do wind-rated garage doors still look good on the home?",
      answer:
        "Yes. Homeowners can choose traditional, modern, carriage-house, and custom styles without settling for a plain or unattractive look.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <ServiceSchema
        name={`Wind-Rated Garage Doors in ${cityName}, FL`}
        description={`SecureLifts installs wind-rated garage doors in ${cityName}, FL built for stronger pressure resistance, storm protection, daily reliability, and premium curb appeal.`}
        url={canonicalUrl}
      />

      <section className="relative min-h-[820px] overflow-hidden">
        <Image
          src="/images/approved/modern-slate-hurricane-card.jpg"
          alt={`Wind-rated garage doors installed by SecureLifts in ${cityName}, Florida for stronger storm pressure resistance`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
        <div className="relative z-10 mx-auto flex min-h-[820px] max-w-7xl items-end px-6 pb-14 pt-36 md:pt-40">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/90 md:text-sm" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}>
                SecureLifts Storm-Rated Garage Door Systems
              </p>
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-6xl" style={{ textShadow: "0 3px 16px rgba(0,0,0,0.72)" }}>
              Wind-Rated Garage Doors in {cityName}, FL
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-white/95 md:text-xl" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.62)" }}>
              SecureLifts installs wind-rated garage doors in {cityName} for stronger pressure resistance, reliable daily operation, and better curb appeal before storm season.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold !text-white shadow-lg transition hover:bg-red-700">
                Call Now – {PHONE}
              </a>
              <Link href="/book-service" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold !text-gray-900 shadow-lg transition hover:bg-gray-100">
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">Local Wind-Rated Garage Door Installation</p>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">Stronger Garage Door Protection for {cityName} Homes</h2>
            <p className="mb-5 text-lg leading-8 text-gray-700">{insight.areaLine}</p>
            <p className="mb-5 text-lg leading-8 text-gray-700">{insight.localNeed}</p>
            <p className="text-lg leading-8 text-gray-700">{insight.neighborhoodNote}</p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Fast Local Help</p>
            <h3 className="mb-4 text-2xl font-bold">Need a Wind-Rated Door Quote in {cityName}?</h3>
            <p className="mb-6 leading-7 text-gray-700">Call SecureLifts or book online. We can help you compare style, protection level, availability, and the right next step for your home.</p>
            <div className="flex flex-col gap-3">
              <a href={PHONE_HREF} className="rounded-xl bg-red-600 px-5 py-4 text-center font-semibold !text-white transition hover:bg-red-700">Call {PHONE}</a>
              <Link href="/book-service" className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-center font-semibold text-gray-900 transition hover:border-red-200 hover:shadow-sm">Book Service</Link>
              <p className="text-sm leading-6 text-gray-600">Nearby areas served: {insight.nearbyAreas.join(", ")}.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Stronger by Design</p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">Why {cityName} Homeowners Choose Wind-Rated Garage Doors</h2>
            <p className="text-lg leading-8 text-gray-600">These systems are chosen by homeowners who want stronger resistance to storm pressure, better structural support, and more confidence during South Florida weather events.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">{item.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="leading-7 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">Design Options</p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">Wind-Rated Styles That Still Look Premium</h2>
            <p className="text-lg leading-8 text-gray-600">Wind-rated does not have to mean plain or bulky. The right system can protect the home while still upgrading the exterior.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {styleOptions.map((item) => (
              <Link key={item.title} href={item.href} className="rounded-2xl border border-gray-200 bg-white p-7 !text-gray-900 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">{item.icon}</div>
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-red-600">View Designs</span>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">{item.title}</h3>
                <p className="leading-7 text-gray-700">{item.text}</p>
                <span className="mt-5 inline-block text-sm font-bold text-red-600">Open design page →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Compare Storm Categories</p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">Compare Wind-Rated to Other Storm-Focused Options</h2>
            <p className="text-lg leading-8 text-gray-600">Some homeowners know they want stronger wind pressure performance. Others want to compare categories before making the final decision.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {compareOptions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mb-5 leading-7 text-gray-700">{item.text}</p>
                <Link href={item.href} className="inline-flex items-center font-semibold text-red-600 transition hover:text-red-700">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">How We Handle It</p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">Our Wind-Rated Garage Door Process in {cityName}</h2>
            <p className="text-lg leading-8 text-gray-600">Better guidance, cleaner installation, stronger final result.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 text-3xl font-bold text-red-600">{step.number}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="leading-7 text-gray-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">Why SecureLifts</p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">Why {cityName} Homeowners Trust SecureLifts for Wind-Rated Garage Doors</h2>
            <p className="text-lg leading-8 text-gray-600">Wind-rated systems need more than a product brochure. They need the right recommendation, clean installation, and a company that understands South Florida storm pressure demands.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-lg text-green-600">✓</div>
                <p className="text-lg leading-7 text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewTrustSection
        heading={`Why ${cityName} Homeowners Choose SecureLifts`}
        intro="When South Florida homeowners invest in stronger garage doors, they want a company that communicates clearly, installs cleanly, and delivers results that actually hold up."
        reviews={[
          { name: "Michael R.", text: "Fast response, professional service, and the garage door works better than ever." },
          { name: "Jessica T.", text: "They showed up on time, explained everything clearly, and got it done right." },
          { name: "Daniel P.", text: "Best garage door company I’ve dealt with. Clean work and excellent communication." },
          { name: "Alicia T.", text: "The whole process felt organized and professional from the estimate to the final install." },
        ]}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">FAQs</p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">Wind-Rated Garage Door FAQs for {cityName}</h2>
            <p className="text-lg leading-8 text-gray-600">Straight answers for homeowners comparing stronger storm-pressure garage door systems in {cityName}, FL.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.question}</h3>
                <p className="leading-7 text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white/5 px-8 py-14 text-center shadow-xl md:px-12">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Ready for Stronger Wind Pressure Protection in {cityName}?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/85">SecureLifts helps {cityName} homeowners choose and install wind-rated garage doors built for protection, performance, and premium curb appeal.</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold !text-white shadow-lg transition hover:bg-red-700">Call {PHONE}</a>
            <Link href="/book-service" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold !text-gray-900 shadow-lg transition hover:bg-gray-100">Book Service</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
