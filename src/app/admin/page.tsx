import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { getLeads } from "@/lib/leads-store";
import type { Lead } from "@/types/lead";

export const metadata: Metadata = {
  title: "Dashboard | Micron Admin",
  robots: "noindex",
};

export const dynamic = "force-dynamic";

function StatCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string | number;
  href?: string;
}) {
  const inner = (
    <div className="border-2 border-[#0a0a0a] p-6 hover:border-[#0099ff] transition-colors">
      <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#4d4d4d] mb-2">
        {label}
      </p>
      <p className="text-3xl font-bold text-[#0a0a0a]">{value}</p>
    </div>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }
  return inner;
}

function StatusBadge({ status }: { status: Lead["status"] }) {
  const styles: Record<Lead["status"], string> = {
    new: "bg-[#0099ff] text-white",
    contacted: "bg-[#0a0a0a] text-white",
    converted: "bg-[#22c55e] text-white",
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function TypeBadge({ type }: { type: Lead["type"] }) {
  const styles: Record<Lead["type"], string> = {
    quote: "border-[#0099ff] text-[#0099ff]",
    dealer: "border-[#e10000] text-[#e10000]",
    contact: "border-[#0a0a0a] text-[#0a0a0a]",
    oem: "border-[#7c3aed] text-[#7c3aed]",
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase border ${styles[type]}`}
    >
      {type}
    </span>
  );
}

export default async function AdminDashboard() {
  const leads = await getLeads();
  const recentLeads = leads.slice(0, 5);

  const newCount = leads.filter((l) => l.status === "new").length;
  const contactedCount = leads.filter((l) => l.status === "contacted").length;
  const convertedCount = leads.filter((l) => l.status === "converted").length;

  return (
    <div>
      <h1 className="text-xl font-bold tracking-[0.15em] uppercase text-[#0a0a0a] mb-8">
        Dashboard
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard label="Total Products" value={products.length} href="/admin/products" />
        <StatCard label="Total Leads" value={leads.length} href="/admin/leads" />
        <StatCard label="New Leads" value={newCount} href="/admin/leads" />
        <StatCard label="Converted" value={convertedCount} />
      </div>

      {/* Status breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="border border-[#e5e5e5] p-4">
          <p className="text-xs font-bold tracking-wider uppercase text-[#4d4d4d] mb-1">New</p>
          <p className="text-2xl font-bold text-[#0099ff]">{newCount}</p>
        </div>
        <div className="border border-[#e5e5e5] p-4">
          <p className="text-xs font-bold tracking-wider uppercase text-[#4d4d4d] mb-1">Contacted</p>
          <p className="text-2xl font-bold text-[#0a0a0a]">{contactedCount}</p>
        </div>
        <div className="border border-[#e5e5e5] p-4">
          <p className="text-xs font-bold tracking-wider uppercase text-[#4d4d4d] mb-1">Converted</p>
          <p className="text-2xl font-bold text-[#22c55e]">{convertedCount}</p>
        </div>
      </div>

      {/* Recent Leads */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-[#0a0a0a]">
            Recent Leads
          </h2>
          <Link
            href="/admin/leads"
            className="text-xs font-bold tracking-wider uppercase text-[#0099ff] hover:underline"
          >
            View All
          </Link>
        </div>

        {recentLeads.length === 0 ? (
          <div className="border-2 border-dashed border-[#e5e5e5] p-8 text-center">
            <p className="text-sm text-[#4d4d4d]">No leads yet. Submissions will appear here.</p>
          </div>
        ) : (
          <div className="border border-[#e5e5e5]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e5e5] bg-[#fafafa]">
                  <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-[#e5e5e5] last:border-b-0 hover:bg-[#fafafa]"
                  >
                    <td className="px-4 py-3 text-xs text-[#4d4d4d]">
                      {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="font-bold text-[#0a0a0a] hover:text-[#0099ff]"
                      >
                        {lead.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <TypeBadge type={lead.type} />
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={lead.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
