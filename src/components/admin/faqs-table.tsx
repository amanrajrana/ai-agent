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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { deleteFAQ, updateFAQ } from "@/lib/features/faqs/faqs.slice";
import FAQForm from "./faq-form";
import { DeleteAlertDialog } from "./delete-popup";

export function FAQsTable() {
  const faqs = useAppSelector((state) => state.faqState.faqs);
  const dispatch = useAppDispatch();

  const handleFAQStatusUpdate = (value: string, id: string) => {
    dispatch(updateFAQ({ id, data: { isActive: value === "ACTIVE" } }));
  };

  const handleDeleteFAQ = (id: string) => {
    dispatch(deleteFAQ(id));
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Question</TableHead>
            <TableHead>Answer</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {faqs.map((faq) => (
            <TableRow key={faq.id}>
              <TableCell className="font-medium max-w-[200px] truncate">
                {faq.question}
              </TableCell>
              <TableCell className="max-w-[300px]">
                {faq.answer.length > 100
                  ? `${faq.answer.slice(0, 100)}...`
                  : faq.answer}
              </TableCell>
              <TableCell>{faq.category}</TableCell>
              <TableCell>
                <Select
                  value={faq.isActive ? "ACTIVE" : "INACTIVE"}
                  onValueChange={(value) =>
                    handleFAQStatusUpdate(value, faq.id)
                  }
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                    <SelectItem value="INACTIVE">INACTIVE</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>

              <TableCell>
                {new Date(faq.createdAt).toLocaleDateString()}
              </TableCell>

              <TableCell className="flex items-center gap-2">
                <FAQForm
                  button={
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  }
                  faq={faq}
                />
                <DeleteAlertDialog
                  onSubmit={() => {
                    handleDeleteFAQ(faq.id);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
