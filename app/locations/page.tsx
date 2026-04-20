import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { getAllCitySlugs, getCityData } from "@/lib/cityPages";

function formatCityName(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

type CityListItem = {
  slug: string;
  name: string;
  county?: string;
  nearbyAreas?: string[];
};

export const metadata: Metadata = {
  title: "South Florida Service Areas | SecureLifts",
  description:
    "Explore SecureLifts service areas across South Florida for garage door repair, broken spring replacement, opener repair, off-track repair, cable repair, maintenance, and emergency service.",
  alternates: {
    canonical: "https://securelifts.com/locations",
  },
};

export default function LocationsPage() {
  const cities: CityListItem[] = getAllCitySlugs()
    .map((slug) => {
      const data = getCityData(slug) as
        | { city?: string; county?: string; nearbyAreas?: string[] }
        | undefined;

      return {
        slug,
        name: data?.city?.trim() || formatCityName(slug),
        county: data?.county,
        nearbyAreas: data?.nearbyAreas ?? [],
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const featuredCities = cities.slice(0, 12);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              SecureLifts Service Areas
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
              Garage Door Service Across South Florida
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Browse the South Florida cities where SecureLifts provides garage
              door repair, broken spring replacement, opener repair, off-track
              repair, cable repair, maintenance, roller replacement, panel
              replacement, and emergency garage door service.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:18668281818"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-red-700"
              >
                <FaPhoneAlt />
                Call (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Book Service
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "City pages are built for South Florida search coverage",
            "Each city links into core repair and replacement services",
            "Use this page as the main hub for service-area discovery",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <FaCheckCircle className="mt-1 text-red-600" />
              <span className="font-medium text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Featured Cities
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Start with the main South Florida service areas
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These are some of the main city pages customers may search first.
              Each city page is built to connect into the rest of your service
              network.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredCities.map((city) => (
              <div
                key={city.slug}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-red-600">
                  <FaMapMarkerAlt />
                  {city.county ?? "South Florida"}
                </div>

                <h3 className="mt-4 text-2xl font-black text-slate-900">
                  {city.name}
                </h3>

                <div className="mt-5 grid gap-3">
                  <Link
                    href={`/garage-door-repair/${city.slug}`}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-semibold text-slate-900 transition hover:border-red-200 hover:bg-white"
                  >
                    <span>Garage Door Repair</span>
                    <FaArrowRight className="text-red-600" />
                  </Link>

                  <Link
                    href={`/broken-spring-repair/${city.slug}`}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-semibold text-slate-900 transition hover:border-red-200 hover:bg-white"
                  >
                    <span>Broken Spring Repair</span>
                    <FaArrowRight className="text-red-600" />
                  </Link>

                  <Link
                    href={`/garage-door-opener-repair/${city.slug}`}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-semibold text-slate-900 transition hover:border-red-200 hover:bg-white"
                  >
                    <span>Garage Door Opener Repair</span>
                    <FaArrowRight className="text-red-600" />
                  </Link>
                </div>

                {city.nearbyAreas.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {city.nearbyAreas.slice(0, 3).map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            All Cities
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Browse all South Florida city pages
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Use this complete city list to reach the local page you need. These
            links help users and search engines move through the service-area
            structure cleanly.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cities.map((city) => (
            <div
              key={city.slug}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900">{city.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {city.county ?? "South Florida"}
                  </p>
                </div>

                <Link
                  href={`/garage-door-repair/${city.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Visit
                  <FaArrowRight />
                </Link>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  href={`/garage-door-repair/${city.slug}`}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-red-200 hover:bg-slate-50"
                >
                  Garage Door Repair
                </Link>
                <Link
                  href={`/garage-door-maintenance/${city.slug}`}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-red-200 hover:bg-slate-50"
                >
                  Maintenance
                </Link>
                <Link
                  href={`/garage-door-off-track-repair/${city.slug}`}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-red-200 hover:bg-slate-50"
                >
                  Off-Track Repair
                </Link>
                <Link
                  href={`/garage-door-cable-repair/${city.slug}`}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-red-200 hover:bg-slate-50"
                >
                  Cable Repair
                </Link>
                <Link
                  href={`/garage-door-roller-replacement/${city.slug}`}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-red-200 hover:bg-slate-50"
                >
                  Roller Replacement
                </Link>
                <Link
                  href={`/spring-replacement/${city.slug}`}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-red-200 hover:bg-slate-50"
                >
                  Spring Replacement
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}