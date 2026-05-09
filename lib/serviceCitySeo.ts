import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCityData } from "@/lib/cityPages";

export const BASE_URL = "https://securelifts.com";

export type ServiceCityConfig = {
  path: string;
  serviceName: string;
  titleServiceName?: string;
  description: (cityName: string) => string;
  ogDescription?: (cityName: string) => string;
  image?: string;
  imageAlt?: (cityName: string) => string;
};

export function formatCityName(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getCityPageDataOrNotFound(citySlug: string) {
  const data = getCityData(citySlug);

  if (!data) {
    notFound();
  }

  return data;
}

export function generateServiceCityMetadata(
  citySlug: string,
  config: ServiceCityConfig
): Metadata {
  const cleanCitySlug = citySlug.trim().toLowerCase();
  const data = getCityPageDataOrNotFound(cleanCitySlug);
  const cityName = data.city?.trim() || formatCityName(cleanCitySlug);
  const canonical = `${BASE_URL}/${config.path}/${cleanCitySlug}`;
  const titleServiceName = config.titleServiceName ?? config.serviceName;
  const title = `${titleServiceName} in ${cityName}, FL | SecureLifts`;
  const description = config.description(cityName);
  const ogDescription = config.ogDescription?.(cityName) ?? description;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description: ogDescription,
      url: canonical,
      siteName: "SecureLifts",
      type: "website",
      images: config.image
        ? [
            {
              url: config.image,
              width: 1536,
              height: 1024,
              alt:
                config.imageAlt?.(cityName) ??
                `${titleServiceName} by SecureLifts in ${cityName}, Florida`,
            },
          ]
        : undefined,
    },
  };
}

export const serviceCitySeoConfigs = {
  garageDoorRepair: {
    path: "garage-door-repair",
    serviceName: "Garage Door Repair",
    description: (cityName: string) =>
      `SecureLifts provides fast garage door repair in ${cityName}, FL for broken springs, opener issues, off-track doors, cables, rollers, and doors that will not open or close.`,
    image: "/garage-door-repair-v2hero.jpg",
  },
  garageDoorInstallation: {
    path: "garage-door-installation",
    serviceName: "Garage Door Installation",
    description: (cityName: string) =>
      `SecureLifts provides professional garage door installation in ${cityName}, FL with modern, traditional, hurricane-rated, and premium garage door options.`,
    image: "/mew-garage-door-installation.jpg",
  },
  garageDoorMaintenance: {
    path: "garage-door-maintenance",
    serviceName: "Garage Door Maintenance",
    description: (cityName: string) =>
      `Professional garage door maintenance in ${cityName}, FL. Tune-ups, inspections, lubrication, balancing, and preventive service from SecureLifts.`,
    image: "/garage-door-maintenance-plans.png",
  },
  garageDoorOpenerRepair: {
    path: "garage-door-opener-repair",
    serviceName: "Garage Door Opener Repair",
    description: (cityName: string) =>
      `SecureLifts provides garage door opener repair in ${cityName}, FL for motors, remotes, wall controls, safety sensors, and opener systems that stop or reverse.`,
    image: "/belt-drive-openers.png",
  },
  emergencyGarageDoorRepair: {
    path: "emergency-garage-door-repair",
    serviceName: "Emergency Garage Door Repair",
    description: (cityName: string) =>
      `SecureLifts provides emergency garage door repair in ${cityName}, FL for stuck doors, broken springs, snapped cables, opener failures, and unsafe doors.`,
    image: "/emergency-garage-door-repair.JPG",
  },
  garageDoorCableRepair: {
    path: "garage-door-cable-repair",
    serviceName: "Garage Door Cable Repair",
    description: (cityName: string) =>
      `Fast garage door cable repair in ${cityName}, FL. SecureLifts fixes broken, loose, frayed, or off-drum garage door cables safely.`,
    image: "/broken-garage-door-cable.JPG",
  },
  garageDoorRollerReplacement: {
    path: "garage-door-roller-replacement",
    serviceName: "Garage Door Roller Replacement",
    description: (cityName: string) =>
      `SecureLifts provides garage door roller replacement in ${cityName}, FL for noisy, shaking, stuck, or rough-moving garage doors.`,
    image: "/garage-door-rollers.jpg",
  },
  garageDoorPanelReplacement: {
    path: "garage-door-panel-replacement",
    serviceName: "Garage Door Panel Replacement",
    description: (cityName: string) =>
      `SecureLifts provides garage door panel replacement in ${cityName}, FL for dented, damaged, cracked, or impact-damaged garage door panels.`,
    image: "/garage-door-panel-replacement.jpg",
  },
  brokenSpringRepair: {
    path: "broken-spring-repair",
    serviceName: "Broken Spring Repair",
    description: (cityName: string) =>
      `SecureLifts provides same-day broken garage door spring repair in ${cityName}, FL for doors that will not open, feel heavy, or slammed shut.`,
    image: "/broken-garage-door-spring.png",
  },
  springReplacement: {
    path: "spring-replacement",
    serviceName: "Spring Replacement",
    titleServiceName: "Garage Door Spring Replacement",
    description: (cityName: string) =>
      `SecureLifts provides garage door spring replacement in ${cityName}, FL with proper spring sizing, high-cycle options, balancing, and safety checks.`,
    image: "/broken-spring.jpg",
  },
} satisfies Record<string, ServiceCityConfig>;
