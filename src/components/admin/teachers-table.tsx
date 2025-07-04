"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2 } from "lucide-react"

interface Teacher {
  id: string
  name: string
  email: string
  subject: string
  department: string
  experience: number
  qualifications: string
  classes: string[]
  phone?: string
  office?: string
}

interface TeachersTableProps {
  teachers: Teacher[]
  onEdit: (teacher: Teacher) => void
  onDelete: (id: string) => void
}

export function TeachersTable({ teachers, onEdit, onDelete }: TeachersTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Classes</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell className="font-medium">{teacher.name}</TableCell>
              <TableCell>{teacher.subject}</TableCell>
              <TableCell>{teacher.department}</TableCell>
              <TableCell>{teacher.experience} years</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {teacher.classes.slice(0, 2).map((cls) => (
                    <Badge key={cls} variant="outline" className="text-xs">
                      {cls}
                    </Badge>
                  ))}
                  {teacher.classes.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{teacher.classes.length - 2}
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{teacher.email}</div>
                  {teacher.phone && <div className="text-muted-foreground">{teacher.phone}</div>}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => onEdit(teacher)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => onDelete(teacher.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
