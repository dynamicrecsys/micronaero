"use client";

import { useState } from "react";
import Link from "next/link";
import { collections } from "./navbar";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[#4d4d4d] hover:text-[#0099ff] transition-colors"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 top-[49px] z-40 bg-[#0a0a0a] overflow-y-auto">
          <div className="flex flex-col p-6 space-y-1">
            {/* Products accordion */}
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center justify-between px-0 py-4 text-base font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              Products
              <svg
                className={`h-4 w-4 text-gray-400 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {productsOpen && (
              <div className="space-y-0 border-b border-white/10">
                <Link
                  href="/products"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-[#0099ff] transition-colors"
                >
                  All Products
                </Link>
                {collections.map((c) => (
                  <Link
                    key={c.handle}
                    href={`/collections/${c.handle}`}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm font-bold tracking-wide text-gray-400 hover:text-[#0099ff] transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/solutions"
              onClick={() => setOpen(false)}
              className="px-0 py-4 text-base font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              Solutions
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="px-0 py-4 text-base font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-0 py-4 text-base font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              Contact
            </Link>

            <div className="pt-6 space-y-3">
              <Link
                href="/become-a-dealer"
                onClick={() => setOpen(false)}
                className="block border border-[#0099ff] px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-[#0099ff] hover:bg-[#0099ff] hover:text-white transition-colors"
              >
                Become a Dealer
              </Link>
              <Link
                href="/get-quote"
                onClick={() => setOpen(false)}
                className="block bg-[#0099ff] px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white hover:bg-[#1773b0] transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <a
              href="tel:+919822036498"
              className="flex items-center gap-2 px-0 pt-6 text-sm font-bold tracking-wide text-gray-400 hover:text-[#0099ff]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +91 98220 36498
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
