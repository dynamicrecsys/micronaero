// GraphQL fragments and queries for Shopify Storefront API

export const IMAGE_FRAGMENT = /* GraphQL */ `
  fragment ImageFields on Image {
    url
    altText
    width
    height
  }
`;

export const MONEY_FRAGMENT = /* GraphQL */ `
  fragment MoneyFields on MoneyV2 {
    amount
    currencyCode
  }
`;

export const VARIANT_FRAGMENT = /* GraphQL */ `
  fragment VariantFields on ProductVariant {
    id
    title
    availableForSale
    selectedOptions {
      name
      value
    }
    price {
      ...MoneyFields
    }
    compareAtPrice {
      ...MoneyFields
    }
    image {
      ...ImageFields
    }
    quantityAvailable
  }
  ${MONEY_FRAGMENT}
  ${IMAGE_FRAGMENT}
`;

export const PRODUCT_FRAGMENT = /* GraphQL */ `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    availableForSale
    productType
    vendor
    tags
    options {
      id
      name
      values
    }
    priceRange {
      minVariantPrice {
        ...MoneyFields
      }
      maxVariantPrice {
        ...MoneyFields
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        ...MoneyFields
      }
      maxVariantPrice {
        ...MoneyFields
      }
    }
    images(first: 20) {
      edges {
        cursor
        node {
          ...ImageFields
        }
      }
    }
    variants(first: 100) {
      edges {
        cursor
        node {
          ...VariantFields
        }
      }
    }
    seo {
      title
      description
    }
    specifications: metafield(namespace: "custom", key: "specifications") {
      key
      namespace
      value
      type
    }
    tds_url: metafield(namespace: "custom", key: "tds_url") {
      key
      namespace
      value
      type
    }
    sds_url: metafield(namespace: "custom", key: "sds_url") {
      key
      namespace
      value
      type
    }
    faq: metafield(namespace: "custom", key: "faq") {
      key
      namespace
      value
      type
    }
    industries: metafield(namespace: "custom", key: "industries") {
      key
      namespace
      value
      type
    }
    series_code: metafield(namespace: "custom", key: "series_code") {
      key
      namespace
      value
      type
    }
  }
  ${VARIANT_FRAGMENT}
`;

export const COLLECTION_FRAGMENT = /* GraphQL */ `
  fragment CollectionFields on Collection {
    id
    handle
    title
    description
    descriptionHtml
    image {
      ...ImageFields
    }
    seo {
      title
      description
    }
  }
  ${IMAGE_FRAGMENT}
`;

export const CART_FRAGMENT = /* GraphQL */ `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        ...MoneyFields
      }
      totalAmount {
        ...MoneyFields
      }
      totalTaxAmount {
        ...MoneyFields
      }
    }
    lines(first: 100) {
      edges {
        cursor
        node {
          id
          quantity
          cost {
            totalAmount {
              ...MoneyFields
            }
            amountPerQuantity {
              ...MoneyFields
            }
            compareAtAmountPerQuantity {
              ...MoneyFields
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product {
                id
                handle
                title
                featuredImage {
                  ...ImageFields
                }
              }
            }
          }
        }
      }
    }
  }
  ${MONEY_FRAGMENT}
  ${IMAGE_FRAGMENT}
`;

// ---- Full queries ----

export const GET_PRODUCTS_QUERY = /* GraphQL */ `
  query GetProducts($first: Int = 50) {
    products(first: $first) {
      edges {
        cursor
        node {
          ...ProductFields
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_PRODUCT_BY_HANDLE_QUERY = /* GraphQL */ `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...ProductFields
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_COLLECTIONS_QUERY = /* GraphQL */ `
  query GetCollections($first: Int = 50) {
    collections(first: $first) {
      edges {
        cursor
        node {
          ...CollectionFields
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${COLLECTION_FRAGMENT}
`;

export const GET_COLLECTION_BY_HANDLE_QUERY = /* GraphQL */ `
  query GetCollectionByHandle($handle: String!, $productsFirst: Int = 50) {
    collection(handle: $handle) {
      ...CollectionFields
      products(first: $productsFirst) {
        edges {
          cursor
          node {
            ...ProductFields
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
  ${COLLECTION_FRAGMENT}
  ${PRODUCT_FRAGMENT}
`;

export const GET_PRODUCT_RECOMMENDATIONS_QUERY = /* GraphQL */ `
  query GetProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...ProductFields
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_CART_QUERY = /* GraphQL */ `
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      ...CartFields
    }
  }
  ${CART_FRAGMENT}
`;
