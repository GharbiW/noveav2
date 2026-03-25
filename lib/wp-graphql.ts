import { env } from "./env";

export interface WPSeo {
  title: string;
  metaDesc: string;
  canonical: string;
  opengraphTitle: string;
  opengraphDescription: string;
  opengraphImage?: { sourceUrl: string };
}

export interface WPPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  uri: string;
  seo?: WPSeo;
}

export interface WPService {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  featuredImage?: { node: { sourceUrl: string; altText: string } };
}

export interface WPTestimonial {
  id: string;
  title: string;
  content: string;
  testimonialFields?: {
    clientName: string;
    clientRole: string;
    clientCompany: string;
    rating: number;
  };
}

export interface WPCaseStudy {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  featuredImage?: { node: { sourceUrl: string; altText: string } };
}

async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (env.wpAuthToken) {
    headers["Authorization"] = `Bearer ${env.wpAuthToken}`;
  }

  const res = await fetch(env.wpGraphqlUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  if (json.errors) {
    console.error("WPGraphQL errors:", json.errors);
    throw new Error("Failed to fetch from WordPress");
  }

  return json.data;
}

export async function getPage(uri: string): Promise<WPPage | null> {
  try {
    const data = await fetchGraphQL<{ page: WPPage }>(
      `query GetPage($uri: ID!) {
        page(id: $uri, idType: URI) {
          id title content slug uri
          seo { title metaDesc canonical opengraphTitle opengraphDescription opengraphImage { sourceUrl } }
        }
      }`,
      { uri }
    );
    return data.page;
  } catch {
    return null;
  }
}

export async function getServices(): Promise<WPService[]> {
  try {
    const data = await fetchGraphQL<{ services: { nodes: WPService[] } }>(
      `query GetServices {
        services(first: 20) {
          nodes { id title excerpt content slug featuredImage { node { sourceUrl altText } } }
        }
      }`
    );
    return data.services.nodes;
  } catch {
    return [];
  }
}

export async function getTestimonials(): Promise<WPTestimonial[]> {
  try {
    const data = await fetchGraphQL<{
      testimonials: { nodes: WPTestimonial[] };
    }>(
      `query GetTestimonials {
        testimonials(first: 20) {
          nodes { id title content testimonialFields { clientName clientRole clientCompany rating } }
        }
      }`
    );
    return data.testimonials.nodes;
  } catch {
    return [];
  }
}

export async function getAllUris(): Promise<string[]> {
  try {
    const data = await fetchGraphQL<{
      pages: { nodes: { uri: string }[] };
      services: { nodes: { slug: string }[] };
    }>(
      `query GetAllUris {
        pages(first: 100) { nodes { uri } }
        services(first: 100) { nodes { slug } }
      }`
    );
    const uris = [
      ...data.pages.nodes.map((n) => n.uri),
      ...data.services.nodes.map((n) => `/services/${n.slug}`),
    ];
    return uris;
  } catch {
    return [];
  }
}
