import { NextResponse } from "next/server";
import { isStripeConfigured } from "@/lib/stripe";

/**
 * Checkout API stub.
 * When Stripe keys are present, create a Checkout Session here.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!isStripeConfigured()) {
    return NextResponse.json({
      ok: true,
      mode: "demo",
      message:
        "Demo order accepted locally. Connect Stripe keys in .env.local when ready.",
      orderId: body?.orderId ?? null,
    });
  }

  return NextResponse.json(
    {
      ok: false,
      message: "Stripe Checkout session creation not implemented yet.",
    },
    { status: 501 },
  );
}
