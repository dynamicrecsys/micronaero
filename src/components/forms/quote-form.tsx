"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_NUMBER, SERIES_MAP } from "@/lib/constants";

const VOLUME_OPTIONS = [
  "10-50 units/month",
  "50-200 units/month",
  "200-500 units/month",
  "500+ units/month",
];

const HEAR_OPTIONS = [
  "Google Search",
  "Trade Fair / Exhibition",
  "Referral",
  "LinkedIn",
  "IndiaMart / TradeIndia",
  "Other",
];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const selectedProducts = Array.from(fd.getAll("products")) as string[];

    const payload = {
      lead_type: "quote" as const,
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
      company: fd.get("company") as string,
      city: fd.get("city") as string,
      volume: fd.get("volume") as string,
      products: selectedProducts,
      message: fd.get("message") as string,
      heard_from: fd.get("heard_from") as string,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[#0099ff]/20 bg-[#0099ff]/5 p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-[#0099ff]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-[#121212]">Quote Request Received</h3>
        <p className="mt-2 text-sm text-[#4d4d4d]">We will get back to you within 24 hours with competitive pricing.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Product Interest */}
      <fieldset>
        <legend className="text-sm font-semibold text-gray-900">Product Interest</legend>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {Object.entries(SERIES_MAP).map(([code, info]) => (
            <label key={code} className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" name="products" value={code} className="border-gray-300 text-primary focus:ring-primary" />
              {code} &mdash; {info.name}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Volume */}
      <div>
        <label htmlFor="volume" className="block text-sm font-semibold text-gray-900">
          Estimated Monthly Volume
        </label>
        <select id="volume" name="volume" className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary">
          <option value="">Select volume range</option>
          {VOLUME_OPTIONS.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      {/* Company & Contact */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-900">Company Name</label>
          <input type="text" id="company" name="company" className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900">Contact Person *</label>
          <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
        </div>
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-semibold text-gray-900">City / Region</label>
        <input type="text" id="city" name="city" className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900">Requirements / Message</label>
        <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
      </div>

      <div>
        <label htmlFor="heard_from" className="block text-sm font-semibold text-gray-900">How did you hear about us?</label>
        <select id="heard_from" name="heard_from" className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary">
          <option value="">Select an option</option>
          {HEAR_OPTIONS.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Submitting..." : "Request Quote"}
        </button>
        {WHATSAPP_NUMBER && (
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like a bulk quote for Micron Aerosols products`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-whatsapp hover:underline"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Or chat on WhatsApp
          </a>
        )}
      </div>
    </form>
  );
}
