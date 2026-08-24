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
    source: "/hurricane-garage-door-in-wellington",
    destination: "/hurricane-garage-doors/wellington",
  },
  {
    source: "/openers-installation-in-wellington",
    destination: "/garage-door-opener-repair/wellington",
  },
  {
    source: "/impact-doors/broward",
    destination: "/hurricane-garage-doors/broward-county",
  },
  {
    source: "/hurricane-garage-doors/broward",
    destination: "/hurricane-garage-doors/broward-county",
  },
  {
    source: "/book-your-appointment",
    destination: "/book-service",
  },
  {
    source: "/garage-door-spring-repair",
    destination: "/broken-spring-repair",
  },
  {
    source: "/raynor-energycore-series",
    destination: "/hurricane-garage-doors/traditional",
  },
  {
    source: "/privacy-policy-2",
    destination: "/privacy-policy",
  },
  {
    source: "/steelweave-metal-mesh-grille",
    destination: "/commercial-garage-door-services",
  },
  {
    source: "/Content/Install/SafetySensors.htm",
    destination: "/resources/garage-door-opener-manuals",
  },
  {
    source: "/Content/Misc/Accessories.htm",
    destination: "/garage-door-opener",
  },
  {
    source: "/Content/UG/UG_AdjustmentSafetyPHX.htm",
    destination: "/resources/garage-door-opener-manuals",
  },
  {
    source: "/Content/UG/UG_ProtectorSystem.htm",
    destination: "/resources/garage-door-opener-manuals",
  },
  {
    source: "/portfolio",
    destination: "/garage-door-installation",
  },
  {
    source: "/crossinggard",
    destination: "/commercial-garage-door-services",
  },
  {
    source: "/terms-and-conditions",
    destination: "/terms-of-service",
  },
  {
    source: "/portfolio/garage-door-installation-in-pinecrest/feed",
    destination: "/portfolio/garage-door-installation-pinecrest",
  },
  {
    source: "/west-miami",
    destination: "/garage-door-repair/miami",
  },
  {
    source: "/heavy-duty-5015-rolling-grille",
    destination: "/commercial-roll-up-door-repair",
  },
  {
    source: "/firecoil",
    destination: "/commercial-garage-door-services",
  },
  {
    source: "/hialeah",
    destination: "/garage-door-repair/hialeah",
  },
  {
    source: "/miami-beach",
    destination: "/garage-door-repair/miami-beach",
  },
  {
    source: "/careers",
    destination: "/about",
  },
  {
    source: "/buildmark",
    destination: "/hurricane-garage-doors/traditional",
  },
  {
    source: "/giveaway",
    destination: "/garage-door",
  },
  {
    source: "/product/garage-door-giveaway",
    destination: "/garage-door",
  },
  {
    source: "/liftmaster-87802-chain-drive-opener",
    destination: "/garage-door-opener",
  },
  {
    source: "/liftmaster-wall-mount-openers",
    destination: "/garage-door-opener/liftmaster-98022",
  },
  {
    source: "/liftmaster-81650-garage-door-opener",
    destination: "/garage-door-opener/liftmaster-81600",
  },
  {
    source: "/liftmaster-81550-garage-door-opener",
    destination: "/garage-door-opener/liftmaster-81600",
  },
  {
    source: "/liftmaster-87504-267-belt-drive-opener",
    destination: "/garage-door-opener/liftmaster-87504-267",
  },
  {
    source: "/legacyview-garage-door",
    destination: "/hurricane-garage-doors/modern/full-view-aluminum-glass",
  },
  {
    source: "/gallery-steel",
    destination: "/hurricane-garage-doors/traditional",
  },
  {
    source: "/architectural-series-steel",
    destination: "/hurricane-garage-doors/modern/modern-steel-with-windows",
  },
  {
    source: "/extreme-1024",
    destination: "/hurricane-garage-doors",
  },
  {
    source: "/energy-series",
    destination: "/hurricane-garage-doors/traditional",
  },
  {
    source: "/wynwood-garage-door",
    destination: "/hurricane-garage-doors/modern/modern-steel-with-windows",
  },
  {
    source: "/th160-series",
    destination: "/hurricane-garage-doors/traditional",
  },
  {
    source: "/canyon-ridge-brochure",
    destination: "/hurricane-garage-doors/carriage-house",
  },
  {
    source: "/liftmaster-81600w-garage-door-opener",
    destination: "/garage-door-opener/liftmaster-81600",
  },
  {
    source: "/commercial",
    destination: "/commercial-garage-door-services",
  },
  {
    source: "/deeringcraft-garage-door",
    destination: "/hurricane-garage-doors/carriage-house",
  },
  {
    source: "/search/:path*",
    destination: "/",
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
    formats: ["image/avif", "image/webp"],
    qualities: [24, 34, 48, 52, 75],
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
      {
        source: "/resources/approvals/:file*.pdf",
        headers: [
          {
            key: "Link",
            value:
              '<https://securelifts.com/resources/approvals/:file*.pdf>; rel="canonical"',
          },
        ],
      },
      {
        source: "/resources/manuals/:file*.pdf",
        headers: [
          {
            key: "Link",
            value:
              '<https://securelifts.com/resources/manuals/:file*.pdf>; rel="canonical"',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/lp/:path*",
        destination: "https://securelift-lp-a6vat.ondigitalocean.app/lp/:path*",
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
