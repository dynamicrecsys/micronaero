import { NextRequest, NextResponse } from "next/server";
import { getLead, updateLead } from "@/lib/leads-store";
import type { LeadStatus } from "@/types/lead";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(
  _request: NextRequest,
  context: RouteContext
) {
  const { id } = await context.params;
  const lead = await getLead(id);

  if (!lead) {
    return NextResponse.json(
      { success: false, error: "Lead not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, lead });
}

export async function PATCH(
  request: NextRequest,
  context: RouteContext
) {
  const { id } = await context.params;

  try {
    const body = (await request.json()) as { status?: string };

    const validStatuses: LeadStatus[] = ["new", "contacted", "converted"];
    if (body.status && !validStatuses.includes(body.status as LeadStatus)) {
      return NextResponse.json(
        { success: false, error: "Invalid status." },
        { status: 400 }
      );
    }

    const updated = await updateLead(id, {
      status: body.status as LeadStatus | undefined,
    });

    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Lead not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, lead: updated });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }
}
