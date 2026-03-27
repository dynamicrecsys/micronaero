// Site-wide constants

export const SITE_NAME = "Micron Aerosols";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://micronaero.com";

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export const DEFAULT_REVALIDATE = 3600;

export type SeriesInfo = {
  name: string;
  collectionHandle: string;
};

export const SERIES_MAP: Record<string, SeriesInfo> = {
  S1000: {
    name: "Cleaners & Degreasers",
    collectionHandle: "s1000-cleaners-degreasers",
  },
  S2000: {
    name: "Lubricants & Penetrants",
    collectionHandle: "s2000-lubricants-penetrants",
  },
  S3000: {
    name: "Coatings & Protectants",
    collectionHandle: "s3000-coatings-protectants",
  },
  S4000: {
    name: "Adhesives & Sealants",
    collectionHandle: "s4000-adhesives-sealants",
  },
  S5000: {
    name: "MRO Specialities",
    collectionHandle: "s5000-mro-specialities",
  },
  S6000: {
    name: "Food Grade & NSF",
    collectionHandle: "s6000-food-grade-nsf",
  },
};
