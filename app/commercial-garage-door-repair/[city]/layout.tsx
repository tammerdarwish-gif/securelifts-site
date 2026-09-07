import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getCityData } from "@/lib/cityPages";
import { cityMetadata } from "@/lib/cityMetadata";

type Props = { children: ReactNode; params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  return cityMetadata(city, "Commercial Garage Door Repair", "commercial-garage-door-repair");
}

export default async function CityLayout({ children, params }: Props) {
  const { city } = await params;
  if (!getCityData(city)) notFound();
  return children;
}
