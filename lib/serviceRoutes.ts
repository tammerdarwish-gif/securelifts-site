// Service routes for SecureLifts
export const serviceRoutes = {
  // Main pages
  home: "/",
  about: "/about",
  contact: "/contact",
  bookService: "/book-service",

  // Residential Services
  garageDoorRepair: "/garage-door-repair",
  garageDoorInstallation: "/garage-door-installation",
  garageDoorMaintenance: "/garage-door-maintenance",
  garageDoorReplacement: "/garage-door-replacement",
  brokenSpringRepair: "/broken-spring-repair",
  emergencyGarageDoorRepair: "/emergency-garage-door-repair",
  offTrackGarageDoorRepair: "/off-track-garage-door-repair",
  garageDoorCableRepair: "/garage-door-cable-repair",
  garageDoorOpenerRepair: "/garage-door-opener-repair",
  garageDoorPanelReplacement: "/garage-door-panel-replacement",
  garageDoorRollerReplacement: "/garage-door-roller-replacement",

  // Commercial Services
  commercialGarageDoorRepair: "/commercial-garage-door-repair",
  commercialGarageDoorInstallation: "/commercial-garage-door-installation",
  commercialGarageDoorMaintenance: "/commercial-garage-door-maintenance",
  commercialGarageDoorService: "/commercial-garage-door-service",
  commercialGarageDoorServices: "/commercial-garage-door-services",
  commercialOverheadDoorRepair: "/commercial-overhead-door-repair",
  commercialRollUpDoorRepair: "/commercial-roll-up-door-repair",
  emergencyCommercialDoorRepair: "/emergency-commercial-door-repair",
  emergencyCommercialGarageDoorRepair:
    "/emergency-commercial-garage-door-repair",
  industrialDoorInstallation: "/industrial-door-installation",
  industrialDoorRepair: "/industrial-door-repair",
  loadingDockDoorRepair: "/loading-dock-door-repair",
  warehouseDoorRepair: "/warehouse-door-repair",

  // Specialty Doors
  hurricaneGarageDoors: "/hurricane-garage-doors",
  impactRatedGarageDoors: "/impact-rated-garage-doors",
  miamiDadeRatedGarageDoors: "/miami-dade-rated-garage-doors",
  windRatedGarageDoors: "/wind-rated-garage-doors",

  // Additional Services
  garageDoorOpener: "/garage-door-opener",
  springReplacement: "/spring-replacement",
  garageDoorShop: "/garage-door-shop",

  // Resources
  resources: "/resources",
  portfolio: "/portfolio",
  reviews: "/reviews",
  locations: "/locations",
};

// City-based service routes (dynamic)
export const getCityServiceRoute = (
  baseRoute: string,
  city: string
): string => {
  return `${baseRoute}/${city.toLowerCase().replace(/\s+/g, "-")}`;
};

// Breadcrumb helper
export const getBreadcrumbs = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  return segments.map((segment, index) => ({
    label: segment.replace(/-/g, " "),
    path: "/" + segments.slice(0, index + 1).join("/"),
  }));
};
