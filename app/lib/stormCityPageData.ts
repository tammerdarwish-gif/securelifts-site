import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  stormCityConfigs,
  type StormCityServiceKey,
} from "./stormCityConfigs";

export type StormCityPageParams = {
  city: string;
};

export type StormCityData = {
  name: string;
  slug: string;
  nearbyAreas: string[];
};

export const stormCities: StormCityData[] = [
  { slug: "miami", name: "Miami", nearbyAreas: ["Coral Gables", "Kendall", "Doral"] },
  { slug: "miami-beach", name: "Miami Beach", nearbyAreas: ["Miami", "Surfside", "Bal Harbour"] },
  { slug: "hialeah", name: "Hialeah", nearbyAreas: ["Miami Lakes", "Doral", "Miami Springs"] },
  { slug: "kendall", name: "Kendall", nearbyAreas: ["Pinecrest", "South Miami", "Cutler Bay"] },
  { slug: "homestead", name: "Homestead", nearbyAreas: ["Florida City", "Cutler Bay", "Kendall"] },
  { slug: "doral", name: "Doral", nearbyAreas: ["Miami", "Hialeah", "Sweetwater"] },
  { slug: "cutler-bay", name: "Cutler Bay", nearbyAreas: ["Palmetto Bay", "Kendall", "Homestead"] },
  { slug: "pembroke-pines", name: "Pembroke Pines", nearbyAreas: ["Miramar", "Hollywood", "Davie"] },
  { slug: "broward-county", name: "Broward County", nearbyAreas: ["Fort Lauderdale", "Hollywood", "Pembroke Pines"] },
  { slug: "miramar", name: "Miramar", nearbyAreas: ["Pembroke Pines", "Hollywood", "Miami Gardens"] },
  { slug: "hollywood", name: "Hollywood", nearbyAreas: ["Fort Lauderdale", "Pembroke Pines", "Hallandale Beach"] },
  { slug: "fort-lauderdale", name: "Fort Lauderdale", nearbyAreas: ["Wilton Manors", "Oakland Park", "Davie"] },
  { slug: "davie", name: "Davie", nearbyAreas: ["Plantation", "Fort Lauderdale", "Sunrise"] },
  { slug: "sunrise", name: "Sunrise", nearbyAreas: ["Plantation", "Davie", "Lauderhill"] },
  { slug: "plantation", name: "Plantation", nearbyAreas: ["Davie", "Sunrise", "Fort Lauderdale"] },
  { slug: "coral-springs", name: "Coral Springs", nearbyAreas: ["Parkland", "Margate", "Coconut Creek"] },
  { slug: "parkland", name: "Parkland", nearbyAreas: ["Coral Springs", "Coconut Creek", "Deerfield Beach"] },
  { slug: "tamarac", name: "Tamarac", nearbyAreas: ["Sunrise", "Lauderhill", "Coral Springs"] },
  { slug: "deerfield-beach", name: "Deerfield Beach", nearbyAreas: ["Boca Raton", "Pompano Beach", "Parkland"] },
  { slug: "pompano-beach", name: "Pompano Beach", nearbyAreas: ["Deerfield Beach", "Fort Lauderdale", "Lighthouse Point"] },
  { slug: "oakland-park", name: "Oakland Park", nearbyAreas: ["Fort Lauderdale", "Wilton Manors", "Pompano Beach"] },
  { slug: "lauderhill", name: "Lauderhill", nearbyAreas: ["Sunrise", "Plantation", "Tamarac"] },
  { slug: "boynton-beach", name: "Boynton Beach", nearbyAreas: ["Delray Beach", "Lake Worth", "Greenacres"] },
  { slug: "delray-beach", name: "Delray Beach", nearbyAreas: ["Boca Raton", "Boynton Beach", "Lake Worth"] },
  { slug: "boca-raton", name: "Boca Raton", nearbyAreas: ["Delray Beach", "Deerfield Beach", "Highland Beach"] },
  { slug: "highland-beach", name: "Highland Beach", nearbyAreas: ["Boca Raton", "Delray Beach", "Palm Beach"] },
  { slug: "lighthouse-point", name: "Lighthouse Point", nearbyAreas: ["Pompano Beach", "Deerfield Beach", "Fort Lauderdale"] },
  { slug: "west-palm-beach", name: "West Palm Beach", nearbyAreas: ["Royal Palm Beach", "Lake Worth", "Palm Beach Gardens"] },
  { slug: "palm-beach", name: "Palm Beach", nearbyAreas: ["West Palm Beach", "Lake Worth", "North Palm Beach"] },
  { slug: "palm-beach-gardens", name: "Palm Beach Gardens", nearbyAreas: ["Jupiter", "North Palm Beach", "West Palm Beach"] },
  { slug: "jupiter", name: "Jupiter", nearbyAreas: ["Palm Beach Gardens", "Tequesta", "Juno Beach"] },
  { slug: "juno-beach", name: "Juno Beach", nearbyAreas: ["Jupiter", "North Palm Beach", "Palm Beach Gardens"] },
  { slug: "north-palm-beach", name: "North Palm Beach", nearbyAreas: ["Palm Beach Gardens", "Juno Beach", "Lake Park"] },
  { slug: "lake-worth", name: "Lake Worth", nearbyAreas: ["Boynton Beach", "West Palm Beach", "Greenacres"] },
  { slug: "wellington", name: "Wellington", nearbyAreas: ["Royal Palm Beach", "Loxahatchee", "West Palm Beach"] },
  { slug: "greenacres", name: "Greenacres", nearbyAreas: ["Lake Worth", "West Palm Beach", "Palm Springs"] },
  { slug: "royal-palm-beach", name: "Royal Palm Beach", nearbyAreas: ["Wellington", "Loxahatchee", "West Palm Beach"] },
  { slug: "loxahatchee", name: "Loxahatchee", nearbyAreas: ["Wellington", "Royal Palm Beach", "West Palm Beach"] },
  { slug: "riviera-beach", name: "Riviera Beach", nearbyAreas: ["North Palm Beach", "Palm Beach Gardens", "West Palm Beach"] },
  { slug: "tequesta", name: "Tequesta", nearbyAreas: ["Jupiter", "Juno Beach", "Palm Beach Gardens"] },
  { slug: "stuart", name: "Stuart", nearbyAreas: ["Palm City", "Jensen Beach", "Port St. Lucie"] },
  { slug: "port-st-lucie", name: "Port St. Lucie", nearbyAreas: ["Stuart", "Fort Pierce", "Palm City"] },
];

const stormCityMap = new Map(stormCities.map((city) => [city.slug, city]));

export function generateStormCityStaticParams() {
  return stormCities.map((city) => ({ city: city.slug }));
}

export function getStormCityOrNotFound(slug: string) {
  const city = stormCityMap.get(slug);

  if (!city) {
    notFound();
  }

  return city;
}

export function getStormCityMetadata(
  serviceKey: StormCityServiceKey,
  cityData: StormCityData
): Metadata {
  const config = stormCityConfigs[serviceKey];
  const canonical = `https://securelifts.com${config.basePath}/${cityData.slug}`;
  const title = `${config.heroTitle(cityData.name)}, FL | SecureLifts`;
  const description = config.metaDescription(cityData.name);

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
          url: config.heroImage,
          width: 1536,
          height: 1024,
          alt: `${config.categoryName} in ${cityData.name}, Florida by SecureLifts`,
        },
      ],
    },
  };
}
