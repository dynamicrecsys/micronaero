import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { GAScript } from "@/components/analytics/ga-script";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Micron Aerosols",
    default: "Industrial Aerosol Solutions | Micron Aerosols",
  },
  description:
    "India's specialist manufacturer of industrial aerosols and specialty chemicals since 1989. Mould release agents, conformal coatings, welding anti-spatter, and custom OEM formulations.",
  openGraph: {
    type: "website",
    siteName: "Micron Aerosols",
    title: "Industrial Aerosol Solutions | Micron Aerosols",
    description:
      "India's specialist manufacturer of industrial aerosols and specialty chemicals since 1989. Mould release agents, conformal coatings, welding anti-spatter, and custom OEM formulations.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <GAScript />
        <MetaPixel />
      </body>
    </html>
  );
}
