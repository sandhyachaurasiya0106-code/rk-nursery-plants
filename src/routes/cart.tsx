import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart, buildCheckoutMessage } from "@/lib/cart";
import { whatsappLink } from "@/lib/nursery-data";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RazorpayCheckout } from "@/components/RazorpayCheckout";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — R.K Nursery" },
      { name: "description", content: "Review your selected plants and place your order on WhatsApp." },
      { property: "og:title", content: "Your Cart — R.K Nursery" },
      { property: "og:description", content: "Review your selected plants and place your order on WhatsApp." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { detailed, count, total, setQty, remove, clear } = useCart();
  const message = buildCheckoutMessage(detailed, total);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-rk py-10 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Cart</p>
            <h1 className="font-display text-3xl text-primary md:text-4xl">Your selected plants</h1>
          </div>
          <Link to="/catalog" className="text-sm text-primary underline-offset-4 hover:underline">
            Continue shopping
          </Link>
        </div>

        {detailed.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card px-6 py-16 text-center">
            <ShoppingBag className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-4 font-display text-xl text-primary">Your cart is empty</p>
            <p className="mt-2 text-sm text-muted-foreground">Browse the catalog and add a few plants to get started.</p>
            <Link
              to="/catalog"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground transition hover:bg-primary/90"
            >
              Shop plants
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
            <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
              {detailed.map(({ plant, qty, lineTotal }) => (
                <li key={plant.id} className="flex gap-4 p-4 sm:p-5">
                  <img src={plant.image} alt={plant.name} className="h-24 w-24 flex-none rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate font-display text-lg text-primary">{plant.name}</p>
                        <p className="text-xs text-muted-foreground">₹{plant.price} each</p>
                      </div>
                      <button
                        onClick={() => remove(plant.id)}
                        aria-label={`Remove ${plant.name}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button
                          onClick={() => setQty(plant.id, qty - 1)}
                          aria-label="Decrease quantity"
                          className="grid h-8 w-8 place-items-center text-primary hover:bg-primary/5"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm">{qty}</span>
                        <button
                          onClick={() => setQty(plant.id, qty + 1)}
                          aria-label="Increase quantity"
                          className="grid h-8 w-8 place-items-center text-primary hover:bg-primary/5"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="font-display text-lg text-primary">₹{lineTotal}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="h-fit rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-lg text-primary">Order summary</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Items</dt>
                  <dd>{count}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd>₹{total}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Delivery</dt>
                  <dd>Confirmed on WhatsApp</dd>
                </div>
              </dl>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Total</span>
                <span className="font-display text-2xl text-primary">₹{total}</span>
              </div>
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm text-primary-foreground transition hover:bg-primary/90"
              >
                Place order on WhatsApp
              </a>
              <button
                onClick={clear}
                className="mt-3 inline-flex w-full items-center justify-center gap-1.5 text-xs text-muted-foreground transition hover:text-destructive"
              >
                <Trash2 className="h-3.5 w-3.5" /> Clear cart
              </button>
            </aside>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
