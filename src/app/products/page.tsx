import type { Metadata } from "next";
import { products, seriesCollections } from "@/data/products";
import { SERIES_MAP } from "@/lib/constants";
import { ProductsFilter } from "./products-filter";

export const metadata: Metadata = {
  title: "All Products | Micron Aerosols",
  description:
    "Browse Micron Aerosols' full range of 34 industrial aerosol products across 6 verticals — cleaners, lubricants, coatings, adhesives, MRO, and food grade.",
};

const seriesTabs = Object.entries(SERIES_MAP).map(([code, info]) => ({
  code,
  label: `${code} ${info.name}`,
}));

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-12 lg:px-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold uppercase tracking-wider text-[#121212] md:text-4xl">
          All Products
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[#4d4d4d]">
          {products.length} SKUs across 6 verticals, engineered for Indian
          manufacturing conditions.
        </p>
      </div>

      <ProductsFilter products={products} seriesTabs={seriesTabs} />
    </div>
  );
}
