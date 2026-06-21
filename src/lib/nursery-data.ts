import monstera from "@/assets/plant-monstera.jpg";
import snake from "@/assets/plant-snake.jpg";
import fiddle from "@/assets/plant-fiddle.jpg";
import zz from "@/assets/plant-zz.jpg";
import areca from "@/assets/plant-areca.jpg";
import peacelily from "@/assets/plant-peacelily.jpg";
import rubber from "@/assets/plant-rubber.jpg";
import blogWatering from "@/assets/blog-watering.jpg";
import blogLight from "@/assets/blog-light.jpg";
import blogRepot from "@/assets/blog-repot.jpg";

export const WHATSAPP_NUMBER = "919999999999"; // R.K Nursery — replace with real number
export const NURSERY_NAME = "R.K Nursery";
export const NURSERY_ADDRESS = "R.K Nursery, Main Road, Your City";

export type Plant = {
  id: string;
  name: string;
  latin: string;
  price: number;
  category: "Indoor" | "Outdoor" | "Air Purifying" | "Low Light";
  light: string;
  water: string;
  image: string;
  description: string;
};

export const plants: Plant[] = [
  { id: "monstera", name: "Monstera Deliciosa", latin: "Monstera deliciosa", price: 850, category: "Indoor", light: "Bright indirect", water: "Weekly", image: monstera, description: "The iconic split-leaf statement plant. Vigorous, sculptural, and forgiving." },
  { id: "snake", name: "Snake Plant", latin: "Sansevieria trifasciata", price: 450, category: "Low Light", light: "Low to bright", water: "Every 2–3 weeks", image: snake, description: "Architectural and nearly indestructible — perfect for first-time plant keepers." },
  { id: "fiddle", name: "Fiddle Leaf Fig", latin: "Ficus lyrata", price: 1450, category: "Indoor", light: "Bright indirect", water: "Weekly", image: fiddle, description: "Tall, glossy, dramatic. A living centerpiece for sunlit corners." },
  { id: "zz", name: "ZZ Plant", latin: "Zamioculcas zamiifolia", price: 650, category: "Low Light", light: "Low to medium", water: "Every 2 weeks", image: zz, description: "Glossy, waxy leaves and zero drama. Thrives on neglect." },
  { id: "areca", name: "Areca Palm", latin: "Dypsis lutescens", price: 1250, category: "Air Purifying", light: "Bright indirect", water: "Twice weekly", image: areca, description: "Tropical softness and serious air-purifying power in one graceful plant." },
  { id: "peacelily", name: "Peace Lily", latin: "Spathiphyllum wallisii", price: 550, category: "Air Purifying", light: "Low to medium", water: "Weekly", image: peacelily, description: "Elegant white blooms above deep green foliage. Tells you when it's thirsty." },
  { id: "rubber", name: "Rubber Plant", latin: "Ficus elastica", price: 950, category: "Indoor", light: "Bright indirect", water: "Weekly", image: rubber, description: "Burgundy-tinged leaves with a high-gloss finish. Effortlessly stately." },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const posts = [
  {
    slug: "watering-rhythm",
    title: "The Watering Rhythm Most Houseplants Actually Want",
    excerpt: "Forget calendars. Learn to read the soil, the leaves, and the season — and your plants will thank you.",
    date: "Jun 12, 2026",
    readTime: "5 min",
    image: blogWatering,
    body: `Most plant deaths come from overwatering, not underwatering. Stick a finger an inch into the soil — if it's dry, water deeply until it drains from the bottom. If it's still cool and damp, wait. Tropicals like Monstera want a weekly soak in summer and far less in winter. Succulents and ZZ plants want to dry out completely between drinks. Trust the soil, not the schedule.`,
  },
  {
    slug: "reading-the-light",
    title: "Reading the Light in Your Home",
    excerpt: "South-facing, east-facing, that dim hallway corner — here's how to match plants to the light you actually have.",
    date: "May 28, 2026",
    readTime: "6 min",
    image: blogLight,
    body: `Hold your hand a foot from the wall at noon. A sharp, dark shadow means bright direct light — perfect for cacti and citrus. A soft but defined shadow is bright indirect — Monstera, Fiddle Leaf, Rubber Plant territory. A faint, blurry shadow is medium to low light, where Snake Plants, ZZ Plants, and Pothos truly shine.`,
  },
  {
    slug: "when-to-repot",
    title: "When (and How) to Repot Without the Shock",
    excerpt: "Roots circling the pot? Water running straight through? It's time. Here's the gentle way to move up a size.",
    date: "May 4, 2026",
    readTime: "4 min",
    image: blogRepot,
    body: `Repot in spring or early summer when the plant is actively growing. Go only one size up — too much soil holds too much water and rots young roots. Loosen the root ball gently, place at the same depth as before, and water lightly. Skip fertilizer for three weeks while roots settle in.`,
  },
];
