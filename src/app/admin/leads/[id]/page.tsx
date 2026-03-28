import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLead } from "@/lib/leads-store";
import { LeadStatusUpdater } from "./lead-status-updater";
import { formatTimeAgo } from "@/lib/format-time-ago";
import type { LeadType } from "@/types/lead";

export const metadata: Metadata = {
  title: "Lead Detail | Micron Admin",
  robots: "noindex",
};

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

const TYPE_BG: Record<LeadType, string> = {
  quote: "bg-[#0099ff]/10 text-[#0099ff]",
  dealer: "bg-[#8b5cf6]/10 text-[#8b5cf6]",
  contact: "bg-[#6b7280]/10 text-[#6b7280]",
  oem: "bg-[#e10000]/10 text-[#e10000]",
};

export default async function LeadDetailPage({ params }: PageProps) {
  const { id } = await params;
  const lead = await getLead(id);

  if (!lead) {
    notFound();
  }

  const phone = lead.phone?.replace(/\s/g, "");
  const waLink = phone ? `https://wa.me/${phone.replace("+", "")}` : null;

  return (
    <div>
      {/* Back link */}
      <Link
        href="/admin/leads"
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#999] hover:text-[#0099ff] transition-colors mb-6"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Back to Leads
      </Link>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        {/* Left: Lead Card */}
        <div className="space-y-4">
          {/* Header card */}
          <div className="bg-white border border-[#e5e5e5] p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-xl font-bold tracking-[0.05em] text-[#0a0a0a]">
                  {lead.name}
                </h1>
                {lead.company && (
                  <p className="text-[13px] text-[#666] mt-1">{lead.company}</p>
                )}
              </div>
              <span className={`px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase ${TYPE_BG[lead.type]}`}>
                {lead.type}
              </span>
            </div>
            <p className="text-[11px] text-[#999]">
              Submitted {formatTimeAgo(lead.createdAt)} &mdash;{" "}
              {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          {/* Contact section */}
          <div className="bg-white border border-[#e5e5e5] p-6">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-4">
              Contact Information
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#bbb] mb-1">Email</p>
                {lead.email ? (
                  <a href={`mailto:${lead.email}`} className="text-[13px] text-[#0099ff] hover:underline break-all">
                    {lead.email}
                  </a>
                ) : (
                  <p className="text-[13px] text-[#ccc]">-</p>
                )}
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#bbb] mb-1">Phone</p>
                {lead.phone ? (
                  <a href={`tel:${phone}`} className="text-[13px] text-[#0099ff] hover:underline">
                    {lead.phone}
                  </a>
                ) : (
                  <p className="text-[13px] text-[#ccc]">-</p>
                )}
              </div>
              {waLink && (
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#bbb] mb-1">WhatsApp</p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#22c55e] hover:underline"
                  >
                    Open Chat
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="bg-white border border-[#e5e5e5] p-6">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-3">
              Message
            </p>
            <div className="border-l-2 border-[#e5e5e5] pl-4 py-1">
              <p className="text-[13px] text-[#333] leading-relaxed whitespace-pre-wrap">
                {lead.message || "No message provided."}
              </p>
            </div>
          </div>

          {/* Products */}
          {lead.products.length > 0 && (
            <div className="bg-white border border-[#e5e5e5] p-6">
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-3">
                Products of Interest
              </p>
              <div className="flex flex-wrap gap-2">
                {lead.products.map((p) => (
                  <span
                    key={p}
                    className="px-2.5 py-1 text-[11px] font-medium bg-[#f5f5f5] text-[#333] border border-[#e5e5e5]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Metadata */}
          {Object.keys(lead.metadata).length > 0 && (
            <div className="bg-white border border-[#e5e5e5] p-6">
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-3">
                Metadata
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(lead.metadata).map(([key, value]) => (
                  <div key={key} className="bg-[#fafafa] px-3 py-2">
                    <p className="text-[9px] font-semibold tracking-[0.1em] uppercase text-[#bbb]">{key}</p>
                    <p className="text-[13px] font-medium text-[#0a0a0a] mt-0.5">{String(value)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Actions panel */}
        <div className="space-y-4">
          {/* Status */}
          <div className="bg-white border border-[#e5e5e5] p-5">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-4">
              Status
            </p>
            <LeadStatusUpdater leadId={lead.id} currentStatus={lead.status} />
          </div>

          {/* Quick actions */}
          <div className="bg-white border border-[#e5e5e5] p-5">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-4">
              Quick Actions
            </p>
            <div className="space-y-2">
              {lead.email && (
                <a
                  href={`mailto:${lead.email}`}
                  className="flex items-center gap-2.5 w-full px-3 py-2.5 text-[11px] font-semibold tracking-[0.1em] uppercase border border-[#e5e5e5] text-[#0a0a0a] hover:border-[#0099ff] hover:text-[#0099ff] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Send Email
                </a>
              )}
              {lead.phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2.5 w-full px-3 py-2.5 text-[11px] font-semibold tracking-[0.1em] uppercase border border-[#e5e5e5] text-[#0a0a0a] hover:border-[#0099ff] hover:text-[#0099ff] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call
                </a>
              )}
              {waLink && (
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 w-full px-3 py-2.5 text-[11px] font-semibold tracking-[0.1em] uppercase border border-[#e5e5e5] text-[#22c55e] hover:border-[#22c55e] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.11-1.14l-.29-.174-3.01.79.8-2.93-.19-.3A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                  </svg>
                  WhatsApp
                </a>
              )}
            </div>
          </div>

          {/* Notes placeholder */}
          <div className="bg-white border border-[#e5e5e5] p-5">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-3">
              Notes
            </p>
            <textarea
              placeholder="Add a note..."
              className="w-full h-24 px-3 py-2.5 text-[12px] text-[#333] bg-[#fafafa] border border-[#e5e5e5] resize-none focus:outline-none focus:border-[#0099ff] placeholder:text-[#bbb] transition-colors"
            />
            <button className="mt-2 px-3 py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase bg-[#0a0a0a] text-white hover:bg-[#0099ff] transition-colors">
              Save Note
            </button>
          </div>

          {/* Timeline placeholder */}
          <div className="bg-white border border-[#e5e5e5] p-5">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-4">
              Timeline
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#0099ff] flex-shrink-0" />
                <div>
                  <p className="text-[11px] font-medium text-[#333]">
                    Lead created as <span className="font-semibold">{lead.type}</span>
                  </p>
                  <p className="text-[10px] text-[#999] mt-0.5">
                    {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
              {lead.status !== "new" && (
                <div className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 mt-1.5 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor:
                        lead.status === "contacted" ? "#f59e0b" : "#22c55e",
                    }}
                  />
                  <div>
                    <p className="text-[11px] font-medium text-[#333]">
                      Status changed to <span className="font-semibold">{lead.status}</span>
                    </p>
                    <p className="text-[10px] text-[#999] mt-0.5">Updated manually</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
