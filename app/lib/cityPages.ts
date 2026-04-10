export type CityPage = {
  name: string;
  slug: string;
  county?: "Miami-Dade" | "Broward" | "Palm Beach";
  region: "South Florida";
  nearbyAreas: string[];
};

const cityOverrides: Record<string, Partial<CityPage>> = {
  "west-palm-beach": {
    county: "Palm Beach",
    nearbyAreas: ["Lake Worth", "Palm Beach", "Royal Palm Beach", "Greenacres"],
  },
  miami: {
    county: "Miami-Dade",
    nearbyAreas: ["Brickell", "Downtown Miami", "Doral", "Coral Gables"],
  },
  miramar: {
    county: "Broward",
    nearbyAreas: [
      "Pembroke Pines",
      "Miami Gardens",
      "Hollywood",
      "Southwest Ranches",
    ],
  },
  davie: {
    county: "Broward",
    nearbyAreas: [
      "Plantation",
      "Hollywood",
      "Cooper City",
      "Southwest Ranches",
    ],
  },
};

function slugToName(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function defaultNearbyAreas(cityName: string) {
  return [
    `Nearby ${cityName} neighborhoods`,
    `${cityName} area homes`,
    "Surrounding South Florida areas",
    "Nearby residential communities",
  ];
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cityOverrides);
}

export function getCityData(slug: string) {
  if (!slug || typeof slug !== "string") return undefined;

  const cleanSlug = slug.trim().toLowerCase();
  const cityName = slugToName(cleanSlug);
  const override = cityOverrides[cleanSlug] ?? {};
  const finalName = override.name ?? cityName;

  return {
    city: finalName,
    name: finalName,
    slug: cleanSlug,
    county: override.county,
    region: "South Florida" as const,
    heroTitle: `Garage Door Repair in ${finalName}`,
    heroText: `Fast, professional garage door repair in ${finalName} for broken springs, opener issues, off-track doors, and more.`,
    introTitle: "Common Garage Door Problems",
    introText: `SecureLifts helps homeowners in ${finalName} solve garage door problems quickly, safely, and professionally.`,
    reasonsTitle: "Why SecureLifts",
    reasonsText: `Homeowners in ${finalName} choose SecureLifts for fast response, cleaner workmanship, and dependable garage door repair service.`,
    nearbyTitle: "Nearby Areas",
    faqTitle: `Garage Door Repair Questions in ${finalName}`,
    ctaTitle: "Need Garage Door Service Today?",
    ctaText: `Call now or book online for fast professional garage door repair in ${finalName}.`,
    nearbyAreas: override.nearbyAreas ?? defaultNearbyAreas(finalName),
    repairItems: [
      "Broken garage door springs",
      "Garage doors off track",
      "Damaged rollers and hinges",
      "Noisy or shaking doors",
      "Garage door opener issues",
      "Broken cables and hardware",
    ],
    reasons: [
      "Fast response and organized scheduling",
      "Clear communication from start to finish",
      "Professional workmanship",
      "Reliable long-term repairs",
    ],
    faqs: [
      {
        question: `Do you offer same-day service in ${finalName}?`,
        answer: `Yes. We handle most garage door repairs same day in ${finalName}.`,
      },
      {
        question: `What garage door problems do you repair most often in ${finalName}?`,
        answer:
          "We commonly repair broken springs, opener issues, off-track doors, damaged rollers, worn cables, and noisy garage doors.",
      },
      {
        question: `Can I book garage door repair online in ${finalName}?`,
        answer: `Yes. You can call or book online for garage door repair service in ${finalName}.`,
      },
    ],
  };
}