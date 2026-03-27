import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  collections,
  getCollectionByHandle,
  getProductsByCollection,
} from "@/data/products";
import { Breadcrumb } from "@/components/product/breadcrumb";
import { ProductCard } from "@/components/product/product-card";

type Props = {
  params: Promise<{ handle: string }>;
};

export function generateStaticParams() {
  return collections.map((c) => ({ handle: c.handle }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);

  if (!collection) {
    return { title: "Collection Not Found" };
  }

  return {
    title: `${collection.title} | Micron Aerosols`,
    description:
      collection.description ||
      `Browse the ${collection.title} collection of industrial aerosol products by Micron Aerosols.`,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);

  if (!collection) {
    notFound();
  }

  const collectionProducts = getProductsByCollection(handle);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: collection.title, href: `/collections/${handle}` },
  ];

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-12 lg:px-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Collection Header */}
      <div className="mt-4 mb-10">
        <h1 className="text-3xl font-bold uppercase tracking-wider text-[#121212] md:text-4xl">
          {collection.title}
        </h1>
        {collection.description && (
          <p className="mt-4 max-w-2xl text-base text-[#4d4d4d]">
            {collection.description}
          </p>
        )}
      </div>

      {/* Product Grid */}
      {collectionProducts.length > 0 ? (
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {collectionProducts.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-gray-300 p-12 text-center">
          <p className="text-sm text-[#4d4d4d]">
            Products in this collection will be available soon.
          </p>
          <Link
            href="/products"
            className="mt-4 inline-flex text-sm font-bold uppercase tracking-wider text-[#0099ff] hover:underline"
          >
            Browse all products
          </Link>
        </div>
      )}

      {/* Bulk Quote CTA */}
      <div className="mt-16 border border-gray-200 bg-gray-50 p-8 text-center sm:p-12">
        <h2 className="text-xl font-bold uppercase tracking-wider text-[#121212] sm:text-2xl">
          Request Quote for All {collection.title} Products
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[#4d4d4d]">
          Get competitive bulk pricing for the entire {collection.title} range.
          Our team will prepare a custom quotation within 24 hours.
        </p>
        <Link
          href={`/get-quote?collection=${encodeURIComponent(handle)}`}
          className="mt-6 inline-flex items-center gap-2 rounded-none bg-[#0099ff] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#0088e6] transition-colors"
        >
          Request Collection Quote
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
