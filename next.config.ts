import type { NextConfig } from "next";

const legacyRedirects = [
  {
    source: "/belt-drive-garage-door-openers",
    destination: "/garage-door-opener#belt-drive-openers",
  },
  {
    source: "/liftmaster-8365-267-garage-door-opener",
    destination: "/garage-door-opener/liftmaster-8365-267",
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
    destination: "/garage-door-opener#chain-drive-openers",
  },
  {
    source: "/liftmaster-84505r-belt-drive-opener",
    destination: "/garage-door-opener/liftmaster-84505r",
  },
  {
    source: "/garage-doors",
    destination: "/garage-door",
  },
  {
    source: "/liftmaster-8160w-garage-door-opener",
    destination: "/garage-door-opener/liftmaster-81600",
  },
  {
    source: "/avenue-garage-door",
    destination: "/hurricane-garage-doors/modern",
  },
  {
    source: "/liftmaster-85870-ac-chain-drive-w-fi-garage-door-opener",
    destination: "/garage-door-opener/liftmaster-85870",
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
    destination: "/garage-door-opener/liftmaster-98022",
  },
  {
    source: "/doral",
    destination: "/garage-door-repair/doral",
  },
  {
    source: "/homestead",
    destination: "/garage-door-repair/homestead",
  },
  {
    source: "/pinecrest",
    destination: "/garage-door-repair/pinecrest",
  },
  {
    source: "/sunny-isles-beach",
    destination: "/garage-door-repair/sunny-isles-beach",
  },
  {
    source: "/coral-gables",
    destination: "/garage-door-repair/coral-gables",
  },
  {
    source: "/medley",
    destination: "/garage-door-repair/medley",
  },
  {
    source: "/garage-door-repair-in-broward",
    destination: "/garage-door-repair/fort-lauderdale",
  },
  {
    source: "/vertistack-avante",
    destination: "/garage-door-repair/miami",
  },
  {
    source: "/lp",
    destination: "/garage-door-repair",
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
  images: {
    qualities: [34, 48, 52, 75],
  },
  async headers() {
    return [
      {
        source: "/:path*\\.:ext(jpg|jpeg|png|webp|avif|gif|svg|ico|pdf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
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
        source: "/portfolio/garage-door-installation-in-:city",
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
        source: "/garage-door-installation-in-:city",
        destination: "/garage-door-installation/:city",
        permanent: true,
      },
      {
        source: "/garage-door-repair-in-:city-fl",
        destination: "/garage-door-repair/:city",
        permanent: true,
      },
      {
        source: "/garage-door-repair-in-:city",
        destination: "/garage-door-repair/:city",
        permanent: true,
      },
      {
        source: "/emergency-garage-door-repair-in-:city-fl",
        destination: "/emergency-garage-door-repair/:city",
        permanent: true,
      },
      {
        source: "/emergency-garage-door-repair-in-:city",
        destination: "/emergency-garage-door-repair/:city",
        permanent: true,
      },
      {
        source: "/broken-spring-repair-in-:city-fl",
        destination: "/broken-spring-repair/:city",
        permanent: true,
      },
      {
        source: "/broken-spring-repair-in-:city",
        destination: "/broken-spring-repair/:city",
        permanent: true,
      },
      {
        source: "/spring-replacement-in-:city-fl",
        destination: "/spring-replacement/:city",
        permanent: true,
      },
      {
        source: "/spring-replacement-in-:city",
        destination: "/spring-replacement/:city",
        permanent: true,
      },
      {
        source: "/garage-door-opener-repair-in-:city-fl",
        destination: "/garage-door-opener-repair/:city",
        permanent: true,
      },
      {
        source: "/garage-door-opener-repair-in-:city",
        destination: "/garage-door-opener-repair/:city",
        permanent: true,
      },
      {
        source: "/garage-door-cable-repair-in-:city-fl",
        destination: "/garage-door-cable-repair/:city",
        permanent: true,
      },
      {
        source: "/garage-door-cable-repair-in-:city",
        destination: "/garage-door-cable-repair/:city",
        permanent: true,
      },
      {
        source: "/garage-door-off-track-repair-in-:city-fl",
        destination: "/garage-door-off-track-repair/:city",
        permanent: true,
      },
      {
        source: "/garage-door-off-track-repair-in-:city",
        destination: "/garage-door-off-track-repair/:city",
        permanent: true,
      },
      {
        source: "/garage-door-panel-replacement-in-:city-fl",
        destination: "/garage-door-panel-replacement/:city",
        permanent: true,
      },
      {
        source: "/garage-door-panel-replacement-in-:city",
        destination: "/garage-door-panel-replacement/:city",
        permanent: true,
      },
      {
        source: "/garage-door-roller-replacement-in-:city-fl",
        destination: "/garage-door-roller-replacement/:city",
        permanent: true,
      },
      {
        source: "/garage-door-roller-replacement-in-:city",
        destination: "/garage-door-roller-replacement/:city",
        permanent: true,
      },
      {
        source: "/garage-door-maintenance-in-:city-fl",
        destination: "/garage-door-maintenance/:city",
        permanent: true,
      },
      {
        source: "/garage-door-maintenance-in-:city",
        destination: "/garage-door-maintenance/:city",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
