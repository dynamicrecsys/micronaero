"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

type ProductGalleryProps = {
  images: string[];
  title: string;
};

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentImage = images[selectedIndex] ?? null;

  return (
    <div>
      {/* Main Image */}
      <div className="aspect-square overflow-hidden rounded-none border border-gray-200 bg-gray-50">
        {currentImage ? (
          <img
            src={currentImage}
            alt={title}
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <svg
              className="h-24 w-24 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.75}
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
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`aspect-square overflow-hidden rounded-none border bg-gray-50 transition-colors ${
                selectedIndex === i
                  ? "border-[#0099ff] border-2"
                  : "border-gray-200 hover:border-[#0099ff]"
              }`}
            >
              <img
                src={img}
                alt={`${title} ${i + 1}`}
                className="h-full w-full object-contain p-1"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

type VariantSelectorProps = {
  variants: Product["variants"];
};

export function VariantSelector({ variants }: VariantSelectorProps) {
  const [selectedId, setSelectedId] = useState(variants[0]?.id ?? 0);

  if (variants.length <= 1) return null;

  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-[#121212]">
        Variant
      </label>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => {
          const isSelected = selectedId === variant.id;
          return (
            <button
              key={variant.id}
              onClick={() => setSelectedId(variant.id)}
              className={`rounded-none border px-4 py-2 text-sm font-medium transition-colors ${
                isSelected
                  ? "border-[#0099ff] bg-[#0099ff] text-white"
                  : "border-gray-200 bg-white text-[#4d4d4d] hover:border-[#0099ff] hover:text-[#0099ff]"
              }`}
            >
              {variant.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
