import type { Metadata } from "next";

import TopCityServiceLinks from "../components/TopCityServiceLinks";
import GarageDoorOpenerRepairPage from "./garagedooropenerrepairClient";

export const metadata: Metadata = {
  title: "Garage Door Opener Repair in South Florida | SecureLifts",
  description:
    "SecureLifts repairs garage door openers in South Florida, including motors, remotes, wall controls, safety sensors, and openers that stop or reverse.",
  alternates: {
    canonical: "https://securelifts.com/garage-door-opener-repair",
  },
  openGraph: {
    title: "Garage Door Opener Repair in South Florida | SecureLifts",
    description:
      "Fast garage door opener diagnostics and repair across South Florida.",
    url: "https://securelifts.com/garage-door-opener-repair",
    siteName: "SecureLifts",
    type: "website",
    images: [
      {
        url: "/belt-drive-openers.png",
        width: 1536,
        height: 1024,
        alt: "Garage door opener repair and replacement options",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <GarageDoorOpenerRepairPage />
      <TopCityServiceLinks
        servicePath="garage-door-opener-repair"
        serviceName="Garage Door Opener Repair"
      />
    </>
  );
}
