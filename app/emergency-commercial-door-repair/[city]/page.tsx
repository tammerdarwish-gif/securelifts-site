import CityServicePage from "../../components/CityServicePage";
import { getCityData, getAllCitySlugs } from "../../lib/cityPages";
import { getServicePageConfig } from "../../lib/servicePages";

export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({
    city,
  }));
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

  return (
    <CityServicePage
      city={city}
      nearbyText={nearbyText}
      config={getServicePageConfig("emergency-commercial-door-repair")}
    />
  );
}