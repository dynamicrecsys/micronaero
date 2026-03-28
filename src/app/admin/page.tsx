import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { getLeads } from "@/lib/leads-store";
import { formatTimeAgo } from "@/lib/format-time-ago";
import type { Lead, LeadType, LeadStatus } from "@/types/lead";

export const metadata: Metadata = {
  title: "Dashboard | Micron Admin",
  robots: "noindex",
};

export const dynamic = "force-dynamic";

const STATUS_COLORS: Record<LeadStatus, string> = {
  new: "#0099ff",
  contacted: "#f59e0b",
  converted: "#22c55e",
};

const TYPE_COLORS: Record<LeadType, string> = {
  quote: "#0099ff",
  dealer: "#8b5cf6",
  contact: "#6b7280",
  oem: "#e10000",
};

const TYPE_BG: Record<LeadType, string> = {
  quote: "bg-[#0099ff]/10 text-[#0099ff]",
  dealer: "bg-[#8b5cf6]/10 text-[#8b5cf6]",
  contact: "bg-[#6b7280]/10 text-[#6b7280]",
  oem: "bg-[#e10000]/10 text-[#e10000]",
};

function StatusDot({ status }: { status: LeadStatus }) {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full flex-shrink-0"
      style={{ backgroundColor: STATUS_COLORS[status] }}
    />
  );
}

export default async function AdminDashboard() {
  const leads = await getLeads();

  const newCount = leads.filter((l) => l.status === "new").length;
  const contactedCount = leads.filter((l) => l.status === "contacted").length;
  const convertedCount = leads.filter((l) => l.status === "converted").length;
  const total = leads.length;

  const pipeline = leads.reduce((sum, l) => {
    const val = l.metadata?.order_value;
    return sum + (typeof val === "number" ? val : 0);
  }, 0);

  const conversionRate = total > 0 ? ((convertedCount / total) * 100).toFixed(1) : "0";

  // Leads created in last 7 days
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const thisWeek = leads.filter((l) => new Date(l.createdAt).getTime() > weekAgo).length;

  const recentLeads = leads.slice(0, 5);

  // Type breakdown
  const typeCounts: Record<LeadType, number> = { quote: 0, dealer: 0, oem: 0, contact: 0 };
  for (const l of leads) {
    typeCounts[l.type]++;
  }
  const typeEntries = (Object.entries(typeCounts) as [LeadType, number][]).sort(
    (a, b) => b[1] - a[1]
  );
  const maxTypeCount = Math.max(...Object.values(typeCounts), 1);

  return (
    <div>
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-[#e5e5e5] p-5">
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-3">
            Total Leads
          </p>
          <p className="text-3xl font-bold text-[#0a0a0a]">{total}</p>
          <p className="text-[11px] text-[#999] mt-2">
            <span className="text-[#0099ff] font-semibold">+{thisWeek}</span> this week
          </p>
        </div>

        <div className="bg-white border border-[#e5e5e5] p-5">
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-3">
            New / Unactioned
          </p>
          <p className="text-3xl font-bold text-[#0099ff]">{newCount}</p>
          <p className="text-[11px] text-[#999] mt-2">Awaiting first contact</p>
        </div>

        <div className="bg-white border border-[#e5e5e5] p-5">
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-3">
            Revenue Pipeline
          </p>
          <p className="text-3xl font-bold text-[#0a0a0a]">
            {pipeline > 0
              ? `₹${pipeline.toLocaleString("en-IN")}`
              : "₹0"}
          </p>
          <p className="text-[11px] text-[#999] mt-2">From converted leads</p>
        </div>

        <div className="bg-white border border-[#e5e5e5] p-5">
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-3">
            Conversion Rate
          </p>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-bold text-[#0a0a0a]">{conversionRate}%</p>
            <span
              className={`text-[11px] font-semibold mb-1 ${
                Number(conversionRate) >= 10 ? "text-[#22c55e]" : "text-[#f59e0b]"
              }`}
            >
              {Number(conversionRate) >= 10 ? "Good" : "Low"}
            </span>
          </div>
          <p className="text-[11px] text-[#999] mt-2">{convertedCount} of {total} leads</p>
        </div>
      </div>

      {/* Lead Funnel */}
      <div className="bg-white border border-[#e5e5e5] p-5 mb-8">
        <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-5">
          Lead Funnel
        </p>
        <div className="space-y-3">
          {([
            { label: "New", count: newCount, color: "#0099ff" },
            { label: "Contacted", count: contactedCount, color: "#f59e0b" },
            { label: "Converted", count: convertedCount, color: "#22c55e" },
          ] as const).map((stage) => (
            <div key={stage.label} className="flex items-center gap-4">
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#666] w-20 flex-shrink-0">
                {stage.label}
              </span>
              <div className="flex-1 h-8 bg-[#f5f5f5] relative">
                <div
                  className="h-full flex items-center px-3 transition-all"
                  style={{
                    width: total > 0 ? `${Math.max((stage.count / total) * 100, 4)}%` : "4%",
                    backgroundColor: stage.color,
                  }}
                >
                  <span className="text-[11px] font-bold text-white">{stage.count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two-column: Recent Leads + Leads by Type */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {/* Recent Leads */}
        <div className="bg-white border border-[#e5e5e5]">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5]">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999]">
              Recent Leads
            </p>
            <Link
              href="/admin/leads"
              className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#0099ff] hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="divide-y divide-[#f0f0f0]">
            {recentLeads.length === 0 ? (
              <div className="px-5 py-8 text-center">
                <p className="text-sm text-[#999]">No leads yet</p>
              </div>
            ) : (
              recentLeads.map((lead) => (
                <Link
                  key={lead.id}
                  href={`/admin/leads/${lead.id}`}
                  className="flex items-center gap-3 px-5 py-3.5 hover:bg-[#fafafa] transition-colors group"
                >
                  <StatusDot status={lead.status} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-[13px] font-semibold text-[#0a0a0a] truncate">
                        {lead.name}
                      </p>
                      <span
                        className={`inline-block px-1.5 py-0.5 text-[9px] font-semibold tracking-wider uppercase ${TYPE_BG[lead.type]}`}
                      >
                        {lead.type}
                      </span>
                    </div>
                    {lead.company && (
                      <p className="text-[11px] text-[#999] truncate mt-0.5">{lead.company}</p>
                    )}
                  </div>
                  <span className="text-[10px] text-[#bbb] flex-shrink-0">
                    {formatTimeAgo(lead.createdAt)}
                  </span>
                  <svg
                    className="w-4 h-4 text-[#ccc] group-hover:text-[#0099ff] transition-colors flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Leads by Type */}
        <div className="bg-white border border-[#e5e5e5]">
          <div className="px-5 py-4 border-b border-[#e5e5e5]">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999]">
              Leads by Type
            </p>
          </div>
          <div className="p-5 space-y-4">
            {typeEntries.map(([type, count]) => (
              <div key={type}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: TYPE_COLORS[type] }}>
                    {type}
                  </span>
                  <span className="text-[13px] font-bold text-[#0a0a0a]">{count}</span>
                </div>
                <div className="h-2 bg-[#f5f5f5]">
                  <div
                    className="h-full transition-all"
                    style={{
                      width: `${(count / maxTypeCount) * 100}%`,
                      backgroundColor: TYPE_COLORS[type],
                      opacity: 0.7,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-[#e5e5e5] p-5">
        <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mb-4">
          Quick Actions
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <button
            disabled
            className="px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase border border-[#e5e5e5] text-[#ccc] cursor-not-allowed"
          >
            Export Leads CSV
          </button>
          <Link
            href="/admin/leads"
            className="px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase border border-[#e5e5e5] text-[#0a0a0a] hover:border-[#0099ff] hover:text-[#0099ff] transition-colors text-center"
          >
            View All Leads
          </Link>
          <Link
            href="/admin/products"
            className="px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase border border-[#e5e5e5] text-[#0a0a0a] hover:border-[#0099ff] hover:text-[#0099ff] transition-colors text-center"
          >
            View Products
          </Link>
          <Link
            href="/"
            target="_blank"
            className="px-4 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase border border-[#e5e5e5] text-[#0a0a0a] hover:border-[#0099ff] hover:text-[#0099ff] transition-colors text-center flex items-center justify-center gap-2"
          >
            Visit Site
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
