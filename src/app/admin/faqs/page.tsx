"use client";
import FAQForm from "@/components/admin/faq-form";
import { FAQsTable } from "@/components/admin/faqs-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

function FAQsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">FAQs Management</h2>
        <FAQForm
          button={
            <Button>
              <Plus className="h-4 w-4" />
              Add FAQ
            </Button>
          }
        />
      </div>

      <FAQsTable />
    </div>
  );
}

export default FAQsPage;
