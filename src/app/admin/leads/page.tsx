import type { Metadata } from "next";
import { getLeads } from "@/lib/leads-store";
import { LeadsTable } from "./leads-table";

export const metadata: Metadata = {
  title: "Leads | Micron Admin",
  robots: "noindex",
};

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const leads = await getLeads();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-bold tracking-[0.1em] uppercase text-[#0a0a0a]">
            Leads
          </h1>
          <p className="text-[11px] text-[#999] mt-1">
            Manage and track all incoming inquiries
          </p>
        </div>
        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#999] bg-white border border-[#e5e5e5] px-3 py-1.5">
          {leads.length} total
        </span>
      </div>

      <LeadsTable leads={leads} />
    </div>
  );
}
