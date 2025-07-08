"use client";
import { TeachersTable } from "@/components/admin/teachers-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

function TeacherPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Teachers Management</h2>
        <Button asChild>
          <Link href={"/admin/teachers/new"}>
            <Plus className="h-4 w-4 mr-2" />
            Add Teacher
          </Link>
        </Button>
      </div>

      <TeachersTable />
    </div>
  );
}

export default TeacherPage;
