"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2 } from "lucide-react";
import { Faculty, Prisma } from "@/prisma/generated/client";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";

export function TeachersTable() {
  const teachersState = useAppSelector((state) => state.faculty);
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Qualification</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Classes</TableHead>
            <TableHead>Contact</TableHead>
            {/* <TableHead>Actions</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachersState?.faculty.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell className="font-medium">{teacher.id}</TableCell>
              <TableCell>{teacher.name}</TableCell>
              <TableCell>{teacher.qualification}</TableCell>
              <TableCell>{teacher.designation}</TableCell>
              <TableCell>{teacher.experience} years</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {teacher.FacultySubject.slice(0, 2).map((cls) => (
                    <Badge
                      key={cls.subjectCode}
                      variant="outline"
                      className="text-xs"
                    >
                      {cls.subjectCode}
                    </Badge>
                  ))}
                  {teacher.FacultySubject.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{teacher.FacultySubject.length - 2}
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">{teacher.contact_email}</div>
              </TableCell>
              {/* <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    // onClick={() => onEdit(teacher)}
                  >
                    <Link href={`/admin/teachers/${teacher.id}`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    // onClick={() => onDelete(teacher.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
