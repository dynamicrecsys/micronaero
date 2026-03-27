import { NextRequest, NextResponse } from "next/server";
import { getLeads, createLead } from "@/lib/leads-store";
import type { LeadType, CreateLeadInput } from "@/types/lead";

type LeadPayload = {
  lead_type: LeadType;
  name: string;
  phone?: string;
  email?: string;
  company?: string;
  message?: string;
  products?: string[];
  [key: string]: unknown;
};

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET() {
  // Auth is checked in proxy — if we get here, user is authenticated
  const leads = await getLeads();
  return NextResponse.json({ success: true, leads });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadPayload;

    if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Name is required (minimum 2 characters)." },
        { status: 400, headers: CORS_HEADERS },
      );
    }

    if (!body.phone && !body.email) {
      return NextResponse.json(
        { success: false, error: "Please provide a phone number or email address." },
        { status: 400, headers: CORS_HEADERS },
      );
    }

    const validTypes: LeadType[] = ["quote", "dealer", "contact", "oem"];
    if (!body.lead_type || !validTypes.includes(body.lead_type)) {
      return NextResponse.json(
        { success: false, error: "Invalid lead type." },
        { status: 400, headers: CORS_HEADERS },
      );
    }

    const input: CreateLeadInput = {
      lead_type: body.lead_type,
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      message: body.message,
      products: body.products,
      metadata: {
        userAgent: request.headers.get("user-agent") ?? "",
        referer: request.headers.get("referer") ?? "",
        ip: request.headers.get("x-forwarded-for") ?? "",
      },
    };

    await createLead(input);

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been received. We will get back to you shortly.",
      },
      { status: 200, headers: CORS_HEADERS },
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400, headers: CORS_HEADERS },
    );
  }
}
