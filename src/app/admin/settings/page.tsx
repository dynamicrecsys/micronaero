import type { Metadata } from "next";
import { LogoutButton } from "./logout-button";

export const metadata: Metadata = {
  title: "Settings | Micron Admin",
  robots: "noindex",
};

export default function AdminSettingsPage() {
  return (
    <div>
      <h1 className="text-xl font-bold tracking-[0.15em] uppercase text-[#0a0a0a] mb-8">
        Settings
      </h1>

      <div className="max-w-lg">
        <div className="border border-[#e5e5e5] mb-6">
          <div className="px-4 py-3 border-b border-[#e5e5e5] bg-[#fafafa]">
            <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#0a0a0a]">
              Authentication
            </h2>
          </div>
          <div className="p-4">
            <p className="text-xs text-[#4d4d4d] tracking-wider mb-4">
              Password is managed via the ADMIN_PASSWORD environment variable.
              Change it in your hosting provider&apos;s settings.
            </p>
            <LogoutButton />
          </div>
        </div>

        <div className="border border-[#e5e5e5] mb-6">
          <div className="px-4 py-3 border-b border-[#e5e5e5] bg-[#fafafa]">
            <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#0a0a0a]">
              Data Storage
            </h2>
          </div>
          <div className="p-4">
            <p className="text-xs text-[#4d4d4d] tracking-wider mb-2">
              Leads are currently stored in a local JSON file (data/leads.json).
            </p>
            <p className="text-xs text-[#4d4d4d] tracking-wider">
              For production, migrate to Supabase or another persistent database.
            </p>
          </div>
        </div>

        <div className="border border-[#e5e5e5]">
          <div className="px-4 py-3 border-b border-[#e5e5e5] bg-[#fafafa]">
            <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#0a0a0a]">
              Environment
            </h2>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-[#4d4d4d] font-bold tracking-wider uppercase">
                Node Env
              </span>
              <span className="font-bold text-[#0a0a0a]">
                {process.env.NODE_ENV}
              </span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#4d4d4d] font-bold tracking-wider uppercase">
                Admin Password
              </span>
              <span className="font-bold text-[#0a0a0a]">
                {process.env.ADMIN_PASSWORD ? "Set" : "Default"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
