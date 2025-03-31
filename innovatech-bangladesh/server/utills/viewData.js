const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function viewData() {
  const categories = await prisma.category.findMany();
  const products = await prisma.product.findMany();

  console.log("=== CATEGORIES ===");
  console.table(categories);

  console.log("\n=== PRODUCTS ===");
  console.table(products);
}

viewData()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
