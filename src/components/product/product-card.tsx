import Link from "next/link";
import type { Product } from "@/data/products";
import { SERIES_MAP } from "@/lib/constants";

type ProductCardProps = {
  product: Product;
};

function formatPrice(price: string): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(price));
}

function getSeriesLabel(series: string): string {
  const info = SERIES_MAP[series];
  return info ? `${series} ${info.name}` : series;
}

export function ProductCard({ product }: ProductCardProps) {
  const { handle, title, price, compareAtPrice, images, series } = product;
  const imageUrl = images[0] ?? null;

  return (
    <div className="group relative flex flex-col border border-[#e5e5e5] bg-white transition-colors hover:border-[#0099ff]">
      {/* Image — full bleed, no padding */}
      <Link
        href={`/products/${handle}`}
        className="relative aspect-square overflow-hidden"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#f5f5f5]">
            <svg
              className="h-16 w-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        {series && (
          <span className="mb-2 inline-block w-fit border border-[#0099ff] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0099ff]">
            {getSeriesLabel(series)}
          </span>
        )}
        <Link href={`/products/${handle}`}>
          <h3 className="text-sm font-bold text-[#121212] tracking-wide group-hover:text-[#0099ff] transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-[#121212]">
            {formatPrice(price)}
          </span>
          {compareAtPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(compareAtPrice)}
            </span>
          )}
        </div>
        <div className="mt-auto flex gap-0 pt-4">
          <Link
            href={`/products/${handle}`}
            className="flex-1 bg-[#0099ff] px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-[#1773b0] transition-colors"
          >
            Add to Cart
          </Link>
          <Link
            href={`/get-quote?product=${encodeURIComponent(handle)}`}
            className="flex-1 border border-[#0099ff] px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#0099ff] hover:bg-[#0099ff] hover:text-white transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
