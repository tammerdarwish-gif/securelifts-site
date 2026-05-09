import type { NextConfig } from "next";

const legacyRedirects = [
  {
    source: "/belt-drive-garage-door-openers",
    destination: "/garage-door-opener",
  },
  {
    source: "/liftmaster-8365-267-garage-door-opener",
    destination: "/garage-door-opener",
  },
  {
    source: "/extreme-300-series",
    destination: "/hurricane-garage-doors/modern/modern-steel-with-windows",
  },
  {
    source: "/encore-en200",
    destination: "/hurricane-garage-doors/traditional",
  },
  {
    source: "/chain-drive-garage-door-openers",
    destination: "/garage-door-opener",
  },
  {
    source: "/liftmaster-84505r-belt-drive-opener",
    destination: "/garage-door-opener",
  },
  {
    source: "/garage-doors",
    destination: "/garage-door",
  },
  {
    source: "/liftmaster-8160w-garage-door-opener",
    destination: "/garage-door-opener",
  },
  {
    source: "/avenue-garage-door",
    destination: "/hurricane-garage-doors/modern",
  },
  {
    source: "/liftmaster-85870-ac-chain-drive-w-fi-garage-door-opener",
    destination: "/garage-door-opener",
  },
  {
    source: "/garage-door-repair-in-palm-beach",
    destination: "/garage-door-repair/west-palm-beach",
  },
  {
    source: "/mywood-garage-door",
    destination: "/hurricane-garage-doors/modern/modern-steel-with-windows",
  },
  {
    source: "/garage-door-repair-in-atlantis",
    destination: "/garage-door-repair/west-palm-beach",
  },
  {
    source: "/architectural-series-aluminum",
    destination: "/hurricane-garage-doors/modern/full-view-aluminum-glass",
  },
  {
    source: "/miami",
    destination: "/garage-door-repair/miami",
  },
  {
    source: "/the-boulevard-garage-door",
    destination: "/hurricane-garage-doors/modern",
  },
  {
    source: "/alumaview-series",
    destination: "/hurricane-garage-doors/modern/full-view-aluminum-glass",
  },
  {
    source: "/shop",
    destination: "/garage-door-shop",
  },
  {
    source: "/liftmaster-98022-garage-door-opener",
    destination: "/garage-door-opener",
  },
].flatMap(({ source, destination }) => [
  {
    source,
    destination,
    permanent: true,
  },
  {
    source: `${source}/`,
    destination,
    permanent: true,
  },
]);

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...legacyRedirects,
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/about",
        permanent: true,
      },

      // Old portfolio URL format: /portfolio/garage-door-installation-in-coconut-creek-fl
      // New portfolio URL format: /portfolio/garage-door-installation-coconut-creek
      {
        source: "/portfolio/garage-door-installation-in-:city-fl",
        destination: "/portfolio/garage-door-installation-:city",
        permanent: true,
      },
      {
        source: "/portfolio/garage-door-installation-in-coconut-creek-fl",
        destination: "/portfolio/garage-door-installation-coconut-creek",
        permanent: true,
      },

      // Old local service URL format: /garage-door-installation-in-miami-fl
      // New local service URL format: /garage-door-installation/miami
      {
        source: "/garage-door-installation-in-:city-fl",
        destination: "/garage-door-installation/:city",
        permanent: true,
      },
      {
        source: "/garage-door-repair-in-:city-fl",
        destination: "/garage-door-repair/:city",
        permanent: true,
      },
      {
        source: "/emergency-garage-door-repair-in-:city-fl",
        destination: "/emergency-garage-door-repair/:city",
        permanent: true,
      },
      {
        source: "/broken-spring-repair-in-:city-fl",
        destination: "/broken-spring-repair/:city",
        permanent: true,
      },
      {
        source: "/spring-replacement-in-:city-fl",
        destination: "/spring-replacement/:city",
        permanent: true,
      },
      {
        source: "/garage-door-opener-repair-in-:city-fl",
        destination: "/garage-door-opener-repair/:city",
        permanent: true,
      },
      {
        source: "/garage-door-cable-repair-in-:city-fl",
        destination: "/garage-door-cable-repair/:city",
        permanent: true,
      },
      {
        source: "/garage-door-off-track-repair-in-:city-fl",
        destination: "/garage-door-off-track-repair/:city",
        permanent: true,
      },
      {
        source: "/garage-door-panel-replacement-in-:city-fl",
        destination: "/garage-door-panel-replacement/:city",
        permanent: true,
      },
      {
        source: "/garage-door-roller-replacement-in-:city-fl",
        destination: "/garage-door-roller-replacement/:city",
        permanent: true,
      },
      {
        source: "/garage-door-maintenance-in-:city-fl",
        destination: "/garage-door-maintenance/:city",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
