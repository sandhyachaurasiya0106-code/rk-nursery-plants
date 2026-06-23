import { createFileRoute } from "@tanstack/react-router";

type CartItemPayload = { id: string; name: string; qty: number; price: number };

type CreateOrderBody = {
  amount: number; // rupees (integer)
  items: CartItemPayload[];
  customer?: {
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
  };
  notes?: string;
};

export const Route = createFileRoute("/api/public/razorpay/create-order")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const keyId = process.env.RAZORPAY_KEY_ID;
          const keySecret = process.env.RAZORPAY_KEY_SECRET;
          if (!keyId || !keySecret) {
            return Response.json(
              { error: "Razorpay keys are not configured." },
              { status: 500 },
            );
          }

          const body = (await request.json()) as CreateOrderBody;
          const rupees = Math.round(Number(body.amount));
          if (!rupees || rupees <= 0) {
            return Response.json({ error: "Invalid amount." }, { status: 400 });
          }
          if (!Array.isArray(body.items) || body.items.length === 0) {
            return Response.json({ error: "Cart is empty." }, { status: 400 });
          }

          const amountPaise = rupees * 100;
          const receipt = `rk_${Date.now()}`;

          const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
          const rzpRes = await fetch("https://api.razorpay.com/v1/orders", {
            method: "POST",
            headers: {
              Authorization: `Basic ${auth}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: amountPaise,
              currency: "INR",
              receipt,
              notes: { source: "rk-nursery" },
            }),
          });

          if (!rzpRes.ok) {
            const txt = await rzpRes.text();
            console.error("Razorpay order create failed:", rzpRes.status, txt);
            return Response.json(
              { error: "Failed to create Razorpay order." },
              { status: 502 },
            );
          }
          const order = (await rzpRes.json()) as {
            id: string;
            amount: number;
            currency: string;
          };

          // Persist a 'created' order row (server-only)
          const { supabaseAdmin } = await import(
            "@/integrations/supabase/client.server"
          );
          const { error: dbErr } = await supabaseAdmin.from("orders").insert({
            razorpay_order_id: order.id,
            amount: amountPaise,
            currency: order.currency,
            status: "created",
            customer_name: body.customer?.name ?? null,
            customer_phone: body.customer?.phone ?? null,
            customer_email: body.customer?.email ?? null,
            customer_address: body.customer?.address ?? null,
            items: body.items,
            notes: body.notes ?? null,
          });
          if (dbErr) console.error("Failed to persist order:", dbErr);

          return Response.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            keyId,
          });
        } catch (err) {
          console.error("create-order error:", err);
          return Response.json({ error: "Server error" }, { status: 500 });
        }
      },
    },
  },
});
