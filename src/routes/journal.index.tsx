import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { posts } from "@/lib/nursery-data";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Plant Care Journal — R.K Nursery" },
      { name: "description", content: "Practical plant care guides from R.K Nursery growers — watering rhythms, light, repotting, and more." },
      { property: "og:title", content: "Plant Care Journal — R.K Nursery" },
      { property: "og:description", content: "Practical plant care guides from working growers." },
    ],
  }),
  component: Journal,
});

function Journal() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="container-rk pt-16 pb-12 md:pt-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">The journal</p>
        <h1 className="mt-2 max-w-3xl text-5xl text-primary md:text-6xl">
          Notes from the <em className="italic text-[color:var(--moss)]">greenhouse.</em>
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Honest, practical plant care — written by the same hands that grow your plants.
        </p>
      </section>
      <section className="container-rk pb-24">
        <div className="grid gap-12 md:grid-cols-2">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              to="/journal/$slug"
              params={{ slug: p.slug }}
              className={`group block ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl">
                <img src={p.image} alt={p.title} loading="lazy" width={1200} height={800} className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`} />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{p.date} · {p.readTime}</p>
              <h2 className={`mt-2 font-display text-primary group-hover:underline ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}>{p.title}</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
