import { NextRequest, NextResponse } from "next/server";
import {
  verifyPassword,
  getAuthToken,
  COOKIE_NAME,
  COOKIE_MAX_AGE,
} from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { password?: string };

    if (!body.password || typeof body.password !== "string") {
      return NextResponse.json(
        { success: false, error: "Password is required." },
        { status: 400 }
      );
    }

    if (!verifyPassword(body.password)) {
      return NextResponse.json(
        { success: false, error: "Invalid password." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(COOKIE_NAME, getAuthToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: COOKIE_MAX_AGE,
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
