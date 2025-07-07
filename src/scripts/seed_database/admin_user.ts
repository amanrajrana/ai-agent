import { Prisma } from "@/client";
import bcrypt from "bcrypt";

const users: Prisma.UserCreateInput[] = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin123", 10),
    role: "ADMIN",
  },
];

export const createUser = async (txPrisma: Prisma.TransactionClient) => {
  await txPrisma.user.createMany({
    data: users,
  });
};
