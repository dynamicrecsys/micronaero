import Link from "next/link";
import Image from "next/image";
import { OrgSchema } from "@/components/schema/org-schema";
import { ProductCard } from "@/components/product/product-card";
import { products, getProductsBySeries } from "@/data/products";
import type { Product } from "@/data/products";
import { companyInfo, aboutPage } from "@/data/content";

const FEATURED_HANDLES = [
  "silicon-mould-release-agent",
  "silicon-anti-spatter",
  "protektor-conformal-coating",
  "electrical-contact-cleaner-500ml",
  "riders-united-dashboard-polish",
  "5201-ptfe-enhanced-chain-lubricant-spray-riders-united",
  "lighter-gas-refill-can-550ml-with-refill-adapter-micron-aerosols\u00ae-for-lighters-jeweller-torch-pack-of-2",
  "ceramic-anti-spatter",
];

const TRUST_BADGES = [
  "ISO 9001:2015",
  "ISO 45001:2018",
  "Since 1989",
  "34+ Products",
  "6 Verticals",
  "Made in India",
];

const VERTICALS = [
  {
    series: "S1000",
    title: "Plastic Moulding",
    handle: "plastic-moulding",
    image:
      "https://micronaero.com/cdn/shop/collections/Plastic_Molding.png?v=1713864385",
  },
  {
    series: "S2000",
    title: "Welding & Fabrication",
    handle: "industrial-welding-fabrication",
    image:
      "https://micronaero.com/cdn/shop/collections/Welding_3x_57241829-db7f-4324-8fa7-6938e61227d5.png?v=1713866145",
  },
  {
    series: "S3000",
    title: "Electronics Protection",
    handle: "electronics",
    image:
      "https://micronaero.com/cdn/shop/collections/Electronics-min.png?v=1713866164",
  },
  {
    series: "S4000",
    title: "Essentials",
    handle: "essentials",
    image:
      "https://micronaero.com/cdn/shop/collections/Essentials_3x-min.png?v=1713866114",
  },
  {
    series: "S5000",
    title: "Automotive",
    handle: "automotive-care-performance",
    image:
      "https://micronaero.com/cdn/shop/collections/Automobile-min.png?v=1713866289",
  },
  {
    series: "S6000",
    title: "Specialty Products",
    handle: "speciality-products",
    image:
      "https://micronaero.com/cdn/shop/collections/Speciality-min.png?v=1713866131",
  },
];

const OEM_STATS = [
  { value: "35+", label: "Years" },
  { value: "In-House", label: "R&D" },
  { value: "Flexible", label: "MOQ" },
  { value: "ISO", label: "Certified" },
];

export default function HomePage() {
  const featuredProducts: Product[] = FEATURED_HANDLES.reduce<Product[]>(
    (acc, handle) => {
      const p = products.find((prod) => prod.handle === handle);
      if (p) acc.push(p);
      return acc;
    },
    []
  );

  return (
    <>
      <OrgSchema />

      {/* ===== 1. HERO ===== */}
      <section className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
        <Image
          src="https://micronaero.com/cdn/shop/files/HS_D.jpg?v=1770786087&width=3840"
          alt="Micron Aerosols industrial specialty chemicals and aerosol solutions"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:py-32 lg:px-12 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold uppercase tracking-wider text-white sm:text-5xl lg:text-6xl">
              Specialty Chemicals
              <br />
              &amp; Aerosol Solutions
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Trusted by manufacturers across India since 1989. ISO 9001 &amp;
              ISO 45001 certified.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-none bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#121212] transition-colors hover:bg-gray-100"
              >
                Explore Products
              </Link>
              <Link
                href="/get-quote"
                className="rounded-none bg-[#e10000] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#c00]"
              >
                Get OEM Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. TRUST BAR ===== */}
      <section className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-[1600px] px-6 py-5 lg:px-12">
          <div className="flex items-center justify-center gap-0 overflow-x-auto scrollbar-none">
            {TRUST_BADGES.map((badge, i) => (
              <div key={badge} className="flex shrink-0 items-center">
                {i > 0 && (
                  <span className="mx-4 h-4 w-px bg-[#ccc] sm:mx-6" />
                )}
                <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wider text-[#4d4d4d] sm:text-sm">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. INDUSTRY VERTICALS ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <h2 className="text-center text-3xl font-bold uppercase tracking-wider text-[#121212] sm:text-4xl">
            Solutions for Every Industry
          </h2>
          <div className="mt-14 grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {VERTICALS.map((v) => {
              const count = getProductsBySeries(v.series).length;
              return (
                <Link
                  key={v.series}
                  href={`/collections/${v.handle}`}
                  className="group relative flex flex-col bg-white"
                >
                  {/* Collection image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#121212]">
                    <Image
                      src={v.image}
                      alt={`${v.title} — ${v.series} series industrial products`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />
                    <span className="absolute bottom-4 left-4 text-2xl font-bold uppercase tracking-wider text-white/90">
                      {v.series}
                    </span>
                  </div>
                  {/* Card info */}
                  <div className="border border-t-0 border-gray-200 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0099ff]">
                      {v.series}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-[#121212] transition-colors group-hover:text-[#0099ff]">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#4d4d4d]">
                      {count} product{count !== 1 ? "s" : ""}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 4. FEATURED PRODUCTS ===== */}
      <section className="bg-[#f5f5f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-[#121212] sm:text-4xl">
            Popular Products
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.handle} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-block rounded-none border-2 border-[#121212] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#121212] transition-colors hover:bg-[#121212] hover:text-white"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 5. OEM / R&D SECTION ===== */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <Image
          src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=80&auto=format&fit=crop"
          alt="Industrial manufacturing facility"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-white sm:text-4xl">
              Custom Formulation &amp; OEM Manufacturing
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Our in-house R&amp;D team develops bespoke aerosol and chemical
              formulations tailored to your exact industrial requirements.
              From prototype to full-scale production, we partner with you at
              every stage.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {OEM_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold tracking-wider text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-wider text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/solutions/oem-custom-formulation"
              className="inline-block rounded-none bg-[#e10000] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#c00]"
            >
              Request OEM Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 6. DEALER CTA ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="border border-gray-200 px-8 py-14 text-center lg:px-16">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-[#121212] sm:text-4xl">
              Become a Micron Aerosols Dealer
            </h2>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
              {(
                [
                  "Competitive Margins",
                  "Exclusive Territory",
                  "Marketing Support",
                ] as const
              ).map((benefit) => (
                <div key={benefit} className="text-center">
                  <p className="text-lg font-bold uppercase tracking-wider text-[#121212]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/become-a-dealer"
                className="inline-block rounded-none bg-[#0099ff] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#007acc]"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. ABOUT / TRUST ===== */}
      <section className="bg-[#f5f5f5] py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-[#121212] sm:text-4xl">
              About {companyInfo.name}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#4d4d4d]">
              Founded in {companyInfo.foundedYear} in Sangamner, Maharashtra,{" "}
              {companyInfo.legalName} has grown from a single manufacturing unit
              into a trusted name across six industrial verticals. Led by{" "}
              {aboutPage.team[0].name} ({aboutPage.team[0].title}), alongside{" "}
              {aboutPage.team[1].name} and {aboutPage.team[2].name}, our
              leadership brings over 75 years of combined experience from
              institutions like BITS Pilani, IIT Kharagpur, and Politecnico Di
              Milano.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block rounded-none border-2 border-[#121212] px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#121212] transition-colors hover:bg-[#121212] hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
