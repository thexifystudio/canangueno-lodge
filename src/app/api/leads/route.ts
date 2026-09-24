import { NextResponse } from "next/server";
/**
 * Intake is not enabled until durable storage and delivery are configured.
 * Never acknowledge receipt, generate a booking reference or log personal data
 * when nothing has actually been saved. The UI prepares direct enquiries.
 */
export async function POST() {
  return NextResponse.json(
    { ok: false, error: "intake_not_configured" },
    { status: 503 },
  );
}
