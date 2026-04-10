
export type BaseCityRecord = {
  slug: string;
  name: string;
  nearbyAreas?: string[];
};

export function formatCityName(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function resolveCity(
  slug: string,
  cities: BaseCityRecord[]
): {
  slug: string;
  city: string;
  nearbyText: string;
} {
  const cityData = cities.find((c) => c.slug === slug);

  const city = cityData?.name ?? formatCityName(slug);
  const nearbyText =
    cityData?.nearbyAreas?.length && cityData.nearbyAreas.length > 0
      ? cityData.nearbyAreas.join(", ")
      : `nearby areas around ${city}`;

  return {
    slug,
    city,
    nearbyText,
  };
}