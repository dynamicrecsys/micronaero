"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { LeadStatus } from "@/types/lead";

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

  const statusStyles: Record<LeadStatus, string> = {
    new: "border-[#0099ff] text-[#0099ff]",
    contacted: "border-[#0a0a0a] text-[#0a0a0a]",
    converted: "border-[#22c55e] text-[#22c55e]",
  };

  return (
    <div className="flex flex-col items-end gap-1">
      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d]">
        Status
      </p>
      <div className="flex gap-1">
        {(["new", "contacted", "converted"] as LeadStatus[]).map((s) => (
          <button
            key={s}
            onClick={() => handleChange(s)}
            disabled={saving}
            className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase border-2 transition-colors disabled:opacity-50 ${
              status === s
                ? `${statusStyles[s]} bg-current/5`
                : "border-[#e5e5e5] text-[#4d4d4d] hover:border-[#0a0a0a]"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
