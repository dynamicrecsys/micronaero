import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* -------------------------------------------------------------------------- */
/*  Blog content map                                                           */
/* -------------------------------------------------------------------------- */

type BlogPostData = {
  title: string;
  date: string;
  category: string;
  readTime: string;
  metaDescription: string;
  content: string[];
  relatedProducts: { name: string; href: string }[];
};

const BLOG_POSTS: Record<string, BlogPostData> = {
  "complete-guide-to-conformal-coating-selection": {
    title: "Complete Guide to Conformal Coating Selection for PCB Protection",
    date: "2026-03-15",
    category: "Conformal Coating",
    readTime: "8 min read",
    metaDescription:
      "Learn how to choose between acrylic, polyurethane, and silicone conformal coatings. Covers IPC standards, application methods, and selection criteria for Indian conditions.",
    content: [
      "Conformal coating is a thin polymeric film applied to printed circuit boards (PCBs) to protect electronic assemblies from moisture, dust, chemicals, and temperature extremes. In Indian operating conditions, where humidity levels regularly exceed 80% and temperatures can swing from near-freezing in winter to 45+ degrees Celsius in summer, conformal coating is not optional for any critical electronic assembly — it is essential.",
      "There are three primary types of conformal coatings used in Indian electronics manufacturing: acrylic, polyurethane, and silicone. Each has distinct advantages depending on your application environment, rework requirements, and production process. Understanding these differences is the first step toward making the right selection.",
      "Acrylic conformal coatings (Type AR per IPC-CC-830) are the most widely used in India. They offer good moisture resistance, fast drying times of 15-30 minutes, and easy reworkability with common solvents like IPA or acetone. This makes them ideal for production environments where rework and field repair are common. Our Protektor PRK-3001 and PRK-3006 (with UV tracer for inspection) are both acrylic formulations that meet IPC-CC-830 standards.",
      "Polyurethane conformal coatings (Type UR) provide superior chemical resistance and abrasion protection compared to acrylics. They form a tougher, more durable film that withstands exposure to solvents, fuels, and aggressive cleaning agents. Our PRK-3003 and PRK-3005 (thick film variant) meet MIL-I-46058C military specifications, making them suitable for defense and aerospace electronics where long-term reliability is non-negotiable.",
      "Silicone conformal coatings (Type SR) excel in high-temperature applications, maintaining flexibility from -65 degrees Celsius to +200 degrees Celsius. Our PRK-3007 High Temp variant extends this range to +250 degrees Celsius. Silicone coatings are the go-to choice for automotive ECUs, LED driver circuits, power electronics, and any application where thermal cycling is a primary concern. They also offer the best vibration damping properties among all coating types.",
      "When selecting a conformal coating, evaluate these critical factors: the operating temperature range of your end product, the chemical exposure it will face in the field, your rework and field repair requirements, your application method (aerosol spray for prototyping and small batches, dip coating for high volume, or selective robotic coating for precision), and the compliance standards required by your end customer — whether IPC-CC-830, MIL-I-46058C, or C-DOT certification for telecom equipment.",
      "One often-overlooked consideration is inspection. UV-traceable conformal coatings like our PRK-3006 contain a fluorescent additive that glows under UV light, making it easy to verify complete coverage and identify any areas that were missed during application. This is increasingly becoming a requirement in automotive and medical electronics quality standards.",
      "The application method also affects your coating selection. Aerosol spray application works well for rework, prototyping, and small production batches. Dip coating provides the most uniform coverage for high-volume production. Selective robotic coating offers the highest precision, avoiding connectors and test points automatically.",
      "Contact our technical team for a free consultation on conformal coating selection for your specific application. We can provide samples and application guidance to help you make the right choice.",
    ],
    relatedProducts: [
      { name: "Protektor PRK-3001 (Acrylic Conformal Coating)", href: "/products" },
      { name: "Protektor PRK-3003 (Polyurethane Conformal Coating)", href: "/products" },
      { name: "Protektor PRK-3006 (Acrylic UV Tracer)", href: "/products" },
    ],
  },
  "silicone-vs-non-silicone-mould-release-how-to-choose": {
    title: "Silicone vs Non-Silicone Mould Release: How to Choose",
    date: "2026-03-01",
    category: "Mould Release",
    readTime: "6 min read",
    metaDescription:
      "Compare silicone and non-silicone mould release agents. Learn when to use each type for injection moulding, die casting, and rubber processing.",
    content: [
      "Choosing the right mould release agent is one of the most impactful decisions you can make for your moulding operation. The wrong choice leads to sticking parts, surface defects, production downtime, and costly downstream processing failures. The most fundamental decision is whether to use a silicone-based or non-silicone release agent.",
      "Silicone-based mould release agents are the workhorses of the moulding industry worldwide. They provide excellent release properties across a wide temperature range, withstand the heat of injection moulding and die casting, and form a durable film that reduces the frequency of re-application. For standard injection moulding where parts do not require painting, bonding, or printing after demoulding, silicone release agents are typically the best choice for cost-effectiveness and reliability.",
      "However, silicone contamination is a genuine and expensive concern in many manufacturing processes. Silicone molecules are remarkably persistent — even trace amounts can cause fish-eye defects in paint finishes, prevent adhesive bonding from achieving full strength, and interfere with pad printing or screen printing on moulded surfaces. In automotive manufacturing, a single silicone contamination event can lead to an entire batch of painted parts being rejected.",
      "Non-silicone mould release agents use synthetic waxes, PTFE, or other advanced polymer technologies to achieve release without any silicone contamination risk. While they may require slightly more frequent re-application than silicone alternatives, they allow immediate painting, printing, adhesive bonding, and over-moulding without any surface cleaning or preparation steps.",
      "The decision framework is straightforward: if your moulded parts go directly to assembly or packaging with no secondary surface treatment, silicone-based release is usually the more economical choice. If your parts undergo any finishing operation — painting, powder coating, printing, bonding, plating, or over-moulding — use a non-silicone release agent to eliminate contamination risk entirely.",
      "In the Indian automotive supply chain, non-silicone release is increasingly specified as a mandatory requirement by OEMs like Tata, Mahindra, and international Tier-1 suppliers. Electronics enclosures that need EMI shielding paint or adhesive-backed labeling should also default to non-silicone release. The cost of re-processing contaminated parts far exceeds the marginal cost difference between silicone and non-silicone release agents.",
      "Our S1000 series includes both silicone and non-silicone formulations optimized for Indian operating conditions. Our technical team can provide samples of both types for trial runs in your facility, along with application guidance to achieve optimal release frequency and part quality.",
    ],
    relatedProducts: [
      { name: "S1000 Silicone Mould Release (General Purpose)", href: "/products" },
      { name: "S1000 Non-Silicone Mould Release", href: "/products" },
      { name: "S1000 Semi-Permanent Release Agent", href: "/products" },
    ],
  },
  "understanding-anti-spatter-sprays-for-mig-tig-welding": {
    title: "Understanding Anti-Spatter Sprays for MIG & TIG Welding",
    date: "2026-02-15",
    category: "Welding",
    readTime: "7 min read",
    metaDescription:
      "Learn how anti-spatter sprays work, proper application techniques, and how they reduce post-weld cleanup time in MIG and MAG welding operations.",
    content: [
      "Weld spatter is one of the most persistent quality and productivity issues in MIG (GMAW) and MAG welding operations across Indian manufacturing facilities. Those tiny molten metal droplets that land and stick to the workpiece surface, jigs, fixtures, clamps, and welding nozzle tips create hours of post-weld grinding and cleanup work while increasing consumable costs significantly.",
      "Anti-spatter sprays work by depositing a thin, non-stick barrier film on surfaces surrounding the weld zone. When molten spatter droplets land on a treated surface, they cannot metallurgically bond to the base metal. The spatter either falls off on its own during cooling or can be easily wiped away with a cloth — no grinding, chipping, or chemical cleaning required.",
      "Proper application technique is critical to getting maximum benefit from anti-spatter spray. Apply a light, uniform coat to the workpiece surface around the weld area (never on the weld joint itself, as this can cause porosity and contamination), all fixtures and clamps, and the welding nozzle interior and exterior. The key word is light — over-application wastes product and can introduce contaminants into the weld zone.",
      "The formulation quality of anti-spatter spray matters more than most welders realize. Cheap, oil-based products leave heavy residue that interferes with painting and powder coating downstream, creates excessive smoke during welding, and can actually increase porosity in the weld if it migrates into the joint. Modern water-based and ceramic-based formulations provide superior spatter protection without any of these drawbacks.",
      "Our S2000 series anti-spatter solutions include silicone-based, non-silicone, ceramic, and water-based variants to match different welding processes and downstream requirements. For fabrication shops that paint or powder coat their weldments, our non-silicone and water-based options ensure clean surfaces ready for finishing without any additional cleaning steps.",
      "For robotic and automated welding lines, anti-spatter protection of the nozzle and contact tip assembly is especially critical. Spatter accumulation inside the nozzle disrupts shielding gas flow patterns, leading to porosity, oxidation, and inconsistent weld quality. Regular application of anti-spatter spray to nozzle assemblies between welding cycles dramatically extends nozzle and tip life while maintaining consistent gas coverage.",
      "Calculate the return on investment: if your welders spend even 15 minutes per shift grinding off spatter from workpieces, that represents over 60 hours per year per welder in lost productive welding time. Add the cost of grinding discs, replacement nozzle tips, and rejected parts due to spatter-related defects, and anti-spatter spray typically pays for itself within the first week of use in any serious fabrication operation.",
      "Contact Micron Aerosols for a free trial of our S2000 series anti-spatter products. We will recommend the right formulation for your welding process and provide on-site application training for your team.",
    ],
    relatedProducts: [
      { name: "S2000 Anti-Spatter Spray (Water-Based)", href: "/products" },
      { name: "S2000 Anti-Spatter Spray (Ceramic)", href: "/products" },
      { name: "S2000 Anti-Spatter Spray (Non-Silicone)", href: "/products" },
    ],
  },
  "5-signs-you-need-a-better-mould-release-agent": {
    title: "5 Signs You Need a Better Mould Release Agent",
    date: "2026-02-01",
    category: "Mould Release",
    readTime: "5 min read",
    metaDescription:
      "Common warning signs that your mould release agent is underperforming: sticking parts, surface defects, build-up, and more. Learn what to look for.",
    content: [
      "Your mould release agent should make your production line run smoother, not introduce new problems. Yet many Indian manufacturers continue using a subpar release agent simply because they have always used it or because it was the cheapest option available. Here are five clear signs that it is time to evaluate a better alternative.",
      "Sign 1: Frequent part sticking. If parts are sticking to the mould cavity more than once every 50 cycles, your release agent is not doing its job adequately. A properly formulated release agent should provide consistent release for dozens of cycles between applications. Every stuck part risks damage to both the part and the mould, creates rejects, and stops the production line — the total cost of a single sticking event often exceeds the cost of several cans of premium release agent.",
      "Sign 2: Unexplained surface defects. Orange peel texture, flow lines, white haze, or oily patches on moulded parts often trace back to the release agent rather than to process parameters. Incompatible or low-quality release agents can interfere with material flow and surface finish quality, especially on high-gloss, textured, or optically clear parts. If you see surface defects that do not correlate with temperature, pressure, or material changes, the release agent should be your first investigation point.",
      "Sign 3: Excessive mould build-up. If you are seeing release agent residue accumulating in mould cavities, on vents, or around ejector pins, this indicates either over-application, poor formulation, or thermal instability of your current product. Build-up gradually changes part dimensions, blocks vents causing burn marks, and necessitates more frequent and aggressive mould cleaning cycles — all of which directly reduce your effective production time.",
      "Sign 4: Downstream processing failures. If parts have painting defects like fish-eyes and cratering, adhesive bonding failures, or ink adhesion problems, silicone contamination from your release agent is the most likely root cause. This is one of the most expensive problems in manufacturing because it is often discovered only after significant value has been added to the part. Switching to a certified non-silicone release agent typically resolves these issues immediately.",
      "Sign 5: Uneconomical re-application frequency. If you are applying release agent every 1-2 cycles when the product specification claims 10 or more releases per application, you are either significantly over-applying each time or the product is simply underperforming in your operating conditions. Modern semi-permanent release agents can deliver 20-50 or more releases per application, dramatically reducing both direct product cost and the indirect cost of operator time spent on re-application.",
      "Ready to benchmark a better alternative? Contact Micron Aerosols for a free trial of our S1000 series mould release agents. We will analyze your specific moulding process — material type, mould temperature, part geometry, and downstream requirements — and recommend the optimal product. We also provide on-site application training to ensure your operators get maximum performance from the product.",
    ],
    relatedProducts: [
      { name: "S1000 Silicone Mould Release (High Performance)", href: "/products" },
      { name: "S1000 Non-Silicone Mould Release", href: "/products" },
      { name: "S1000 Mould Cleaner", href: "/products" },
    ],
  },
  "how-conformal-coatings-protect-electronics-in-harsh-environments": {
    title: "How Conformal Coatings Protect Electronics in Harsh Environments",
    date: "2026-01-15",
    category: "Conformal Coating",
    readTime: "9 min read",
    metaDescription:
      "Discover how conformal coatings protect PCBs from humidity, salt spray, fungus, and thermal shock in harsh Indian operating environments.",
    content: [
      "India presents some of the most challenging operating environments for electronic assemblies anywhere in the world. Coastal cities like Mumbai and Chennai subject PCBs to salt spray and extreme humidity. Industrial zones in Gujarat and Maharashtra expose electronics to chemical fumes and particulate contamination. Northern regions experience temperature swings of over 40 degrees Celsius between summer and winter. Without proper protection, these conditions lead to corrosion, short circuits, and premature failure.",
      "Conformal coating creates an invisible protective barrier — typically 25 to 75 microns thick — over the entire PCB surface. This thin film acts as a shield against moisture ingress, prevents dendritic growth between closely spaced conductors, resists fungal and microbial attack common in tropical climates, and insulates against contamination from dust and chemical vapors.",
      "Moisture and humidity are the primary failure mechanisms for uncoated electronics in India. When relative humidity exceeds 65%, water molecules begin to condense on PCB surfaces. This moisture creates conductive paths between traces, enabling electrochemical migration — a process where metal ions dissolve from one conductor and deposit on adjacent ones, eventually creating a short circuit. Conformal coating prevents this by creating a hydrophobic barrier that repels moisture even at 95% relative humidity.",
      "Salt spray corrosion is a critical concern for electronics deployed in coastal regions, marine applications, and automotive underbody systems. Sodium chloride and other salts in the air attack solder joints, copper traces, and component leads aggressively. A properly applied conformal coating meeting IPC-CC-830 salt spray requirements can protect PCBs for thousands of hours of exposure — extending field life from months to years in coastal environments.",
      "Fungal growth on PCBs is a uniquely tropical problem that many international electronics designers underestimate when designing for the Indian market. Certain species of Aspergillus and Penicillium molds thrive on the organic flux residues left on PCBs after soldering, and their acidic metabolic byproducts corrode copper traces. Conformal coating seals the PCB surface, denying fungi access to nutrients and preventing colonization entirely.",
      "Thermal shock — rapid temperature changes that occur during power cycling or environmental transitions — stresses PCB assemblies through differential expansion of materials. Rigid coatings can crack under thermal stress, losing their protective properties. Silicone conformal coatings maintain flexibility across the widest temperature range (-65 to +250 degrees Celsius for our PRK-3007), making them the preferred choice for applications subject to significant thermal cycling.",
      "The cost of conformal coating is trivial compared to the cost of field failures. For a typical industrial control board, conformal coating adds less than 2% to the manufacturing cost but can reduce field failure rates by 50-80% in harsh environments. For safety-critical applications in automotive, medical, and defense electronics, conformal coating is not just good engineering practice — it is a regulatory and liability requirement.",
      "Our Protektor range of conformal coatings covers every application scenario: fast-curing acrylics for production efficiency, tough polyurethanes for chemical resistance, flexible silicones for thermal extremes, and UV-traceable variants for quality inspection. Contact our technical team to determine which coating provides the optimal protection for your specific application and operating environment.",
    ],
    relatedProducts: [
      { name: "Protektor PRK-3004 (Silicone Conformal Coating)", href: "/products" },
      { name: "Protektor PRK-3007 (High Temp Silicone)", href: "/products" },
      { name: "S3000 PCB Cleaner", href: "/products" },
    ],
  },
  "complete-guide-to-aerosol-manufacturing-in-india": {
    title: "The Complete Guide to Aerosol Manufacturing in India",
    date: "2026-01-01",
    category: "Industry",
    readTime: "10 min read",
    metaDescription:
      "Comprehensive guide to aerosol manufacturing in India — industry landscape, manufacturing process, regulatory requirements, and growth opportunities.",
    content: [
      "India's aerosol manufacturing industry is experiencing a period of significant growth, driven by increasing industrialization, rising quality standards in manufacturing, and growing demand for convenient and precise application methods for industrial chemicals. From mould release agents and anti-spatter sprays to conformal coatings and maintenance products, aerosol packaging offers advantages in dosage control, contamination prevention, and ease of use that bulk packaging cannot match.",
      "The aerosol manufacturing process begins with formulation development. This is where the chemistry expertise lies — developing the right blend of active ingredients, solvents, and surfactants to achieve the desired performance characteristics. For industrial aerosols, the formulation must be stable over time, compatible with the propellant system, and deliver consistent spray patterns throughout the can life. This is fundamentally different from consumer aerosols and requires specialized chemical engineering knowledge.",
      "Propellant selection is a critical technical decision in aerosol manufacturing. The most common propellants for industrial aerosols in India are LPG (liquefied petroleum gas) blends and DME (dimethyl ether). The propellant affects spray pattern, drying time, flammability classification, and product shelf life. Environmental regulations are also evolving — India has adopted HFC phase-down schedules aligned with the Kigali Amendment, driving the industry toward low-GWP propellant alternatives.",
      "The filling process involves multiple precision steps: can preparation and cleaning, product filling (where the liquid formulation is dispensed into the can), valve crimping (sealing the can with a metered valve assembly), propellant gassing (injecting the propellant through the valve under pressure), and quality testing of each batch. Modern filling lines operate at speeds of 40-60 cans per minute with automated weight checks and leak detection at every stage.",
      "Quality control in aerosol manufacturing is governed by several Indian and international standards. BIS (Bureau of Indian Standards) has specifications for aerosol containers. The Petroleum and Explosives Safety Organisation (PESO) regulates the storage and transport of pressurized containers. For export-oriented manufacturers, compliance with EU Aerosol Dispensers Directive (75/324/EEC) and UN transport regulations is essential.",
      "For industrial specialty aerosols, additional quality parameters include spray pattern consistency (tested with spray pattern analysis equipment), propellant ratio accuracy (critical for product performance), accelerated aging tests (to verify 3-5 year shelf life claims), and corrosion testing of the can interior. ISO 9001:2015 certification provides the quality management framework that professional buyers increasingly require from their aerosol suppliers.",
      "The Indian aerosol market presents significant opportunities in the industrial segment. While consumer aerosols like personal care and household products dominate by volume, industrial aerosols command significantly higher margins and benefit from long-term buyer relationships. Key growth verticals include automotive manufacturing (anti-spatter, mould release, maintenance sprays), electronics manufacturing (conformal coatings, contact cleaners, flux removers), and general MRO (lubricants, penetrants, degreasers).",
      "Contract manufacturing and private labeling represent a growing opportunity for established aerosol manufacturers. Many industrial chemical companies want to offer aerosol products under their own brand but lack the specialized filling infrastructure and formulation expertise required. A manufacturer with in-house R&D, quality certification, and flexible minimum order quantities is well-positioned to serve this demand.",
      "Micron Aerosols has been manufacturing industrial aerosols from our Sangamner, Maharashtra facility since 1989. We offer both branded products across six series (S1000 through S6000) and OEM/contract manufacturing services for companies looking to develop custom aerosol formulations. Contact us to discuss your manufacturing requirements.",
    ],
    relatedProducts: [
      { name: "S1000 Series (Mould Release)", href: "/products" },
      { name: "S2000 Series (Welding)", href: "/products" },
      { name: "S3000 Series (Electronics)", href: "/products" },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*  Metadata & static params                                                   */
/* -------------------------------------------------------------------------- */

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.metaDescription };
}

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const CATEGORY_COLORS: Record<string, string> = {
  "Conformal Coating": "bg-blue-900/10 text-blue-900",
  "Mould Release": "bg-green-900/10 text-green-900",
  Welding: "bg-orange-900/10 text-orange-900",
  Industry: "bg-gray-900/10 text-gray-900",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-dark-bg px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            ALL ARTICLES
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider ${CATEGORY_COLORS[post.category] ?? "bg-gray-800 text-gray-300"}`}>
              {post.category}
            </span>
            <time className="text-sm text-gray-400" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span className="text-sm text-gray-400">{post.readTime}</span>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-wider md:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Article */}
          <article className="lg:col-span-2">
            <div className="max-w-prose">
              {post.content.map((paragraph, i) => (
                <p key={i} className="mb-6 leading-relaxed text-[#4d4d4d]">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Related Products */}
              <div className="border border-border p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-heading">
                  RELATED PRODUCTS
                </h3>
                <ul className="mt-4 space-y-3">
                  {post.relatedProducts.map((product) => (
                    <li key={product.name}>
                      <Link
                        href={product.href}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-dark-bg p-6 text-white">
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  NEED THESE PRODUCTS?
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Get competitive pricing for bulk orders or request product samples for your application.
                </p>
                <Link
                  href="/get-quote"
                  className="btn-accent mt-4 inline-block px-6 py-2.5 text-sm"
                >
                  GET A QUOTE
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-primary px-4 py-16 text-center text-white">
        <h2 className="text-2xl font-bold uppercase tracking-wider">NEED THESE PRODUCTS?</h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100">
          Our specialists can help you choose the right product for your application and provide competitive bulk pricing.
        </p>
        <Link
          href="/get-quote"
          className="btn-accent mt-8 inline-block px-10 py-3.5 text-sm"
        >
          REQUEST A QUOTE
        </Link>
      </section>
    </>
  );
}
