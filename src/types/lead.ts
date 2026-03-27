export type LeadStatus = "new" | "contacted" | "converted";

export type LeadType = "quote" | "dealer" | "contact" | "oem";

export type Lead = {
  id: string;
  type: LeadType;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  products: string[];
  status: LeadStatus;
  createdAt: string;
  metadata: Record<string, unknown>;
};

export type CreateLeadInput = {
  lead_type: LeadType;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  products?: string[];
  metadata?: Record<string, unknown>;
};
