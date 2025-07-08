import { TicketsTable } from "@/components/admin/tickets-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function SupportTickets() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Support Tickets Management</h2>
        <Button asChild>
          <Link href={"/admin/support-tickets/new"}>
            <Plus className="h-4 w-4 mr-2" />
            Add Support Ticket
          </Link>
        </Button>
      </div>
      <TicketsTable />
    </div>
  );
}
