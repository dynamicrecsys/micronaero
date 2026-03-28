"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    document.cookie =
      "micron_admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase border border-[#e10000] text-[#e10000] hover:bg-[#e10000] hover:text-white transition-colors"
    >
      Logout
    </button>
  );
}
