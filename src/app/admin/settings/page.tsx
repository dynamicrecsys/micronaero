import type { Metadata } from "next";
import { LogoutButton } from "./logout-button";

export const metadata: Metadata = {
  title: "Settings | Micron Admin",
  robots: "noindex",
};

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-lg font-bold tracking-[0.1em] uppercase text-[#0a0a0a]">
          Settings
        </h1>
        <p className="text-[11px] text-[#999] mt-1">
          Application configuration and preferences
        </p>
      </div>

      <div className="max-w-lg space-y-4">
        <div className="bg-white border border-[#e5e5e5]">
          <div className="px-5 py-3.5 border-b border-[#e5e5e5]">
            <h2 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999]">
              Authentication
            </h2>
          </div>
          <div className="p-5">
            <p className="text-[12px] text-[#666] leading-relaxed mb-4">
              Password is managed via the <code className="text-[11px] bg-[#f5f5f5] px-1.5 py-0.5 text-[#333] font-mono">ADMIN_PASSWORD</code> environment variable.
              Change it in your hosting provider&apos;s settings.
            </p>
            <LogoutButton />
          </div>
        </div>

        <div className="bg-white border border-[#e5e5e5]">
          <div className="px-5 py-3.5 border-b border-[#e5e5e5]">
            <h2 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999]">
              Data Storage
            </h2>
          </div>
          <div className="p-5 space-y-2">
            <p className="text-[12px] text-[#666] leading-relaxed">
              Leads are stored in a local JSON file (<code className="text-[11px] bg-[#f5f5f5] px-1.5 py-0.5 text-[#333] font-mono">data/leads.json</code>).
            </p>
            <p className="text-[12px] text-[#666] leading-relaxed">
              For production, migrate to Supabase or another persistent database.
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#e5e5e5]">
          <div className="px-5 py-3.5 border-b border-[#e5e5e5]">
            <h2 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999]">
              Environment
            </h2>
          </div>
          <div className="p-5 space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-[#f0f0f0]">
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#999]">
                Node Env
              </span>
              <span className="text-[12px] font-semibold text-[#0a0a0a] bg-[#f5f5f5] px-2 py-0.5">
                {process.env.NODE_ENV}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#999]">
                Admin Password
              </span>
              <span className={`text-[12px] font-semibold px-2 py-0.5 ${
                process.env.ADMIN_PASSWORD
                  ? "text-[#22c55e] bg-[#22c55e]/10"
                  : "text-[#f59e0b] bg-[#f59e0b]/10"
              }`}>
                {process.env.ADMIN_PASSWORD ? "Set" : "Default"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
