import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles, product guides, and industry insights from Micron Aerosols — India's industrial aerosol specialist.",
};

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "complete-guide-to-conformal-coating-selection",
    title: "Complete Guide to Conformal Coating Selection for PCB Protection",
    excerpt:
      "Choosing between acrylic, polyurethane, and silicone conformal coatings? This guide covers IPC standards, application methods, and selection criteria for Indian operating conditions where humidity and temperature extremes demand reliable protection.",
    date: "2026-03-15",
    category: "Conformal Coating",
    readTime: "8 min read",
  },
  {
    slug: "silicone-vs-non-silicone-mould-release-how-to-choose",
    title: "Silicone vs Non-Silicone Mould Release: How to Choose",
    excerpt:
      "The choice between silicone and non-silicone mould release agents depends on your downstream process. Learn when each type is the right choice for injection moulding, die casting, and rubber processing.",
    date: "2026-03-01",
    category: "Mould Release",
    readTime: "6 min read",
  },
  {
    slug: "understanding-anti-spatter-sprays-for-mig-tig-welding",
    title: "Understanding Anti-Spatter Sprays for MIG & TIG Welding",
    excerpt:
      "Anti-spatter sprays save hours of post-weld cleanup time in MIG and MAG welding. Learn how they work, proper application techniques, and what to look for when selecting an anti-spatter product for your welding line.",
    date: "2026-02-15",
    category: "Welding",
    readTime: "7 min read",
  },
  {
    slug: "5-signs-you-need-a-better-mould-release-agent",
    title: "5 Signs You Need a Better Mould Release Agent",
    excerpt:
      "Sticking parts, surface defects, and excessive build-up are symptoms of a poor mould release agent. Identify the five warning signs that your current release agent is costing you productivity and quality.",
    date: "2026-02-01",
    category: "Mould Release",
    readTime: "5 min read",
  },
  {
    slug: "how-conformal-coatings-protect-electronics-in-harsh-environments",
    title: "How Conformal Coatings Protect Electronics in Harsh Environments",
    excerpt:
      "From coastal salt spray to tropical humidity, Indian electronics face extreme environmental stress. Discover how conformal coatings create an invisible shield that extends PCB life by years, and which coating type suits your environment.",
    date: "2026-01-15",
    category: "Conformal Coating",
    readTime: "9 min read",
  },
  {
    slug: "complete-guide-to-aerosol-manufacturing-in-india",
    title: "The Complete Guide to Aerosol Manufacturing in India",
    excerpt:
      "India's aerosol manufacturing industry is growing rapidly. This comprehensive guide covers the manufacturing process, regulatory requirements, quality standards, and the opportunity landscape for industrial aerosols in India.",
    date: "2026-01-01",
    category: "Industry",
    readTime: "10 min read",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Conformal Coating": "bg-[#0099ff]/10 text-[#0099ff]",
  "Mould Release": "bg-[#0099ff]/10 text-[#0099ff]",
  Welding: "bg-[#0099ff]/10 text-[#0099ff]",
  Industry: "bg-[#0099ff]/10 text-[#0099ff]",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg px-4 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <h1 className="text-3xl font-bold uppercase tracking-wider md:text-4xl lg:text-5xl">
            TECHNICAL BLOG &amp; INDUSTRY INSIGHTS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Product guides, application tips, and expert knowledge from our team of industrial
            aerosol specialists.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col border border-border transition-colors hover:border-primary"
            >
              {/* Image area with dark hover overlay */}
              <div className="relative h-48 bg-gray-100">
                <div className="flex h-full items-center justify-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-dark-bg/0 transition-colors group-hover:bg-dark-bg/80">
                  <div className="flex h-full items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-sm font-bold uppercase tracking-wider text-white">
                      READ ARTICLE
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-800"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="mt-4 text-lg font-bold text-heading group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4d4d4d]">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <time className="text-xs text-gray-400" dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                  <span className="inline-flex items-center text-sm font-bold text-primary group-hover:underline">
                    Read more
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
