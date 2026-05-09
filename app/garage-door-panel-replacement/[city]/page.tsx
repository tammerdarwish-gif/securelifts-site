import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaTools,
  FaShieldAlt,
  FaHome,
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
    serviceCitySeoConfigs.garageDoorPanelReplacement
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
      "Nearby South Florida service areas",
    ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-widest text-red-500">
              Garage Door Repair &amp; Upgrade
            </p>

            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              Garage Door Panel Replacement in {cityName}
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Damaged or dented panels can ruin the look and function of your garage door. We replace individual panels when possible and guide you honestly if a full replacement makes more sense.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:8668281818"
                className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-bold text-white"
              >
                <FaPhoneAlt /> Call (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="rounded-xl border border-white px-6 py-4 font-bold text-white"
              >
                Book Service
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/approved/damaged-panel-proof-card.jpg"
              width={900}
              height={650}
              className="max-h-[500px] w-full rounded-2xl bg-slate-100 object-contain"
              alt="Real damaged garage door panel inspected by SecureLifts"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">When Panel Replacement Makes Sense</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Single panel dented or damaged",
              "Accidental impact such as a car hitting the door",
              "Surface damage but structure still looks usable",
              "Matching panel is still available",
              "Door is relatively newer",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border bg-slate-50 p-5">
                <FaCheckCircle className="mt-1 text-green-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black text-amber-700">
            Not Every Door Should Be Repaired
          </h2>

          <p className="mt-6 text-lg text-slate-700">
            Sometimes panel replacement costs get too close to a full new door, especially if the model is discontinued or the panel match looks off.
          </p>

          <p className="mt-4 font-semibold text-slate-900">
            We’ll tell you straight: repair it or replace it.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">What We Handle</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <FaTools className="text-2xl text-red-600" />
              <h3 className="mt-4 text-xl font-bold">Panel matching</h3>
              <p className="mt-2 text-slate-600">
                We try to match your existing garage door style and color as closely as possible.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <FaShieldAlt className="text-2xl text-red-600" />
              <h3 className="mt-4 text-xl font-bold">Structural check</h3>
              <p className="mt-2 text-slate-600">
                We inspect the rest of the garage door to make sure the system is still safe and worth repairing.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <FaHome className="text-2xl text-red-600" />
              <h3 className="mt-4 text-xl font-bold">Curb appeal fix</h3>
              <p className="mt-2 text-slate-600">
                Restore the look of your home without jumping to a full door replacement when it is not needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black">Service Areas Near {cityName}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <span key={area} className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black">Trusted Garage Door Panel Help in {cityName}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "They gave us a straight answer on whether the panel could be replaced or not.",
              "The door looked much better after the damaged section was handled.",
              "Professional service and no wasted time.",
            ].map((text, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex justify-center text-yellow-400">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}
                </div>
                <p className="mt-4 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocalServiceSeoBlock
        cityName={cityName}
        citySlug={city}
        servicePath="garage-door-panel-replacement"
        serviceName="Garage Door Panel Replacement"
        nearbyAreas={nearbyAreas}
      />

      <section className="bg-red-600 px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-black">Need Panel Replacement in {cityName}?</h2>

        <p className="mt-4 text-lg">
          Call now or book service to get a clear answer fast.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:8668281818"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-red-600"
          >
            <FaPhoneAlt /> Call (866) 828-1818
          </a>

          <Link
            href="/book-service"
            className="rounded-xl border border-white px-6 py-4 font-bold text-white"
          >
            Book Service
          </Link>
        </div>
      </section>
    </main>
  );
}
