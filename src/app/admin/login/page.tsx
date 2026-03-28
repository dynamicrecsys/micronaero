"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = (await res.json()) as { success: boolean; error?: string };

      if (data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.error ?? "Invalid password.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo section */}
        <div className="text-center mb-8">
          <h1 className="text-[18px] font-bold tracking-[0.3em] uppercase text-white">
            MICRON
          </h1>
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mt-1.5">
            Admin Panel
          </p>
        </div>

        {/* Login card */}
        <div className="bg-white p-8">
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-6">
            Enter password to continue
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-[#bbb] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                autoFocus
                className="w-full px-4 py-3 border border-[#e5e5e5] text-[13px] tracking-wide bg-white text-[#0a0a0a] placeholder:text-[#ccc] focus:outline-none focus:border-[#0099ff] transition-colors"
              />
            </div>

            {error && (
              <div className="bg-[#e10000]/5 border border-[#e10000]/20 px-3 py-2.5 mb-5">
                <p className="text-[11px] font-semibold tracking-wider text-[#e10000]">
                  {error}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 bg-[#0a0a0a] text-white text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0099ff] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verifying
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-[9px] tracking-[0.15em] uppercase text-white/20 mt-6">
          Micron Aero Systems Pvt. Ltd.
        </p>
      </div>
    </div>
  );
}
