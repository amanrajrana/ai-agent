"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TeachersTable } from "@/components/admin/teachers-table"
import { TeacherForm } from "@/components/admin/teacher-form"
import { TicketsTable } from "@/components/admin/tickets-table"
import { Plus, Users, Ticket } from "lucide-react"

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

interface SupportTicket {
  id: string
  title: string
  description: string
  category: string
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT"
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED"
  studentName?: string
  studentEmail?: string
  assignedTo?: string
  resolution?: string
  createdAt: string
  updatedAt: string
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [showTeacherForm, setShowTeacherForm] = useState(false)
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null)

  useEffect(() => {
    if (status === "loading") return
    if (!session) {
      router.push("/admin/login")
      return
    }
    fetchTeachers()
    fetchTickets()
  }, [session, status, router])

  const fetchTeachers = async () => {
    try {
      const response = await fetch("/api/teachers")
      const data = await response.json()
      setTeachers(data)
    } catch (error) {
      console.error("Failed to fetch teachers:", error)
    }
  }

  const fetchTickets = async () => {
    try {
      const response = await fetch("/api/tickets")
      const data = await response.json()
      setTickets(data)
    } catch (error) {
      console.error("Failed to fetch tickets:", error)
    }
  }

  const handleTeacherSubmit = async (teacherData: Omit<Teacher, "id">) => {
    try {
      const url = editingTeacher ? `/api/teachers/${editingTeacher.id}` : "/api/teachers"
      const method = editingTeacher ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(teacherData),
      })

      if (response.ok) {
        fetchTeachers()
        setShowTeacherForm(false)
        setEditingTeacher(null)
      }
    } catch (error) {
      console.error("Failed to save teacher:", error)
    }
  }

  const handleTeacherEdit = (teacher: Teacher) => {
    setEditingTeacher(teacher)
    setShowTeacherForm(true)
  }

  const handleTeacherDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this teacher?")) {
      try {
        const response = await fetch(`/api/teachers/${id}`, {
          method: "DELETE",
        })
        if (response.ok) {
          fetchTeachers()
        }
      } catch (error) {
        console.error("Failed to delete teacher:", error)
      }
    }
  }

  const handleTicketUpdate = async (id: string, updates: Partial<SupportTicket>) => {
    try {
      const response = await fetch("/api/tickets", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...updates }),
      })
      if (response.ok) {
        fetchTickets()
      }
    } catch (error) {
      console.error("Failed to update ticket:", error)
    }
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  const stats = {
    teachers: teachers.length,
    openTickets: tickets.filter((t) => t.status === "OPEN").length,
    resolvedTickets: tickets.filter((t) => t.status === "RESOLVED").length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage college department information and support tickets</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.teachers}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.openTickets}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolved Tickets</CardTitle>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.resolvedTickets}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{tickets.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="teachers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="fees">Fee Structure</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="admission">Admission Process</TabsTrigger>
            <TabsTrigger value="links">Important Links</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
          </TabsList>

          <TabsContent value="teachers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Teachers Management</h2>
              <Button onClick={() => setShowTeacherForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Teacher
              </Button>
            </div>

            {showTeacherForm ? (
              <TeacherForm
                teacher={editingTeacher || undefined}
                onSubmit={handleTeacherSubmit}
                onCancel={() => {
                  setShowTeacherForm(false)
                  setEditingTeacher(null)
                }}
              />
            ) : (
              <TeachersTable teachers={teachers} onEdit={handleTeacherEdit} onDelete={handleTeacherDelete} />
            )}
          </TabsContent>

          <TabsContent value="fees">
            <Card>
              <CardHeader>
                <CardTitle>Fee Structure Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fee structure management interface will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="syllabus">
            <Card>
              <CardHeader>
                <CardTitle>Syllabus Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Syllabus management interface will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admission">
            <Card>
              <CardHeader>
                <CardTitle>Admission Process Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Admission process management interface will be implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="links">
            <Card>
              <CardHeader>
                <CardTitle>Important Links Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Important links management interface will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faqs">
            <Card>
              <CardHeader>
                <CardTitle>FAQs Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">FAQs management interface will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tickets" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Support Tickets</h2>
            </div>
            <TicketsTable tickets={tickets} onUpdate={handleTicketUpdate} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
