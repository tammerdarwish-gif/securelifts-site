import type { Metadata } from "next";

import TopCityServiceLinks from "../components/TopCityServiceLinks";
import GarageDoorPanelReplacementPage from "./garagedoorpanelreplacementClient";

export const metadata: Metadata = {
  title: "Garage Door Panel Replacement in South Florida | SecureLifts",
  description:
    "SecureLifts provides garage door panel replacement in South Florida for dented, cracked, damaged, or impact-damaged garage door panels.",
  alternates: {
    canonical: "https://securelifts.com/garage-door-panel-replacement",
  },
  openGraph: {
    title: "Garage Door Panel Replacement in South Florida | SecureLifts",
    description:
      "Repair damaged garage door panels and restore door appearance and operation across South Florida.",
    url: "https://securelifts.com/garage-door-panel-replacement",
    siteName: "SecureLifts",
    type: "website",
    images: [
      {
        url: "/garage-door-panel-replacement.jpg",
        width: 1536,
        height: 1024,
        alt: "Garage door panel replacement in South Florida",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <GarageDoorPanelReplacementPage />
      <TopCityServiceLinks
        servicePath="garage-door-panel-replacement"
        serviceName="Garage Door Panel Replacement"
      />
    </>
  );
}
