import { Link } from "@tanstack/react-router";
import { NURSERY_ADDRESS, whatsappLink } from "@/lib/nursery-data";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-[color:var(--cream-deep)]">
      <div className="container-rk grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl text-primary">R.K Nursery</h3>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A family-run nursery growing healthy, well-rooted plants for homes, balconies, and gardens.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/catalog" className="hover:text-primary">Plant catalog</Link></li>
            <li><Link to="/journal" className="hover:text-primary">Care journal</Link></li>
            <li><Link to="/visit" className="hover:text-primary">Visit us</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Contact</p>
          <ul className="space-y-2 text-sm">
            <li className="text-muted-foreground">{NURSERY_ADDRESS}</li>
            <li>
              <a href={whatsappLink("Hello R.K Nursery!")} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-rk flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} R.K Nursery. Grown with care.</p>
          <p>Cream-and-green love letters to indoor jungles.</p>
        </div>
      </div>
    </footer>
  );
}
