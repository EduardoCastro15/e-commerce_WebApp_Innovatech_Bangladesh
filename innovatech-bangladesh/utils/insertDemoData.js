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
    category: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
    inStock: 50
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
    category: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    inStock: 100
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
    category: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
    inStock: 200
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
    category: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    inStock: 30
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
    category: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
    inStock: 20
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
    category: "782e7829-806b-489f-8c3a-2689548d7153",
    inStock: 75
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
    category: "ss6412b4-22fd-4fbb-9741-d77580dfdcd2",
    inStock: 150
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
    category: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    inStock: 60
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
    category: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    inStock: 25
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
    category: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    inStock: 90
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
    category: "ss6412b4-22fd-4fbb-9741-d77580dfdcd2",
    inStock: 40
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
    category: "fs6412b4-22fd-4fbb-9741-d77512dfdfa3",
    inStock: 80
  }
];

const demoProductImages = [
  {
    imageID: "1",
    productID: "13",
    image: "sony speaker image 1.jpg",
  },
  {
    imageID: "2",
    productID: "13",
    image: "sony speaker image 2.jpg",
  },
  {
    imageID: "3",
    productID: "13",
    image: "sony speaker image 3.jpg",
  },
  {
    imageID: "4",
    productID: "13",
    image: "sony speaker image 4.jpg",
  },
];


const demoCategories = [
  {
    name: "dairy-eggs"
  },
  {
    name: "fish-seafood"
  },
  {
    name: "fresh-produce"
  },
  {
    name: "grains-cereals"
  },
  {
    name: "meat-poultry"
  },
  {
    name: "organic-products"
  },
  {
    name: "packaged-goods"
  },
  {
    name: "post-harvest-tools"
  },
  {
    name: "seeds-fertilizers"
  },
  {
    name: "spices-condiments"
  }
];


async function insertDemoData() {
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");

  for (const image of demoProductImages) {
    await prisma.image.create({
      data: image,
    });
  }
  console.log("Demo images inserted successfully!");

  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
