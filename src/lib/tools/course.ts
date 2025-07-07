import { db, Prisma } from "@/client";
import { CourseType } from "@/prisma/generated/enums";

export const getCourses = async () => {
  try {
    return await db.course.findMany({
      select: {
        id: true,
        name: true,
        duration: true,
        description: true,
        semester: true,
      },
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Failed to fetch courses");
  }
};

export const getSubjectsByCourseId = async (
  select: Prisma.SubjectSelect,
  where: Prisma.SubjectWhereInput
) => {
  try {
    console.log("Selected fields for subject:", select);
    console.log("Filter conditions for subject:", where);
    const subjects = await db.subject.findMany({
      where,
      select,
    });
    return subjects;
  } catch (error) {
    console.error("Error fetching subjects for course:", error);
    throw error;
  }
};
