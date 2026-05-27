import Script from "next/script";

const businessAuthoritySchema = {
  "@context": "https://schema.org",
  "@type": "GarageDoorRepair",
  "@id": "https://securelifts.com/#business",
  name: "SecureLifts",
  legalName: "AAA Garage Door Inc.",
  url: "https://securelifts.com/",
  email: "info@securelifts.com",
  telephone: "+1-866-828-1818",
  image: "https://securelifts.com/icon.png",
  logo: "https://securelifts.com/icon.png",
  priceRange: "$$",
  areaServed: [
    "Miami-Dade County, FL",
    "Broward County, FL",
    "Palm Beach County, FL",
    "South Florida",
  ],
  serviceType: [
    "Garage door repair",
    "Garage door installation",
    "Garage door opener repair",
    "Broken spring repair",
    "Hurricane-rated garage doors",
    "Commercial garage door service",
    "Loading dock door repair",
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
