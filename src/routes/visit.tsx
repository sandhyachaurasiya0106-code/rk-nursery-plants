import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { NURSERY_ADDRESS, whatsappLink } from "@/lib/nursery-data";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit R.K Nursery" },
      { name: "description", content: "Find R.K Nursery's greenhouse on the map, opening hours, and contact details. WhatsApp ordering available." },
      { property: "og:title", content: "Visit R.K Nursery" },
      { property: "og:description", content: "Hours, location, and how to reach our greenhouse." },
    ],
  }),
  component: Visit,
});

function Visit() {
  const query = encodeURIComponent(NURSERY_ADDRESS);
  const mapSrc = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="container-rk pt-16 pb-12 md:pt-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Come visit</p>
        <h1 className="mt-2 max-w-3xl text-5xl text-primary md:text-6xl">
          Walk the rows.<br />
          <em className="italic text-[color:var(--moss)]">Meet your plant.</em>
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Wander the greenhouse, talk to a grower, and pick the exact plant you'll take home.
        </p>
      </section>

      <section className="container-rk grid gap-10 pb-24 md:grid-cols-5">
        <div className="md:col-span-2 space-y-8">
          <Card icon={<MapPin className="h-5 w-5" />} title="Find us">
            <p>{NURSERY_ADDRESS}</p>
            <a href={`https://www.google.com/maps?q=${query}`} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-primary hover:underline">
              Open in Google Maps →
            </a>
          </Card>
          <Card icon={<Clock className="h-5 w-5" />} title="Hours">
            <ul className="space-y-1 text-sm">
              <li className="flex justify-between"><span>Mon – Sat</span><span>9:00 — 7:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>10:00 — 5:00</span></li>
            </ul>
          </Card>
          <Card icon={<Phone className="h-5 w-5" />} title="Get in touch">
            <a href={whatsappLink("Hi R.K Nursery!")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:bg-primary/90">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </Card>
        </div>
        <div className="md:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="R.K Nursery location"
              src={mapSrc}
              className="aspect-[4/3] w-full md:aspect-[5/6]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center gap-3 text-primary">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10">{icon}</span>
        <h2 className="font-display text-xl">{title}</h2>
      </div>
      <div className="mt-3 text-muted-foreground">{children}</div>
    </div>
  );
}
