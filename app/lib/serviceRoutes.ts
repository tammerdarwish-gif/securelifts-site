export const DEFAULT_CITY = "miami";

type RouteMode = "root" | "city";

type ServiceRouteConfig = {
  slug: string;
  mode: RouteMode;
};

export const SERVICE_ROUTES = {
  garageDoorRepair: { slug: "garage-door-repair", mode: "root" },
  garageDoorInstallation: { slug: "garage-door-installation", mode: "root" },
  garageDoorMaintenance: { slug: "garage-door-maintenance", mode: "root" },
  garageDoorOpener: { slug: "garage-door-opener", mode: "root" },
  garageDoorOpenerRepair: { slug: "garage-door-opener-repair", mode: "root" },
  garageDoorOffTrackRepair: { slug: "garage-door-off-track-repair", mode: "root" },
  garageDoorCableRepair: { slug: "garage-door-cable-repair", mode: "root" },
  brokenSpringRepair: { slug: "broken-spring-repair", mode: "root" },
  springReplacement: { slug: "spring-replacement", mode: "root" },
  emergencyGarageDoorRepair: { slug: "emergency-garage-door-repair", mode: "root" },

  garageDoorReplacementCity: { slug: "garage-door-replacement", mode: "city" },

  commercialGarageDoorServices: {
    slug: "commercial-garage-door-services",
    mode: "root",
  },
  commercialGarageDoorRepair: {
    slug: "commercial-garage-door-repair",
    mode: "root",
  },
  commercialGarageDoorInstallation: {
    slug: "commercial-garage-door-installation",
    mode: "root",
  },
  commercialGarageDoorMaintenance: {
    slug: "commercial-garage-door-maintenance",
    mode: "root",
  },
  emergencyCommercialDoorRepair: {
    slug: "emergency-commercial-door-repair",
    mode: "root",
  },
  industrialDoorRepair: {
    slug: "industrial-door-repair",
    mode: "root",
  },
} satisfies Record<string, ServiceRouteConfig>;

export type ServiceRouteKey = keyof typeof SERVICE_ROUTES;

export function getServiceHref(
  key: ServiceRouteKey,
  city?: string | null
): string {
  const route = SERVICE_ROUTES[key];

  if (route.mode === "root") {
    return `/${route.slug}`;
  }

  const safeCity = city?.trim() || DEFAULT_CITY;
  return `/${route.slug}/${safeCity}`;
}