// Client-side lead scoring module

const STORAGE_KEY = "mn_lead_score";
const BREAKDOWN_KEY = "mn_lead_breakdown";

export type LeadAction =
  | "solution_page_view"
  | "tds_download"
  | "viewed_3_products"
  | "bulk_pricing_viewed"
  | "time_on_product_2min"
  | "whatsapp_click"
  | "form_submitted"
  | "b2b_campaign_entry";

export type LeadTier = "cold" | "warm" | "hot";

type ScoreEntry = {
  action: LeadAction;
  points: number;
  timestamp: number;
};

const SCORE_MAP: Record<LeadAction, number> = {
  solution_page_view: 10,
  tds_download: 15,
  viewed_3_products: 10,
  bulk_pricing_viewed: 10,
  time_on_product_2min: 5,
  whatsapp_click: 20,
  form_submitted: 50,
  b2b_campaign_entry: 15,
};

function isStorageAvailable(): boolean {
  try {
    const test = "__mn_test__";
    localStorage.setItem(test, "1");
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

export function getLeadScore(): number {
  if (!isStorageAvailable()) return 0;
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? Number(raw) : 0;
}

export function addLeadScore(action: LeadAction): number {
  if (!isStorageAvailable()) return 0;

  const points = SCORE_MAP[action];
  const current = getLeadScore();
  const newScore = current + points;

  localStorage.setItem(STORAGE_KEY, String(newScore));

  // Append to breakdown
  const breakdown = getScoreBreakdown();
  breakdown.push({ action, points, timestamp: Date.now() });
  localStorage.setItem(BREAKDOWN_KEY, JSON.stringify(breakdown));

  return newScore;
}

export function getScoreBreakdown(): ScoreEntry[] {
  if (!isStorageAvailable()) return [];
  const raw = localStorage.getItem(BREAKDOWN_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as ScoreEntry[];
  } catch {
    return [];
  }
}

export function getLeadTier(): LeadTier {
  const score = getLeadScore();
  if (score >= 51) return "hot";
  if (score >= 21) return "warm";
  return "cold";
}
