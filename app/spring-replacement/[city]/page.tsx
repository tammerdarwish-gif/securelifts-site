import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import { getAllCitySlugs, getCityData } from "@/lib/cityPages";
import {
  generateServiceCityMetadata,
  serviceCitySeoConfigs,
} from "@/lib/serviceCitySeo";

type CityPageData = {
  city?: string;
  nearbyAreas?: string[];
};

function formatCityName(slug: string) {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
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
  const data = getCityData(city) as CityPageData | undefined;

  if (!data) {
    notFound();
  }

  return generateServiceCityMetadata(city, serviceCitySeoConfigs.springReplacement);
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

  const cityName = data.city?.trim() || formatCityName(city);

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-slate-950 text-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.2em] text-red-400 font-bold">
            Garage Door Spring Replacement
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Spring Replacement in {cityName}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Broken garage door spring? This is the #1 reason doors stop working.
            We replace springs safely, correctly, and fast so your door runs like it should.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:18668281818"
              className="inline-flex items-center gap-2 bg-red-600 px-7 py-4 rounded-xl font-bold hover:bg-red-700"
            >
              <FaPhoneAlt />
              (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center gap-2 border border-white px-7 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900"
            >
              Book Service
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* WARNING SECTION */}
      <section className="bg-red-50 border-t border-red-200 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex justify-center mb-6 text-red-600 text-5xl">
            <FaExclamationTriangle />
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-red-700">
            DO NOT OPERATE THE DOOR
          </h2>

          <p className="mt-4 text-lg text-red-700 font-semibold">
            A broken spring puts extreme stress on your garage door system.
          </p>

          <p className="mt-4 text-slate-700 max-w-3xl mx-auto">
            Trying to open or close the door can damage the opener, bend panels,
            snap cables, or cause serious injury. This is one of the most dangerous
            garage door issues and should be handled immediately.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black">Signs your spring is broken</h2>

          <div className="mt-6 space-y-4">
            {[
              "Garage door won’t open",
              "Door feels extremely heavy",
              "Loud bang from garage",
              "Door opens a few inches then stops",
              "Visible gap in spring",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <FaCheckCircle className="text-red-600 mt-1" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-2xl font-bold">Why spring replacement matters</h3>

          <p className="mt-4 text-slate-600 leading-7">
            Springs carry the entire weight of the garage door. When one breaks,
            the system becomes unstable and unsafe. Replacing it correctly ensures
            balanced operation, protects your opener, and prevents further damage.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-200">
          <img
            src="/images/approved/spring-closeup-hero.jpg"
            alt="Broken garage door spring"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Why choose SecureLifts</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaBolt />,
                title: "Fast response",
                text: "We handle spring replacements quickly to get your door working again.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Safe installation",
                text: "Proper tools and tension handling for safe and reliable operation.",
              },
              {
                icon: <FaClock />,
                title: "Same-day service",
                text: "Most spring replacements are completed the same day.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl border border-slate-200"
              >
                <div className="text-red-600 text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black">
            Need spring replacement in {cityName}?
          </h2>

          <p className="mt-5 text-lg text-red-100">
            Call now or book online for fast, professional garage door service.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:18668281818"
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2"
            >
              <FaPhoneAlt />
              (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="border border-white px-8 py-4 rounded-xl font-bold"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
