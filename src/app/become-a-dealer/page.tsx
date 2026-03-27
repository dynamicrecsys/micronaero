import type { Metadata } from "next";
import { DealerForm } from "@/components/forms/dealer-form";
import { seriesDescriptions } from "@/data/content";

export const metadata: Metadata = {
  title: "Become a Dealer",
  description:
    "Partner with Micron Aerosols as an authorized dealer. Competitive margins, exclusive territory, marketing support, and dedicated account management across 6 product series.",
};

const benefits = [
  {
    title: "COMPETITIVE MARGINS",
    desc: "Industry-leading margin structure across all 6 product series — S1000 through S6000",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "EXCLUSIVE TERRITORY",
    desc: "Protected territory rights for your region with no channel conflict",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "MARKETING SUPPORT",
    desc: "POS material, product training, and co-branded collateral for your team",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
  {
    title: "DEDICATED SUPPORT",
    desc: "Account manager and technical team backing for every dealer partner",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const steps = [
  { step: "01", name: "APPLY", desc: "Fill out the simple application form below. No paperwork overload." },
  { step: "02", name: "ONBOARD", desc: "Our team reviews your application, discusses territory, and finalizes terms." },
  { step: "03", name: "GROW", desc: "Start selling with full marketing, training, and technical support from day one." },
];

export default function BecomeADealerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg px-4 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <h1 className="text-3xl font-bold uppercase tracking-wider md:text-4xl lg:text-5xl">
            PARTNER WITH INDIA&apos;S SPECIALIST AEROSOL MANUFACTURER
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Join our growing dealer network and bring Micron Aerosols products to manufacturers in your region.
            35+ years of formulation expertise backing every product you sell.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <h2 className="text-center text-2xl font-bold uppercase tracking-wider">
          WHY PARTNER WITH MICRON?
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="border border-border p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center bg-[#0099ff]/10">
                {b.icon}
              </div>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-heading">{b.title}</h3>
              <p className="mt-2 text-sm text-[#4d4d4d]">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="border-t border-border bg-[#fafafa] px-4 py-20">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <h2 className="text-center text-2xl font-bold uppercase tracking-wider">
            THE PRODUCT PORTFOLIO
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[#4d4d4d]">
            As a Micron dealer, you get access to our complete range across 6 industrial series.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(seriesDescriptions).map(([code, info]) => (
              <div key={code} className="border border-border bg-white p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{code}</span>
                <h3 className="mt-2 text-base font-bold text-heading">{info.title}</h3>
                <p className="mt-2 text-sm text-[#4d4d4d]">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <h2 className="text-center text-2xl font-bold uppercase tracking-wider">HOW IT WORKS</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center bg-dark-bg text-lg font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-heading">{s.name}</h3>
              <p className="mt-2 text-sm text-[#4d4d4d]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Story */}
      <section className="border-t border-border bg-[#fafafa] px-4 py-20">
        <div className="mx-auto max-w-[1600px] lg:px-8">
          <div className="border border-border bg-white p-8 md:flex md:items-center md:gap-8">
            <div className="shrink-0">
              <div className="flex h-16 w-16 items-center justify-center bg-primary text-2xl font-bold text-white">
                3x
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-bold uppercase tracking-wider text-heading">DEALER SUCCESS STORY</h3>
              <p className="mt-2 text-sm text-[#4d4d4d]">
                &ldquo;Our Sangamner dealer grew 3x in 18 months by focusing on the S1000 mould release
                and S2000 welding anti-spatter verticals. With Micron&apos;s product training and marketing
                support, they built strong relationships with local manufacturers in the Pune-Nashik
                industrial corridor.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8" id="apply">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold uppercase tracking-wider">APPLY TO BECOME A DEALER</h2>
          <p className="mt-2 text-sm text-[#4d4d4d]">
            Step 1 &mdash; Tell us about yourself. No paperwork required at this stage.
          </p>
          <div className="mt-8">
            <DealerForm />
          </div>
        </div>
      </section>
    </>
  );
}
