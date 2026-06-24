import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PLANT_CATEGORIES, plants, whatsappLink, type PlantCategory } from "@/lib/nursery-data";
import { Slider } from "@/components/ui/slider";
import { Droplets, MessageCircle, Plus, Search, Sun } from "lucide-react";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Plant Catalog — R.K Nursery" },
      { name: "description", content: "Browse R.K Nursery's collection of 200+ indoor, outdoor, flowering, fruit, succulent, ayurvedic plants and planters. Search, filter, and order online." },
      { property: "og:title", content: "Plant Catalog — R.K Nursery" },
      { property: "og:description", content: "Indoor, outdoor, flowering, fruit, succulent, ayurvedic plants and planters — all hand-grown." },
    ],
  }),
  component: Catalog,
});

const categories = ["All", ...PLANT_CATEGORIES] as const;
type Filter = (typeof categories)[number];
type SortKey = "featured" | "price-asc" | "price-desc" | "name-asc";

const PRICE_MIN = Math.min(...plants.map((p) => p.price));
const PRICE_MAX = Math.max(...plants.map((p) => p.price));

function Catalog() {
  const [filter, setFilter] = useState<Filter>("All");
  const [range, setRange] = useState<[number, number]>([PRICE_MIN, PRICE_MAX]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const { add } = useCart();

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = plants.filter((p) => {
      const inCat = filter === "All" || p.category === (filter as PlantCategory);
      const inPrice = p.price >= range[0] && p.price <= range[1];
      const inQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.latin?.toLowerCase().includes(q) ?? false) ||
        p.category.toLowerCase().includes(q);
      return inCat && inPrice && inQuery;
    });

    switch (sort) {
      case "price-asc":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "name-asc":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [filter, range, query, sort]);

  const resetFilters = () => {
    setFilter("All");
    setRange([PRICE_MIN, PRICE_MAX]);
    setQuery("");
    setSort("featured");
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="container-rk pt-16 pb-10 md:pt-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">The catalog</p>
        <h1 className="mt-2 max-w-3xl text-5xl text-primary md:text-6xl">
          Pick your next <em className="italic text-[color:var(--moss)]">green companion.</em>
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Every plant below is in stock at the greenhouse. Add to cart and checkout securely, or message us on WhatsApp to confirm size and arrange delivery.
        </p>

        {/* FILTERS */}
        <div className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-5 md:p-6">
          {/* Search + Sort */}
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by plant name, latin name, or category..."
                className="w-full rounded-full border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary"
              />
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="rounded-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="name-asc">Name A–Z</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Category</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={`rounded-full border px-4 py-1.5 text-sm transition ${
                      filter === c
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground/70 hover:border-primary/30"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-w-0 md:w-72">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Price</p>
                <p className="font-display text-sm text-primary">
                  ₹{range[0]} – ₹{range[1]}
                </p>
              </div>
              <Slider
                className="mt-4"
                min={PRICE_MIN}
                max={PRICE_MAX}
                step={50}
                value={[range[0], range[1]]}
                onValueChange={(v) => setRange([v[0] ?? PRICE_MIN, v[1] ?? PRICE_MAX])}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <p>
            Showing <span className="text-primary">{list.length}</span> of {plants.length} products
          </p>
          {(filter !== "All" || range[0] !== PRICE_MIN || range[1] !== PRICE_MAX || query || sort !== "featured") && (
            <button onClick={resetFilters} className="text-primary hover:underline">
              Clear filters
            </button>
          )}
        </div>
      </section>

      <section className="container-rk pb-24">
        {list.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
            <p className="font-display text-2xl text-primary">No products match those filters.</p>
            <p className="mt-2 text-muted-foreground">Try widening the price range, switching category, or clearing your search.</p>
            <button onClick={resetFilters} className="mt-6 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article key={p.id} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-[color:var(--cream-deep)]">
                  <img src={p.image} alt={p.name} loading="lazy" width={800} height={1000} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs text-primary backdrop-blur">
                    {p.category}
                  </span>
                  {p.stock !== "in" && (
                    <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs backdrop-blur ${
                      p.stock === "out"
                        ? "bg-destructive/90 text-destructive-foreground"
                        : "bg-amber-500/90 text-white"
                    }`}>
                      {p.stock === "out" ? "Out of stock" : "Low stock"}
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl text-primary">{p.name}</h3>
                    {p.latin && <p className="truncate text-xs italic text-muted-foreground">{p.latin}</p>}
                  </div>
                  <p className="font-display text-xl text-primary">₹{p.price}</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Sun className="h-3 w-3" /> {p.light}</span>
                  <span className="inline-flex items-center gap-1"><Droplets className="h-3 w-3" /> {p.water}</span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => add(p.id)}
                    disabled={p.stock === "out"}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Plus className="h-4 w-4" /> {p.stock === "out" ? "Sold out" : "Add to cart"}
                  </button>
                  <a
                    href={whatsappLink(`Hi R.K Nursery, I'd like to order: ${p.name} (₹${p.price}). Please confirm availability.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm text-primary transition hover:bg-primary/5"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
