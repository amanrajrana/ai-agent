import { z } from "zod";
import { getCourses, getSubjectsByCourseId } from "./course";
import { CourseType, PaperType } from "@/prisma/generated/enums";
import { Prisma } from "@/client";

export const availableTools = {
  getCoursesOffered: {
    description:
      "Get a list of all courses offered by the department. other details like id, name, duration, description",
    name: "getCoursesOffered",
    parameters: z.object({}).optional(),
    execute: getCourses,
  },
  getSubjectsByCourseId: {
    description:
      "Get all semester subjects for a specific course by its ID. Returns details like code, name, credits?, semester, marks?, recommendedBook?, and paperType?.",
    name: "getSubjectsByCourseId",
    parameters: z.object({
      select: z
        .object({
          code: z.boolean().default(true),
          name: z.boolean().default(true),
          credits: z.boolean().default(false),
          semester: z.boolean().default(true),
          marks: z.boolean().default(false),
          paperType: z
            .boolean()
            .default(true)
            .describe("Type of paper (theory/practical/Elective)"),
          textBook: z
            .boolean()
            .default(false)
            .describe("Include textbook? which should preferable for the subject"),
          Unit: z
            .object({
              select: z
                .object({
                  unitNumber: z.boolean().default(true),
                  title: z.boolean().default(true),
                  content: z
                    .boolean()
                    .default(false)
                    .describe("Include content of the unit?"),
                })
                .describe("From Unit table which fields to include"),
            })
            .optional()
            .describe("Unit details which units and content to include"),
        })
        .describe("Fields to include in the response"),
      where: z
        .object({
          courseId: z.nativeEnum(CourseType).describe("Course ID"),
          code: z.string().min(2).max(100).optional().describe("Subject code"),
          credits: z
            .number()
            .min(0)
            .max(10)
            .optional()
            .describe("Subject credits"),
          semester: z
            .number()
            .min(1)
            .max(8)
            .optional()
            .describe("Subject semester"),
          marks: z
            .number()
            .min(0)
            .max(100)
            .optional()
            .describe("Subject marks"),
          paperType: z
            .nativeEnum(PaperType)
            .optional()
            .describe("Subject paper type"),
        })
        .describe("Filter conditions for subjects"),
    }),
    execute: async ({
      select,
      where,
    }: {
      select: Prisma.SubjectSelect;
      where: Prisma.SubjectWhereInput;
    }) => {
      return getSubjectsByCourseId(select, where);
    },
  },
};
