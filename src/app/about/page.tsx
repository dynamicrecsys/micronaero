import type { Metadata } from "next";
import Link from "next/link";
import { aboutPage, companyInfo, industries } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Micron Aerosols (Deepak Industries) — India's specialist manufacturer of industrial aerosols and specialty chemicals since 1989. Based in Sangamner, Maharashtra.",
};

const stats = [
  { label: "YEARS OF EXCELLENCE", value: "35+" },
  { label: "PRODUCT SKUS", value: "34+" },
  { label: "INDUSTRIAL VERTICALS", value: "6" },
  { label: "QUALITY STANDARD", value: "ISO CERTIFIED" },
];

const certifications = [
  {
    name: "ISO 9001:2015",
    desc: "Quality Management System certification ensuring consistent product quality, customer satisfaction, and continuous improvement across all manufacturing processes.",
  },
  {
    name: "ISO 45001:2018",
    desc: "Occupational Health and Safety Management System ensuring safe working conditions, hazard prevention, and regulatory compliance across all operations.",
  },
];

const capabilities = [
  "High-speed aerosol filling lines (up to 60 cans/minute)",
  "In-house chemical blending and formulation laboratory",
  "Quality testing lab with spray pattern analysis",
  "Climate-controlled raw material storage",
  "Dedicated packaging and labeling facility",
  "Effluent treatment and environmental compliance",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg px-4 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            EST. {companyInfo.foundedYear}
          </p>
          <h1 className="mt-6 text-3xl font-bold uppercase tracking-wider md:text-4xl lg:text-5xl">
            SPECIALTY CHEMICALS &amp; AEROSOL SOLUTIONS SINCE 1989
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Founded as Deepak Industries in Sangamner, Maharashtra, {companyInfo.name} has been
            at the forefront of industrial aerosol manufacturing in India for over three decades.
          </p>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Narrative */}
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider">OUR STORY</h2>
            <div className="mt-6 space-y-4 text-[#4d4d4d] leading-relaxed">
              <p>
                In 1989, Late Shri Shivdasji Maniyar inaugurated the first manufacturing unit of
                what would become one of India&apos;s most trusted names in specialty chemicals. What
                began as a small operation in Sangamner has grown into a full-scale aerosol
                manufacturing facility serving six major industrial verticals across the country.
              </p>
              <p>
                Under the leadership of founder Deepak Maniyar, an alumnus of the prestigious BITS
                Pilani, {companyInfo.name} expanded from basic mould release agents to a comprehensive
                portfolio of over 34 products spanning conformal coatings, welding anti-spatter
                solutions, electronics cleaners, automotive care, and specialty formulations.
              </p>
              <p>
                In 2003, we moved our headquarters to the MIDC Industrial Estate in Sangamner,
                Ahmednagar district, Maharashtra. Today, our ISO-certified facility combines decades
                of formulation expertise with modern aerosol filling technology to deliver consistent,
                high-performance products to manufacturers across India. Our team brings over 75
                years of combined experience from institutions like BITS Pilani, IIT Kharagpur, and
                Politecnico Di Milano, Italy.
              </p>
              <p>
                We serve industries including {industries.join(", ")} &mdash; and our commitment to
                quality, innovation, and partnership remains as strong as it was on day one.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-px bg-border self-start">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-8 text-center">
                <p className="text-4xl font-bold text-primary">{s.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#4d4d4d]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="border-t border-border bg-[#fafafa] px-4 py-20">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">LEADERSHIP TEAM</h2>
          <p className="mt-3 text-[#4d4d4d]">
            Our leadership combines deep industry expertise with world-class education.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {aboutPage.team.map((member) => (
              <div key={member.name} className="border border-border bg-white p-6">
                <div className="flex h-16 w-16 items-center justify-center bg-dark-bg text-xl font-bold text-white">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 text-base font-bold text-heading">{member.name}</h3>
                <p className="text-sm font-bold text-primary">{member.title}</p>
                <p className="mt-2 text-sm text-[#4d4d4d]">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-wider">OUR VALUES</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutPage.values.map((value) => (
            <div key={value.title} className="border border-border p-6">
              <h3 className="text-base font-bold uppercase tracking-wider text-heading">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4d4d4d]">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-border bg-dark-bg px-4 py-20 text-white">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">CERTIFICATIONS</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {certifications.map((c) => (
              <div key={c.name} className="border border-gray-700 p-8">
                <div className="flex items-center gap-4">
                  <svg className="h-10 w-10 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{c.name}</h3>
                    <p className="mt-2 text-sm text-gray-400">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-wider">MANUFACTURING FACILITY</h2>
        <p className="mt-4 max-w-3xl text-[#4d4d4d] leading-relaxed">
          Our manufacturing facility at MIDC Industrial Estate, Sangamner (Ahmednagar district,
          Maharashtra) is equipped with state-of-the-art aerosol filling and chemical blending
          infrastructure. The facility operates under strict ISO quality management systems and
          occupational health standards.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c} className="flex items-start gap-3 border border-border p-4">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-sm text-[#4d4d4d]">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-bg px-4 py-20 text-white">
        <div className="mx-auto max-w-[1600px] text-center lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider">PARTNER WITH US</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Whether you are looking to become an authorized dealer or need custom aerosol
            solutions for your manufacturing process, our team is ready to help.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/become-a-dealer"
              className="btn-primary px-10 py-3.5 text-sm"
            >
              BECOME A DEALER
            </Link>
            <Link
              href="/get-quote"
              className="border border-white px-10 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-dark-bg"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
