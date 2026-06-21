import monstera from "@/assets/plant-monstera.jpg";
import snake from "@/assets/plant-snake.jpg";
import fiddle from "@/assets/plant-fiddle.jpg";
import zz from "@/assets/plant-zz.jpg";
import areca from "@/assets/plant-areca.jpg";
import peacelily from "@/assets/plant-peacelily.jpg";
import rubber from "@/assets/plant-rubber.jpg";
import ashoka from "@/assets/plant-ashoka.jpg";
import ficus from "@/assets/plant-ficus.jpg";
import bamboo from "@/assets/plant-bamboo.jpg";
import croton from "@/assets/plant-croton.jpg";
import rose from "@/assets/plant-rose.jpg";
import hibiscus from "@/assets/plant-hibiscus.jpg";
import bougainvillea from "@/assets/plant-bougainvillea.jpg";
import jasmine from "@/assets/plant-jasmine.jpg";
import lemon from "@/assets/plant-lemon.jpg";
import mango from "@/assets/plant-mango.jpg";
import guava from "@/assets/plant-guava.jpg";
import pomegranate from "@/assets/plant-pomegranate.jpg";
import echeveria from "@/assets/plant-echeveria.jpg";
import jade from "@/assets/plant-jade.jpg";
import aloe from "@/assets/plant-aloe.jpg";
import cactus from "@/assets/plant-cactus.jpg";
import blogWatering from "@/assets/blog-watering.jpg";
import blogLight from "@/assets/blog-light.jpg";
import blogRepot from "@/assets/blog-repot.jpg";

export const WHATSAPP_NUMBER = "919999999999"; // R.K Nursery — replace with real number
export const NURSERY_NAME = "R.K Nursery";
export const NURSERY_ADDRESS =
  "Veera Desai Road, Opposite Palash Tower, Near Country Club, Andheri West, Mumbai - 400058";

export const PLANT_CATEGORIES = [
  "Indoor",
  "Outdoor",
  "Flowering",
  "Fruit",
  "Succulents",
] as const;

export type PlantCategory = (typeof PLANT_CATEGORIES)[number];

export type Plant = {
  id: string;
  name: string;
  latin: string;
  price: number;
  category: PlantCategory;
  light: string;
  water: string;
  image: string;
  description: string;
};

export const plants: Plant[] = [
  // Indoor
  { id: "monstera", name: "Monstera Deliciosa", latin: "Monstera deliciosa", price: 850, category: "Indoor", light: "Bright indirect", water: "Weekly", image: monstera, description: "The iconic split-leaf statement plant. Vigorous, sculptural, and forgiving." },
  { id: "snake", name: "Snake Plant", latin: "Sansevieria trifasciata", price: 450, category: "Indoor", light: "Low to bright", water: "Every 2–3 weeks", image: snake, description: "Architectural and nearly indestructible — perfect for first-time plant keepers." },
  { id: "fiddle", name: "Fiddle Leaf Fig", latin: "Ficus lyrata", price: 1450, category: "Indoor", light: "Bright indirect", water: "Weekly", image: fiddle, description: "Tall, glossy, dramatic. A living centerpiece for sunlit corners." },
  { id: "zz", name: "ZZ Plant", latin: "Zamioculcas zamiifolia", price: 650, category: "Indoor", light: "Low to medium", water: "Every 2 weeks", image: zz, description: "Glossy, waxy leaves and zero drama. Thrives on neglect." },
  { id: "areca", name: "Areca Palm", latin: "Dypsis lutescens", price: 1250, category: "Indoor", light: "Bright indirect", water: "Twice weekly", image: areca, description: "Tropical softness and serious air-purifying power in one graceful plant." },
  { id: "peacelily", name: "Peace Lily", latin: "Spathiphyllum wallisii", price: 550, category: "Indoor", light: "Low to medium", water: "Weekly", image: peacelily, description: "Elegant white blooms above deep green foliage. Tells you when it's thirsty." },
  { id: "rubber", name: "Rubber Plant", latin: "Ficus elastica", price: 950, category: "Indoor", light: "Bright indirect", water: "Weekly", image: rubber, description: "Burgundy-tinged leaves with a high-gloss finish. Effortlessly stately." },

  // Outdoor
  { id: "ashoka", name: "Ashoka Tree", latin: "Saraca asoca", price: 750, category: "Outdoor", light: "Full sun", water: "Twice weekly", image: ashoka, description: "Slender, evergreen, and auspicious. A graceful boundary or driveway tree." },
  { id: "ficus", name: "Ficus Benjamina", latin: "Ficus benjamina", price: 900, category: "Outdoor", light: "Full to part sun", water: "Weekly", image: ficus, description: "Bushy, glossy, and easy to shape — a classic outdoor screen plant." },
  { id: "bamboo", name: "Lucky Bamboo", latin: "Dracaena sanderiana", price: 600, category: "Outdoor", light: "Bright indirect", water: "Twice weekly", image: bamboo, description: "Tall, calm verticals for balconies, patios, and entryways." },
  { id: "croton", name: "Croton", latin: "Codiaeum variegatum", price: 500, category: "Outdoor", light: "Bright sun", water: "Twice weekly", image: croton, description: "Fiery red, yellow, and green foliage that loves the Mumbai sun." },

  // Flowering
  { id: "rose", name: "Rose", latin: "Rosa hybrid", price: 400, category: "Flowering", light: "Full sun", water: "Daily", image: rose, description: "Classic blooms in soft pink — fragrant and reliably repeat-flowering." },
  { id: "hibiscus", name: "Hibiscus", latin: "Hibiscus rosa-sinensis", price: 450, category: "Flowering", light: "Full sun", water: "Daily", image: hibiscus, description: "Large, tropical red blooms that flower almost year-round in our climate." },
  { id: "bougainvillea", name: "Bougainvillea", latin: "Bougainvillea glabra", price: 550, category: "Flowering", light: "Full sun", water: "Weekly", image: bougainvillea, description: "Riotous magenta bracts and drought-tolerant — a Mumbai balcony favourite." },
  { id: "jasmine", name: "Mogra Jasmine", latin: "Jasminum sambac", price: 500, category: "Flowering", light: "Full to part sun", water: "Twice weekly", image: jasmine, description: "Pure white flowers with that unmistakable evening fragrance." },

  // Fruit
  { id: "lemon", name: "Lemon Plant", latin: "Citrus limon", price: 700, category: "Fruit", light: "Full sun", water: "Twice weekly", image: lemon, description: "Compact, productive, and balcony-friendly — fresh lemons from your own plant." },
  { id: "mango", name: "Mango Plant", latin: "Mangifera indica", price: 850, category: "Fruit", light: "Full sun", water: "Twice weekly", image: mango, description: "Grafted dwarf variety that fruits early. Glossy young leaves and a calm form." },
  { id: "guava", name: "Guava Plant", latin: "Psidium guajava", price: 650, category: "Fruit", light: "Full sun", water: "Twice weekly", image: guava, description: "Hardy, fast-growing, and rewards you with fragrant fruit within a couple of seasons." },
  { id: "pomegranate", name: "Pomegranate Plant", latin: "Punica granatum", price: 700, category: "Fruit", light: "Full sun", water: "Weekly", image: pomegranate, description: "Ornamental and edible — small ruby fruits and pretty orange blooms." },

  // Succulents
  { id: "echeveria", name: "Echeveria", latin: "Echeveria elegans", price: 250, category: "Succulents", light: "Bright sun", water: "Every 2 weeks", image: echeveria, description: "A perfect rosette with pink-tipped leaves — desk-friendly and forgiving." },
  { id: "jade", name: "Jade Plant", latin: "Crassula ovata", price: 300, category: "Succulents", light: "Bright sun", water: "Every 2 weeks", image: jade, description: "Plump, tree-like succulent — said to bring prosperity. Slow, sculptural growth." },
  { id: "aloe", name: "Aloe Vera", latin: "Aloe barbadensis", price: 350, category: "Succulents", light: "Bright sun", water: "Every 2 weeks", image: aloe, description: "Useful, beautiful, and basically thrives if you forget about it." },
  { id: "cactus", name: "Barrel Cactus", latin: "Echinocactus grusonii", price: 400, category: "Succulents", light: "Full sun", water: "Monthly", image: cactus, description: "Tiny, spiky, and entirely happy on a sunny windowsill." },
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

export const CATEGORY_META: Record<PlantCategory, { emoji: string; tagline: string }> = {
  Indoor: { emoji: "🌿", tagline: "Air-purifying greens that thrive inside." },
  Outdoor: { emoji: "🌳", tagline: "Hardy plants for balconies, gardens, and gates." },
  Flowering: { emoji: "🌸", tagline: "Year-round colour and fragrance." },
  Fruit: { emoji: "🍋", tagline: "Edible plants for terraces and backyards." },
  Succulents: { emoji: "🌵", tagline: "Low-water beauties for sunny spots." },
};
