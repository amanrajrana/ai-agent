import { TeacherForm } from "@/components/admin/teacher-form";

export default async function TeacherFormPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <TeacherForm id={id} />;
}
