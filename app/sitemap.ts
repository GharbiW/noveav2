import { MetadataRoute } from "next";
import { getAllUris } from "@/lib/wp-graphql";
import { useCases } from "@/lib/use-cases";

const BASE_URL = "https://dolphx.com";

const staticRoutes = [
  { url: "/", priority: 1.0 },
  { url: "/services", priority: 0.9 },
  { url: "/consulting", priority: 0.8 },
  { url: "/automation", priority: 0.8 },
  { url: "/ai-data", priority: 0.8 },
  { url: "/media-distribution", priority: 0.8 },
  { url: "/use-cases", priority: 0.8 },
  { url: "/network", priority: 0.7 },
  { url: "/about", priority: 0.7 },
  { url: "/news", priority: 0.8 },
  { url: "/contact", priority: 0.8 },
  { url: "/launch", priority: 0.6 },
  { url: "/development", priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let wpUris: string[] = [];
  try {
    wpUris = await getAllUris();
  } catch {
    // WP not configured yet — skip
  }

  const wpRoutes = wpUris.map((uri) => ({
    url: `${BASE_URL}${uri}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const useCaseRoutes = useCases.map((item) => ({
    url: `${BASE_URL}/use-cases/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map(({ url, priority }) => ({
      url: `${BASE_URL}${url}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...useCaseRoutes,
    ...wpRoutes,
  ];
}
