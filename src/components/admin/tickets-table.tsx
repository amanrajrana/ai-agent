"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye } from "lucide-react"

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

interface TicketsTableProps {
  tickets: SupportTicket[]
  onUpdate: (id: string, updates: Partial<SupportTicket>) => void
}

export function TicketsTable({ tickets, onUpdate }: TicketsTableProps) {
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null)
  const [assignedTo, setAssignedTo] = useState("")
  const [resolution, setResolution] = useState("")

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "LOW":
        return "bg-green-100 text-green-800"
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-800"
      case "HIGH":
        return "bg-orange-100 text-orange-800"
      case "URGENT":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "OPEN":
        return "bg-blue-100 text-blue-800"
      case "IN_PROGRESS":
        return "bg-yellow-100 text-yellow-800"
      case "RESOLVED":
        return "bg-green-100 text-green-800"
      case "CLOSED":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleStatusChange = (ticketId: string, status: string) => {
    onUpdate(ticketId, { status: status as SupportTicket["status"] })
  }

  const handleTicketUpdate = () => {
    if (selectedTicket) {
      onUpdate(selectedTicket.id, {
        assignedTo: assignedTo || undefined,
        resolution: resolution || undefined,
        status: resolution ? "RESOLVED" : selectedTicket.status,
      })
      setSelectedTicket(null)
      setAssignedTo("")
      setResolution("")
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell className="font-medium max-w-[200px] truncate">{ticket.title}</TableCell>
              <TableCell>{ticket.category}</TableCell>
              <TableCell>
                <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
              </TableCell>
              <TableCell>
                <Select value={ticket.status} onValueChange={(value) => handleStatusChange(ticket.id, value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="OPEN">Open</SelectItem>
                    <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                    <SelectItem value="RESOLVED">Resolved</SelectItem>
                    <SelectItem value="CLOSED">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  {ticket.studentName && <div>{ticket.studentName}</div>}
                  {ticket.studentEmail && <div className="text-muted-foreground">{ticket.studentEmail}</div>}
                </div>
              </TableCell>
              <TableCell>{ticket.assignedTo || "Unassigned"}</TableCell>
              <TableCell>{new Date(ticket.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedTicket(ticket)
                        setAssignedTo(ticket.assignedTo || "")
                        setResolution(ticket.resolution || "")
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Ticket Details</DialogTitle>
                    </DialogHeader>
                    {selectedTicket && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Title</h4>
                          <p>{selectedTicket.title}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Description</h4>
                          <p className="whitespace-pre-wrap">{selectedTicket.description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold">Category</h4>
                            <p>{selectedTicket.category}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Priority</h4>
                            <Badge className={getPriorityColor(selectedTicket.priority)}>
                              {selectedTicket.priority}
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Assign To</label>
                          <Input
                            value={assignedTo}
                            onChange={(e) => setAssignedTo(e.target.value)}
                            placeholder="Enter staff member name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Resolution</label>
                          <Textarea
                            value={resolution}
                            onChange={(e) => setResolution(e.target.value)}
                            placeholder="Enter resolution details"
                            rows={4}
                          />
                        </div>
                        <Button onClick={handleTicketUpdate}>Update Ticket</Button>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
