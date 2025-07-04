import path from "node:path";
import type { PrismaConfig } from "prisma";
import dotenv from "dotenv";

dotenv.config();

// Define Env type or import it if it exists elsewhere
export default {
  earlyAccess: true,
  schema: path.join("src", "prisma"),
} satisfies PrismaConfig;