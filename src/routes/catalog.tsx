import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PLANT_CATEGORIES, plants, whatsappLink, type PlantCategory } from "@/lib/nursery-data";
import { Slider } from "@/components/ui/slider";
import { Droplets, MessageCircle, Sun } from "lucide-react";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Plant Catalog — R.K Nursery" },
      { name: "description", content: "Browse R.K Nursery's collection of indoor, outdoor, flowering, fruit, and succulent plants. Filter by category and price, order on WhatsApp." },
      { property: "og:title", content: "Plant Catalog — R.K Nursery" },
      { property: "og:description", content: "Indoor, outdoor, flowering, fruit and succulent plants — all hand-grown." },
    ],
  }),
  component: Catalog,
});

const categories = ["All", ...PLANT_CATEGORIES] as const;
type Filter = (typeof categories)[number];

const PRICE_MIN = Math.min(...plants.map((p) => p.price));
const PRICE_MAX = Math.max(...plants.map((p) => p.price));

function Catalog() {
  const [filter, setFilter] = useState<Filter>("All");
  const [range, setRange] = useState<[number, number]>([PRICE_MIN, PRICE_MAX]);

  const list = useMemo(
    () =>
      plants.filter((p) => {
        const inCat = filter === "All" || p.category === (filter as PlantCategory);
        const inPrice = p.price >= range[0] && p.price <= range[1];
        return inCat && inPrice;
      }),
    [filter, range]
  );

  const resetFilters = () => {
    setFilter("All");
    setRange([PRICE_MIN, PRICE_MAX]);
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
          Every plant below is in stock at the greenhouse. Tap any plant to message us on WhatsApp — we'll confirm size, pot options, and arrange delivery.
        </p>

        {/* FILTERS */}
        <div className="mt-10 grid gap-6 rounded-2xl border border-border bg-card p-5 md:grid-cols-[1fr_auto] md:items-end md:p-6">
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

        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <p>
            Showing <span className="text-primary">{list.length}</span> of {plants.length} plants
          </p>
          {(filter !== "All" || range[0] !== PRICE_MIN || range[1] !== PRICE_MAX) && (
            <button onClick={resetFilters} className="text-primary hover:underline">
              Clear filters
            </button>
          )}
        </div>
      </section>

      <section className="container-rk pb-24">
        {list.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
            <p className="font-display text-2xl text-primary">No plants match those filters.</p>
            <p className="mt-2 text-muted-foreground">Try widening the price range or switching category.</p>
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
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl text-primary">{p.name}</h3>
                    <p className="truncate text-xs italic text-muted-foreground">{p.latin}</p>
                  </div>
                  <p className="font-display text-xl text-primary">₹{p.price}</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Sun className="h-3 w-3" /> {p.light}</span>
                  <span className="inline-flex items-center gap-1"><Droplets className="h-3 w-3" /> {p.water}</span>
                </div>
                <a
                  href={whatsappLink(`Hi R.K Nursery, I'd like to order: ${p.name} (₹${p.price}). Please confirm availability.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:bg-primary/90"
                >
                  <MessageCircle className="h-4 w-4" /> Order on WhatsApp
                </a>
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
