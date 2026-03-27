"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const VERTICALS = [
  "Automotive & Manufacturing",
  "Electronics & PCB",
  "Welding & Fabrication",
  "Food Processing",
  "Moulds & Die Casting",
  "General MRO",
];

export function DealerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const verticals = Array.from(fd.getAll("verticals")) as string[];

    const payload = {
      lead_type: "dealer" as const,
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
      city: fd.get("city") as string,
      verticals,
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
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-lg font-semibold text-green-800">Application Submitted</h3>
        <p className="mt-2 text-sm text-green-700">We will review your application and get back to you within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="dealer-name" className="block text-sm font-semibold text-gray-900">Full Name *</label>
          <input type="text" id="dealer-name" name="name" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="dealer-phone" className="block text-sm font-semibold text-gray-900">Phone Number *</label>
          <input type="tel" id="dealer-phone" name="phone" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="dealer-email" className="block text-sm font-semibold text-gray-900">Email</label>
          <input type="email" id="dealer-email" name="email" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="dealer-city" className="block text-sm font-semibold text-gray-900">City / Region *</label>
          <input type="text" id="dealer-city" name="city" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-gray-900">Which verticals interest you?</legend>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {VERTICALS.map((v) => (
            <label key={v} className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" name="verticals" value={v} className="rounded border-gray-300 text-primary focus:ring-primary" />
              {v}
            </label>
          ))}
        </div>
      </fieldset>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-accent px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover transition-colors disabled:opacity-50 sm:w-auto"
      >
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>

      <div className="border-t border-gray-200 pt-4">
        {WHATSAPP_NUMBER ? (
          <p className="text-sm text-gray-600">
            Prefer to chat?{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in becoming a Micron Aerosols dealer`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-whatsapp hover:underline"
            >
              Message us on WhatsApp
            </a>
          </p>
        ) : (
          <p className="text-sm text-gray-600">Prefer to chat? Reach out to us directly.</p>
        )}
        <p className="mt-2 text-xs text-gray-500">We will review your application within 48 hours.</p>
      </div>
    </form>
  );
}
