"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

type SeriesTab = {
  code: string;
  label: string;
};

type ProductsFilterProps = {
  products: Product[];
  seriesTabs: SeriesTab[];
};

export function ProductsFilter({ products, seriesTabs }: ProductsFilterProps) {
  const [activeSeries, setActiveSeries] = useState<string>("All");

  const filtered =
    activeSeries === "All"
      ? products
      : products.filter((p) => p.series === activeSeries);

  return (
    <>
      {/* Filter Tabs */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSeries("All")}
            className={`rounded-none px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors ${
              activeSeries === "All"
                ? "bg-[#0099ff] text-white"
                : "border border-gray-300 bg-transparent text-[#4d4d4d] hover:border-[#0099ff] hover:text-[#0099ff]"
            }`}
          >
            All
          </button>
          {seriesTabs.map((tab) => (
            <button
              key={tab.code}
              onClick={() => setActiveSeries(tab.code)}
              className={`rounded-none px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors ${
                activeSeries === tab.code
                  ? "bg-[#0099ff] text-white"
                  : "border border-gray-300 bg-transparent text-[#4d4d4d] hover:border-[#0099ff] hover:text-[#0099ff]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-[#4d4d4d]">
            No products found in this series.
          </p>
        </div>
      )}
    </>
  );
}
