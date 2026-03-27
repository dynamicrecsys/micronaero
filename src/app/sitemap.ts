import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const BLOG_SLUGS = [
  "complete-guide-to-conformal-coating-selection",
  "silicone-vs-non-silicone-mould-release-how-to-choose",
  "understanding-anti-spatter-sprays-for-mig-welding",
  "5-signs-you-need-a-better-mould-release-agent",
];

const SOLUTION_SLUGS = [
  "oem-custom-formulation",
  "conformal-coating",
  "mould-release",
];

async function getShopifyUrls(): Promise<MetadataRoute.Sitemap> {
  // Gracefully skip if Shopify env vars are not configured
  if (
    !process.env.SHOPIFY_STORE_DOMAIN ||
    !process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  ) {
    return [];
  }

  try {
    const { getProducts, getCollections } = await import("@/lib/shopify");

    const [products, collections] = await Promise.all([
      getProducts().catch(() => []),
      getCollections().catch(() => []),
    ]);

    const now = new Date();

    const productUrls: MetadataRoute.Sitemap = products.map((product) => ({
      url: `${SITE_URL}/products/${product.handle}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    const collectionUrls: MetadataRoute.Sitemap = collections.map((col) => ({
      url: `${SITE_URL}/collections/${col.handle}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    return [...productUrls, ...collectionUrls];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/solutions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/become-a-dealer`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/get-quote`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const solutionPages: MetadataRoute.Sitemap = SOLUTION_SLUGS.map((slug) => ({
    url: `${SITE_URL}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const shopifyUrls = await getShopifyUrls();

  return [...staticPages, ...solutionPages, ...blogPages, ...shopifyUrls];
}
