import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🗑️  Resetting database...\n");

  // Delete in order to respect foreign key constraints
  console.log("Deleting document chunks...");
  await prisma.documentChunk.deleteMany();
  console.log("✓ Document chunks deleted");

  console.log("Deleting discovery jobs...");
  await prisma.discoveryJob.deleteMany();
  console.log("✓ Discovery jobs deleted");

  console.log("Deleting analyses...");
  await prisma.analysis.deleteMany();
  console.log("✓ Analyses deleted");

  console.log("Deleting projects...");
  await prisma.project.deleteMany();
  console.log("✓ Projects deleted");

  console.log("Deleting usage meters...");
  await prisma.usageMeter.deleteMany();
  console.log("✓ Usage meters deleted");

  console.log("Deleting subscriptions...");
  await prisma.subscription.deleteMany();
  console.log("✓ Subscriptions deleted");

  console.log("Deleting users...");
  await prisma.user.deleteMany();
  console.log("✓ Users deleted");

  console.log("Deleting prompt versions...");
  await prisma.promptVersion.deleteMany();
  console.log("✓ Prompt versions deleted");

  console.log("\n✅ Database reset complete!");
  console.log("Run 'npm run seed' to populate with demo data.\n");
}

main()
  .catch((e) => {
    console.error("❌ Reset failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

