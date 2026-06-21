import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { plants, whatsappLink } from "@/lib/nursery-data";
import { Droplets, MessageCircle, Sun } from "lucide-react";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Plant Catalog — R.K Nursery" },
      { name: "description", content: "Browse R.K Nursery's collection of indoor, outdoor, air-purifying and low-light plants. Order any plant on WhatsApp." },
      { property: "og:title", content: "Plant Catalog — R.K Nursery" },
      { property: "og:description", content: "Indoor, outdoor, air-purifying and low-light plants — all hand-grown." },
    ],
  }),
  component: Catalog,
});

const categories = ["All", "Indoor", "Outdoor", "Air Purifying", "Low Light"] as const;

function Catalog() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const list = filter === "All" ? plants : plants.filter((p) => p.category === filter);

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
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/70 hover:border-primary/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-rk pb-24">
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
                <div>
                  <h3 className="font-display text-xl text-primary">{p.name}</h3>
                  <p className="text-xs italic text-muted-foreground">{p.latin}</p>
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
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
