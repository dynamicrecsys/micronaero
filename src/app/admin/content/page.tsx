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
    <div className="bg-white border border-[#e5e5e5] mb-4">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#e5e5e5]">
        <h2 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999]">
          {title}
        </h2>
        <button
          className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase border border-[#e5e5e5] text-[#ccc] cursor-not-allowed"
          disabled
          title="Coming soon"
        >
          Edit
        </button>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function FieldDisplay({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-2.5 border-b border-[#f0f0f0] last:border-b-0">
      <p className="text-[9px] font-semibold tracking-[0.15em] uppercase text-[#bbb] mb-1">
        {label}
      </p>
      <p className="text-[13px] text-[#333]">{value || "-"}</p>
    </div>
  );
}

export default function AdminContentPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-lg font-bold tracking-[0.1em] uppercase text-[#0a0a0a]">
            Content
          </h1>
          <p className="text-[11px] text-[#999] mt-1">
            Site content and copy management
          </p>
        </div>
      </div>

      <div className="bg-[#0099ff]/5 border border-[#0099ff]/20 px-4 py-2.5 mb-6">
        <p className="text-[11px] font-medium tracking-wider text-[#0099ff]">
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

          <div className="mt-5">
            <p className="text-[9px] font-semibold tracking-[0.15em] uppercase text-[#bbb] mb-3">
              Values ({aboutPage.values.length})
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {aboutPage.values.map((v) => (
                <div
                  key={v.title}
                  className="px-3.5 py-2.5 bg-[#fafafa] border border-[#f0f0f0]"
                >
                  <p className="text-[12px] font-semibold text-[#0a0a0a]">{v.title}</p>
                  <p className="text-[11px] text-[#999] mt-0.5 line-clamp-2">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[9px] font-semibold tracking-[0.15em] uppercase text-[#bbb] mb-3">
              Team ({aboutPage.team.length})
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {aboutPage.team.map((t) => (
                <div
                  key={t.name}
                  className="px-3.5 py-2.5 bg-[#fafafa] border border-[#f0f0f0]"
                >
                  <p className="text-[12px] font-semibold text-[#0a0a0a]">
                    {t.name} &mdash; {t.title}
                  </p>
                  <p className="text-[11px] text-[#999] mt-0.5 line-clamp-2">
                    {t.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ContentBlock>

        <ContentBlock title="Series Descriptions">
          <div className="space-y-3">
            {Object.entries(seriesDescriptions).map(([key, series]) => (
              <div key={key} className="flex items-start gap-3 py-2 border-b border-[#f0f0f0] last:border-b-0">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#0099ff] bg-[#0099ff]/10 px-1.5 py-0.5 flex-shrink-0 mt-0.5">
                  {key}
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-[#0a0a0a]">{series.title}</p>
                  <p className="text-[11px] text-[#999] mt-0.5">{series.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>
      </div>
    </div>
  );
}
