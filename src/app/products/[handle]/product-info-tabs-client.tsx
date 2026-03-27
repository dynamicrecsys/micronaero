"use client";

import { ProductTabs } from "@/components/product/product-tabs";

type ProductInfoTabsClientProps = {
  descriptionHtml: string;
};

export function ProductInfoTabsClient({
  descriptionHtml,
}: ProductInfoTabsClientProps) {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div
          className="prose prose-sm max-w-none text-[#4d4d4d] prose-headings:font-bold prose-headings:text-[#121212] prose-a:text-[#0099ff]"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      ),
    },
    {
      id: "how-to-use",
      label: "How to Use",
      content: (
        <div className="space-y-4">
          <div className="rounded-none bg-gray-50 p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#121212]">
              Application Instructions
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-[#4d4d4d]">
              <li>Shake the can well before use (at least 30 seconds).</li>
              <li>Ensure the surface is clean and free of contaminants.</li>
              <li>Hold the can 15-25cm from the surface.</li>
              <li>Apply in short, even bursts for uniform coverage.</li>
              <li>Allow adequate drying/curing time as specified in the TDS.</li>
            </ol>
          </div>
          <div className="rounded-none border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-medium text-amber-800">
              Safety Notice: Always use in well-ventilated areas. Refer to the
              Safety Data Sheet for complete handling instructions.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "faq",
      label: "FAQ",
      content: (
        <div className="space-y-4">
          <div className="rounded-none border border-gray-200 p-4">
            <h4 className="text-sm font-bold text-[#121212]">
              What is the shelf life?
            </h4>
            <p className="mt-2 text-sm text-[#4d4d4d]">
              Most Micron Aerosols products have a shelf life of 24 months from
              the date of manufacture when stored in recommended conditions.
            </p>
          </div>
          <div className="rounded-none border border-gray-200 p-4">
            <h4 className="text-sm font-bold text-[#121212]">
              Is bulk pricing available?
            </h4>
            <p className="mt-2 text-sm text-[#4d4d4d]">
              Yes, we offer competitive bulk pricing for orders of 50+ units.
              Contact us for a custom quote.
            </p>
          </div>
          <div className="rounded-none border border-gray-200 p-4">
            <h4 className="text-sm font-bold text-[#121212]">
              Do you offer custom formulations?
            </h4>
            <p className="mt-2 text-sm text-[#4d4d4d]">
              Yes, our R&amp;D team can develop custom aerosol formulations for
              your specific industrial applications. Contact our OEM team for
              details.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return <ProductTabs tabs={tabs} />;
}
