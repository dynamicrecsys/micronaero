import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

const collections = [
  { handle: "s1000-plastic-moulding", name: "S1000 -- Plastic Moulding" },
  { handle: "s2000-welding-fabrication", name: "S2000 -- Welding & Fabrication" },
  { handle: "s3000-electronics", name: "S3000 -- Electronics" },
  { handle: "s4000-essentials", name: "S4000 -- Essentials" },
  { handle: "s5000-automotive", name: "S5000 -- Automotive" },
  { handle: "s6000-specialty", name: "S6000 -- Specialty" },
] as const;

export { collections };

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-2.5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold tracking-wider text-[#121212] uppercase">
            Micron Aerosols<sup className="text-[10px] ml-0.5">&trade;</sup>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {/* Products Dropdown */}
          <div className="group relative">
            <Link
              href="/products"
              className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-[#4d4d4d] hover:text-[#0099ff] transition-colors"
            >
              Products
              <svg
                className="h-4 w-4 text-[#4d4d4d] transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="w-72 border border-[#e5e5e5] bg-white p-0">
                {collections.map((c) => (
                  <Link
                    key={c.handle}
                    href={`/collections/${c.handle}`}
                    className="block px-4 py-2.5 text-sm font-bold tracking-wide text-[#4d4d4d] hover:bg-[#0099ff] hover:text-white transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/solutions"
            className="text-sm font-bold uppercase tracking-wide text-[#4d4d4d] hover:text-[#0099ff] transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="/about"
            className="text-sm font-bold uppercase tracking-wide text-[#4d4d4d] hover:text-[#0099ff] transition-colors"
          >
            About
          </Link>
          <Link
            href="/become-a-dealer"
            className="border border-[#0099ff] px-5 py-2 text-sm font-bold uppercase tracking-wide text-[#0099ff] hover:bg-[#0099ff] hover:text-white transition-colors"
          >
            Become a Dealer
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+91XXXXXXXXXX"
            className="hidden md:flex items-center gap-1.5 text-sm font-bold tracking-wide text-[#4d4d4d] hover:text-[#0099ff] transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +91 XXXX XXXXXX
          </a>
          <Link
            href="/get-quote"
            className="hidden sm:inline-flex bg-[#0099ff] px-5 py-2 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#1773b0] transition-colors"
          >
            Get Quote
          </Link>
          {/* Cart Icon */}
          <Link href="/cart" className="relative p-2 text-[#4d4d4d] hover:text-[#0099ff] transition-colors">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-5.98.286h11.356m-9.981 0h9.981m0 0a3 3 0 105.607 2.632l1.143-5.745A1.125 1.125 0 0018.537 10.2H7.1m0 0L5.106 5.272"
              />
            </svg>
          </Link>
          {/* Mobile Menu Toggle */}
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
