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
