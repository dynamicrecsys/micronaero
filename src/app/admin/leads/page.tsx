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
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold tracking-[0.15em] uppercase text-[#0a0a0a]">
          Leads
        </h1>
        <p className="text-xs font-bold tracking-wider uppercase text-[#4d4d4d]">
          {leads.length} total
        </p>
      </div>

      <LeadsTable leads={leads} />
    </div>
  );
}
