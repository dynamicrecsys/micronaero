import type { Metadata } from "next";
import { AdminSidebar } from "./admin-sidebar";

export const metadata: Metadata = {
  title: "Micron Admin",
  robots: "noindex",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex bg-[#fafafa]">
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1 overflow-auto relative">
        <div className="pt-14">
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
