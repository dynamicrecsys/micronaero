"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Lead } from "@/types/lead";

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

export function LeadsTable({ leads }: { leads: Lead[] }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        !search ||
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.company.toLowerCase().includes(search.toLowerCase());

      const matchesType = typeFilter === "all" || lead.type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [leads, search, typeFilter]);

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, company..."
          className="flex-1 px-4 py-2 border-2 border-[#e5e5e5] text-sm tracking-wider bg-white text-[#0a0a0a] placeholder:text-[#4d4d4d]/40 focus:outline-none focus:border-[#0099ff] transition-colors"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 border-2 border-[#e5e5e5] text-sm font-bold tracking-wider uppercase bg-white text-[#0a0a0a] focus:outline-none focus:border-[#0099ff] transition-colors"
        >
          <option value="all">All Types</option>
          <option value="quote">Quote</option>
          <option value="dealer">Dealer</option>
          <option value="contact">Contact</option>
          <option value="oem">OEM</option>
        </select>
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="border-2 border-dashed border-[#e5e5e5] p-8 text-center">
          <p className="text-sm text-[#4d4d4d]">
            {leads.length === 0
              ? "No leads yet. Form submissions will appear here."
              : "No leads match your filters."}
          </p>
        </div>
      ) : (
        <div className="border border-[#e5e5e5] overflow-x-auto">
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
                  Email
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
                  Phone
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-[#e5e5e5] last:border-b-0 hover:bg-[#fafafa] transition-colors"
                >
                  <td className="px-4 py-3 text-xs text-[#4d4d4d] whitespace-nowrap">
                    {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/leads/${lead.id}`}
                      className="font-bold text-[#0a0a0a] hover:text-[#0099ff] transition-colors"
                    >
                      {lead.name}
                    </Link>
                    {lead.company && (
                      <p className="text-[10px] text-[#4d4d4d] tracking-wider mt-0.5">
                        {lead.company}
                      </p>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <TypeBadge type={lead.type} />
                  </td>
                  <td className="px-4 py-3 text-xs text-[#4d4d4d]">
                    {lead.email || "-"}
                  </td>
                  <td className="px-4 py-3 text-xs text-[#4d4d4d] whitespace-nowrap">
                    {lead.phone || "-"}
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

      <p className="mt-4 text-xs text-[#4d4d4d] tracking-wider">
        Showing {filtered.length} of {leads.length} leads
      </p>
    </div>
  );
}
