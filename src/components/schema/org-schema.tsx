import { SITE_NAME, SITE_URL } from "@/lib/constants";

export function OrgSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "India's specialist manufacturer of industrial aerosols and specialty chemicals since 1989.",
    foundingDate: "1989",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
