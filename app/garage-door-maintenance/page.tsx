import type { Metadata } from "next";

import GarageDoorMaintenancePage from "./garagedoormaintenanceClient";

export const metadata: Metadata = {
  title: "Garage Door Maintenance in South Florida | SecureLifts",
  description:
    "SecureLifts provides garage door maintenance in South Florida, including tune-ups, safety inspections, lubrication, balancing, and preventive service.",
  alternates: {
    canonical: "https://securelifts.com/garage-door-maintenance",
  },
  openGraph: {
    title: "Garage Door Maintenance in South Florida | SecureLifts",
    description:
      "Preventive garage door tune-ups, inspections, lubrication, and maintenance across South Florida.",
    url: "https://securelifts.com/garage-door-maintenance",
    siteName: "SecureLifts",
    type: "website",
  },
};

export default function Page() {
  return <GarageDoorMaintenancePage />;
}
