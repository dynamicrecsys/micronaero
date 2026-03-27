import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Industrial aerosol solutions by Micron Aerosols — OEM formulations, conformal coating services, and mould release expertise for Indian manufacturers.",
};

const solutions = [
  {
    slug: "oem-custom-formulation",
    title: "OEM & Custom Formulation",
    description:
      "Partner with our R&D team for custom aerosol formulations. Private label and contract manufacturing available.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Industrial manufacturing floor with machinery",
    icon: (
      <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    slug: "conformal-coating",
    title: "Conformal Coating Solutions",
    description:
      "IPC & MIL-spec conformal coatings for PCB protection. Protektor\u00AE brand range.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Circuit board close-up showing electronic components",
    icon: (
      <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    slug: "mould-release",
    title: "Mould Release Solutions",
    description:
      "Silicone and non-silicone mould release agents for injection moulding, die casting, and rubber processing.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Industrial machinery in a manufacturing facility",
    icon: (
      <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg px-4 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <h1 className="text-3xl font-bold uppercase tracking-wider md:text-4xl lg:text-5xl">
            INDUSTRIAL SOLUTIONS &amp; CUSTOM FORMULATIONS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            From OEM manufacturing to specialized conformal coatings, we deliver aerosol
            solutions tailored to your industry.
          </p>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions/${s.slug}`}
              className="group flex flex-col overflow-hidden border border-border transition-colors hover:border-primary"
            >
              {/* Image area */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40" />
                <div className="absolute bottom-4 left-4">{s.icon}</div>
              </div>

              {/* Text area */}
              <div className="flex flex-1 flex-col p-8">
                <h2 className="text-xl font-bold uppercase tracking-wider text-heading group-hover:text-primary transition-colors">
                  {s.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4d4d4d]">
                  {s.description}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary group-hover:underline">
                  LEARN MORE
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-[#fafafa] px-4 py-20">
        <div className="mx-auto max-w-[1600px] text-center lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">
            NOT SURE WHAT YOU NEED? TALK TO OUR TEAM
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[#4d4d4d]">
            Our technical experts will help you find the right solution for your application.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {WHATSAPP_NUMBER && (
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need help choosing the right industrial solution`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                CHAT ON WHATSAPP
              </a>
            )}
            <a
              href="tel:+919822036498"
              className="inline-flex items-center gap-2 border border-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              CALL US
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
