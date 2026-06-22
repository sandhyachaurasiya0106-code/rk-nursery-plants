import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Popover, PopoverContent, PopoverTrigger, PopoverClose } from "@/components/ui/popover";
import { useCart, buildCheckoutMessage } from "@/lib/cart";
import { whatsappLink } from "@/lib/nursery-data";

export function CartButton() {
  const { detailed, count, total, setQty, remove, clear } = useCart();
  const message = buildCheckoutMessage(detailed, total);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`Open cart (${count} items)`}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary transition hover:border-primary/40 hover:bg-primary/5"
        >
          <ShoppingBag className="h-4 w-4" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
              {count}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={12} className="w-[22rem] p-0">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <p className="font-display text-base text-primary">Your cart</p>
          <p className="text-xs text-muted-foreground">
            {count} item{count === 1 ? "" : "s"}
          </p>
        </div>

        {detailed.length === 0 ? (
          <div className="px-4 py-10 text-center">
            <ShoppingBag className="mx-auto h-6 w-6 text-muted-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">Your cart is empty.</p>
            <p className="mt-1 text-xs text-muted-foreground">Add plants from the catalog to see them here.</p>
          </div>
        ) : (
          <>
            <ul className="max-h-80 divide-y divide-border overflow-y-auto">
              {detailed.map(({ plant, qty, lineTotal }) => (
                <li key={plant.id} className="flex gap-3 px-4 py-3">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="h-14 w-14 flex-none rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate text-sm font-medium text-primary">{plant.name}</p>
                      <button
                        onClick={() => remove(plant.id)}
                        aria-label={`Remove ${plant.name}`}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">₹{plant.price} each</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button
                          onClick={() => setQty(plant.id, qty - 1)}
                          aria-label="Decrease quantity"
                          className="grid h-6 w-6 place-items-center text-primary hover:bg-primary/5"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-xs">{qty}</span>
                        <button
                          onClick={() => setQty(plant.id, qty + 1)}
                          aria-label="Increase quantity"
                          className="grid h-6 w-6 place-items-center text-primary hover:bg-primary/5"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-primary">₹{lineTotal}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-border px-4 py-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Subtotal</span>
                <span className="font-display text-lg text-primary">₹{total}</span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Delivery confirmed on WhatsApp.
              </p>
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:bg-primary/90"
              >
                Checkout on WhatsApp
              </a>
              <PopoverClose asChild>
                <Link
                  to="/cart"
                  className="mt-2 flex w-full items-center justify-center rounded-full border border-border px-4 py-2 text-sm text-primary transition hover:border-primary/40 hover:bg-primary/5"
                >
                  View full cart
                </Link>
              </PopoverClose>
              <button
                onClick={clear}
                className="mt-2 inline-flex w-full items-center justify-center gap-1 text-xs text-muted-foreground transition hover:text-destructive"
              >
                <Trash2 className="h-3 w-3" /> Clear cart
              </button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
