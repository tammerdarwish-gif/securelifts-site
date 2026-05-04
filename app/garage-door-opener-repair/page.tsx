import type { Metadata } from "next";

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
  },
};

export default function Page() {
  return <GarageDoorOpenerRepairPage />;
}
