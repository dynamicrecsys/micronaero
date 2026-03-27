"use client";

import { useState } from "react";

type AddToCartButtonProps = {
  variantId: string;
  availableForSale: boolean;
  className?: string;
};

export function AddToCartButton({
  availableForSale,
  className = "",
}: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  async function handleAddToCart() {
    if (!availableForSale || loading) return;

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    setLoading(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  if (!availableForSale) {
    return (
      <button
        disabled
        className={`inline-flex items-center justify-center bg-gray-300 px-6 py-3 text-sm font-semibold text-gray-500 cursor-not-allowed ${className}`}
      >
        Out of Stock
      </button>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className={`inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors disabled:opacity-60 ${className}`}
    >
      {loading ? (
        <>
          <svg
            className="h-4 w-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Adding...
        </>
      ) : added ? (
        <>
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Added!
        </>
      ) : (
        <>
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-5.98.286h11.356m-9.981 0h9.981m0 0a3 3 0 105.607 2.632l1.143-5.745A1.125 1.125 0 0018.537 10.2H7.1m0 0L5.106 5.272"
            />
          </svg>
          Add to Cart
        </>
      )}
    </button>
  );
}
