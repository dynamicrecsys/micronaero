"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Lead, LeadType, LeadStatus } from "@/types/lead";
import { formatTimeAgo } from "@/lib/format-time-ago";

const STATUS_COLORS: Record<LeadStatus, string> = {
  new: "#0099ff",
  contacted: "#f59e0b",
  converted: "#22c55e",
};

const STATUS_BG: Record<LeadStatus, string> = {
  new: "bg-[#0099ff]/10 text-[#0099ff]",
  contacted: "bg-[#f59e0b]/10 text-[#f59e0b]",
  converted: "bg-[#22c55e]/10 text-[#22c55e]",
};

const TYPE_BG: Record<LeadType, string> = {
  quote: "bg-[#0099ff] text-white",
  dealer: "bg-[#8b5cf6] text-white",
  contact: "bg-[#6b7280] text-white",
  oem: "bg-[#e10000] text-white",
};

const TYPES: LeadType[] = ["quote", "dealer", "oem", "contact"];
const STATUSES: LeadStatus[] = ["new", "contacted", "converted"];

export function LeadsTable({ leads }: { leads: Lead[] }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        !search ||
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.company.toLowerCase().includes(search.toLowerCase());

      const matchesType = typeFilter === "all" || lead.type === typeFilter;
      const matchesStatus = statusFilter === "all" || lead.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [leads, search, typeFilter, statusFilter]);

  return (
    <div>
      {/* Search */}
      <div className="mb-4">
        <div className="relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bbb]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, or company..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e5e5e5] text-[13px] tracking-wide text-[#0a0a0a] placeholder:text-[#bbb] focus:outline-none focus:border-[#0099ff] transition-colors"
          />
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-4 mb-5">
        {/* Type filters */}
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999] mr-1">Type</span>
          <button
            onClick={() => setTypeFilter("all")}
            className={`px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase transition-colors ${
              typeFilter === "all"
                ? "bg-[#0a0a0a] text-white"
                : "bg-white border border-[#e5e5e5] text-[#666] hover:border-[#999]"
            }`}
          >
            All
          </button>
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(typeFilter === t ? "all" : t)}
              className={`px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase transition-colors ${
                typeFilter === t
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white border border-[#e5e5e5] text-[#666] hover:border-[#999]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-[#e5e5e5]" />

        {/* Status filters */}
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999] mr-1">Status</span>
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase transition-colors ${
              statusFilter === "all"
                ? "bg-[#0a0a0a] text-white"
                : "bg-white border border-[#e5e5e5] text-[#666] hover:border-[#999]"
            }`}
          >
            All
          </button>
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(statusFilter === s ? "all" : s)}
              className={`px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase transition-colors ${
                statusFilter === s
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white border border-[#e5e5e5] text-[#666] hover:border-[#999]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#999] mb-3">
        {filtered.length} of {leads.length} leads
      </p>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-[#e5e5e5] px-8 py-16 text-center">
          <svg
            className="w-10 h-10 text-[#ddd] mx-auto mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
          </svg>
          <p className="text-[13px] font-semibold text-[#999] mb-1">
            {leads.length === 0 ? "No leads yet" : "No leads match your filters"}
          </p>
          <p className="text-[11px] text-[#bbb]">
            {leads.length === 0
              ? "Form submissions will appear here."
              : "Try adjusting your search or filter criteria."}
          </p>
        </div>
      ) : (
        <div className="bg-white border border-[#e5e5e5] overflow-x-auto">
          {/* Header */}
          <div className="hidden md:grid grid-cols-[auto_1fr_80px_180px_100px_80px_24px] gap-4 px-5 py-3 border-b border-[#e5e5e5] bg-[#fafafa]">
            <span className="w-2" />
            <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999]">Name</span>
            <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999]">Type</span>
            <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999]">Contact</span>
            <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999]">Time</span>
            <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-[#999]">Status</span>
            <span />
          </div>

          {/* Rows */}
          {filtered.map((lead) => (
            <Link
              key={lead.id}
              href={`/admin/leads/${lead.id}`}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr_80px_180px_100px_80px_24px] gap-x-4 gap-y-1 px-5 py-3.5 border-b border-[#f0f0f0] last:border-b-0 hover:bg-[#fafafa] transition-colors group items-center"
            >
              {/* Status dot */}
              <span
                className="w-2 h-2 rounded-full flex-shrink-0 hidden md:block"
                style={{ backgroundColor: STATUS_COLORS[lead.status] }}
              />

              {/* Name + company */}
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-[#0a0a0a] truncate group-hover:text-[#0099ff] transition-colors">
                  {lead.name}
                </p>
                {lead.company && (
                  <p className="text-[11px] text-[#999] truncate">{lead.company}</p>
                )}
              </div>

              {/* Type badge */}
              <div>
                <span className={`inline-block px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase ${TYPE_BG[lead.type]}`}>
                  {lead.type}
                </span>
              </div>

              {/* Contact */}
              <div className="min-w-0">
                <p className="text-[11px] text-[#666] truncate">{lead.email || "-"}</p>
                <p className="text-[11px] text-[#999] truncate">{lead.phone || "-"}</p>
              </div>

              {/* Time */}
              <span className="text-[11px] text-[#999]">
                {formatTimeAgo(lead.createdAt)}
              </span>

              {/* Status badge */}
              <div>
                <span className={`inline-block px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase ${STATUS_BG[lead.status]}`}>
                  {lead.status}
                </span>
              </div>

              {/* Arrow */}
              <svg
                className="w-4 h-4 text-[#ccc] group-hover:text-[#0099ff] transition-colors hidden md:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
