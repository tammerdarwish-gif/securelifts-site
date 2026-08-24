import type { Metadata } from "next";

import HomePageClient from "./HomePageClient";
import BusinessAuthoritySchema from "./components/BusinessAuthoritySchema";

export const metadata: Metadata = {
  title:
    "Garage Door Repair, Installation & Hurricane Doors in South Florida | SecureLifts",
  description:
    "SecureLifts provides garage door repair, installation, broken spring repair, opener service, and hurricane-rated garage door upgrades across South Florida. Call (866) 828-1818.",
  alternates: {
    canonical: "https://securelifts.com",
  },
  openGraph: {
    title:
      "Garage Door Repair, Installation & Hurricane Doors in South Florida | SecureLifts",
    description:
      "Fast garage door repair, premium installation, and hurricane-rated garage door upgrades across South Florida.",
    url: "https://securelifts.com",
    siteName: "SecureLifts",
    type: "website",
    images: [
      {
        url: "/images/about/about-securelifts-team.jpg",
        width: 1536,
        height: 1024,
        alt: "SecureLifts garage door service team in South Florida",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <BusinessAuthoritySchema />
      <HomePageClient />
    </>
  );
}
