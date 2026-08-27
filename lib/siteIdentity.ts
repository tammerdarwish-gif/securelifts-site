export const SITE_IDENTITY = {
  publicName: "SecureLifts",
  legalName: "AAA Garage Door Inc.",
  legalDisplayName: "AAA Garage Door Inc. DBA SecureLifts",
  baseUrl: "https://securelifts.com",
  businessId: "https://securelifts.com/#business",
  websiteId: "https://securelifts.com/#website",
  phoneDisplay: "(866) 828-1818",
  phoneE164: "+18668281818",
  phoneHref: "tel:+18668281818",
  email: "info@securelifts.com",
  emailHref: "mailto:info@securelifts.com",
  bbbRatingDisplay: "BBB A+ Rated",
  primaryLocation: {
    label: "Miami office",
    streetAddress: "8570 NW 70th St",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33166",
    addressCountry: "US",
    displayAddress: "8570 NW 70th St, Miami, FL 33166",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=8570%20NW%2070th%20St%2C%20Miami%2C%20FL%2033166",
  },
  businessHours: {
    weekdayDisplay: "Monday–Friday: 8:00 AM–5:00 PM",
    saturdayDisplay: "Saturday: 9:00 AM–4:00 PM",
    sundayDisplay: "Sunday: Closed",
    schema: [
      {
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
      {
        dayOfWeek: ["https://schema.org/Saturday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
  },
  serviceArea: "South Florida",
  counties: ["Miami-Dade County, FL", "Broward County, FL", "Palm Beach County, FL"],
  verifiedProfiles: [
    "https://www.bbb.org/us/fl/miami/profile/garage-doors/securelifts-0633-90173246",
    "https://www.bestpickreports.com/garage-doors/south-florida/securelifts",
    "https://www.chamberofcommerce.com/business-directory/florida/miami/garage-door-supplier/2012604928-securelifts",
  ],
} as const;

export const BUSINESS_SCHEMA_REFERENCE = {
  "@id": SITE_IDENTITY.businessId,
};
