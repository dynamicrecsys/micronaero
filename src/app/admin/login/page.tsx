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
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="w-full max-w-sm">
        <div className="bg-white p-8">
          <h1 className="text-lg font-bold tracking-[0.2em] uppercase text-[#0a0a0a] mb-1">
            MICRON ADMIN
          </h1>
          <p className="text-xs text-[#4d4d4d] tracking-wider uppercase mb-8">
            Enter password to continue
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus
                className="w-full px-4 py-3 border-2 border-[#0a0a0a] text-sm font-bold tracking-wider bg-white text-[#0a0a0a] placeholder:text-[#4d4d4d]/50 focus:outline-none focus:border-[#0099ff] transition-colors"
              />
            </div>

            {error && (
              <p className="text-xs font-bold tracking-wider uppercase text-[#e10000] mb-4">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 bg-[#0a0a0a] text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#0099ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Verifying..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
