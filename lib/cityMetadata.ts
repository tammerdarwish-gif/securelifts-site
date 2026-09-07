import type { Metadata } from "next";
import { getCityData } from "./cityPages";

export function cityMetadata(city: string, service: string, route: string): Metadata {
  const data = getCityData(city);
  if (!data) return { title: "Page Not Found | SecureLifts", robots: { index: false } };
  const cityName = data.city;
  const title = `${service} in ${cityName}, FL | SecureLifts`;
  const description = `Explore ${service.toLowerCase()} in ${cityName}, Florida. See service options and contact SecureLifts to schedule an assessment.`;
  const url = `https://securelifts.com/${route}/${city}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url } };
}
