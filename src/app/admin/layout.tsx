import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Micron Admin",
  robots: "noindex",
};

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: "grid" },
  { href: "/admin/leads", label: "Leads", icon: "inbox" },
  { href: "/admin/products", label: "Products", icon: "package" },
  { href: "/admin/content", label: "Content", icon: "file-text" },
  { href: "/admin/settings", label: "Settings", icon: "settings" },
];

function NavIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "grid":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeWidth={2} d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
        </svg>
      );
    case "inbox":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeWidth={2} d="M20 12V4H4v8M2 12h6l2 3h4l2-3h6v8H2z" />
        </svg>
      );
    case "package":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeWidth={2} d="M16.5 9.4l-9-5.19M21 16V8l-9-5-9 5v8l9 5 9-5zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
      );
    case "file-text":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeWidth={2} d="M14 2H6v20h12V8l-4-6zM14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    case "settings":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeWidth={2} d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path strokeLinecap="square" strokeWidth={2} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex bg-white">
      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 bg-[#0a0a0a] text-white flex flex-col">
        <div className="px-6 py-5 border-b border-white/10">
          <h1 className="text-sm font-bold tracking-[0.2em] uppercase text-[#0099ff]">
            MICRON ADMIN
          </h1>
        </div>
        <nav className="flex-1 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-6 py-3 text-sm font-bold tracking-wider uppercase text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              <NavIcon icon={item.icon} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-4 border-t border-white/10">
          <Link
            href="/"
            className="text-xs font-bold tracking-wider uppercase text-white/40 hover:text-white/70 transition-colors"
          >
            View Site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
