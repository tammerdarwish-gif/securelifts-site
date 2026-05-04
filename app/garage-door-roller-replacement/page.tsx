import type { Metadata } from "next";

import GarageDoorRollerReplacementPage from "./garagedoorrollerreplacementClient";

export const metadata: Metadata = {
  title: "Garage Door Roller Replacement in South Florida | SecureLifts",
  description:
    "SecureLifts provides garage door roller replacement in South Florida for noisy, shaking, stuck, or rough-moving garage doors.",
  alternates: {
    canonical: "https://securelifts.com/garage-door-roller-replacement",
  },
  openGraph: {
    title: "Garage Door Roller Replacement in South Florida | SecureLifts",
    description:
      "Professional garage door roller replacement for smoother, quieter operation across South Florida.",
    url: "https://securelifts.com/garage-door-roller-replacement",
    siteName: "SecureLifts",
    type: "website",
    images: [
      {
        url: "/garage-door-roller-replacement.jpg",
        width: 1536,
        height: 1024,
        alt: "Garage door roller replacement in South Florida",
      },
    ],
  },
};

export default function Page() {
  return <GarageDoorRollerReplacementPage />;
}
