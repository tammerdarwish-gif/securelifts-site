import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Off-Track Garage Door Repair in South Florida | SecureLifts",
  description:
    "SecureLifts repairs off-track garage doors, displaced rollers, damaged track, loose cables, and unsafe door movement across South Florida.",
  alternates: { canonical: "https://securelifts.com/garage-door-off-track-repair" },
};

export default function OffTrackRepairLayout({ children }: { children: React.ReactNode }) {
  return children;
}
