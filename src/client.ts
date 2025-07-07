export { Prisma } from "@/prisma/generated/client";
import { PrismaClient } from "@/prisma/generated/client";

declare global {
  // For hot-reloading in development
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prismaClientSingleton = () => {
  const prisma = new PrismaClient({
    log: ["error", "warn"],
  });

  // Attempt to connect to DB and log outcome
  prisma
    .$connect()
    .then(() => {
      console.log("[✅ DB Connected]");
    })
    .catch((err) => {
      console.error("[❌ DB Connection Failed]", err);
      process.exit(1); // Exit the process if DB connection fails
    });

  return prisma;
};

export const prisma = prismaClientSingleton();

export const db = global.prisma || prisma;

if (process.env.NODE_ENV !== "production") {
  global.prisma = db;
}
