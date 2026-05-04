import StormCityLandingPage from "../../components/StormCityLandingPage";
import {
  generateStormCityStaticParams,
  getStormCityMetadata,
  getStormCityOrNotFound,
} from "../../lib/stormCityPageData";

type PageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return generateStormCityStaticParams();
}

export async function generateMetadata({ params }: PageProps) {
  const { city: citySlug } = await params;
  const cityData = getStormCityOrNotFound(citySlug);

  return getStormCityMetadata("hurricane", cityData);
}

export default async function Page({ params }: PageProps) {
  const { city: citySlug } = await params;
  const cityData = getStormCityOrNotFound(citySlug);
  const nearbyText = cityData.nearbyAreas.join(", ");

  return (
    <StormCityLandingPage
      serviceKey="hurricane"
      city={cityData.name}
      citySlug={citySlug}
      nearbyText={nearbyText}
    />
  );
}
