import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaTools,
  FaShieldAlt,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

import { getAllCitySlugs, getCityData } from "@/lib/cityPages";

function formatCityName(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

type CityPageData = {
  city?: string;
  nearbyAreas?: string[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = getCityData(city) as CityPageData | undefined;

  const cityName = data?.city?.trim() || formatCityName(city);
  const title = `Off-Track Garage Door Repair in ${cityName} | SecureLifts`;
  const description = `Fast, professional off-track garage door repair in ${cityName}. SecureLifts fixes garage doors that slipped off track, jammed, tilted, or became unsafe to operate.`;
  const canonical = `https://securelifts.com/garage-door-off-track-repair/${city}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "SecureLifts",
      type: "website",
      images: [
        {
          url: "/securelifts-van.jpg",
          width: 1200,
          height: 630,
          alt: `Off-track garage door repair in ${cityName} by SecureLifts`,
        },
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = getCityData(city);

  if (!data) {
    notFound();
  }

  const pageData = data as CityPageData;
  const cityName = pageData.city?.trim() || formatCityName(city);

  const nearbyAreas =
    pageData.nearbyAreas ?? [
      `Homes near ${cityName}`,
      `Neighborhoods around ${cityName}`,
      "Nearby South Florida service areas",
    ];

  const reviewCards = [
    {
      name: "Michael R.",
      text: `Fast response, clean work, and they handled the off-track repair in ${cityName} the right way without wasting time.`,
    },
    {
      name: "Jessica T.",
      text: "They explained the problem clearly, fixed the unsafe condition, and made the whole process feel organized and professional.",
    },
    {
      name: "Daniel P.",
      text: "Best garage door company I’ve dealt with. The door was crooked and jammed, and now it works the way it should.",
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
      href: `/garage-door-opener-repair/${city}`,
      label: `Garage Door Opener Repair in ${cityName}`,
    },
    {
      href: `/emergency-garage-door-repair/${city}`,
      label: `Emergency Garage Door Repair in ${cityName}`,
    },
    {
      href: `/garage-door-cable-repair/${city}`,
      label: `Garage Door Cable Repair in ${cityName}`,
    },
    {
      href: `/garage-door-maintenance/${city}`,
      label: `Garage Door Maintenance in ${cityName}`,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <p className="text-red-500 font-semibold uppercase tracking-widest">
              Emergency Garage Door Service
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
              Off-Track Garage Door Repair in {cityName}
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Garage door off track? This is a serious safety issue. SecureLifts provides fast, professional off-track garage door repair in {cityName} to get your door back on track safely and prevent further damage.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                <span className="text-white/70">Service:</span> Off-Track Repair
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                <span className="text-white/70">Area:</span> {cityName}
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                <span className="text-white/70">Priority:</span> Same-Day Response
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:8668281818"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-4 rounded-xl flex items-center gap-2"
              >
                <FaPhoneAlt /> Call (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="border border-white px-6 py-4 rounded-xl font-bold hover:bg-white hover:text-black"
              >
                Book Service
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex justify-center">
            <img
              src="/offtrack-worse.jpg"
              alt="Off-track garage door example"
              className="w-full max-h-[520px] object-contain rounded-2xl"
            />
          </div>

        </div>
      </section>

      {/* DANGER SECTION */}
      <section className="bg-red-50 px-6 py-16">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-black text-red-700">
              ⚠️ Off-Track Doors Are Dangerous
            </h2>

            <p className="mt-4 text-lg text-slate-700">
              A garage door that has come off its tracks can collapse, cause injury, or damage your property if used improperly.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Door hanging uneven or crooked",
                "Grinding or loud snapping noise",
                "Door stuck halfway",
                "Rollers popped out of track",
                "Cable damage or tension issues",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow border-2 border-red-500">
            <div className="flex items-center gap-4">
              <div className="text-red-600 text-4xl">
                <FaExclamationTriangle />
              </div>
              <h3 className="text-2xl font-black text-red-700 uppercase">
                DO NOT USE THE DOOR
              </h3>
            </div>
            <p className="mt-4 text-lg font-semibold text-slate-800">
              Operating an off-track garage door can make the problem worse and lead to
              costly repairs or serious injury.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">
            What We Fix During Off-Track Repairs
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              "Realign garage door tracks",
              "Reset rollers properly",
              "Repair or replace damaged cables",
              "Fix bent or misaligned tracks",
              "Balance door tension",
              "Full safety inspection",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 border p-5 rounded-2xl bg-slate-50"
              >
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-16 bg-white">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-3xl font-black">
      Off-Track Garage Door Repair Near {cityName}
    </h2>

    <p className="mt-4 text-lg text-slate-600">
      We provide garage door off-track repair throughout {cityName} and nearby
      areas. Whether your door came off track due to impact, worn rollers,
      or cable failure, our team responds quickly to restore safe operation.
    </p>

    <div className="mt-6 flex flex-wrap gap-3">
      {nearbyAreas.map((area) => (
        <span key={area} className="bg-slate-100 px-4 py-2 rounded-full">
          {area}
        </span>
      ))}
    </div>
  </div>
</section>

      {/* WHY CHOOSE */}
      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">
            Why Choose SecureLifts in {cityName}
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Feature icon={<FaBolt />} title="Fast Response" text="We prioritize off-track emergencies and respond quickly." />
            <Feature icon={<FaShieldAlt />} title="Safe Repairs" text="We fix doors the right way to prevent future issues." />
            <Feature icon={<FaTools />} title="Expert Technicians" text="Experienced team handling complex door issues daily." />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black">
            Trusted Garage Door Repair in {cityName}
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {reviewCards.map((review) => (
              <div key={review.name} className="border p-6 rounded-2xl bg-white shadow-sm">
                <div className="flex justify-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="mt-4 text-slate-600">{review.text}</p>
                <p className="mt-5 font-bold text-slate-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-950 text-white px-6 py-20">
  <div className="mx-auto max-w-5xl">
    <h2 className="text-4xl font-black">
      Off-Track Garage Door FAQs in {cityName}
    </h2>

    <div className="mt-8 space-y-4">
      {[
        {
          q: "Can I open a garage door that is off track?",
          a: "No. Using the door can cause further damage, increase the repair cost, or make the door collapse. It should be repaired professionally as soon as possible.",
        },
        {
          q: "What causes a garage door to go off track?",
          a: "Common causes include broken cables, impact damage, worn rollers, bent track, loose hardware, or a door that was forced while under tension.",
        },
        {
          q: `Do you offer same-day off-track garage door repair in ${cityName}?`,
          a: `Yes. SecureLifts prioritizes unsafe garage door situations and offers fast off-track garage door repair in ${cityName} whenever possible.`,
        },
        {
          q: "Can an off-track garage door be repaired, or does it need replacement?",
          a: "Many off-track doors can be repaired if the damage is caught early. We inspect the rollers, tracks, cables, and overall condition to determine the safest fix.",
        },
        {
          q: "How long does off-track repair usually take?",
          a: "Most off-track repairs can be completed the same day depending on the severity of the damage and whether related parts like cables or rollers also need replacement.",
        },
        {
          q: `Can I book off-track garage door repair online for ${cityName}?`,
          a: `Yes. You can call SecureLifts directly or use the Book Service button to schedule off-track garage door repair in ${cityName}.`,
        },
      ].map((faq) => (
        <div key={faq.q} className="bg-white/5 p-5 rounded-xl">
          <p className="font-bold">{faq.q}</p>
          <p className="mt-2 text-slate-300">{faq.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-3xl font-black">
      Related Garage Door Services in {cityName}
    </h2>

    <div className="mt-6 grid md:grid-cols-2 gap-4">
      {relatedLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center justify-between border p-4 rounded-xl hover:border-red-400 transition bg-white shadow-sm"
        >
          <span>{item.label}</span>
          <FaArrowRight className="text-red-600" />
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-red-600 text-white px-6 py-20 text-center">
        <h2 className="text-4xl font-black">
          Need Off-Track Repair in {cityName}?
        </h2>

        <p className="mt-4 text-lg">
          Call now or book online for fast service.
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
            className="border border-white px-6 py-4 rounded-xl font-bold"
          >
            Book Service
          </Link>
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <div className="text-red-600 text-2xl">{icon}</div>
      <h3 className="mt-4 font-bold text-xl">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </div>
  );
}