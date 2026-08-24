import Script from "next/script";
import { SITE_IDENTITY } from "@/lib/siteIdentity";

const serviceAreas = [
  "Miami",
  "Miami Beach",
  "Coral Gables",
  "Doral",
  "Aventura",
  "Fort Lauderdale",
  "Hollywood",
  "Davie",
  "Plantation",
  "Coral Springs",
  "Parkland",
  "Boca Raton",
  "Delray Beach",
  "Boynton Beach",
  "West Palm Beach",
  "Palm Beach Gardens",
  "Jupiter",
  "Wellington",
  "Royal Palm Beach",
];

const services = [
  {
    name: "Garage door repair",
    url: "https://securelifts.com/garage-door-repair",
  },
  {
    name: "Emergency garage door repair",
    url: "https://securelifts.com/emergency-garage-door-repair",
  },
  {
    name: "Broken spring repair",
    url: "https://securelifts.com/broken-spring-repair",
  },
  {
    name: "Garage door opener repair",
    url: "https://securelifts.com/garage-door-opener-repair",
  },
  {
    name: "Garage door opener replacement",
    url: "https://securelifts.com/garage-door-opener",
  },
  {
    name: "Garage door installation",
    url: "https://securelifts.com/garage-door-installation",
  },
  {
    name: "Hurricane-rated garage doors",
    url: "https://securelifts.com/hurricane-garage-doors",
  },
  {
    name: "Impact-rated garage doors",
    url: "https://securelifts.com/impact-rated-garage-doors",
  },
  {
    name: "Miami-Dade rated garage doors",
    url: "https://securelifts.com/miami-dade-rated-garage-doors",
  },
  {
    name: "Commercial garage door service",
    url: "https://securelifts.com/commercial-garage-door-services",
  },
];

const businessAuthoritySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://securelifts.com/#business",
      name: SITE_IDENTITY.publicName,
      alternateName: [SITE_IDENTITY.legalDisplayName],
      legalName: SITE_IDENTITY.legalName,
      url: `${SITE_IDENTITY.baseUrl}/`,
      email: SITE_IDENTITY.email,
      telephone: SITE_IDENTITY.phoneE164,
      image: "https://securelifts.com/images/about/about-securelifts-team.jpg",
      logo: "https://securelifts.com/logo.png",
      slogan:
        "Garage door repair, installation, openers, and hurricane-rated doors across South Florida.",
      description:
        "SecureLifts provides garage door repair, installation, opener service, broken spring repair, hurricane-rated garage doors, and commercial door service across Miami-Dade, Broward, and Palm Beach.",
      sameAs: [...SITE_IDENTITY.verifiedProfiles],
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Miami-Dade County, FL",
        },
        {
          "@type": "AdministrativeArea",
          name: "Broward County, FL",
        },
        {
          "@type": "AdministrativeArea",
          name: "Palm Beach County, FL",
        },
        ...serviceAreas.map((name) => ({
          "@type": "City",
          name: `${name}, FL`,
        })),
      ],
      knowsAbout: [
        "garage door repair",
        "garage door installation",
        "garage door opener repair",
        "broken garage door springs",
        "off-track garage doors",
        "garage door cable repair",
        "garage door roller replacement",
        "hurricane-rated garage doors",
        "impact-rated garage doors",
        "Miami-Dade approved garage doors",
        "commercial overhead doors",
        "loading dock doors",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: SITE_IDENTITY.phoneE164,
          contactType: "customer service",
          areaServed: "South Florida",
          availableLanguage: ["English"],
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SecureLifts Garage Door Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            url: service.url,
            provider: {
              "@id": "https://securelifts.com/#business",
            },
            areaServed: "South Florida",
          },
        })),
      },
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: service.url,
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": "https://securelifts.com/#website",
      name: "SecureLifts",
      url: "https://securelifts.com/",
      publisher: {
        "@id": "https://securelifts.com/#business",
      },
    },
  ],
};

export default function BusinessAuthoritySchema() {
  return (
    <Script
      id="securelifts-business-authority-schema"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessAuthoritySchema),
      }}
    />
  );
}
