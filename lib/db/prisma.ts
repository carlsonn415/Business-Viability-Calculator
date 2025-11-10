import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

// Lazy initialization - only validates when Prisma is actually used
function getPrismaClient(): PrismaClient {
  // Validate DATABASE_URL when Prisma is actually used, not at module load
  if (!process.env.DATABASE_URL) {
    console.error("[Prisma] DATABASE_URL check failed");
    console.error("[Prisma] Available env vars:", Object.keys(process.env).filter(k => k.includes('DATABASE') || k.includes('DB')));
    console.error("[Prisma] NODE_ENV:", process.env.NODE_ENV);
    throw new Error(
      "DATABASE_URL environment variable is not set. " +
      "Please configure it in AWS Amplify Console → Environment variables."
    );
  }

  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma;
  }

  const client = new PrismaClient({
    log: ["error", "warn"],
  });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = client;
  }

  return client;
}

// Export a getter that validates on first access
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrismaClient();
    const value = (client as any)[prop];
    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  },
});

