// GA4 analytics helper — all functions are no-ops if window.gtag is not defined

type GAEventParams = Record<string, string | number | boolean>;

function gtag(eventName: string, params?: GAEventParams): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, params);
}

export function trackEvent(
  eventName: string,
  params?: GAEventParams,
): void {
  gtag(eventName, params);
}

export function trackViewItem(product: {
  id: string;
  name: string;
  category?: string;
  price?: number;
  currency?: string;
}): void {
  gtag("view_item", {
    item_id: product.id,
    item_name: product.name,
    item_category: product.category ?? "",
    price: product.price ?? 0,
    currency: product.currency ?? "INR",
  });
}

export function trackAddToCart(
  product: {
    id: string;
    name: string;
    category?: string;
    price?: number;
    currency?: string;
  },
  quantity: number,
): void {
  gtag("add_to_cart", {
    item_id: product.id,
    item_name: product.name,
    item_category: product.category ?? "",
    price: product.price ?? 0,
    currency: product.currency ?? "INR",
    quantity,
  });
}

export function trackGenerateLead(
  leadType: string,
  leadScore?: number,
  productsInterested?: string,
): void {
  gtag("generate_lead", {
    lead_type: leadType,
    ...(leadScore !== undefined && { lead_score: leadScore }),
    ...(productsInterested !== undefined && {
      products_interested: productsInterested,
    }),
  });
}

export function trackWhatsAppClick(
  pageType: string,
  productHandle?: string,
): void {
  gtag("whatsapp_click", {
    page_type: pageType,
    ...(productHandle !== undefined && { product_handle: productHandle }),
  });
}

export function trackTDSDownload(
  productHandle: string,
  documentType: string,
): void {
  gtag("tds_download", {
    product_handle: productHandle,
    document_type: documentType,
  });
}

export function trackPhoneClick(pageType: string): void {
  gtag("phone_click", {
    page_type: pageType,
  });
}

export function trackSolutionPageView(solutionSlug: string): void {
  gtag("solution_page_view", {
    solution_slug: solutionSlug,
  });
}
