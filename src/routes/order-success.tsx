import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type SuccessSearch = { order?: string; payment?: string };

export const Route = createFileRoute("/order-success")({
  validateSearch: (s: Record<string, unknown>): SuccessSearch => ({
    order: typeof s.order === "string" ? s.order : undefined,
    payment: typeof s.payment === "string" ? s.payment : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Order Confirmed — R.K Nursery" },
      { name: "description", content: "Your payment was successful. Thank you for ordering from R.K Nursery." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: OrderSuccessPage,
});

function OrderSuccessPage() {
  const { order, payment } = Route.useSearch();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-rk py-16">
        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-display text-3xl text-primary">Order confirmed</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Thanks for shopping with R.K Nursery. Your payment was successful and our
            team will reach out shortly with delivery details.
          </p>
          <dl className="mt-6 space-y-2 rounded-xl bg-muted/40 p-4 text-left text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Order ID</dt>
              <dd className="truncate font-mono">{order ?? "—"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Payment ID</dt>
              <dd className="truncate font-mono">{payment ?? "—"}</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-primary/90"
            >
              Continue shopping
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm text-primary hover:bg-primary/5"
            >
              Back home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
