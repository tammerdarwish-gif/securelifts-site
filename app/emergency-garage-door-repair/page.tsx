import type { Metadata } from "next";

import EmergencyGarageDoorRepairPage from "./emergencygaragedoorrepairClient";

export const metadata: Metadata = {
  title: "Emergency Garage Door Repair in South Florida | SecureLifts",
  description:
    "SecureLifts provides emergency garage door repair in South Florida for stuck doors, broken springs, snapped cables, opener failures, and unsafe garage doors.",
  alternates: {
    canonical: "https://securelifts.com/emergency-garage-door-repair",
  },
  openGraph: {
    title: "Emergency Garage Door Repair in South Florida | SecureLifts",
    description:
      "Fast emergency garage door repair for stuck, unsafe, or broken doors across South Florida.",
    url: "https://securelifts.com/emergency-garage-door-repair",
    siteName: "SecureLifts",
    type: "website",
    images: [
      {
        url: "/emergency-garage-door-repair.JPG",
        width: 1536,
        height: 1024,
        alt: "Emergency garage door repair in South Florida",
      },
    ],
  },
};

export default function Page() {
  return <EmergencyGarageDoorRepairPage />;
}
