import { db, Prisma } from "@/client";
import { z } from "zod";

export const getFaculties = {
  description: "Get a list of faculties with the provided details",
  name: "getFaculties",
  parameters: z.object({
    select: z
      .object({
        name: z.boolean().optional().describe("Name of the faculty"),
        contact_email: z.boolean().optional().describe("Email of the faculty"),
        designation: z
          .boolean()
          .optional()
          .describe("Designation of the faculty"),
        qualification: z
          .boolean()
          .optional()
          .describe("Qualification of the faculty"),
        specialization: z
          .boolean()
          .optional()
          .describe("Specialization of the faculty"),
        resumeUrl: z.boolean().optional().describe("Resume URL of the faculty"),
      })
      .describe("Fields to include in the response"),
  }),
  execute: async ({ select }: { select: Prisma.FacultySelect }) => {
    try {
      console.log("Fetching faculties with select:", select);
      return await db.faculty.findMany({ select });
    } catch (error) {
      console.error("Error fetching faculties:", error);
      throw new Error("Failed to fetch faculties");
    }
  },
};
