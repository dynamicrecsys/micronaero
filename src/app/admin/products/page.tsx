import type { Metadata } from "next";
import Image from "next/image";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products | Micron Admin",
  robots: "noindex",
};

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold tracking-[0.15em] uppercase text-[#0a0a0a]">
          Products
        </h1>
        <p className="text-xs font-bold tracking-wider uppercase text-[#4d4d4d]">
          {products.length} total
        </p>
      </div>

      <div className="border-2 border-[#0099ff]/20 bg-[#0099ff]/5 px-4 py-3 mb-6">
        <p className="text-xs font-bold tracking-wider uppercase text-[#0099ff]">
          Products are managed via Shopify. This is a read-only view.
        </p>
      </div>

      <div className="border border-[#e5e5e5] overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#e5e5e5] bg-[#fafafa]">
              <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d] w-16">
                Image
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
                Title
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
                Series
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
                Price
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
                Variants
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-[#e5e5e5] last:border-b-0 hover:bg-[#fafafa] transition-colors"
              >
                <td className="px-4 py-2">
                  {product.images[0] ? (
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-cover border border-[#e5e5e5]"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-[#fafafa] border border-[#e5e5e5] flex items-center justify-center">
                      <span className="text-[10px] text-[#4d4d4d]">N/A</span>
                    </div>
                  )}
                </td>
                <td className="px-4 py-3">
                  <p className="font-bold text-[#0a0a0a] text-xs leading-tight">
                    {product.title}
                  </p>
                  <p className="text-[10px] text-[#4d4d4d] tracking-wider mt-0.5">
                    {product.handle}
                  </p>
                </td>
                <td className="px-4 py-3">
                  {product.series ? (
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase border border-[#0a0a0a] text-[#0a0a0a]">
                      {product.series}
                    </span>
                  ) : (
                    <span className="text-xs text-[#4d4d4d]">-</span>
                  )}
                </td>
                <td className="px-4 py-3 text-xs font-bold text-[#0a0a0a] whitespace-nowrap">
                  {product.price}
                </td>
                <td className="px-4 py-3 text-xs text-[#4d4d4d] text-center">
                  {product.variants.length}
                </td>
                <td className="px-4 py-3 text-[10px] text-[#4d4d4d] tracking-wider uppercase">
                  {product.productType || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
