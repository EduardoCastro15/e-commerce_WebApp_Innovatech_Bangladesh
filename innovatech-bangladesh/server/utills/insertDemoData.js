const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    title: "Red Lady Papaya",
    price: 120,
    rating: 5,
    description: "Organically grown papayas, harvested fresh from Bogura farms.",
    mainImage: "product1.webp",
    slug: "red-lady-papaya",
    manufacturer: "Bogura Agro Co-op",
    categoryName: "fresh-produce",
    inStock: 50
  },
  {
    title: "Kalijira Aromatic Rice",
    price: 85,
    rating: 0,
    description: "Premium small-grain rice, perfect for polao and traditional dishes.",
    mainImage: "product2.webp",
    slug: "kalijira-rice",
    manufacturer: "Dinajpur Millers Ltd.",
    categoryName: "grains-cereals",
    inStock: 100
  },
  {
    title: "Deshi Cow Milk - 1L",
    price: 70,
    rating: 4,
    description: "Fresh, full-cream cow milk, delivered from rural dairy farms.",
    mainImage: "product3.webp",
    slug: "deshi-cow-milk",
    manufacturer: "MilkCo Bangladesh",
    categoryName: "dairy-eggs",
    inStock: 200
  },
  {
    title: "Free-Range Chicken (Live)",
    price: 380,
    rating: 5,
    description: "Naturally raised chicken, antibiotic-free and healthy.",
    mainImage: "product4.webp",
    slug: "free-range-chicken",
    manufacturer: "Village Farms",
    categoryName: "meat-poultry",
    inStock: 30
  },
  {
    title: "Fresh Hilsa (Ilish) - 1.2kg",
    price: 950,
    rating: 4,
    description: "Padma river ilish fish, cleaned and packed on order.",
    mainImage: "product5.webp",
    slug: "fresh-hilsa",
    manufacturer: "Sundarban Fishers",
    categoryName: "fish-seafood",
    inStock: 20
  },
  {
    title: "Pure Turmeric Powder - 250g",
    price: 55,
    rating: 5,
    description: "Stone-ground turmeric with vibrant color and aroma.",
    mainImage: "product6.webp",
    slug: "pure-turmeric",
    manufacturer: "Herbal Roots Co.",
    categoryName: "spices-condiments",
    inStock: 75
  },
  {
    title: "BRRI Dhan-28 Paddy Seeds - 1kg",
    price: 110,
    rating: 4,
    description: "High-yield paddy seeds suited for early harvest cycles.",
    mainImage: "product7.webp",
    slug: "brri-dhan-seeds",
    manufacturer: "SeedTech Bangladesh",
    categoryName: "seeds-fertilizers",
    inStock: 150
  },
  {
    title: "Handwoven Jute Shopping Bag",
    price: 130,
    rating: 5,
    description: "Eco-friendly and durable bag handmade by local artisans.",
    mainImage: "product8.webp",
    slug: "jute-shopping-bag",
    manufacturer: "Women Crafts Union",
    categoryName: "post-harvest-tools",
    inStock: 60
  },
  {
    title: "Bamboo Grain Storage Bin - 40kg",
    price: 450,
    rating: 5,
    description: "Traditional airtight bin for rice and grains, made from bamboo.",
    mainImage: "product9.webp",
    slug: "bamboo-storage-bin",
    manufacturer: "KrishiTool Mart",
    categoryName: "post-harvest-tools",
    inStock: 25
  },
  {
    title: "Raw Sundarbans Honey - 500ml",
    price: 280,
    rating: 5,
    description: "Unfiltered natural honey collected from wild hives in the Sundarbans.",
    mainImage: "product10.webp",
    slug: "sundarban-honey",
    manufacturer: "Honey Harvesters Assoc.",
    categoryName: "organic-products",
    inStock: 90
  },
  {
    title: "Goat Feed (Organic Pellet) - 10kg",
    price: 350,
    rating: 4,
    description: "Balanced nutritional pellets to support goat health and growth.",
    mainImage: "product11.webp",
    slug: "goat-feed-pellets",
    manufacturer: "AgriFeeds Ltd.",
    categoryName: "packaged-goods",
    inStock: 40
  },
  {
    title: "Sun-Dried Mango Slices - 200g",
    price: 160,
    rating: 5,
    description: "Made from Langra mangoes, sweet and naturally preserved.",
    mainImage: "product12.webp",
    slug: "sun-dried-mango",
    manufacturer: "MangoDelight Processors",
    categoryName: "organic-products",
    inStock: 80
  }
];

const demoCategories = [
  { name: "dairy-eggs" },
  { name: "fish-seafood" },
  { name: "fresh-produce" },
  { name: "grains-cereals" },
  { name: "meat-poultry" },
  { name: "organic-products" },
  { name: "packaged-goods" },
  { name: "post-harvest-tools" },
  { name: "seeds-fertilizers" },
  { name: "spices-condiments" }
];

async function insertDemoData() {
  console.log("🔄 Clearing related tables...");
  await prisma.wishlist.deleteMany();
  await prisma.customer_order_product.deleteMany();
  await prisma.customer_order.deleteMany();
  await prisma.image.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  console.log("✅ Cleared all existing data.");

  console.log("📦 Inserting demo categories...");
  const categoryMap = {};
  for (const category of demoCategories) {
    const created = await prisma.category.create({ data: category });
    categoryMap[created.name] = created.id;
  }

  console.log("🛒 Inserting demo products...");
  for (const product of demoProducts) {
    await prisma.product.create({
      data: {
        title: product.title,
        slug: product.slug,
        price: product.price,
        rating: product.rating,
        description: product.description,
        mainImage: product.mainImage,
        manufacturer: product.manufacturer,
        inStock: product.inStock,
        categoryId: categoryMap[product.categoryName]
      }
    });
  }

  console.log("🎉 Demo data inserted successfully!");
}

insertDemoData()
  .catch((err) => {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
