import { SITE_URL } from "@/lib/constants";
import type { ShopifyProduct } from "@/lib/shopify/types";

type ProductSchemaProps = {
  product: ShopifyProduct;
};

export function ProductSchema({ product }: ProductSchemaProps) {
  const firstImage = product.images.edges[0]?.node;
  const firstVariant = product.variants.edges[0]?.node;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    url: `${SITE_URL}/products/${product.handle}`,
    image: firstImage?.url,
    brand: {
      "@type": "Brand",
      name: product.vendor || "Micron Aerosols",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      lowPrice: product.priceRange.minVariantPrice.amount,
      highPrice: product.priceRange.maxVariantPrice.amount,
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Micron Aerosols",
      },
    },
    sku: firstVariant?.id,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
