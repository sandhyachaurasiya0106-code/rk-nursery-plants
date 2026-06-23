import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ShieldCheck, Loader2 } from "lucide-react";
import { useCart } from "@/lib/cart";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

const SCRIPT_SRC = "https://checkout.razorpay.com/v1/checkout.js";

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(true));
      existing.addEventListener("error", () => resolve(false));
      return;
    }
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

type Customer = { name?: string; phone?: string; email?: string; address?: string };

export function RazorpayCheckout({
  customer,
  className,
  label = "Pay securely with Razorpay",
}: {
  customer?: Customer;
  className?: string;
  label?: string;
}) {
  const { detailed, total, clear } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const disabled = loading || detailed.length === 0 || total <= 0;

  async function handlePay() {
    setError(null);
    setLoading(true);
    try {
      const ok = await loadRazorpay();
      if (!ok) throw new Error("Could not load Razorpay. Please retry.");

      const items = detailed.map((d) => ({
        id: d.plant.id,
        name: d.plant.name,
        qty: d.qty,
        price: d.plant.price,
      }));

      const res = await fetch("/api/public/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total, items, customer }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Could not create order");
      }
      const { orderId, amount, currency, keyId } = (await res.json()) as {
        orderId: string;
        amount: number;
        currency: string;
        keyId: string;
      };

      const rzp = new window.Razorpay!({
        key: keyId,
        amount,
        currency,
        name: "R.K Nursery",
        description: "Plant order",
        order_id: orderId,
        prefill: {
          name: customer?.name ?? "",
          email: customer?.email ?? "",
          contact: customer?.phone ?? "",
        },
        notes: { address: customer?.address ?? "" },
        theme: { color: "#2f6a3a" },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const v = await fetch("/api/public/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const data = (await v.json()) as { ok?: boolean; orderId?: string; error?: string };
            if (!v.ok || !data.ok) throw new Error(data.error || "Verification failed");
            clear();
            navigate({
              to: "/order-success",
              search: { order: response.razorpay_order_id, payment: response.razorpay_payment_id },
            });
          } catch (e) {
            setError(e instanceof Error ? e.message : "Verification failed");
          }
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      });
      rzp.open();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={handlePay}
        disabled={disabled}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ShieldCheck className="h-4 w-4" />
        )}
        {loading ? "Opening checkout…" : label}
      </button>
      <p className="mt-2 text-center text-[11px] text-muted-foreground">
        UPI · GPay · PhonePe · Paytm · Cards · Net Banking — Secured by Razorpay
      </p>
      {error ? (
        <p className="mt-2 text-center text-xs text-destructive">{error}</p>
      ) : null}
    </div>
  );
}
