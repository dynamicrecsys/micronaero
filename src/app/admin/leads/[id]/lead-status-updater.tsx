"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { LeadStatus } from "@/types/lead";

const STATUSES: { value: LeadStatus; label: string; color: string; activeBg: string }[] = [
  { value: "new", label: "New", color: "#0099ff", activeBg: "bg-[#0099ff]" },
  { value: "contacted", label: "Contacted", color: "#f59e0b", activeBg: "bg-[#f59e0b]" },
  { value: "converted", label: "Converted", color: "#22c55e", activeBg: "bg-[#22c55e]" },
];

export function LeadStatusUpdater({
  leadId,
  currentStatus,
}: {
  leadId: string;
  currentStatus: LeadStatus;
}) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);

  async function handleChange(newStatus: LeadStatus) {
    if (newStatus === status || saving) return;
    setStatus(newStatus);
    setSaving(true);

    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = (await res.json()) as { success: boolean };

      if (data.success) {
        router.refresh();
      } else {
        setStatus(currentStatus);
      }
    } catch {
      setStatus(currentStatus);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex gap-1.5">
      {STATUSES.map((s) => {
        const isActive = status === s.value;
        return (
          <button
            key={s.value}
            onClick={() => handleChange(s.value)}
            disabled={saving}
            className={`flex-1 px-3 py-2 text-[10px] font-semibold tracking-[0.1em] uppercase transition-all disabled:opacity-60 ${
              isActive
                ? `${s.activeBg} text-white`
                : "border border-[#e5e5e5] text-[#999] hover:border-[#999] hover:text-[#666]"
            }`}
          >
            {saving && status === s.value ? (
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 border border-current border-t-transparent rounded-full animate-spin" />
                Saving
              </span>
            ) : (
              s.label
            )}
          </button>
        );
      })}
    </div>
  );
}
