import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const fallbackDbUrl =
  process.env.DATABASE_URL ||
  (process.env.NODE_ENV === "production"
    ? "file:./prisma/prisma/dev.db"
    : "file:./prisma/dev.db");

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    datasources: { db: { url: fallbackDbUrl } },
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
