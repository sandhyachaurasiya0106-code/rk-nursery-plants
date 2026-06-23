import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "crypto";

type VerifyBody = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

async function notifyAdmin(order: {
  id: string;
  razorpay_order_id: string;
  razorpay_payment_id: string | null;
  amount: number;
  customer_name: string | null;
  customer_phone: string | null;
  customer_email: string | null;
  customer_address: string | null;
  items: unknown;
}) {
  const adminEmail = process.env.ADMIN_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;
  if (!adminEmail) return { sent: false, reason: "no_admin_email" };

  const itemsList = Array.isArray(order.items)
    ? (order.items as Array<{ name: string; qty: number; price: number }>)
        .map((i) => `<li>${i.name} × ${i.qty} — ₹${i.price * i.qty}</li>`)
        .join("")
    : "";
  const html = `
    <h2>New paid order — R.K Nursery</h2>
    <p><b>Order:</b> ${order.razorpay_order_id}<br/>
    <b>Payment:</b> ${order.razorpay_payment_id ?? "-"}<br/>
    <b>Amount:</b> ₹${(order.amount / 100).toFixed(2)}</p>
    <h3>Customer</h3>
    <p>${order.customer_name ?? "-"}<br/>
    ${order.customer_phone ?? ""}<br/>
    ${order.customer_email ?? ""}<br/>
    ${order.customer_address ?? ""}</p>
    <h3>Items</h3>
    <ul>${itemsList}</ul>
  `;

  if (!resendKey) {
    console.log("[admin-notify] (no RESEND_API_KEY) Would email", adminEmail, html);
    return { sent: false, reason: "no_resend" };
  }

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "R.K Nursery <onboarding@resend.dev>",
        to: [adminEmail],
        subject: `New order ${order.razorpay_order_id} — ₹${(order.amount / 100).toFixed(2)}`,
        html,
      }),
    });
    if (!r.ok) {
      console.error("Resend send failed:", r.status, await r.text());
      return { sent: false, reason: "resend_error" };
    }
    return { sent: true };
  } catch (err) {
    console.error("notifyAdmin error:", err);
    return { sent: false, reason: "exception" };
  }
}

export const Route = createFileRoute("/api/public/razorpay/verify")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const keySecret = process.env.RAZORPAY_KEY_SECRET;
          if (!keySecret) {
            return Response.json({ error: "Not configured" }, { status: 500 });
          }
          const body = (await request.json()) as VerifyBody;
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
          if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return Response.json({ error: "Missing fields" }, { status: 400 });
          }

          const expected = createHmac("sha256", keySecret)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");
          const sigBuf = Buffer.from(razorpay_signature);
          const expBuf = Buffer.from(expected);
          const valid =
            sigBuf.length === expBuf.length && timingSafeEqual(sigBuf, expBuf);

          const { supabaseAdmin } = await import(
            "@/integrations/supabase/client.server"
          );

          if (!valid) {
            await supabaseAdmin
              .from("orders")
              .update({
                status: "failed",
                razorpay_payment_id,
                razorpay_signature,
              })
              .eq("razorpay_order_id", razorpay_order_id);
            return Response.json(
              { ok: false, error: "Invalid signature" },
              { status: 400 },
            );
          }

          const { data: updated, error: updErr } = await supabaseAdmin
            .from("orders")
            .update({
              status: "paid",
              razorpay_payment_id,
              razorpay_signature,
            })
            .eq("razorpay_order_id", razorpay_order_id)
            .select("*")
            .single();
          if (updErr) {
            console.error("Order update failed:", updErr);
            return Response.json({ error: "DB error" }, { status: 500 });
          }

          const notify = await notifyAdmin(updated);
          if (notify.sent) {
            await supabaseAdmin
              .from("orders")
              .update({ admin_notified: true })
              .eq("id", updated.id);
          }

          return Response.json({ ok: true, orderId: updated.id });
        } catch (err) {
          console.error("verify error:", err);
          return Response.json({ error: "Server error" }, { status: 500 });
        }
      },
    },
  },
});
