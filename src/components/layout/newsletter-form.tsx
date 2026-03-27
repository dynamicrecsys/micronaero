"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  }

  if (subscribed) {
    return (
      <p className="text-sm font-bold uppercase tracking-wider text-[#0099ff]">
        Subscribed! We&apos;ll keep you updated.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-0">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none focus:ring-1 focus:ring-[#0099ff] tracking-wide"
      />
      <button
        type="submit"
        className="bg-[#0099ff] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#1773b0] transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
