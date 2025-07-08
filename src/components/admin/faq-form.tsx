import { FAQ, Prisma } from "@/prisma/generated/client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { createFAQ, updateFAQ } from "@/lib/features/faqs/faqs.slice";

type FAQFormProps = {
  faq?: FAQ;
  button?: React.ReactNode;
};

export default function FAQForm({ faq, button }: FAQFormProps) {
  const dialogCloseButtonRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState<Prisma.FAQCreateInput>({
    question: "",
    category: "",
    answer: "",
  });

  useEffect(() => {
    if (faq) {
      // If editing an existing FAQ, populate the form with its data
      setFormData({
        question: faq.question,
        category: faq.category,
        answer: faq.answer,
      });
    }
  }, [faq]);

  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    if (faq) {
      // Update existing FAQ
      await dispatch(
        updateFAQ({
          id: faq.id,
          data: formData,
        })
      );
    } else {
      // Create new FAQ
      await dispatch(createFAQ(formData));
    }

    dialogCloseButtonRef.current?.click();
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {button || <Button variant="outline">Open Dialog</Button>}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{faq ? "Edit FAQ" : "Create FAQ"}</DialogTitle>
            <DialogDescription>
              {faq
                ? "Edit the details of the FAQ."
                : "Fill in the details to create a new FAQ."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="faq_question">Question</Label>
              <Input
                id="faq_question"
                name="faq_question"
                value={formData.question}
                onChange={(e) =>
                  setFormData({ ...formData, question: e.target.value })
                }
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="faq_category">Category</Label>
              <Input
                id="faq_category"
                name="faq_category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="faq_answer">Answer</Label>
              <Textarea
                id="faq_answer"
                name="faq_answer"
                value={formData.answer}
                onChange={(e) =>
                  setFormData({ ...formData, answer: e.target.value })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" ref={dialogCloseButtonRef}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" onClick={handleSubmit}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
