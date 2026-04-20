import type { Metadata } from "next";
import CityServicePage from "../../components/CityServicePage";
import { getCityData, getAllCitySlugs } from "../../lib/cityPages";
import { getServicePageConfig } from "../../lib/servicePages";

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({
    city,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city?: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const citySlug = resolvedParams?.city ?? "miami";

  const cityData = getCityData(citySlug);
  const city = cityData?.name ?? citySlug.replace(/-/g, " ");

  return {
    title: `Emergency Commercial Door Repair in ${city} | SecureLifts`,
    description: `SecureLifts provides emergency commercial door repair in ${city} with fast response to restore access, safety, and business operations.`,
    alternates: {
      canonical: `https://securelifts.com/emergency-commercial-door-repair/${citySlug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city?: string }>;
}) {
  const resolvedParams = await params;
  const citySlug = resolvedParams?.city ?? "miami";
  const cityData = getCityData(citySlug);
  const city = cityData?.name ?? citySlug.replace(/-/g, " ");
  const nearbyText =
    cityData?.nearbyAreas?.length
      ? cityData.nearbyAreas.slice(0, 3).join(", ")
      : "surrounding South Florida areas";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Emergency Commercial Door Repair in ${city}`,
    serviceType: "Emergency Commercial Door Repair",
    areaServed: {
      "@type": "City",
      name: city,
    },
    provider: {
      "@type": "LocalBusiness",
      name: "SecureLifts",
      telephone: "+1-866-828-1818",
      url: "https://securelifts.com",
    },
    url: `https://securelifts.com/emergency-commercial-door-repair/${citySlug}`,
    description: `Fast emergency commercial door repair in ${city} to restore access and reduce downtime.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CityServicePage
        city={city}
        nearbyText={nearbyText}
        config={getServicePageConfig("emergency-commercial-door-repair")}
      />

      {/* INTERNAL SEO LINKS */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">
          Related Commercial Services in {city}
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <a
            href={`/commercial-garage-door-repair/${citySlug}`}
            className="border rounded-xl p-5 font-semibold"
          >
            Commercial Garage Door Repair in {city}
          </a>

          <a
            href={`/commercial-roll-up-door-repair/${citySlug}`}
            className="border rounded-xl p-5 font-semibold"
          >
            Commercial Roll-Up Door Repair in {city}
          </a>

          <a
            href={`/commercial-overhead-door-repair/${citySlug}`}
            className="border rounded-xl p-5 font-semibold"
          >
            Commercial Overhead Door Repair in {city}
          </a>
        </div>
      </div>
    </>
  );
}