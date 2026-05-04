import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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