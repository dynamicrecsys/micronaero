import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WHATSAPP_NUMBER } from "@/lib/constants";

/* -------------------------------------------------------------------------- */
/*  Content map                                                                */
/* -------------------------------------------------------------------------- */

type SolutionContent = {
  title: string;
  metaDescription: string;
  hero: string;
  heroSub: string;
  content: "oem" | "conformal" | "mould";
};

const SOLUTIONS: Record<string, SolutionContent> = {
  "oem-custom-formulation": {
    title: "OEM Custom Formulation",
    metaDescription:
      "Custom aerosol formulations and private label manufacturing by Micron Aerosols. 35+ years of R&D expertise.",
    hero: "Custom Aerosol Formulation & Private Label Manufacturing",
    heroSub:
      "Leverage 35+ years of aerosol manufacturing expertise for your brand. From concept to bulk production.",
    content: "oem",
  },
  "conformal-coating": {
    title: "Conformal Coating Solutions",
    metaDescription:
      "IPC & MIL-spec conformal coatings for PCB protection. Acrylic, polyurethane, and silicone conformal coatings by Micron Aerosols.",
    hero: "IPC & MIL-Spec Conformal Coating for PCB Protection",
    heroSub:
      "Protect your electronic assemblies from humidity, salt spray, fungus, and thermal shock with our Protektor\u00AE range.",
    content: "conformal",
  },
  "mould-release": {
    title: "Mould Release Solutions",
    metaDescription:
      "Industrial mould release agents — silicone and non-silicone options for injection moulding, die casting, and rubber processing.",
    hero: "Industrial Mould Release Agents for Every Application",
    heroSub:
      "Choose from silicone and non-silicone formulations engineered for your specific moulding process.",
    content: "mould",
  },
};

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                   */
/* -------------------------------------------------------------------------- */

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS[slug];
  if (!solution) return { title: "Solution Not Found" };
  return { title: solution.title, description: solution.metaDescription };
}

export function generateStaticParams() {
  return Object.keys(SOLUTIONS).map((slug) => ({ slug }));
}

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                             */
/* -------------------------------------------------------------------------- */

function OEMContent() {
  const capabilities = [
    { name: "R&D Lab", desc: "In-house research and development facility for formula development" },
    { name: "Custom Formulation", desc: "Tailored chemical formulations to meet your exact specifications" },
    { name: "Contract Filling", desc: "High-speed aerosol filling lines with quality checks at every stage" },
    { name: "Private Labeling", desc: "Complete white-label service with your branding and packaging design" },
    { name: "Quality Testing", desc: "Comprehensive QC testing including spray pattern, propellant ratio, and stability" },
  ];

  const steps = [
    { step: "01", name: "CONSULTATION", desc: "Share your requirements and application details with our team" },
    { step: "02", name: "FORMULATION", desc: "Our R&D lab develops a custom formula matched to your needs" },
    { step: "03", name: "TESTING", desc: "Rigorous quality and performance testing with sample approval" },
    { step: "04", name: "PRODUCTION", desc: "Scaled manufacturing on our high-speed aerosol filling lines" },
    { step: "05", name: "DELIVERY", desc: "On-time dispatch with complete documentation and batch records" },
  ];

  const reasons = [
    "35+ years of aerosol manufacturing experience",
    "ISO 9001:2015 certified manufacturing facility",
    "In-house R&D lab with experienced chemists",
    "Flexible MOQs to suit your business stage",
  ];

  return (
    <>
      {/* Capabilities */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-wider">OUR CAPABILITIES</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.name} className="border border-border p-6">
              <h3 className="text-lg font-bold text-primary">{c.name}</h3>
              <p className="mt-2 text-sm text-[#4d4d4d]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step OEM Process */}
      <section className="border-t border-border bg-[#fafafa] px-4 py-20">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">THE OEM PROCESS</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.step} className="relative border border-border bg-white p-6">
                <span className="text-3xl font-bold text-primary/20">{s.step}</span>
                <h3 className="mt-2 text-sm font-bold uppercase tracking-wider text-heading">{s.name}</h3>
                <p className="mt-2 text-sm text-[#4d4d4d]">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden text-gray-300 lg:block">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ Info */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <div className="border border-border bg-[#0099ff]/5 p-8">
          <h2 className="text-xl font-bold uppercase tracking-wider">MINIMUM ORDER INFORMATION</h2>
          <p className="mt-3 text-sm text-[#4d4d4d]">
            We work with businesses of all sizes. Typical minimum order quantities start at 500 cans per SKU,
            but we are flexible depending on your product category and relationship stage. Contact us to discuss
            your specific requirements.
          </p>
        </div>
      </section>

      {/* Why Choose Micron */}
      <section className="border-t border-border bg-[#fafafa] px-4 py-20">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">WHY CHOOSE MICRON FOR OEM?</h2>
          <ul className="mt-6 space-y-4">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-[#4d4d4d]">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-bg px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">READY TO START YOUR OEM PROJECT?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">Get in touch with our team to discuss your custom formulation requirements.</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/get-quote" className="btn-accent px-10 py-3.5 text-sm">
              REQUEST A QUOTE
            </Link>
            {WHATSAPP_NUMBER && (
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in OEM/private label manufacturing`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-whatsapp hover:underline"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                CHAT ON WHATSAPP
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ConformalCoatingContent() {
  const problems = [
    { name: "Humidity & Moisture", desc: "Prevents dendritic growth and short circuits from condensation" },
    { name: "Salt Spray & Corrosion", desc: "Protects metal traces and solder joints in coastal and marine environments" },
    { name: "Fungus & Microbial Growth", desc: "Seals PCB surfaces against fungal attack in tropical conditions" },
    { name: "Thermal Shock", desc: "Flexible coatings absorb stress from rapid temperature changes" },
  ];

  const products = [
    { sku: "PRK-3001", type: "Acrylic", standard: "IPC-CC-830", method: "Spray / Dip", cure: "15-30 min", tempRange: "-65\u00B0C to +125\u00B0C" },
    { sku: "PRK-3002", type: "Acrylic (Fast Cure)", standard: "IPC-CC-830", method: "Spray", cure: "10-15 min", tempRange: "-65\u00B0C to +125\u00B0C" },
    { sku: "PRK-3003", type: "Polyurethane", standard: "MIL-I-46058C", method: "Spray / Dip", cure: "2-4 hrs", tempRange: "-65\u00B0C to +130\u00B0C" },
    { sku: "PRK-3004", type: "Silicone", standard: "MIL-I-46058C", method: "Spray / Selective", cure: "24 hrs", tempRange: "-65\u00B0C to +200\u00B0C" },
    { sku: "PRK-3005", type: "Polyurethane (Thick Film)", standard: "IPC-CC-830", method: "Dip / Selective", cure: "4-6 hrs", tempRange: "-55\u00B0C to +130\u00B0C" },
    { sku: "PRK-3006", type: "Acrylic (UV Trace)", standard: "IPC-CC-830", method: "Spray", cure: "15-30 min", tempRange: "-65\u00B0C to +125\u00B0C" },
    { sku: "PRK-3007", type: "Silicone (High Temp)", standard: "MIL-I-46058C", method: "Spray / Dip", cure: "24 hrs", tempRange: "-65\u00B0C to +250\u00B0C" },
  ];

  const standards = [
    { name: "IPC-CC-830", desc: "Qualification and Performance of Electrical Insulating Compound" },
    { name: "MIL-I-46058C", desc: "Military specification for insulating compound, electrical" },
    { name: "C-DOT Approved", desc: "Centre for Development of Telematics certification" },
    { name: "RoHS Compliant", desc: "Restriction of Hazardous Substances directive compliant" },
  ];

  const methods = [
    { name: "Aerosol Spray", desc: "Ideal for rework, prototyping, and small batch production. Even coverage with controlled thickness." },
    { name: "Dip Coating", desc: "Best for high-volume production. Uniform coverage on all surfaces including under-components." },
    { name: "Selective Coating", desc: "Automated robotic application for precise coverage. Avoids connectors and test points." },
  ];

  return (
    <>
      {/* Why Conformal Coating */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-wider">WHY CONFORMAL COATING?</h2>
        <p className="mt-3 max-w-3xl text-[#4d4d4d]">
          Electronic assemblies in Indian operating conditions face extreme environmental stress.
          Conformal coating provides a thin protective film that shields PCBs from:
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div key={p.name} className="border border-border p-6">
              <h3 className="text-base font-bold text-primary">{p.name}</h3>
              <p className="mt-2 text-sm text-[#4d4d4d]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Comparison Table */}
      <section className="border-t border-border bg-[#fafafa] px-4 py-20">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">PRODUCT COMPARISON</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-border border border-border bg-white text-sm">
              <thead className="bg-dark-bg text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">SKU</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Standard</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Application</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Cure Time</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Temp Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {products.map((p) => (
                  <tr key={p.sku} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-3 font-bold text-heading">{p.sku}</td>
                    <td className="px-4 py-3 text-[#4d4d4d]">{p.type}</td>
                    <td className="px-4 py-3 text-[#4d4d4d]">{p.standard}</td>
                    <td className="px-4 py-3 text-[#4d4d4d]">{p.method}</td>
                    <td className="px-4 py-3 text-[#4d4d4d]">{p.cure}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-[#4d4d4d]">{p.tempRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-wider">STANDARDS COMPLIANCE</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((s) => (
            <div key={s.name} className="border border-border p-6 text-center">
              <h3 className="text-lg font-bold text-primary">{s.name}</h3>
              <p className="mt-2 text-xs text-[#4d4d4d]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Methods */}
      <section className="border-t border-border bg-[#fafafa] px-4 py-20">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">APPLICATION METHODS</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {methods.map((m) => (
              <div key={m.name} className="border border-border bg-white p-6">
                <h3 className="text-base font-bold text-heading">{m.name}</h3>
                <p className="mt-2 text-sm text-[#4d4d4d]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TDS Download Placeholder */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <div className="border border-dashed border-gray-300 bg-[#fafafa] p-8 text-center">
          <svg className="mx-auto h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <h3 className="mt-4 text-base font-bold text-heading">TECHNICAL DATA SHEETS</h3>
          <p className="mt-2 text-sm text-gray-500">
            Download detailed TDS for each conformal coating product. Coming soon.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">REQUEST TECHNICAL CONSULTATION</h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100">
            Our coating specialists will help you select the right conformal coating for your application.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/get-quote" className="btn-accent px-10 py-3.5 text-sm">
              GET A QUOTE
            </Link>
            <Link href="/contact" className="border border-white px-10 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-primary">
              CONTACT TECHNICAL TEAM
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function MouldReleaseContent() {
  const comparison = [
    {
      type: "Silicone-Based",
      pros: ["Excellent release properties", "High temperature resistance", "Long-lasting film", "Cost-effective per release"],
      cons: ["May interfere with painting/bonding", "Transfer to moulded parts", "Not suitable for over-moulding"],
      useWhen: "Use when parts do not require painting, bonding, or printing after moulding.",
    },
    {
      type: "Non-Silicone",
      pros: ["No transfer to parts", "Paintable immediately", "Safe for over-moulding", "No contamination risk"],
      cons: ["More frequent re-application needed", "Lower temperature range", "Higher cost per application"],
      useWhen: "Use when parts will be painted, bonded, printed, or over-moulded.",
    },
  ];

  const applications = [
    { name: "Injection Moulding", desc: "Thermoplastic and thermoset injection moulding for automotive, consumer, and industrial components." },
    { name: "Die Casting", desc: "Aluminium, zinc, and magnesium die casting operations requiring clean part release." },
    { name: "Rubber Processing", desc: "Compression and transfer moulding of natural and synthetic rubber compounds." },
    { name: "Thermoforming", desc: "Vacuum forming, pressure forming, and twin-sheet thermoforming of plastic sheets." },
  ];

  return (
    <>
      {/* Comparison */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-wider">SILICONE VS NON-SILICONE: WHEN TO USE EACH</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {comparison.map((c) => (
            <div key={c.type} className="border border-border p-6">
              <h3 className="text-xl font-bold text-primary">{c.type}</h3>
              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-green-700">ADVANTAGES</h4>
                <ul className="mt-2 space-y-1">
                  {c.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[#4d4d4d]">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-700">CONSIDERATIONS</h4>
                <ul className="mt-2 space-y-1">
                  {c.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-[#4d4d4d]">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 bg-[#0099ff]/5 p-3">
                <p className="text-sm font-bold text-[#1773b0]">{c.useWhen}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Areas */}
      <section className="border-t border-border bg-[#fafafa] px-4 py-20">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">APPLICATION AREAS</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((a) => (
              <div key={a.name} className="border border-border bg-white p-6">
                <h3 className="text-base font-bold text-heading">{a.name}</h3>
                <p className="mt-2 text-sm text-[#4d4d4d]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-wider">PRODUCT RANGE OVERVIEW</h2>
        <p className="mt-3 text-[#4d4d4d]">
          Our S1000 series mould release agents cover the full spectrum of moulding applications.
          Available in aerosol cans and bulk packaging.
        </p>
        <div className="mt-8 border border-border bg-white p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Silicone Mould Release (General Purpose)",
              "Silicone Mould Release (High Temperature)",
              "Non-Silicone Mould Release",
              "Semi-Permanent Release Agent",
              "Food-Grade Mould Release",
              "Wax-Based Release Agent",
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-[#4d4d4d]">{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Link href="/products" className="text-sm font-bold uppercase tracking-wider text-primary hover:underline">
            VIEW ALL PRODUCTS &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">GET APPLICATION RECOMMENDATIONS</h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100">
            Tell us about your moulding process and we will recommend the right release agent.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/get-quote" className="btn-accent px-10 py-3.5 text-sm">
              GET A QUOTE
            </Link>
            {WHATSAPP_NUMBER && (
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need mould release recommendations for my application`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white px-10 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-primary"
              >
                CHAT ON WHATSAPP
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = SOLUTIONS[slug];
  if (!solution) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg px-4 py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <Link href="/solutions" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            ALL SOLUTIONS
          </Link>
          <h1 className="mt-6 text-3xl font-bold uppercase tracking-wider md:text-4xl lg:text-5xl">
            {solution.hero}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
            {solution.heroSub}
          </p>
        </div>
      </section>

      {/* Content by type */}
      {solution.content === "oem" && <OEMContent />}
      {solution.content === "conformal" && <ConformalCoatingContent />}
      {solution.content === "mould" && <MouldReleaseContent />}
    </>
  );
}
