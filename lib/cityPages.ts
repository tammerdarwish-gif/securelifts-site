export function getAllCitySlugs() {
  return [
    "miami",
    "miami-beach",
    "sunny-isles-beach",
    "aventura",
    "hialeah",
    "hialeah-gardens",
    "kendall",
    "homestead",
    "doral",
    "cutler-bay",
    "palmetto-bay",
    "coral-gables",
    "miami-gardens",
    "miami-lakes",
    "pembroke-pines",
    "miramar",
    "hollywood",
    "hallandale-beach",
    "fort-lauderdale",
    "davie",
    "sunrise",
    "weston",
    "wilton-manors",
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
    "port-st-lucie"
  ];
}

const citySlugSet = new Set(getAllCitySlugs());

export function isValidCitySlug(slug: string) {
  return citySlugSet.has(slug.trim().toLowerCase());
}

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

const cityOverrides: Record<
  string,
  {
    city?: string;
    nearbyAreas?: string[];
    county?: "Miami-Dade" | "Broward" | "Palm Beach";
  }
> = {
  "west-palm-beach": {
    city: "West Palm Beach",
    county: "Palm Beach",
    nearbyAreas: ["Lake Worth", "Palm Beach Gardens", "Royal Palm Beach", "Greenacres"],
  },
  miami: {
    city: "Miami",
    county: "Miami-Dade",
    nearbyAreas: ["Miami Beach", "Coral Gables", "Doral", "Aventura"],
  },
  "fort-lauderdale": {
    city: "Fort Lauderdale",
    county: "Broward",
    nearbyAreas: ["Davie", "Hollywood", "Pompano Beach", "Plantation"],
  },
  "boca-raton": {
    city: "Boca Raton",
    county: "Palm Beach",
    nearbyAreas: ["Delray Beach", "Deerfield Beach", "Highland Beach", "Parkland"],
  },
  "palm-beach-gardens": {
    city: "Palm Beach Gardens",
    county: "Palm Beach",
    nearbyAreas: ["Jupiter", "Juno Beach", "North Palm Beach", "West Palm Beach"],
  },
  jupiter: {
    city: "Jupiter",
    county: "Palm Beach",
    nearbyAreas: ["Palm Beach Gardens", "Tequesta", "Juno Beach", "North Palm Beach"],
  },
  wellington: {
    city: "Wellington",
    county: "Palm Beach",
    nearbyAreas: ["Royal Palm Beach", "Loxahatchee", "West Palm Beach", "Lake Worth"],
  },
  "royal-palm-beach": {
    city: "Royal Palm Beach",
    county: "Palm Beach",
    nearbyAreas: ["Wellington", "Loxahatchee", "West Palm Beach", "Greenacres"],
  },
  "delray-beach": {
    city: "Delray Beach",
    county: "Palm Beach",
    nearbyAreas: ["Boca Raton", "Boynton Beach", "Highland Beach", "Lake Worth"],
  },
  "boynton-beach": {
    city: "Boynton Beach",
    county: "Palm Beach",
    nearbyAreas: ["Delray Beach", "Lake Worth", "Boca Raton", "Greenacres"],
  },
  miramar: {
    city: "Miramar",
    county: "Broward",
    nearbyAreas: ["Pembroke Pines", "Miami Gardens", "Hollywood", "Southwest Ranches"],
  },
  davie: {
    city: "Davie",
    county: "Broward",
    nearbyAreas: ["Plantation", "Hollywood", "Cooper City", "Southwest Ranches"],
  },
  "hallandale-beach": {
    city: "Hallandale Beach",
    county: "Broward",
    nearbyAreas: ["Hollywood", "Aventura", "Pembroke Park", "Sunny Isles Beach"],
  },
  hallandale: {
    city: "Hallandale",
    county: "Broward",
    nearbyAreas: ["Hollywood", "Aventura", "Pembroke Park", "Sunny Isles Beach"],
  },
};

export function getCityData(slug: string) {
  if (!slug || typeof slug !== "string") return undefined;

  const cleanSlug = slug.trim().toLowerCase();

  if (!isValidCitySlug(cleanSlug)) return undefined;

  const override = cityOverrides[cleanSlug];
  const cityName = override?.city ?? slugToName(cleanSlug);

  return {
    city: cityName,
    slug: cleanSlug,
    county: override?.county,
    region: "South Florida" as const,
    heroTitle: `Garage Door Repair in ${cityName}`,
    heroText: `Fast, professional garage door repair in ${cityName} for broken springs, opener issues, off-track doors, and more.`,
    introTitle: "Common Garage Door Problems",
    introText: `SecureLifts helps homeowners in ${cityName} solve garage door problems quickly, safely, and professionally.`,
    reasonsTitle: "Why SecureLifts",
    reasonsText: `Homeowners in ${cityName} choose SecureLifts for fast response, cleaner workmanship, and dependable garage door repair service.`,
    nearbyTitle: "Nearby Areas",
    faqTitle: `Garage Door Repair Questions in ${cityName}`,
    ctaTitle: "Need Garage Door Service Today?",
    ctaText: `Call now or book online for fast professional garage door repair in ${cityName}.`,
    nearbyAreas: override?.nearbyAreas ?? defaultNearbyAreas(cityName),
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
        question: `Do you offer same-day service in ${cityName}?`,
        answer: `Yes. We handle most garage door repairs same day in ${cityName}.`,
      },
      {
        question: `What garage door problems do you repair most often in ${cityName}?`,
        answer:
          "We commonly repair broken springs, opener issues, off-track doors, damaged rollers, worn cables, and noisy garage doors.",
      },
      {
        question: `Can I book garage door repair online in ${cityName}?`,
        answer: `Yes. You can call or book online for garage door repair service in ${cityName}.`,
      },
    ],
  };
}
