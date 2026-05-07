

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaPhoneAlt, FaCheckCircle, FaStar, FaTools, FaShieldAlt } from "react-icons/fa";

import { getAllCitySlugs, getCityData } from "@/lib/cityPages";
import {
  generateServiceCityMetadata,
  serviceCitySeoConfigs,
} from "@/lib/serviceCitySeo";

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
  return generateServiceCityMetadata(
    city,
    serviceCitySeoConfigs.garageDoorRollerReplacement
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = getCityData(city) as CityPageData | undefined;

  if (!data) {
    notFound();
  }

  const cityName = data?.city?.trim() || formatCityName(city);

  const nearbyAreas =
    data?.nearbyAreas ?? [
      `Homes near ${cityName}`,
      `Neighborhoods around ${cityName}`,
      "Nearby South Florida areas",
    ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-red-500 font-semibold uppercase tracking-widest">
              Garage Door Repair Service
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-black">
              Garage Door Roller Replacement in {cityName}
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Worn or broken rollers cause noise, shaking, and poor door movement. We replace rollers to restore smooth and quiet operation fast.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="tel:8668281818"
                className="bg-red-600 px-6 py-4 rounded-xl font-bold flex items-center gap-2"
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
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/approved/interior-door-hardware-card.jpg"
              width={900}
              height={650}
              className="max-h-[500px] w-full rounded-2xl bg-slate-100 object-contain"
              alt="Garage door rollers and track hardware inspection by SecureLifts"
            />
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">Signs Your Rollers Need Replacement</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              "Loud grinding or squeaking noise",
              "Door shaking or vibrating",
              "Door moves unevenly",
              "Rollers visibly worn or cracked",
              "Door getting stuck midway",
            ].map((item) => (
              <div key={item} className="flex gap-3 bg-slate-50 p-5 rounded-2xl border">
                <FaCheckCircle className="text-green-600 mt-1" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">What We Fix</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border">
              <FaTools className="text-red-600 text-2xl" />
              <h3 className="mt-4 font-bold">Roller replacement</h3>
              <p className="text-slate-600 mt-2">
                Replace worn or broken rollers with long-lasting upgraded options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              <FaShieldAlt className="text-red-600 text-2xl" />
              <h3 className="mt-4 font-bold">Smooth operation</h3>
              <p className="text-slate-600 mt-2">
                Improve how the door moves to prevent future damage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              <FaTools className="text-red-600 text-2xl" />
              <h3 className="mt-4 font-bold">Noise reduction</h3>
              <p className="text-slate-600 mt-2">
                Upgrade to quieter rollers for better day-to-day use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">Service Areas Near {cityName}</h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <span key={area} className="bg-slate-100 px-4 py-2 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 py-20 bg-slate-100">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black">Customers Notice the Difference</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "Door became quiet immediately.",
              "Smooth operation after years of noise.",
              "Quick service and clean work.",
            ].map((text, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border">
                <div className="flex justify-center text-yellow-400">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>
                <p className="mt-4 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white px-6 py-20 text-center">
        <h2 className="text-4xl font-black">
          Need Roller Replacement in {cityName}?
        </h2>

        <p className="mt-4 text-lg">
          Call now or book service and get it fixed the right way.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <a
              href="tel:8668281818"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-slate-950"
            >
              <FaPhoneAlt className="text-slate-950" />
              <span className="text-slate-950">Call (866) 828-1818</span>
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
