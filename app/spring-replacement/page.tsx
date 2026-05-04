import type { Metadata } from "next";

import SpringReplacementPage from "./springreplacementClient";

export const metadata: Metadata = {
  title: "Garage Door Spring Replacement in South Florida | SecureLifts",
  description:
    "SecureLifts provides garage door spring replacement in South Florida with proper spring sizing, high-cycle options, balancing, and safety checks.",
  alternates: {
    canonical: "https://securelifts.com/spring-replacement",
  },
  openGraph: {
    title: "Garage Door Spring Replacement in South Florida | SecureLifts",
    description:
      "Garage door spring replacement, high-cycle spring options, and system balancing across South Florida.",
    url: "https://securelifts.com/spring-replacement",
    siteName: "SecureLifts",
    type: "website",
    images: [
      {
        url: "/broken-garage-door-spring.png",
        width: 1536,
        height: 1024,
        alt: "Garage door spring replacement in South Florida",
      },
    ],
  },
};

export default function Page() {
  return <SpringReplacementPage />;
}
