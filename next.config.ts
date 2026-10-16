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
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dolphx.com" }],
        destination: "https://dolphx.com/:path*",
        permanent: true,
      },
      { source: "/digital-growth", destination: "/consulting", permanent: true },
      { source: "/audience-data", destination: "/ai-data", permanent: true },
      { source: "/media-performance", destination: "/media-distribution", permanent: true },
    ];
  },
};

export default nextConfig;
