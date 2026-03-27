import { cookies } from "next/headers";

const COOKIE_NAME = "micron_admin_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? "admin";
}

function generateToken(password: string): string {
  // Simple hash-like token: base64 of password + secret salt
  const raw = `micron_admin_${password}_${process.env.ADMIN_PASSWORD ?? "salt"}`;
  return Buffer.from(raw).toString("base64");
}

export function verifyPassword(password: string): boolean {
  return password === getAdminPassword();
}

export function getAuthToken(): string {
  return generateToken(getAdminPassword());
}

export function verifyToken(token: string): boolean {
  return token === getAuthToken();
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME);
  if (!token) return false;
  return verifyToken(token.value);
}

export { COOKIE_NAME, COOKIE_MAX_AGE };
