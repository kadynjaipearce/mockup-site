import { NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { amount } = await req.json();
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "aud",
            product_data: { name: "Gift Voucher" },
            unit_amount: Number(amount) * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://mockup-site.vercel.app/",
      cancel_url: "https://mockup-site.vercel.app/",
    });
    return Response.json({ url: session.url });
  } catch {
    return new Response(JSON.stringify({ error: "Stripe error" }), {
      status: 500,
    });
  }
}
