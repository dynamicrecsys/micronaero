import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  products,
  getProductByHandle,
  getProductsBySeries,
  seriesCollections,
} from "@/data/products";
import { SERIES_MAP, WHATSAPP_NUMBER } from "@/lib/constants";
import { Breadcrumb } from "@/components/product/breadcrumb";
import { ProductCard } from "@/components/product/product-card";
import { ProductGallery, VariantSelector } from "./product-detail-client";

type Props = {
  params: Promise<{ handle: string }>;
};

function getSeriesLabel(series: string): string {
  const info = SERIES_MAP[series];
  return info ? `${series} ${info.name}` : series;
}

function getSeriesCollectionHandle(series: string): string | null {
  const entry = seriesCollections.find((sc) => sc.series === series);
  return entry?.handle ?? SERIES_MAP[series]?.collectionHandle ?? null;
}

function formatPrice(price: string): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(price));
}

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);

  if (!product) {
    return { title: "Product Not Found" };
  }

  // Strip HTML for plain text description
  const plainDesc = product.description
    .replace(/<[^>]*>/g, "")
    .slice(0, 160);

  return {
    title: `${product.title} | Micron Aerosols`,
    description: plainDesc,
    openGraph: {
      title: product.title,
      description: plainDesc,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const seriesLabel = getSeriesLabel(product.series);
  const seriesCollectionHandle = getSeriesCollectionHandle(product.series);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    ...(seriesCollectionHandle
      ? [
          {
            name: seriesLabel,
            href: `/collections/${seriesCollectionHandle}`,
          },
        ]
      : []),
    { name: product.title, href: `/products/${handle}` },
  ];

  const relatedProducts = getProductsBySeries(product.series)
    .filter((p) => p.handle !== product.handle)
    .slice(0, 4);

  const whatsappUrl = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'd like to know more about ${product.title}`)}`
    : null;

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 lg:px-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Product Top Section: Two Columns */}
      <div className="mt-6 grid gap-10 lg:grid-cols-5">
        {/* Left Column (60%) */}
        <div className="lg:col-span-3">
          <ProductGallery images={product.images} title={product.title} />
        </div>

        {/* Right Column (40%) */}
        <div className="lg:col-span-2">
          {/* Series Badge */}
          <span className="inline-block rounded-none bg-[#0099ff] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {seriesLabel}
          </span>

          {/* Title */}
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#121212] md:text-3xl lg:text-4xl">
            {product.title}
          </h1>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-[#121212]">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            <span className="text-sm text-[#4d4d4d]">incl. GST</span>
          </div>

          {/* Variant Selector */}
          <div className="mt-6">
            <VariantSelector variants={product.variants} />
          </div>

          {/* Bulk pricing note */}
          <p className="mt-4 rounded-none border border-[#0099ff]/20 bg-[#0099ff]/5 px-4 py-3 text-sm text-[#4d4d4d]">
            <span className="font-semibold text-[#0099ff]">Bulk pricing</span>{" "}
            available for 50+ units
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 space-y-3">
            <button className="flex w-full items-center justify-center rounded-none bg-[#0099ff] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#0088e6] transition-colors">
              ADD TO CART
            </button>
            <Link
              href={`/get-quote?product=${encodeURIComponent(handle)}`}
              className="flex w-full items-center justify-center rounded-none border-2 border-[#121212] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#121212] hover:bg-[#121212] hover:text-white transition-colors"
            >
              GET BULK QUOTE
            </Link>
          </div>

          {/* WhatsApp Link */}
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[#25d366] hover:underline"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat about this product on WhatsApp
            </a>
          )}

          {/* Divider */}
          <hr className="mt-6 border-gray-200" />
        </div>
      </div>

      {/* Full Description */}
      <div className="mt-16 border-t border-gray-200 pt-12">
        <h2 className="mb-6 text-xl font-bold uppercase tracking-wider text-[#121212]">
          Product Description
        </h2>
        <div
          className="prose prose-sm max-w-none text-[#4d4d4d] prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-[#121212] prose-a:text-[#0099ff] prose-strong:text-[#121212]"
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="mb-8 text-xl font-bold uppercase tracking-wider text-[#121212]">
            You May Also Like
          </h2>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((rp) => (
              <ProductCard key={rp.handle} product={rp} />
            ))}
          </div>
        </div>
      )}

      {/* Bulk CTA Banner */}
      <div className="mt-16 border border-gray-200 bg-gray-50 p-8 text-center sm:p-12">
        <h2 className="text-xl font-bold uppercase tracking-wider text-[#121212] sm:text-2xl">
          Need This in Bulk?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[#4d4d4d]">
          Get competitive bulk pricing for {product.title}. Our team will
          prepare a custom quotation within 24 hours.
        </p>
        <Link
          href={`/get-quote?product=${encodeURIComponent(handle)}`}
          className="mt-6 inline-flex items-center gap-2 rounded-none bg-[#0099ff] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#0088e6] transition-colors"
        >
          Request Quote
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
