import { appConfig, envVars } from "@/config";
import { createUser } from "./admin_user";
import { db } from "@/client";
import { createCourses, createSubjects, createUnits } from "./course";
import { seedFaculty } from "./faculty";

export const startSeedingDatabase = async () => {
  // If the activeDbSeed flag is not set, skip seeding
  if (!appConfig.activeDbSeed) return;

  // If the environment is not development, skip seeding
  if (envVars.get("NODE_ENV") !== "development") {
    throw new Error(
      "Seeding is only supported in development environment. Please run the script in a Node.js environment with access to the database."
    );
  }

  try {
    await db.$transaction(async (txPrisma) => {
      console.log("[🔄 Start Transaction...]");
      // Create admin user
      // await createUser(txPrisma);
      // await createCourses(txPrisma);
      // await createSubjects(txPrisma);
      // await createUnits(txPrisma);
      await seedFaculty(txPrisma);
    });
  } catch (error) {
    console.error("Error during database seeding:", error);
  }
};
