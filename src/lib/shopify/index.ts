// Shopify Storefront API client

import type {
  ShopifyResponse,
  ShopifyProduct,
  ShopifyCollection,
  ShopifyCart,
  Connection,
  CartLineInput,
  CartLineUpdateInput,
} from "./types";

import {
  GET_PRODUCTS_QUERY,
  GET_PRODUCT_BY_HANDLE_QUERY,
  GET_COLLECTIONS_QUERY,
  GET_COLLECTION_BY_HANDLE_QUERY,
  GET_PRODUCT_RECOMMENDATIONS_QUERY,
  GET_CART_QUERY,
} from "./queries";

import {
  CART_CREATE_MUTATION,
  CART_LINES_ADD_MUTATION,
  CART_LINES_UPDATE_MUTATION,
  CART_LINES_REMOVE_MUTATION,
} from "./mutations";

const domain = process.env.SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const endpoint = `https://${domain}/api/2024-10/graphql.json`;

export async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(
      `Shopify API error: ${response.status} ${response.statusText}`,
    );
  }

  const json: ShopifyResponse<T> = await response.json();

  if (json.errors) {
    const messages = json.errors.map((e) => e.message).join(", ");
    throw new Error(`Shopify GraphQL errors: ${messages}`);
  }

  return json.data;
}

// ---- Product queries ----

export async function getProducts(first = 50): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{
    products: Connection<ShopifyProduct>;
  }>(GET_PRODUCTS_QUERY, { first });

  return data.products.edges.map((edge) => edge.node);
}

export async function getProduct(
  handle: string,
): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{
    product: ShopifyProduct | null;
  }>(GET_PRODUCT_BY_HANDLE_QUERY, { handle });

  return data.product;
}

// ---- Collection queries ----

export async function getCollections(): Promise<ShopifyCollection[]> {
  const data = await shopifyFetch<{
    collections: Connection<ShopifyCollection>;
  }>(GET_COLLECTIONS_QUERY);

  return data.collections.edges.map((edge) => edge.node);
}

export async function getCollection(
  handle: string,
): Promise<ShopifyCollection | null> {
  const data = await shopifyFetch<{
    collection: ShopifyCollection | null;
  }>(GET_COLLECTION_BY_HANDLE_QUERY, { handle });

  return data.collection;
}

// ---- Recommendations ----

export async function getProductRecommendations(
  productId: string,
): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{
    productRecommendations: ShopifyProduct[];
  }>(GET_PRODUCT_RECOMMENDATIONS_QUERY, { productId });

  return data.productRecommendations ?? [];
}

// ---- Cart operations ----

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  const data = await shopifyFetch<{
    cart: ShopifyCart | null;
  }>(GET_CART_QUERY, { cartId });

  return data.cart;
}

export async function createCart(): Promise<ShopifyCart> {
  const data = await shopifyFetch<{
    cartCreate: {
      cart: ShopifyCart;
      userErrors: { field: string[]; message: string; code: string }[];
    };
  }>(CART_CREATE_MUTATION, { input: {} });

  if (data.cartCreate.userErrors.length > 0) {
    const messages = data.cartCreate.userErrors
      .map((e) => e.message)
      .join(", ");
    throw new Error(`Cart creation failed: ${messages}`);
  }

  return data.cartCreate.cart;
}

export async function addToCart(
  cartId: string,
  lines: CartLineInput[],
): Promise<ShopifyCart> {
  const data = await shopifyFetch<{
    cartLinesAdd: {
      cart: ShopifyCart;
      userErrors: { field: string[]; message: string; code: string }[];
    };
  }>(CART_LINES_ADD_MUTATION, { cartId, lines });

  if (data.cartLinesAdd.userErrors.length > 0) {
    const messages = data.cartLinesAdd.userErrors
      .map((e) => e.message)
      .join(", ");
    throw new Error(`Add to cart failed: ${messages}`);
  }

  return data.cartLinesAdd.cart;
}

export async function updateCart(
  cartId: string,
  lines: CartLineUpdateInput[],
): Promise<ShopifyCart> {
  const data = await shopifyFetch<{
    cartLinesUpdate: {
      cart: ShopifyCart;
      userErrors: { field: string[]; message: string; code: string }[];
    };
  }>(CART_LINES_UPDATE_MUTATION, { cartId, lines });

  if (data.cartLinesUpdate.userErrors.length > 0) {
    const messages = data.cartLinesUpdate.userErrors
      .map((e) => e.message)
      .join(", ");
    throw new Error(`Cart update failed: ${messages}`);
  }

  return data.cartLinesUpdate.cart;
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[],
): Promise<ShopifyCart> {
  const data = await shopifyFetch<{
    cartLinesRemove: {
      cart: ShopifyCart;
      userErrors: { field: string[]; message: string; code: string }[];
    };
  }>(CART_LINES_REMOVE_MUTATION, { cartId, lineIds });

  if (data.cartLinesRemove.userErrors.length > 0) {
    const messages = data.cartLinesRemove.userErrors
      .map((e) => e.message)
      .join(", ");
    throw new Error(`Remove from cart failed: ${messages}`);
  }

  return data.cartLinesRemove.cart;
}
