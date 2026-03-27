"use client";

import { useState, type FormEvent } from "react";

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Product Inquiry",
  "Technical Support",
  "Dealer Inquiry",
  "OEM / Bulk Order",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);

    const payload = {
      lead_type: "contact" as const,
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      subject: fd.get("subject") as string,
      message: fd.get("message") as string,
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
        <h3 className="mt-4 text-lg font-semibold text-[#121212]">Message Sent</h3>
        <p className="mt-2 text-sm text-[#4d4d4d]">Thank you for reaching out. We will respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-900">Name *</label>
        <input type="text" id="contact-name" name="name" required className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-900">Email *</label>
          <input type="email" id="contact-email" name="email" required className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-900">Phone</label>
          <input type="tel" id="contact-phone" name="phone" className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-900">Subject</label>
        <select id="contact-subject" name="subject" className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary">
          <option value="">Select a subject</option>
          {SUBJECT_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-900">Message *</label>
        <textarea id="contact-message" name="message" required rows={5} className="mt-1 block w-full border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
