import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLead } from "@/lib/leads-store";
import { LeadStatusUpdater } from "./lead-status-updater";

export const metadata: Metadata = {
  title: "Lead Detail | Micron Admin",
  robots: "noindex",
};

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-3 border-b border-[#e5e5e5]">
      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d] mb-1">
        {label}
      </p>
      <p className="text-sm text-[#0a0a0a]">{value || "-"}</p>
    </div>
  );
}

export default async function LeadDetailPage({ params }: PageProps) {
  const { id } = await params;
  const lead = await getLead(id);

  if (!lead) {
    notFound();
  }

  const typeColors: Record<string, string> = {
    quote: "border-[#0099ff] text-[#0099ff]",
    dealer: "border-[#e10000] text-[#e10000]",
    contact: "border-[#0a0a0a] text-[#0a0a0a]",
    oem: "border-[#7c3aed] text-[#7c3aed]",
  };

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/leads"
          className="text-xs font-bold tracking-wider uppercase text-[#0099ff] hover:underline"
        >
          &larr; Back to Leads
        </Link>
      </div>

      <div className="max-w-2xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold tracking-[0.1em] text-[#0a0a0a]">
              {lead.name}
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <span
                className={`inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase border ${typeColors[lead.type] ?? ""}`}
              >
                {lead.type}
              </span>
              <span className="text-xs text-[#4d4d4d]">
                {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>

          <LeadStatusUpdater leadId={lead.id} currentStatus={lead.status} />
        </div>

        <div className="border-2 border-[#0a0a0a] p-6 mb-6">
          <DetailRow label="Email" value={lead.email} />
          <DetailRow label="Phone" value={lead.phone} />
          <DetailRow label="Company" value={lead.company} />
          <DetailRow label="Message" value={lead.message} />
          {lead.products.length > 0 && (
            <div className="py-3 border-b border-[#e5e5e5]">
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d] mb-2">
                Products of Interest
              </p>
              <div className="flex flex-wrap gap-2">
                {lead.products.map((p) => (
                  <span
                    key={p}
                    className="px-2 py-1 text-[10px] font-bold tracking-wider uppercase border border-[#e5e5e5] text-[#4d4d4d]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {Object.keys(lead.metadata).length > 0 && (
          <div className="border border-[#e5e5e5] p-4">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d] mb-3">
              Metadata
            </p>
            <div className="space-y-1">
              {Object.entries(lead.metadata).map(([key, value]) => (
                <p key={key} className="text-[11px] text-[#4d4d4d]">
                  <span className="font-bold uppercase tracking-wider">{key}:</span>{" "}
                  {String(value)}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
