"use client";

import { useCart } from "./cart-context";

export function CartModal() {
  const { cartOpen, setCartOpen, cart, totalQuantity, loading } = useCart();

  if (!cartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 transition-opacity"
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Cart ({totalQuantity})
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            className="rounded-md p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close cart"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <svg
                className="h-8 w-8 animate-spin text-primary"
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
            </div>
          ) : !cart || cart.lines.edges.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <svg
                className="mb-4 h-16 w-16 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-5.98.286h11.356m-9.981 0h9.981m0 0a3 3 0 105.607 2.632l1.143-5.745A1.125 1.125 0 0018.537 10.2H7.1m0 0L5.106 5.272"
                />
              </svg>
              <p className="text-sm text-gray-500">Your cart is empty</p>
              <button
                onClick={() => setCartOpen(false)}
                className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {cart.lines.edges.map(({ node: item }) => (
                <li key={item.id} className="flex gap-4 py-4">
                  <div className="h-20 w-20 flex-shrink-0 rounded-md bg-gray-100">
                    {item.merchandise.product.featuredImage ? (
                      <img
                        src={item.merchandise.product.featuredImage.url}
                        alt={
                          item.merchandise.product.featuredImage.altText ??
                          item.merchandise.product.title
                        }
                        className="h-full w-full object-contain p-2"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-gray-300">
                        <svg
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.merchandise.product.title}
                    </h3>
                    {item.merchandise.title !== "Default Title" && (
                      <p className="mt-0.5 text-xs text-gray-500">
                        {item.merchandise.title}
                      </p>
                    )}
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: item.cost.totalAmount.currencyCode,
                          minimumFractionDigits: 0,
                        }).format(Number(item.cost.totalAmount.amount))}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart && cart.lines.edges.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-900">
                Subtotal
              </span>
              <span className="text-lg font-bold text-gray-900">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: cart.cost.subtotalAmount.currencyCode,
                  minimumFractionDigits: 0,
                }).format(Number(cart.cost.subtotalAmount.amount))}
              </span>
            </div>
            <a
              href={cart.checkoutUrl}
              className="block w-full rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              Proceed to Checkout
            </a>
            <p className="mt-2 text-center text-xs text-gray-500">
              Shipping and taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
