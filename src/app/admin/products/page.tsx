"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { products } from "@/data/products";

type ViewMode = "grid" | "table";

const SERIES_OPTIONS = [
  "S1000",
  "S2000",
  "S3000",
  "S4000",
  "S5000",
  "S6000",
];

function GridIcon({ active }: { active: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${active ? "text-[#0a0a0a]" : "text-[#ccc]"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}

function ListIcon({ active }: { active: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${active ? "text-[#0a0a0a]" : "text-[#ccc]"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
    </svg>
  );
}

export default function AdminProductsPage() {
  const [view, setView] = useState<ViewMode>("grid");
  const [search, setSearch] = useState("");
  const [seriesFilter, setSeriesFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.handle.toLowerCase().includes(search.toLowerCase());
      const matchesSeries = seriesFilter === "all" || p.series === seriesFilter;
      return matchesSearch && matchesSeries;
    });
  }, [search, seriesFilter]);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-lg font-bold tracking-[0.1em] uppercase text-[#0a0a0a]">
            Products
          </h1>
          <p className="text-[11px] text-[#999] mt-1">
            Read-only view synced from Shopify
          </p>
        </div>
        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#999] bg-white border border-[#e5e5e5] px-3 py-1.5">
          {products.length} total
        </span>
      </div>

      <div className="bg-[#0099ff]/5 border border-[#0099ff]/20 px-4 py-2.5 mb-5">
        <p className="text-[11px] font-medium tracking-wider text-[#0099ff]">
          Products are managed via Shopify. This is a read-only view.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bbb]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e5e5e5] text-[13px] tracking-wide text-[#0a0a0a] placeholder:text-[#bbb] focus:outline-none focus:border-[#0099ff] transition-colors"
          />
        </div>

        {/* Series filter */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSeriesFilter("all")}
            className={`px-2.5 py-1.5 text-[10px] font-semibold tracking-wider uppercase transition-colors ${
              seriesFilter === "all"
                ? "bg-[#0a0a0a] text-white"
                : "bg-white border border-[#e5e5e5] text-[#666] hover:border-[#999]"
            }`}
          >
            All
          </button>
          {SERIES_OPTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setSeriesFilter(seriesFilter === s ? "all" : s)}
              className={`px-2.5 py-1.5 text-[10px] font-semibold tracking-wider uppercase transition-colors ${
                seriesFilter === s
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white border border-[#e5e5e5] text-[#666] hover:border-[#999]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* View toggle */}
        <div className="flex border border-[#e5e5e5] bg-white">
          <button
            onClick={() => setView("grid")}
            className={`p-2 transition-colors ${view === "grid" ? "bg-[#f5f5f5]" : ""}`}
          >
            <GridIcon active={view === "grid"} />
          </button>
          <button
            onClick={() => setView("table")}
            className={`p-2 transition-colors ${view === "table" ? "bg-[#f5f5f5]" : ""}`}
          >
            <ListIcon active={view === "table"} />
          </button>
        </div>
      </div>

      <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#999] mb-3">
        {filtered.length} products
      </p>

      {/* Grid View */}
      {view === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#e5e5e5] hover:border-[#ccc] transition-colors group"
            >
              <div className="aspect-square bg-[#f5f5f5] relative overflow-hidden">
                {product.images[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[11px] text-[#ccc] tracking-wider uppercase">No image</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-[12px] font-semibold text-[#0a0a0a] leading-tight line-clamp-2 mb-1.5">
                  {product.title}
                </p>
                <div className="flex items-center justify-between">
                  {product.series ? (
                    <span className="text-[9px] font-semibold tracking-wider uppercase text-[#0099ff] bg-[#0099ff]/10 px-1.5 py-0.5">
                      {product.series}
                    </span>
                  ) : (
                    <span />
                  )}
                  <span className="text-[12px] font-bold text-[#0a0a0a]">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Table View */
        <div className="bg-white border border-[#e5e5e5] overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e5e5e5] bg-[#fafafa]">
                <th className="px-4 py-3 text-left text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999] w-12">
                  Img
                </th>
                <th className="px-4 py-3 text-left text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999]">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999]">
                  Series
                </th>
                <th className="px-4 py-3 text-left text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999]">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999]">
                  Variants
                </th>
                <th className="px-4 py-3 text-left text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999]">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-[#f0f0f0] last:border-b-0 hover:bg-[#fafafa] transition-colors"
                >
                  <td className="px-4 py-2.5">
                    {product.images[0] ? (
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={36}
                        height={36}
                        className="w-9 h-9 object-cover border border-[#e5e5e5]"
                      />
                    ) : (
                      <div className="w-9 h-9 bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center">
                        <span className="text-[8px] text-[#ccc]">N/A</span>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-2.5">
                    <p className="text-[12px] font-semibold text-[#0a0a0a] leading-tight">
                      {product.title}
                    </p>
                    <p className="text-[10px] text-[#999] mt-0.5">{product.handle}</p>
                  </td>
                  <td className="px-4 py-2.5">
                    {product.series ? (
                      <span className="text-[9px] font-semibold tracking-wider uppercase text-[#0099ff] bg-[#0099ff]/10 px-1.5 py-0.5">
                        {product.series}
                      </span>
                    ) : (
                      <span className="text-[11px] text-[#ccc]">-</span>
                    )}
                  </td>
                  <td className="px-4 py-2.5 text-[12px] font-bold text-[#0a0a0a] whitespace-nowrap">
                    {product.price}
                  </td>
                  <td className="px-4 py-2.5 text-[12px] text-[#666] text-center">
                    {product.variants.length}
                  </td>
                  <td className="px-4 py-2.5 text-[10px] text-[#999] tracking-wider uppercase">
                    {product.productType || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
