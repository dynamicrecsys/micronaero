import type { Metadata } from "next";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { QuoteForm } from "@/components/forms/quote-form";
import { seriesDescriptions, companyInfo } from "@/data/content";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a quote for Micron Aerosols industrial products. Bulk pricing, OEM formulations, and custom solutions available across 6 product series.",
};

const reasons = [
  "35+ years of aerosol manufacturing expertise since 1989",
  "ISO 9001:2015 & ISO 45001:2018 certified facility",
  "In-house R&D lab for custom formulations",
  "Competitive bulk pricing with flexible MOQs",
  "Pan-India shipping from Sangamner, Maharashtra",
  "Dedicated account manager for every B2B customer",
];

export default function GetQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg px-4 py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1600px] text-center">
          <h1 className="text-3xl font-bold uppercase tracking-wider md:text-4xl lg:text-5xl">
            REQUEST A BULK QUOTE
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Get competitive pricing for bulk orders, OEM manufacturing, or custom formulations
            across our complete product range.
          </p>
        </div>
      </section>

      {/* Product Series Quick Reference */}
      <section className="border-b border-border bg-[#fafafa] px-4 py-12">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {Object.entries(seriesDescriptions).map(([code, info]) => (
              <div key={code} className="border border-border bg-white p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{code}</span>
                <p className="mt-1 text-xs font-bold text-heading">{info.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold uppercase tracking-wider">TELL US YOUR REQUIREMENTS</h2>
            <p className="mt-2 text-sm text-[#4d4d4d]">
              Fill out the form and our team will respond with competitive pricing within 24 hours.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>

          {/* Side Panel */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Why Choose Micron */}
              <div className="border border-border bg-[#fafafa] p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-heading">
                  WHY CHOOSE {companyInfo.name.toUpperCase()}?
                </h3>
                <ul className="mt-4 space-y-3">
                  {reasons.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-[#4d4d4d]">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp Quick Contact */}
              {WHATSAPP_NUMBER && (
                <div className="border border-border bg-dark-bg p-6 text-white">
                  <h3 className="text-sm font-bold uppercase tracking-wider">NEED A QUICK ANSWER?</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Chat with our sales team directly on WhatsApp for instant responses.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like a bulk quote for Micron Aerosols products`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-whatsapp px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    CHAT ON WHATSAPP
                  </a>
                </div>
              )}

              {/* Certifications */}
              <div className="border border-border p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-heading">
                  CERTIFICATIONS
                </h3>
                <div className="mt-4 space-y-3">
                  {companyInfo.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                      <span className="text-sm font-bold text-heading">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
