import { MetadataRoute } from "next";
import { useCases } from "@/lib/use-cases";
import { SITE_URL, NEWS_ENABLED } from "@/lib/site";

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
  ...(NEWS_ENABLED ? [{ url: "/news", priority: 0.8 }] : []),
  { url: "/contact", priority: 0.8 },
  { url: "/launch", priority: 0.6 },
  { url: "/development", priority: 0.6 },
];

// Only publish routes this frontend serves. Add CMS URLs when their page routes exist.
// Omit lastModified until actual content revision dates are available.
export default function sitemap(): MetadataRoute.Sitemap {
  const useCaseRoutes = useCases.map((item) => ({
    url: `${SITE_URL}/use-cases/${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map(({ url, priority }) => ({
      url: `${SITE_URL}${url}`,
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...useCaseRoutes,
  ];
}
