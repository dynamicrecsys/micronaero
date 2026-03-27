import type { Metadata } from "next";
import { companyInfo, contactInfo, aboutPage, seriesDescriptions } from "@/data/content";

export const metadata: Metadata = {
  title: "Content | Micron Admin",
  robots: "noindex",
};

function ContentBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-[#e5e5e5] mb-6">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e5e5e5] bg-[#fafafa]">
        <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#0a0a0a]">
          {title}
        </h2>
        <button
          className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase border border-[#e5e5e5] text-[#4d4d4d] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-colors cursor-not-allowed opacity-50"
          disabled
          title="Coming soon"
        >
          Edit
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function FieldDisplay({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-2 border-b border-[#e5e5e5] last:border-b-0">
      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d] mb-0.5">
        {label}
      </p>
      <p className="text-sm text-[#0a0a0a]">{value || "-"}</p>
    </div>
  );
}

export default function AdminContentPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold tracking-[0.15em] uppercase text-[#0a0a0a]">
          Content
        </h1>
      </div>

      <div className="border-2 border-[#0099ff]/20 bg-[#0099ff]/5 px-4 py-3 mb-6">
        <p className="text-xs font-bold tracking-wider uppercase text-[#0099ff]">
          Full CMS coming soon. Currently managed via code.
        </p>
      </div>

      <div className="max-w-3xl">
        <ContentBlock title="Company Info">
          <FieldDisplay label="Name" value={companyInfo.name} />
          <FieldDisplay label="Legal Name" value={companyInfo.legalName} />
          <FieldDisplay label="Tagline" value={companyInfo.tagline} />
          <FieldDisplay label="Description" value={companyInfo.description} />
          <FieldDisplay label="Founded" value={String(companyInfo.foundedYear)} />
          <FieldDisplay
            label="Certifications"
            value={companyInfo.certifications.join(", ")}
          />
        </ContentBlock>

        <ContentBlock title="Contact Information">
          <FieldDisplay label="Address" value={contactInfo.address.full} />
          <FieldDisplay label="Contact Form URL" value={contactInfo.contactFormUrl} />
        </ContentBlock>

        <ContentBlock title="About Page">
          <FieldDisplay label="Headline" value={aboutPage.hero.headline} />
          <FieldDisplay label="Subline" value={aboutPage.hero.subline} />
          <FieldDisplay label="Body" value={aboutPage.hero.body} />

          <div className="mt-4">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d] mb-2">
              Values ({aboutPage.values.length})
            </p>
            <div className="space-y-2">
              {aboutPage.values.map((v) => (
                <div
                  key={v.title}
                  className="px-3 py-2 border border-[#e5e5e5]"
                >
                  <p className="text-xs font-bold text-[#0a0a0a]">{v.title}</p>
                  <p className="text-[11px] text-[#4d4d4d] mt-0.5 line-clamp-2">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#4d4d4d] mb-2">
              Team ({aboutPage.team.length})
            </p>
            <div className="space-y-2">
              {aboutPage.team.map((t) => (
                <div
                  key={t.name}
                  className="px-3 py-2 border border-[#e5e5e5]"
                >
                  <p className="text-xs font-bold text-[#0a0a0a]">
                    {t.name} — {t.title}
                  </p>
                  <p className="text-[11px] text-[#4d4d4d] mt-0.5 line-clamp-2">
                    {t.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ContentBlock>

        <ContentBlock title="Series Descriptions">
          {Object.entries(seriesDescriptions).map(([key, series]) => (
            <div key={key} className="py-2 border-b border-[#e5e5e5] last:border-b-0">
              <p className="text-xs font-bold text-[#0a0a0a]">
                {key}: {series.title}
              </p>
              <p className="text-[11px] text-[#4d4d4d] mt-0.5">
                {series.description}
              </p>
            </div>
          ))}
        </ContentBlock>
      </div>
    </div>
  );
}
