// Shopify Storefront API types

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Image = {
  url: string;
  altText: string | null;
  width: number;
  height: number;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: { name: string; value: string }[];
  price: Money;
  compareAtPrice: Money | null;
  image: Image | null;
  quantityAvailable: number | null;
};

export type Metafield = {
  key: string;
  namespace: string;
  value: string;
  type: string;
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  productType: string;
  vendor: string;
  tags: string[];
  images: Connection<Image>;
  variants: Connection<ProductVariant>;
  options: ProductOption[];
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
  compareAtPriceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
  seo: {
    title: string | null;
    description: string | null;
  };
  // Custom metafields
  specifications: Metafield | null;
  tds_url: Metafield | null;
  sds_url: Metafield | null;
  faq: Metafield | null;
  industries: Metafield | null;
  series_code: Metafield | null;
};

export type ShopifyCollection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  image: Image | null;
  seo: {
    title: string | null;
    description: string | null;
  };
  products: Connection<ShopifyProduct>;
};

export type CartItemMerchandise = {
  id: string;
  title: string;
  selectedOptions: { name: string; value: string }[];
  product: {
    id: string;
    handle: string;
    title: string;
    featuredImage: Image | null;
  };
};

export type ShopifyCartItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
    amountPerQuantity: Money;
    compareAtAmountPerQuantity: Money | null;
  };
  merchandise: CartItemMerchandise;
};

export type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money | null;
  };
  lines: Connection<ShopifyCartItem>;
};

// Shopify pagination / connection types

export type Edge<T> = {
  cursor: string;
  node: T;
};

export type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
};

export type Connection<T> = {
  edges: Edge<T>[];
  pageInfo?: PageInfo;
};

// Cart mutation input types

export type CartLineInput = {
  merchandiseId: string;
  quantity: number;
};

export type CartLineUpdateInput = {
  id: string;
  merchandiseId?: string;
  quantity: number;
};

// Shopify API response envelope

export type ShopifyResponse<T> = {
  data: T;
  errors?: { message: string; locations?: { line: number; column: number }[] }[];
};
