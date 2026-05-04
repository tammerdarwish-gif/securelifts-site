import type { Metadata } from "next";

import GarageDoorCableRepairPage from "./garagedoorcablerepairClient";

export const metadata: Metadata = {
  title: "Garage Door Cable Repair in South Florida | SecureLifts",
  description:
    "SecureLifts repairs broken, loose, frayed, or off-drum garage door cables across South Florida with safe diagnostics and dependable service.",
  alternates: {
    canonical: "https://securelifts.com/garage-door-cable-repair",
  },
  openGraph: {
    title: "Garage Door Cable Repair in South Florida | SecureLifts",
    description:
      "Fast garage door cable repair for broken, frayed, loose, or off-drum cables across South Florida.",
    url: "https://securelifts.com/garage-door-cable-repair",
    siteName: "SecureLifts",
    type: "website",
    images: [
      {
        url: "/broken-garage-door-cable.JPG",
        width: 1536,
        height: 1024,
        alt: "Broken garage door cable repair in South Florida",
      },
    ],
  },
};

export default function Page() {
  return <GarageDoorCableRepairPage />;
}
