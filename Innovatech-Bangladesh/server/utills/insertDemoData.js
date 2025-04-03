const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "Red Lady Papaya",
    price: 120,
    rating: 5,
    description: "Organically grown papayas, harvested fresh from Bogura farms.",
    mainImage: "product1.webp",
    slug: "red-lady-papaya",
    manufacturer: "Bogura Agro Co-op",
    categoryId: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    inStock: 50,
  },
  {
    id: "2",
    title: "Kalijira Aromatic Rice",
    price: 85,
    rating: 0,
    description: "Premium small-grain rice, perfect for polao and traditional dishes.",
    mainImage: "product2.webp",
    slug: "kalijira-rice",
    manufacturer: "Dinajpur Millers Ltd.",
    categoryId: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    inStock: 100,
  },
  {
    id: "3",
    title: "Deshi Cow Milk - 1L",
    price: 70,
    rating: 4,
    description: "Fresh, full-cream cow milk, delivered from rural dairy farms.",
    mainImage: "product3.webp",
    slug: "deshi-cow-milk",
    manufacturer: "MilkCo Bangladesh",
    categoryId: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
    inStock: 200,
  },
  {
    id: "4",
    title: "Free-Range Chicken (Live)",
    price: 380,
    rating: 5,
    description: "Naturally raised chicken, antibiotic-free and healthy.",
    mainImage: "product4.webp",
    slug: "free-range-chicken",
    manufacturer: "Village Farms",
    categoryId: "d30b85e2-e544-4f48-8434-33fe0b591579",
    inStock: 30,
  },
  {
    id: "5",
    title: "Fresh Hilsa (Ilish) - 1.2kg",
    price: 950,
    rating: 4,
    description: "Padma river ilish fish, cleaned and packed on order.",
    mainImage: "product5.webp",
    slug: "fresh-hilsa",
    manufacturer: "Sundarban Fishers",
    categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    inStock: 20,
  },
  {
    id: "6",
    title: "Pure Turmeric Powder - 250g",
    price: 55,
    rating: 5,
    description: "Stone-ground turmeric with vibrant color and aroma.",
    mainImage: "product6.webp",
    slug: "pure-turmeric",
    manufacturer: "Herbal Roots Co.",
    categoryId: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    inStock: 75,
  },
  {
    id: "7",
    title: "BRRI Dhan-28 Paddy Seeds - 1kg",
    price: 110,
    rating: 4,
    description: "High-yield paddy seeds suited for early harvest cycles.",
    mainImage: "product7.webp",
    slug: "brri-dhan-seeds",
    manufacturer: "SeedTech Bangladesh",
    categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
    inStock: 1,
  },
  {
    id: "8",
    title: "Handwoven Jute Shopping Bag",
    price: 130,
    rating: 5,
    description: "Eco-friendly and durable bag handmade by local artisans.",
    mainImage: "product8.webp",
    slug: "jute-shopping-bag",
    manufacturer: "Women Crafts Union",
    categoryId: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    inStock: 60,
  },
  {
    id: "9",
    title: "Bamboo Grain Storage Bin - 40kg",
    price: 450,
    rating: 5,
    description: "Traditional airtight bin for rice and grains, made from bamboo.",
    mainImage: "product9.webp",
    slug: "bamboo-storage-bin",
    manufacturer: "KrishiTool Mart",
    categoryId: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    inStock: 25,
  },
  {
    id: "10",
    title: "Raw Sundarbans Honey - 500ml",
    price: 280,
    rating: 5,
    description: "Unfiltered natural honey collected from wild hives in the Sundarbans.",
    mainImage: "product10.webp",
    slug: "sundarban-honey",
    manufacturer: "Honey Harvesters Assoc.",
    categoryId: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    inStock: 90,
  },
  {
    id: "11",
    title: "Goat Feed (Organic Pellet) - 10kg",
    price: 350,
    rating: 4,
    description: "Balanced nutritional pellets to support goat health and growth.",
    mainImage: "product11.webp",
    slug: "goat-feed-pellets",
    manufacturer: "AgriFeeds Ltd.",
    categoryId: "782e7829-806b-489f-8c3a-2689548d7153",
    inStock: 40,
  },
  {
    id: "12",
    title: "Sun-Dried Mango Slices - 200g",
    price: 160,
    rating: 5,
    description: "Made from Langra mangoes, sweet and naturally preserved.",
    mainImage: "product12.webp",
    slug: "sun-dried-mango",
    manufacturer: "MangoDelight Processors",
    categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
    inStock: 80,
  }
];


const demoCategories = [
  {
    id: "7a241318-624f-48f7-9921-1818f6c20d85",
    name: "dairy-eggs",
  },
  {
    id: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
    name: "fish-seafood",
  },
  {
    id: "782e7829-806b-489f-8c3a-2689548d7153",
    name: "fresh-produce",
  },
  {
    id: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    name: "grains-cereals",
  },
  {
    id: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    name: "meat-poultry",
  },
  {
    id: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    name: "organic-products",
  },
  {
    id: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    name: "packaged-goods",
  },
  {
    id: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    name: "post-harvest-tools",
  },
  {
    id: "d30b85e2-e544-4f48-8434-33fe0b591579",
    name: "seeds-fertilizers",
  },
  {
    id: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
    name: "spices-condiments",
  }
];

async function insertDemoData() {
  
  for (const category of demoCategories) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {}, // Nothing to update if already exists
      create: category,
    });
  }
  console.log("Demo categories inserted successfully!");
  
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
