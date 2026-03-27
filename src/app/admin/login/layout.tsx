import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Micron Admin",
  robots: "noindex",
};

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Override the admin sidebar layout — login gets a fullscreen layout
  // The fixed positioning from the admin layout already covers the public nav
  return (
    <div className="fixed inset-0 z-[60]">{children}</div>
  );
}
