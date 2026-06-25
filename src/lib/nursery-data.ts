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

export const WHATSAPP_NUMBER = "919137589334";
export const NURSERY_NAME = "R.K Nursery";
export const NURSERY_ADDRESS =
  "Veera Desai Road, Opposite Palash Tower, Near Country Club, Andheri West, Mumbai - 400058";

export const PLANT_CATEGORIES = [
  "Indoor",
  "Outdoor",
  "Flowering",
  "Fruit",
  "Succulents",
  "Ayurvedic",
  "Planters",
] as const;

export type PlantCategory = (typeof PLANT_CATEGORIES)[number];
export type StockStatus = "in" | "low" | "out";

export type Plant = {
  id: string;
  name: string;
  latin?: string;
  price: number;
  category: PlantCategory;
  light: string;
  water: string;
  image: string;
  description: string;
  stock: StockStatus;
};

// Helper to keep entries compact
const p = (
  id: string,
  name: string,
  price: number,
  category: PlantCategory,
  image: string,
  description: string,
  light = "Bright indirect",
  water = "Weekly",
  stock: StockStatus = "in",
  latin?: string,
): Plant => ({ id, name, latin, price, category, light, water, image, description, stock });

export const plants: Plant[] = [
  // ============= INDOOR (30) =============
  p("monstera", "Monstera Deliciosa", 850, "Indoor", monstera, "The iconic split-leaf statement plant. Sculptural and forgiving.", "Bright indirect", "Weekly", "in", "Monstera deliciosa"),
  p("snake", "Snake Plant", 450, "Indoor", snake, "Architectural and nearly indestructible. Perfect for beginners.", "Low to bright", "Every 2–3 weeks", "in", "Sansevieria trifasciata"),
  p("spider-plant", "Spider Plant", 350, "Indoor", areca, "Arching striped leaves and easy babies. Cleans the air.", "Bright indirect", "Weekly", "in", "Chlorophytum comosum"),
  p("peace-lily", "Peace Lily", 450, "Indoor", peacelily, "Elegant white blooms above deep green foliage.", "Low to medium", "Weekly", "in", "Spathiphyllum wallisii"),
  p("zz", "ZZ Plant", 500, "Indoor", zz, "Waxy leaves and zero drama. Thrives on neglect.", "Low to medium", "Every 2 weeks", "in", "Zamioculcas zamiifolia"),
  p("areca", "Areca Palm", 650, "Indoor", areca, "Tropical softness and serious air-purifying power.", "Bright indirect", "Twice weekly", "in", "Dypsis lutescens"),
  p("rubber", "Rubber Plant", 400, "Indoor", rubber, "Burgundy-tinged leaves with a high-gloss finish.", "Bright indirect", "Weekly", "in", "Ficus elastica"),
  p("money-plant", "Money Plant (Pothos)", 250, "Indoor", monstera, "Trailing heart-shaped leaves. The classic Indian indoor.", "Low to bright", "Weekly", "in", "Epipremnum aureum"),
  p("jade-indoor", "Jade Plant", 300, "Indoor", jade, "Plump succulent said to bring prosperity.", "Bright sun", "Every 2 weeks", "in", "Crassula ovata"),
  p("lucky-bamboo", "Lucky Bamboo", 350, "Indoor", bamboo, "Calm vertical stalks for desks and entryways.", "Bright indirect", "Keep in water", "in", "Dracaena sanderiana"),
  p("aglaonema", "Aglaonema (Chinese Evergreen)", 550, "Indoor", croton, "Painted leaves in silver, pink, and deep green.", "Low to medium", "Weekly", "in"),
  p("syngonium", "Syngonium (Arrowhead Plant)", 300, "Indoor", monstera, "Soft arrow-shaped leaves that climb or trail.", "Bright indirect", "Weekly", "in"),
  p("philodendron", "Philodendron", 400, "Indoor", monstera, "Glossy heart-leaf vines for shelves and frames.", "Bright indirect", "Weekly", "in"),
  p("pothos-neon", "Pothos Neon", 350, "Indoor", monstera, "Electric chartreuse trails that glow in low light.", "Low to bright", "Weekly", "in"),
  p("dracaena-marginata", "Dracaena Marginata", 600, "Indoor", bamboo, "Slender stems crowned with red-edged blades.", "Bright indirect", "Weekly", "in"),
  p("boston-fern", "Boston Fern", 450, "Indoor", areca, "Lush, feathery fronds — perfect for humid bathrooms.", "Bright indirect", "Twice weekly", "in"),
  p("birds-nest-fern", "Bird's Nest Fern", 500, "Indoor", peacelily, "Rosette of bright green ripple-edged fronds.", "Medium indirect", "Weekly", "in"),
  p("parlor-palm", "Parlor Palm", 550, "Indoor", areca, "Compact, low-light tolerant palm for cosy corners.", "Low to medium", "Weekly", "in"),
  p("chinese-money", "Chinese Money Plant (Pilea)", 400, "Indoor", jade, "Round pancake leaves on slender stems.", "Bright indirect", "Weekly", "in"),
  p("anthurium", "Anthurium", 650, "Indoor", peacelily, "Waxy red flag-flowers above dark foliage.", "Bright indirect", "Weekly", "in"),
  p("croton-indoor", "Croton (Indoor)", 500, "Indoor", croton, "Fiery red, yellow, and green foliage.", "Bright sun", "Twice weekly", "in"),
  p("fiddle-leaf", "Fiddle Leaf Fig", 750, "Indoor", fiddle, "Tall, glossy, dramatic. A living centerpiece.", "Bright indirect", "Weekly", "in", "Ficus lyrata"),
  p("english-ivy", "English Ivy", 350, "Indoor", monstera, "Classic trailing vines for shelves and walls.", "Bright indirect", "Weekly", "in"),
  p("peperomia", "Peperomia", 300, "Indoor", jade, "Compact rosettes of thick, textured leaves.", "Bright indirect", "Every 10 days", "in"),
  p("dieffenbachia", "Dieffenbachia (Dumb Cane)", 500, "Indoor", croton, "Bold cream-splashed leaves with tropical drama.", "Bright indirect", "Weekly", "in"),
  p("nerve-plant", "Nerve Plant (Fittonia)", 250, "Indoor", peacelily, "Tiny leaves veined in white or pink.", "Medium indirect", "Twice weekly", "in"),
  p("calathea", "Calathea", 550, "Indoor", croton, "Painted leaves that fold up at night.", "Medium indirect", "Weekly", "in"),
  p("alocasia", "Alocasia", 700, "Indoor", monstera, "Sculptural arrow leaves with bold veining.", "Bright indirect", "Weekly", "in"),
  p("baby-rubber", "Baby Rubber Plant", 350, "Indoor", rubber, "Thick glossy leaves on a compact bush.", "Bright indirect", "Every 10 days", "in"),
  p("schefflera", "Schefflera (Umbrella Tree)", 600, "Indoor", ficus, "Glossy umbrella-spoke leaves on graceful stems.", "Bright indirect", "Weekly", "in"),

  // ============= OUTDOOR (30) =============
  p("ashoka", "Ashoka Tree", 400, "Outdoor", ashoka, "Slender, evergreen, auspicious boundary tree.", "Full sun", "Twice weekly", "in", "Saraca asoca"),
  p("neem", "Neem Tree", 350, "Outdoor", ficus, "Sacred medicinal tree. Hardy and air-purifying.", "Full sun", "Twice weekly", "in", "Azadirachta indica"),
  p("banyan", "Banyan", 600, "Outdoor", ficus, "Iconic sprawling sacred tree. Strong character.", "Full sun", "Twice weekly", "in", "Ficus benghalensis"),
  p("peepal", "Peepal", 400, "Outdoor", ficus, "Heart-shaped trembling leaves. Deeply revered.", "Full sun", "Twice weekly", "in", "Ficus religiosa"),
  p("moringa", "Moringa (Drumstick)", 300, "Outdoor", ashoka, "Fast-growing superfood tree. Edible pods and leaves.", "Full sun", "Weekly", "in", "Moringa oleifera"),
  p("bottle-brush", "Bottle Brush", 550, "Outdoor", hibiscus, "Crimson cylindrical blooms loved by birds.", "Full sun", "Twice weekly", "in"),
  p("golden-cypress", "Golden Cypress", 750, "Outdoor", bamboo, "Bright golden conifer for hedges and entries.", "Full sun", "Twice weekly", "in"),
  p("araucaria", "Araucaria (Christmas Tree)", 850, "Outdoor", ashoka, "Symmetrical layered conifer. Festive year-round.", "Full to part sun", "Weekly", "in"),
  p("cassia-fistula", "Cassia Fistula (Amaltas)", 500, "Outdoor", bougainvillea, "Cascading golden flower chains in summer.", "Full sun", "Twice weekly", "in"),
  p("gulmohar", "Gulmohar", 550, "Outdoor", hibiscus, "Flame-orange canopy that defines Indian summers.", "Full sun", "Twice weekly", "in"),
  p("karanj", "Karanj (Indian Beech)", 450, "Outdoor", ficus, "Dense shade tree with medicinal seeds.", "Full sun", "Twice weekly", "in"),
  p("kadamba", "Kadamba", 500, "Outdoor", ashoka, "Sacred shade tree with orange ball blooms.", "Full sun", "Twice weekly", "in"),
  p("plumeria", "Plumeria (Frangipani)", 700, "Outdoor", jasmine, "Fragrant five-petal blooms in cream and pink.", "Full sun", "Weekly", "in"),
  p("duranta", "Duranta (Golden Dewdrop)", 350, "Outdoor", croton, "Bright lime hedge plant with purple sprays.", "Full to part sun", "Twice weekly", "in"),
  p("ficus-panda", "Ficus Panda", 800, "Outdoor", ficus, "Compact glossy bonsai-style ficus.", "Full to part sun", "Weekly", "in"),
  p("jatropha", "Jatropha", 450, "Outdoor", hibiscus, "Constant clusters of coral-red blooms.", "Full sun", "Weekly", "in"),
  p("ixora-out", "Ixora", 400, "Outdoor", hibiscus, "Dense flower clusters in red, orange, or pink.", "Full sun", "Twice weekly", "in"),
  p("raat-rani", "Raat Rani (Night Jasmine)", 500, "Outdoor", jasmine, "Tiny white blooms with an unforgettable night fragrance.", "Full to part sun", "Twice weekly", "in"),
  p("kamini", "Kamini (Orange Jasmine)", 550, "Outdoor", jasmine, "Glossy hedge with intensely fragrant white flowers.", "Full to part sun", "Twice weekly", "in"),
  p("clerodendrum", "Clerodendrum", 500, "Outdoor", bougainvillea, "Showy bracts in red, white, or violet.", "Full to part sun", "Weekly", "in"),
  p("pandanus", "Pandanus (Screw Pine)", 700, "Outdoor", areca, "Spiral sword-shaped leaves for coastal looks.", "Full sun", "Weekly", "in"),
  p("acalypha", "Acalypha", 400, "Outdoor", croton, "Coloured foliage hedge in bronze and pink.", "Full to part sun", "Twice weekly", "in"),
  p("cycas", "Cycas (Sago Palm)", 1200, "Outdoor", areca, "Architectural prehistoric palm. Statement plant.", "Full to part sun", "Weekly", "in"),
  p("washingtonia", "Washingtonia Palm", 1500, "Outdoor", areca, "Tall fan palm for grand driveways.", "Full sun", "Twice weekly", "in"),
  p("foxtail-palm", "Foxtail Palm", 1400, "Outdoor", areca, "Bushy plume-like fronds. Elegant entryway palm.", "Full sun", "Twice weekly", "in"),
  p("tabebuia", "Tabebuia", 800, "Outdoor", bougainvillea, "Cloud of pink trumpet blooms in spring.", "Full sun", "Weekly", "in"),
  p("jacaranda", "Jacaranda", 750, "Outdoor", bougainvillea, "Violet-blue blossoms that carpet the ground.", "Full sun", "Weekly", "in"),
  p("ficus-benjamina", "Ficus Benjamina", 850, "Outdoor", ficus, "Bushy glossy easy-to-shape screen plant.", "Full to part sun", "Weekly", "in", "Ficus benjamina"),
  p("bamboo-outdoor", "Bamboo (Outdoor)", 600, "Outdoor", bamboo, "Tall vertical screening for boundaries.", "Full to part sun", "Twice weekly", "in"),
  p("croton-outdoor", "Croton (Outdoor)", 400, "Outdoor", croton, "Sun-loving variety with vivid leaf colour.", "Bright sun", "Twice weekly", "in"),

  // ============= FLOWERING (30) =============
  p("rose", "Rose", 400, "Flowering", rose, "Classic fragrant blooms in soft pink.", "Full sun", "Daily", "in", "Rosa hybrid"),
  p("marigold", "Marigold", 150, "Flowering", hibiscus, "Cheerful orange and yellow blooms. Pest-repellent.", "Full sun", "Daily", "in"),
  p("jasmine", "Jasmine", 450, "Flowering", jasmine, "Fragrant white star-blooms.", "Full to part sun", "Twice weekly", "in"),
  p("mogra", "Mogra", 500, "Flowering", jasmine, "Pure white blooms with unforgettable evening fragrance.", "Full to part sun", "Twice weekly", "in", "Jasminum sambac"),
  p("hibiscus", "Hibiscus", 450, "Flowering", hibiscus, "Large tropical red blooms almost year-round.", "Full sun", "Daily", "in", "Hibiscus rosa-sinensis"),
  p("bougainvillea", "Bougainvillea", 550, "Flowering", bougainvillea, "Riotous magenta bracts. Drought-tolerant.", "Full sun", "Weekly", "in", "Bougainvillea glabra"),
  p("ixora", "Ixora (Flowering)", 400, "Flowering", hibiscus, "Dense ball-clusters in coral and pink.", "Full sun", "Twice weekly", "in"),
  p("periwinkle", "Periwinkle (Sadabahar)", 200, "Flowering", rose, "Pink and white blooms all year. Tough as nails.", "Full sun", "Twice weekly", "in"),
  p("petunia", "Petunia", 250, "Flowering", bougainvillea, "Trumpet blooms in every colour for balcony pots.", "Full sun", "Daily", "in"),
  p("chrysanthemum", "Chrysanthemum", 300, "Flowering", rose, "Pompom blooms in cream, gold, and burgundy.", "Full sun", "Twice weekly", "in"),
  p("dahlia", "Dahlia", 350, "Flowering", rose, "Show-stopping double blooms in vivid colours.", "Full sun", "Twice weekly", "in"),
  p("gerbera", "Gerbera", 300, "Flowering", rose, "Large daisy-form blooms on long stems.", "Bright sun", "Twice weekly", "in"),
  p("zinnia", "Zinnia", 200, "Flowering", hibiscus, "Heat-loving cut-flower that blooms for months.", "Full sun", "Twice weekly", "in"),
  p("sunflower", "Sunflower", 250, "Flowering", hibiscus, "Cheerful golden faces that track the sun.", "Full sun", "Twice weekly", "in"),
  p("cosmos", "Cosmos", 200, "Flowering", rose, "Airy pink and white meadow blooms.", "Full sun", "Twice weekly", "in"),
  p("pansy", "Pansy", 250, "Flowering", bougainvillea, "Velvety bicolour blooms for cool-season pots.", "Bright sun", "Twice weekly", "in"),
  p("calendula", "Calendula", 200, "Flowering", hibiscus, "Golden-orange blooms with herbal uses.", "Full sun", "Twice weekly", "in"),
  p("portulaca", "Portulaca", 150, "Flowering", rose, "Heat-loving moss-rose carpet in jewel tones.", "Full sun", "Weekly", "in"),
  p("gaillardia", "Gaillardia (Blanket Flower)", 250, "Flowering", hibiscus, "Sunset-bicolour daisies that bloom forever.", "Full sun", "Weekly", "in"),
  p("verbena", "Verbena", 250, "Flowering", bougainvillea, "Compact clusters in purple, pink, and red.", "Full sun", "Twice weekly", "in"),
  p("salvia", "Salvia", 300, "Flowering", bougainvillea, "Spiky purple or red flower wands.", "Full sun", "Twice weekly", "in"),
  p("lantana", "Lantana", 250, "Flowering", hibiscus, "Multi-colour clusters that attract butterflies.", "Full sun", "Weekly", "in"),
  p("aster", "Aster", 300, "Flowering", rose, "Mauve, pink, and white daisy-form blooms.", "Full sun", "Twice weekly", "in"),
  p("rajnigandha", "Rajnigandha (Tuberose)", 400, "Flowering", jasmine, "Tall white spikes with intoxicating fragrance.", "Full sun", "Twice weekly", "in"),
  p("crossandra", "Crossandra (Aboli)", 300, "Flowering", hibiscus, "Fan-shaped orange blooms loved in pujas.", "Full to part sun", "Twice weekly", "in"),
  p("balsam", "Balsam (Gulmehndi)", 200, "Flowering", rose, "Old-school cottage blooms in jewel colours.", "Full to part sun", "Twice weekly", "in"),
  p("poinsettia", "Poinsettia", 450, "Flowering", hibiscus, "Christmas star with flame-red bracts.", "Bright indirect", "Weekly", "in"),
  p("clitoria", "Clitoria (Aparajita)", 300, "Flowering", bougainvillea, "Deep blue blooms used for herbal tea.", "Full sun", "Twice weekly", "in"),
  p("tecoma", "Tecoma (Yellow Bells)", 400, "Flowering", hibiscus, "Cascades of golden trumpet flowers.", "Full sun", "Weekly", "in"),
  p("adenium", "Adenium (Desert Rose)", 800, "Flowering", rose, "Sculpted swollen trunk with bright trumpet blooms.", "Full sun", "Weekly", "in"),

  // ============= FRUIT (30) =============
  p("mango", "Mango Plant", 850, "Fruit", mango, "Grafted dwarf variety that fruits early.", "Full sun", "Twice weekly", "in", "Mangifera indica"),
  p("guava", "Guava Plant", 650, "Fruit", guava, "Hardy and fast-fruiting within a couple of seasons.", "Full sun", "Twice weekly", "in", "Psidium guajava"),
  p("lemon", "Lemon Plant", 700, "Fruit", lemon, "Compact and balcony-friendly. Continuous harvest.", "Full sun", "Twice weekly", "in", "Citrus limon"),
  p("mosambi", "Sweet Lime (Mosambi)", 750, "Fruit", lemon, "Juicy green-yellow sweet limes.", "Full sun", "Twice weekly", "in"),
  p("pomegranate", "Pomegranate Plant", 700, "Fruit", pomegranate, "Ornamental orange blooms then ruby fruits.", "Full sun", "Weekly", "in", "Punica granatum"),
  p("sapota", "Sapota (Chikoo)", 800, "Fruit", guava, "Sweet caramel-flavoured tropical fruit.", "Full sun", "Twice weekly", "in"),
  p("custard-apple", "Custard Apple (Sitafal)", 750, "Fruit", guava, "Creamy aromatic monsoon fruit.", "Full sun", "Twice weekly", "in"),
  p("papaya", "Papaya", 350, "Fruit", mango, "Fast-growing softwood tree. Fruits within a year.", "Full sun", "Twice weekly", "in"),
  p("banana", "Banana", 450, "Fruit", areca, "Tropical broad-leaf with abundant fruit.", "Full sun", "Twice weekly", "in"),
  p("coconut", "Coconut", 1500, "Fruit", areca, "Iconic coastal palm. Grand entry plant.", "Full sun", "Twice weekly", "in"),
  p("dragon-fruit", "Dragon Fruit", 600, "Fruit", cactus, "Climbing cactus with vibrant exotic fruit.", "Full sun", "Weekly", "in"),
  p("strawberry", "Strawberry", 250, "Fruit", rose, "Compact basket-friendly fruiter for cool months.", "Bright sun", "Twice weekly", "in"),
  p("blackberry", "Blackberry", 500, "Fruit", pomegranate, "Trailing cane with sweet-tart berries.", "Full sun", "Twice weekly", "in"),
  p("mulberry", "Mulberry", 450, "Fruit", pomegranate, "Easy garden tree with abundant berries.", "Full sun", "Twice weekly", "in"),
  p("jamun", "Jamun", 700, "Fruit", pomegranate, "Deep purple Indian fruit with sweet-astringent bite.", "Full sun", "Twice weekly", "in"),
  p("litchi", "Litchi", 850, "Fruit", guava, "Aromatic translucent fruit for warm climates.", "Full sun", "Twice weekly", "in"),
  p("orange", "Orange", 750, "Fruit", lemon, "Sweet juicy citrus for sunny terraces.", "Full sun", "Twice weekly", "in"),
  p("mandarin", "Mandarin", 700, "Fruit", lemon, "Easy-peel sweet small citrus.", "Full sun", "Twice weekly", "in"),
  p("grapes", "Grapes", 550, "Fruit", bougainvillea, "Trellis-friendly vine with seasonal bunches.", "Full sun", "Weekly", "in"),
  p("fig", "Fig (Anjeer)", 800, "Fruit", guava, "Sweet honeyed fruit on a hardy tree.", "Full sun", "Weekly", "in"),
  p("avocado", "Avocado", 1200, "Fruit", mango, "Buttery superfruit for sunny terraces.", "Full sun", "Weekly", "in"),
  p("water-apple", "Water Apple", 600, "Fruit", guava, "Refreshing bell-shaped fruit with crisp flesh.", "Full sun", "Twice weekly", "in"),
  p("star-fruit", "Star Fruit (Carambola)", 700, "Fruit", lemon, "Ribbed fruit that slices into stars.", "Full sun", "Twice weekly", "in"),
  p("passion-fruit", "Passion Fruit", 550, "Fruit", bougainvillea, "Climbing vine with intensely fragrant fruit.", "Full sun", "Weekly", "in"),
  p("pineapple", "Pineapple", 500, "Fruit", bamboo, "Striking rosette with one prized fruit per cycle.", "Full sun", "Weekly", "in"),
  p("peach", "Peach", 900, "Fruit", guava, "Cool-climate stone fruit with soft fragrant flesh.", "Full sun", "Weekly", "in"),
  p("pear", "Pear", 900, "Fruit", guava, "Crisp sweet fruit for hill-station climates.", "Full sun", "Weekly", "in"),
  p("apple-ber", "Apple Ber", 500, "Fruit", guava, "Indian apple-like ber with crisp sweet flesh.", "Full sun", "Twice weekly", "in"),
  p("wood-apple", "Wood Apple (Bael)", 600, "Fruit", guava, "Hard-shelled aromatic medicinal fruit.", "Full sun", "Weekly", "in"),
  p("amla-fruit", "Indian Gooseberry (Amla)", 550, "Fruit", guava, "Vitamin-rich sour-sweet superfruit.", "Full sun", "Twice weekly", "in"),

  // ============= AYURVEDIC (30) =============
  p("tulsi", "Tulsi (Holy Basil)", 200, "Ayurvedic", peacelily, "Sacred aromatic herb for tea and worship.", "Full to part sun", "Twice weekly", "in", "Ocimum sanctum"),
  p("aloe-ayur", "Aloe Vera (Medicinal)", 350, "Ayurvedic", aloe, "Healing gel for skin, hair, and wellness.", "Bright sun", "Every 2 weeks", "in"),
  p("neem-ayur", "Neem (Medicinal)", 400, "Ayurvedic", ficus, "All-purpose Ayurvedic medicinal tree.", "Full sun", "Twice weekly", "in"),
  p("giloy", "Giloy", 350, "Ayurvedic", monstera, "Immunity-boosting climbing herb.", "Bright indirect", "Weekly", "in"),
  p("ashwagandha", "Ashwagandha", 400, "Ayurvedic", jade, "Adaptogenic root for strength and calm.", "Full sun", "Weekly", "in"),
  p("brahmi", "Brahmi", 300, "Ayurvedic", jade, "Memory and clarity herb.", "Bright indirect", "Twice weekly", "in"),
  p("shankhpushpi", "Shankhpushpi", 300, "Ayurvedic", bougainvillea, "Brain tonic with delicate blue flowers.", "Full sun", "Weekly", "in"),
  p("amla", "Amla (Medicinal)", 550, "Ayurvedic", guava, "Vitamin-rich rejuvenating fruit tree.", "Full sun", "Twice weekly", "in"),
  p("curry-leaf", "Curry Leaf", 350, "Ayurvedic", lemon, "Aromatic kitchen essential with medicinal use.", "Full to part sun", "Twice weekly", "in"),
  p("lemongrass", "Lemongrass", 300, "Ayurvedic", bamboo, "Citrus herb for tea, oils, and cooking.", "Full sun", "Twice weekly", "in"),
  p("mint", "Mint (Pudina)", 200, "Ayurvedic", jade, "Cooling kitchen herb that spreads happily.", "Bright indirect", "Twice weekly", "in"),
  p("ajwain", "Ajwain (Carom)", 250, "Ayurvedic", jade, "Aromatic digestive herb.", "Bright sun", "Weekly", "in"),
  p("stevia", "Stevia", 350, "Ayurvedic", jade, "Natural sweetener leaf.", "Full to part sun", "Weekly", "in"),
  p("adusa", "Adusa (Vasaka)", 350, "Ayurvedic", peacelily, "Respiratory wellness herb.", "Full to part sun", "Weekly", "in"),
  p("patharchatta", "Patharchatta", 300, "Ayurvedic", jade, "Traditional kidney-stone wellness leaf.", "Bright indirect", "Weekly", "in"),
  p("insulin-plant", "Insulin Plant", 400, "Ayurvedic", peacelily, "Folk remedy for blood-sugar wellness.", "Bright indirect", "Twice weekly", "in"),
  p("turmeric", "Turmeric (Haldi)", 300, "Ayurvedic", peacelily, "Golden-root anti-inflammatory.", "Part sun", "Twice weekly", "in"),
  p("ginger", "Ginger (Adrak)", 300, "Ayurvedic", peacelily, "Warm digestive root for tea and cooking.", "Part sun", "Twice weekly", "in"),
  p("garlic", "Garlic", 200, "Ayurvedic", aloe, "Immune-boosting culinary medicine.", "Full sun", "Weekly", "in"),
  p("kalmegh", "Kalmegh", 350, "Ayurvedic", peacelily, "Bitter liver and immunity herb.", "Bright indirect", "Weekly", "in"),
  p("arjun", "Arjun Tree", 500, "Ayurvedic", ashoka, "Cardiac-wellness Ayurvedic tree.", "Full sun", "Twice weekly", "in"),
  p("bael", "Bael", 600, "Ayurvedic", guava, "Sacred medicinal fruit tree.", "Full sun", "Weekly", "in"),
  p("sarpagandha", "Sarpagandha", 400, "Ayurvedic", jade, "Classical Ayurvedic calming root.", "Bright indirect", "Weekly", "in"),
  p("punarnava", "Punarnava", 300, "Ayurvedic", jade, "Rejuvenating creeper for general wellness.", "Full to part sun", "Weekly", "in"),
  p("safed-musli", "Safed Musli", 450, "Ayurvedic", jade, "Premium strength-and-vitality herb.", "Part sun", "Weekly", "in"),
  p("bhringraj", "Bhringraj", 300, "Ayurvedic", jade, "King of hair-care Ayurvedic plants.", "Bright indirect", "Twice weekly", "in"),
  p("nirgundi", "Nirgundi", 350, "Ayurvedic", jade, "Joint and inflammation wellness herb.", "Full to part sun", "Weekly", "in"),
  p("hibiscus-ayur", "Hibiscus (Gudhal, Medicinal)", 400, "Ayurvedic", hibiscus, "Hair and skin wellness blooms.", "Full sun", "Daily", "in"),
  p("moringa-ayur", "Moringa (Medicinal)", 350, "Ayurvedic", ficus, "Superfood leaves with abundant micronutrients.", "Full sun", "Weekly", "in"),
  p("satavar", "Satavar (Shatavari)", 450, "Ayurvedic", bamboo, "Classical women's wellness adaptogen.", "Bright indirect", "Weekly", "in"),

  // ============= SUCCULENTS (30) =============
  p("aloe", "Aloe Vera", 350, "Succulents", aloe, "Useful, beautiful, thrives on neglect.", "Bright sun", "Every 2 weeks", "in", "Aloe barbadensis"),
  p("jade", "Jade Plant", 300, "Succulents", jade, "Tree-like succulent of prosperity.", "Bright sun", "Every 2 weeks", "in", "Crassula ovata"),
  p("zebra-haworthia", "Zebra Haworthia", 350, "Succulents", aloe, "Striking white-banded mini rosette.", "Bright indirect", "Every 2 weeks", "in"),
  p("echeveria-elegans", "Echeveria Elegans", 250, "Succulents", echeveria, "Perfect pale-pink rosette.", "Bright sun", "Every 2 weeks", "in"),
  p("echeveria-black-prince", "Echeveria Black Prince", 350, "Succulents", echeveria, "Deep burgundy-black rosette.", "Bright sun", "Every 2 weeks", "in"),
  p("echeveria-lola", "Echeveria Lola", 300, "Succulents", echeveria, "Lavender-pink classic rosette.", "Bright sun", "Every 2 weeks", "in"),
  p("graptopetalum", "Graptopetalum", 350, "Succulents", echeveria, "Pearly pastel rosette succulent.", "Bright sun", "Every 2 weeks", "in"),
  p("sedum-burrostail", "Sedum Burro's Tail", 400, "Succulents", jade, "Trailing beaded ropes for hanging pots.", "Bright sun", "Every 2 weeks", "in"),
  p("sedum-jellybean", "Sedum Jelly Bean", 300, "Succulents", echeveria, "Plump bean-shaped leaves tipped red.", "Bright sun", "Every 2 weeks", "in"),
  p("crassula-ovata-mini", "Crassula Ovata (Mini Jade)", 300, "Succulents", jade, "Bonsai-friendly miniature jade.", "Bright sun", "Every 2 weeks", "in"),
  p("crassula-campfire", "Crassula Campfire", 350, "Succulents", echeveria, "Flame-red propeller leaves in sun.", "Bright sun", "Every 2 weeks", "in"),
  p("kalanchoe-blossfeldiana", "Kalanchoe Blossfeldiana", 300, "Succulents", cactus, "Long-flowering succulent in vivid blooms.", "Bright sun", "Every 2 weeks", "in"),
  p("kalanchoe-tomentosa", "Kalanchoe Tomentosa", 400, "Succulents", jade, "Fuzzy panda-paw leaves.", "Bright sun", "Every 2 weeks", "in"),
  p("panda-plant", "Panda Plant", 400, "Succulents", jade, "Soft silvery leaves edged in chocolate.", "Bright sun", "Every 2 weeks", "in"),
  p("string-pearls", "String of Pearls", 450, "Succulents", jade, "Cascading beads for hanging baskets.", "Bright sun", "Every 2 weeks", "in"),
  p("string-bananas", "String of Bananas", 450, "Succulents", jade, "Curved banana-shaped trailing leaves.", "Bright sun", "Every 2 weeks", "in"),
  p("string-dolphins", "String of Dolphins", 500, "Succulents", jade, "Whimsical dolphin-shaped trailing leaves.", "Bright sun", "Every 2 weeks", "in"),
  p("ghost-plant", "Ghost Plant", 300, "Succulents", echeveria, "Pale ethereal rosette that pinks in sun.", "Bright sun", "Every 2 weeks", "in"),
  p("lithops", "Lithops (Living Stones)", 500, "Succulents", cactus, "Tiny living-stone curiosity.", "Bright sun", "Monthly", "in"),
  p("moon-cactus", "Moon Cactus", 350, "Succulents", cactus, "Neon orange or pink grafted cactus top.", "Bright sun", "Monthly", "in"),
  p("barrel-cactus", "Barrel Cactus", 400, "Succulents", cactus, "Tiny, spiky, happy on a windowsill.", "Full sun", "Monthly", "in", "Echinocactus grusonii"),
  p("bunny-ear-cactus", "Bunny Ear Cactus", 350, "Succulents", cactus, "Pads shaped like rabbit ears.", "Full sun", "Monthly", "in"),
  p("mammillaria", "Mammillaria", 400, "Succulents", cactus, "Globular cactus with pink crown blooms.", "Full sun", "Monthly", "in"),
  p("opuntia", "Opuntia (Prickly Pear)", 450, "Succulents", cactus, "Classic flat-padded cactus.", "Full sun", "Monthly", "in"),
  p("agave", "Agave", 600, "Succulents", aloe, "Sculptural sword-rosette for sunny terraces.", "Full sun", "Every 2 weeks", "in"),
  p("aloe-brevifolia", "Aloe Brevifolia", 400, "Succulents", aloe, "Compact short-leaf aloe with toothy edges.", "Bright sun", "Every 2 weeks", "in"),
  p("gasteria", "Gasteria", 350, "Succulents", aloe, "Stacked tongue-shaped leaves.", "Bright indirect", "Every 2 weeks", "in"),
  p("cotyledon-pendens", "Cotyledon Pendens", 400, "Succulents", jade, "Trailing succulent with bell-shaped flowers.", "Bright sun", "Every 2 weeks", "in"),
  p("pachyphytum", "Pachyphytum", 350, "Succulents", echeveria, "Plump pastel-blue jelly-bean leaves.", "Bright sun", "Every 2 weeks", "in"),
  p("portulacaria-afra", "Portulacaria Afra (Elephant Bush)", 400, "Succulents", jade, "Mini-jade lookalike; great for bonsai.", "Bright sun", "Every 2 weeks", "in"),

  // ============= PLANTERS (8) =============
  p("terracotta-pot", "Terracotta Pot", 250, "Planters", jade, "Classic breathable clay pot. Available in multiple sizes.", "—", "—", "in"),
  p("ceramic-pot", "Ceramic Pot", 550, "Planters", peacelily, "Glazed indoor pot in modern colours.", "—", "—", "in"),
  p("fiber-pot", "Fiber Pot", 450, "Planters", areca, "Lightweight stone-look pot for indoor or balcony.", "—", "—", "in"),
  p("hanging-planter", "Hanging Planter", 400, "Planters", monstera, "Macrame and metal hangers for trailing greens.", "—", "—", "in"),
  p("decorative-pot", "Decorative Pot", 650, "Planters", croton, "Hand-painted pots that turn plants into decor.", "—", "—", "in"),
  p("self-watering-pot", "Self-Watering Pot", 750, "Planters", peacelily, "Reservoir-base pot — water once a fortnight.", "—", "—", "in"),
  p("balcony-planter", "Balcony Planter", 600, "Planters", hibiscus, "Long railing-mount planter for herbs and blooms.", "—", "—", "in"),
  p("designer-indoor-planter", "Designer Indoor Planter", 1200, "Planters", fiddle, "Statement floor planter for living rooms.", "—", "—", "in"),
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
  Ayurvedic: { emoji: "🌱", tagline: "Healing herbs from Indian tradition." },
  Planters: { emoji: "🪴", tagline: "Beautiful homes for your plants." },
};
