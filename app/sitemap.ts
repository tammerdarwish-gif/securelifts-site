import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/lib/cityPages";
import fs from "fs";
import path from "path";

function getAllStaticRoutes(dir: string, basePath = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip dynamic routes like [city]
      if (entry.name.startsWith("[")) return [];
      return getAllStaticRoutes(fullPath, `${basePath}/${entry.name}`);
    }

    if (entry.name === "page.tsx") {
      return basePath === "" ? [""] : [basePath];
    }

    return [];
  });
}

const baseUrl = "https://securelifts.com";

const staticPaths = [
  "",
  "/locations",
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
  "/emergency-garage-door-repair",

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
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }));

  // Hurricane / storm city pages
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

  // Core service pages (ALL cities, not limited list)
  const allCities = getAllCitySlugs();

  const coreCityPages: MetadataRoute.Sitemap = allCities.flatMap((city) => [
    {
      url: `${baseUrl}/garage-door-repair/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/garage-door-installation/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/garage-door-maintenance/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/garage-door-opener-repair/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/garage-door-off-track-repair/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/garage-door-cable-repair/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/garage-door-panel-replacement/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/garage-door-roller-replacement/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/broken-spring-repair/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/spring-replacement/${city}`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/emergency-garage-door-repair/${city}`,
      lastModified: now,
    },
  ]);

  return [...staticPages, ...stormCityPages, ...coreCityPages];
}