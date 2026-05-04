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
    ];
  },
};

export default nextConfig;          
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio/garage-door-installation-in-coconut-creek-fl",
        destination: "/portfolio/garage-door-installation-coconut-creek",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;  