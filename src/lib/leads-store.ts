import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import type { Lead, CreateLeadInput, LeadStatus } from "@/types/lead";

const DATA_DIR = join(process.cwd(), "data");
const LEADS_FILE = join(DATA_DIR, "leads.json");

async function ensureDataDir(): Promise<void> {
  try {
    await mkdir(DATA_DIR, { recursive: true });
  } catch {
    // directory already exists
  }
}

async function readLeadsFile(): Promise<Lead[]> {
  try {
    const raw = await readFile(LEADS_FILE, "utf-8");
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

async function writeLeadsFile(leads: Lead[]): Promise<void> {
  await ensureDataDir();
  await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function getLeads(): Promise<Lead[]> {
  const leads = await readLeadsFile();
  return leads.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getLead(id: string): Promise<Lead | undefined> {
  const leads = await readLeadsFile();
  return leads.find((l) => l.id === id);
}

export async function createLead(input: CreateLeadInput): Promise<Lead> {
  const leads = await readLeadsFile();

  const lead: Lead = {
    id: randomUUID(),
    type: input.lead_type,
    name: input.name.trim(),
    email: input.email?.trim() ?? "",
    phone: input.phone?.trim() ?? "",
    company: input.company?.trim() ?? "",
    message: input.message?.trim() ?? "",
    products: input.products ?? [],
    status: "new",
    createdAt: new Date().toISOString(),
    metadata: input.metadata ?? {},
  };

  leads.push(lead);
  await writeLeadsFile(leads);
  return lead;
}

export async function updateLead(
  id: string,
  data: { status?: LeadStatus }
): Promise<Lead | undefined> {
  const leads = await readLeadsFile();
  const index = leads.findIndex((l) => l.id === id);
  if (index === -1) return undefined;

  if (data.status) {
    leads[index].status = data.status;
  }

  await writeLeadsFile(leads);
  return leads[index];
}
