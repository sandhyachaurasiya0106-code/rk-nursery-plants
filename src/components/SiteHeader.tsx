import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-40">
      {/* Promo strip */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-rk flex h-9 items-center justify-center gap-2 text-center text-xs sm:text-sm">
          <span>Plants starting @ ₹250</span>
          <span className="opacity-50">•</span>
          <span className="hidden sm:inline">Free local delivery on orders above ₹999</span>
          <span className="opacity-50 hidden sm:inline">•</span>
          <Link to="/catalog" className="underline-offset-4 hover:underline">View offers</Link>
        </div>
      </div>
      <header className="border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container-rk flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="font-display text-xl tracking-tight">R.K Nursery</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <Link to="/" className="text-foreground/70 transition hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>Home</Link>
            <Link to="/catalog" className="text-foreground/70 transition hover:text-primary" activeProps={{ className: "text-primary" }}>Catalog</Link>
            <Link to="/journal" className="text-foreground/70 transition hover:text-primary" activeProps={{ className: "text-primary" }}>Journal</Link>
            <Link to="/visit" className="text-foreground/70 transition hover:text-primary" activeProps={{ className: "text-primary" }}>Visit</Link>
          </nav>
          <Link
            to="/catalog"
            className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground shadow-soft transition hover:bg-primary/90"
          >
            Shop plants
          </Link>
        </div>
      </header>
    </div>
  );
}

