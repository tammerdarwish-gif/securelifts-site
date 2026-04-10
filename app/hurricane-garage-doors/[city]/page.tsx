import StormCityLandingPage from "../../components/StormCityLandingPage";
import { hurricaneCities } from "../../lib/hurricaneCities";

type PageProps = {
  params: Promise<{ city: string }>;
};

export default async function Page({ params }: PageProps) {
  const { city: citySlug } = await params;

  const cityData = hurricaneCities.find((c) => c.slug === citySlug);

  const city =
    cityData?.name ??
    citySlug
      .split("-")
      .filter(Boolean)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const nearbyText =
    cityData?.nearbyAreas?.length && cityData.nearbyAreas.length > 0
      ? cityData.nearbyAreas.join(", ")
      : `areas near ${city}`;

  return (
    <StormCityLandingPage
      serviceKey="hurricane"
      city={city}
      citySlug={citySlug}
      nearbyText={nearbyText}
    />
  );
}