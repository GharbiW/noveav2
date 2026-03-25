import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/digital-growth", destination: "/consulting", permanent: true },
      { source: "/audience-data", destination: "/ai-data", permanent: true },
      { source: "/media-performance", destination: "/media-distribution", permanent: true },
    ];
  },
};

export default nextConfig;
