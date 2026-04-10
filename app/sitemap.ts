import { MetadataRoute } from "next";

const baseUrl = "https://securelifts.com";

const staticPages = [
  "",
  "/book-service",

  "/garage-door-repair",
  "/garage-door-installation",
  "/garage-door-maintenance",
  "/garage-door-opener-repair",
  "/garage-door-off-track-repair",
  "/garage-door-cable-repair",
  "/garage-door-panel-replacement",
  "/garage-door-roller-replacement",
  "/broken-spring-repair",
  "/spring-replacement",

  "/hurricane-garage-doors",
  "/impact-rated-garage-doors",
  "/wind-rated-garage-doors",
  "/miami-dade-rated-garage-doors",

  "/hurricane-garage-doors/traditional",
  "/hurricane-garage-doors/modern",
  "/hurricane-garage-doors/carriage-house",
  "/hurricane-garage-doors/custom",

  "/resources",
  "/resources/hurricane-garage-door-approvals",
];

const stormCities = [
  "miami",
  "miami-beach",
  "hialeah",
  "kendall",
  "homestead",
  "doral",
  "cutler-bay",
  "pembroke-pines",
  "miramar",
  "hollywood",
  "fort-lauderdale",
  "davie",
  "sunrise",
  "plantation",
  "coral-springs",
  "parkland",
  "tamarac",
  "deerfield-beach",
  "pompano-beach",
  "oakland-park",
  "lauderhill",
  "boynton-beach",
  "delray-beach",
  "boca-raton",
  "highland-beach",
  "lighthouse-point",
  "west-palm-beach",
  "palm-beach",
  "palm-beach-gardens",
  "jupiter",
  "juno-beach",
  "north-palm-beach",
  "lake-worth",
  "wellington",
  "greenacres",
  "royal-palm-beach",
  "loxahatchee",
  "riviera-beach",
  "tequesta",
  "stuart",
  "port-st-lucie",
];

const coreServiceCities = [
  "west-palm-beach",
  "boca-raton",
  "delray-beach",
  "boynton-beach",
  "wellington",
  "miami",
  "fort-lauderdale",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }));

  const stormCityPages: MetadataRoute.Sitemap = stormCities.flatMap((city) => [
    {
      url: `${baseUrl}/hurricane-garage-doors/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/impact-rated-garage-doors/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/wind-rated-garage-doors/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/miami-dade-rated-garage-doors/${city}`,
      lastModified: now,
    },
  ]);

  const coreCityPages: MetadataRoute.Sitemap = coreServiceCities.flatMap((city) => [
    {
      url: `${baseUrl}/garage-door-repair/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/garage-door-installation/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/garage-door-opener-repair/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/broken-spring-repair/${city}`,
      lastModified: now,
    },
  ]);

  return [...pages, ...stormCityPages, ...coreCityPages];
}