import { whatsappLink } from "@/lib/nursery-data";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hi R.K Nursery, I'd like to order some plants.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[oklch(0.62_0.15_150)] px-5 py-3 text-sm font-medium text-white shadow-lift transition hover:scale-[1.03]"
    >
      <MessageCircle className="h-4 w-4" />
      Order on WhatsApp
    </a>
  );
}
