import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { CATEGORY_META, PLANT_CATEGORIES, plants, posts, whatsappLink } from "@/lib/nursery-data";
import hero from "@/assets/hero.jpg";
import { ArrowRight, Heart, Leaf, MapPin, MessageCircle, ShieldCheck, Sprout, Truck } from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "R.K Nursery — Premium plants, grown with care" },
      { name: "description", content: "A family-run nursery offering healthy indoor & outdoor plants, plant care guides, and WhatsApp ordering." },
      { property: "og:title", content: "R.K Nursery — Premium plants, grown with care" },
      { property: "og:description", content: "Healthy, well-rooted plants. Order on WhatsApp or visit our greenhouse." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = plants.slice(0, 4);
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-rk grid items-center gap-12 pt-16 pb-24 md:grid-cols-12 md:pt-24 md:pb-32">
          <div className="md:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Sprout className="h-3.5 w-3.5 text-[color:var(--moss)]" /> Est. family nursery
            </span>
            <h1 className="mt-6 text-5xl leading-[1.05] text-primary md:text-7xl">
              Living rooms<br />
              <em className="font-display italic text-[color:var(--moss)]">that breathe.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Hand-grown, well-rooted plants from R.K Nursery — delivered to your door or picked up from our greenhouse. Order in a tap on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/catalog" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground shadow-soft transition hover:bg-primary/90">
                Browse the catalog <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={whatsappLink("Hi R.K Nursery, I'd like to place an order.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3 text-sm text-primary transition hover:bg-secondary">
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 text-sm">
              {[
                { k: "200+", v: "varieties" },
                { k: "30 yrs", v: "growing" },
                { k: "Local", v: "delivery" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-primary">{s.k}</dt>
                  <dd className="text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative md:col-span-6">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[color:var(--cream-deep)]" />
            <img
              src={hero}
              alt="Sunlit greenhouse rows at R.K Nursery"
              width={1600}
              height={1100}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-lift md:aspect-[5/6]"
            />
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-border bg-[color:var(--cream-deep)]">
        <div className="container-rk grid gap-8 py-10 md:grid-cols-3">
          {[
            { Icon: Leaf, t: "Grown, not sourced", d: "Every plant is propagated and raised in our own greenhouse." },
            { Icon: Truck, t: "Safe local delivery", d: "Carefully packed and hand-delivered across the city." },
            { Icon: MessageCircle, t: "Order on WhatsApp", d: "Send a message, get a quote, and we'll handle the rest." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg text-primary">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-rk py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Shop by category</p>
            <h2 className="mt-2 text-4xl text-primary md:text-5xl">Find your plant kind.</h2>
          </div>
          <Link to="/catalog" className="hidden text-sm text-primary hover:underline md:inline">All plants →</Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANT_CATEGORIES.map((cat) => {
            const sample = plants.find((p) => p.category === cat);
            const count = plants.filter((p) => p.category === cat).length;
            const meta = CATEGORY_META[cat];
            return (
              <Link
                key={cat}
                to="/catalog"
                className="group relative overflow-hidden rounded-2xl bg-[color:var(--cream-deep)]"
              >
                {sample && (
                  <img
                    src={sample.image}
                    alt={`${cat} plants at R.K Nursery`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <p className="text-2xl">
</p>
                  <h3 className="mt-1 font-display text-2xl">{cat} Plants</h3>
                  <p className="mt-1 text-sm text-primary-foreground/85">{meta.tagline}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-sm">
                    View {count} plants <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED */}
      <section className="container-rk py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">This week's picks</p>
            <h2 className="mt-2 text-4xl text-primary md:text-5xl">Plants we'd take home.</h2>
          </div>
          <Link to="/catalog" className="hidden text-sm text-primary hover:underline md:inline">View all →</Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <article key={p.id} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-[color:var(--cream-deep)]">
                <img src={p.image} alt={p.name} loading="lazy" width={800} height={1000} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg text-primary">{p.name}</h3>
                  <p className="text-xs italic text-muted-foreground">{p.latin}</p>
                </div>
                <p className="font-display text-lg text-primary">₹{p.price}</p>
              </div>
              <a href={whatsappLink(`Hi R.K Nursery, I'd like to order: ${p.name} (₹${p.price}).`)} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm text-[color:var(--moss)] hover:text-primary">
                <MessageCircle className="h-3.5 w-3.5" /> Order on WhatsApp
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-rk grid gap-12 py-24 md:grid-cols-2 md:items-center">
          <h2 className="text-4xl md:text-5xl">
            Three decades of dirt under our nails — and we'd have it no other way.
          </h2>
          <div className="space-y-4 text-primary-foreground/80">
            <p>R.K Nursery began with a single greenhouse and a stubborn belief: that healthy plants need patience, good soil, and time. No shortcuts. No rush.</p>
            <p>Today we grow over two hundred varieties — from tabletop succulents to ten-foot palms — and we still hand-check every plant before it leaves the gate.</p>
            <Link to="/visit" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm transition hover:bg-primary-foreground/10">
              <MapPin className="h-4 w-4" /> Visit the greenhouse
            </Link>
          </div>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section className="container-rk py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">From the journal</p>
            <h2 className="mt-2 text-4xl text-primary md:text-5xl">Plant care, written by growers.</h2>
          </div>
          <Link to="/journal" className="hidden text-sm text-primary hover:underline md:inline">Read all →</Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} to="/journal/$slug" params={{ slug: p.slug }} className="group block">
              <div className="overflow-hidden rounded-2xl">
                <img src={p.image} alt={p.title} loading="lazy" width={1200} height={800} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{p.date} · {p.readTime}</p>
              <h3 className="mt-2 font-display text-xl leading-snug text-primary group-hover:underline">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
