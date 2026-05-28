import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/lib/cityPages";
import { getOpenerProductSlugs } from "@/lib/openerProducts";
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

const staticPaths = getAllStaticRoutes(path.join(process.cwd(), "app"));

const priorityStaticPaths = [
  "",
  "/garage-door-repair",
  "/ads/garage-door-repair",
  "/ads/broken-spring-repair",
  "/ads/garage-door-opener-repair",
  "/garage-door-installation",
  "/broken-spring-repair",
  "/spring-replacement",
  "/garage-door-opener-repair",
  "/emergency-garage-door-repair",
  "/garage-door-maintenance",
  "/garage-door-cable-repair",
  "/garage-door-roller-replacement",
  "/garage-door-panel-replacement",
  "/hurricane-garage-doors",
  "/wind-rated-garage-doors",
  "/impact-rated-garage-doors",
  "/miami-dade-rated-garage-doors",
  "/locations",
  "/ai-garage-door-answers",
  "/reviews",
  "/about",
  "/contact",
  "/book-service",
];

const topCitySlugs = [
  "miami",
  "fort-lauderdale",
  "boca-raton",
  "delray-beach",
  "boynton-beach",
  "coral-springs",
  "davie",
  "west-palm-beach",
  "wellington",
  "royal-palm-beach",
  "aventura",
  "coral-gables",
];

const coreServicePaths = [
  "garage-door-repair",
  "garage-door-installation",
  "garage-door-maintenance",
  "garage-door-opener-repair",
  "garage-door-off-track-repair",
  "garage-door-cable-repair",
  "garage-door-panel-replacement",
  "garage-door-roller-replacement",
  "broken-spring-repair",
  "spring-replacement",
  "emergency-garage-door-repair",
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
  const priorityStaticPathSet = new Set(priorityStaticPaths);
  const orderedStaticPaths = [
    ...priorityStaticPaths.filter((path) => staticPaths.includes(path)),
    ...staticPaths.filter((path) => !priorityStaticPathSet.has(path)).sort(),
  ];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = orderedStaticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: priorityStaticPathSet.has(path) ? 0.9 : 0.5,
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
  const allCitySet = new Set(allCities);
  const priorityCities = topCitySlugs.filter((city) => allCitySet.has(city));
  const remainingCities = allCities
    .filter((city) => !priorityCities.includes(city))
    .sort();
  const orderedCities = [...priorityCities, ...remainingCities];
  const priorityCitySet = new Set(priorityCities);

  const coreCityPages: MetadataRoute.Sitemap = orderedCities.flatMap((city) =>
    coreServicePaths.map((servicePath) => ({
      url: `${baseUrl}/${servicePath}/${city}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: priorityCitySet.has(city) ? 0.75 : 0.45,
    }))
  );

  const openerProductPages: MetadataRoute.Sitemap = getOpenerProductSlugs().map(
    (slug) => ({
      url: `${baseUrl}/garage-door-opener/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })
  );

  return [
    ...staticPages,
    ...openerProductPages,
    ...stormCityPages,
    ...coreCityPages,
  ];
}
