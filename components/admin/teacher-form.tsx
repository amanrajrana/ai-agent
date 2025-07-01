"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface Teacher {
  id?: string
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

interface TeacherFormProps {
  teacher?: Teacher
  onSubmit: (teacher: Omit<Teacher, "id">) => void
  onCancel: () => void
}

export function TeacherForm({ teacher, onSubmit, onCancel }: TeacherFormProps) {
  const [formData, setFormData] = useState<Omit<Teacher, "id">>({
    name: teacher?.name || "",
    email: teacher?.email || "",
    subject: teacher?.subject || "",
    department: teacher?.department || "",
    experience: teacher?.experience || 0,
    qualifications: teacher?.qualifications || "",
    classes: teacher?.classes || [],
    phone: teacher?.phone || "",
    office: teacher?.office || "",
  })
  const [newClass, setNewClass] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const addClass = () => {
    if (newClass.trim() && !formData.classes.includes(newClass.trim())) {
      setFormData((prev) => ({
        ...prev,
        classes: [...prev.classes, newClass.trim()],
      }))
      setNewClass("")
    }
  }

  const removeClass = (classToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      classes: prev.classes.filter((c) => c !== classToRemove),
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{teacher ? "Edit Teacher" : "Add New Teacher"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={formData.department}
                onChange={(e) => setFormData((prev) => ({ ...prev, department: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="experience">Experience (years)</Label>
              <Input
                id="experience"
                type="number"
                value={formData.experience}
                onChange={(e) => setFormData((prev) => ({ ...prev, experience: Number.parseInt(e.target.value) || 0 }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="office">Office</Label>
            <Input
              id="office"
              value={formData.office}
              onChange={(e) => setFormData((prev) => ({ ...prev, office: e.target.value }))}
            />
          </div>

          <div>
            <Label htmlFor="qualifications">Qualifications</Label>
            <Textarea
              id="qualifications"
              value={formData.qualifications}
              onChange={(e) => setFormData((prev) => ({ ...prev, qualifications: e.target.value }))}
              required
            />
          </div>

          <div>
            <Label>Classes</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={newClass}
                onChange={(e) => setNewClass(e.target.value)}
                placeholder="Add class (e.g., B.Tech CSE 1st Year)"
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addClass())}
              />
              <Button type="button" onClick={addClass}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.classes.map((cls) => (
                <Badge key={cls} variant="secondary" className="flex items-center gap-1">
                  {cls}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeClass(cls)} />
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button type="submit">{teacher ? "Update Teacher" : "Add Teacher"}</Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
