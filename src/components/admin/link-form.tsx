import { FAQ, ImportantLink, Prisma } from "@/prisma/generated/client";
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
import { createLink, updateLink } from "@/lib/features/links/links.slice";

type LinkFormProps = {
  link?: ImportantLink;
  button?: React.ReactNode;
};

export default function LinkForm({ link, button }: LinkFormProps) {
  const dialogCloseButtonRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState<Prisma.ImportantLinkCreateInput>({
    title: "",
    url: "",
    category: "",
    description: "",
  });

  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    if (link) {
      // Update existing link
      await dispatch(
        updateLink({
          id: link.id,
          data: formData,
        })
      );
    } else {
      // Create new link
      await dispatch(createLink(formData));
    }

    dialogCloseButtonRef.current?.click();
  };

  useEffect(() => {
    if (link) {
      // If editing an existing link, populate the form with its data
      setFormData({
        title: link.title,
        category: link.category,
        url: link.url,
        description: link.description,
      });
    }
  }, [link]);

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {button || <Button variant="outline">Open Dialog</Button>}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{link ? "Edit Link" : "Create Link"}</DialogTitle>
            <DialogDescription>
              {link
                ? "Edit the details of the link."
                : "Fill in the details to create a new link."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="link_title">Title</Label>
              <Input
                id="link_title"
                name="link_title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="link_url">URL</Label>
              <Input
                id="link_url"
                name="link_url"
                value={formData.url}
                onChange={(e) =>
                  setFormData({ ...formData, url: e.target.value })
                }
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="link_category">Category</Label>
              <Input
                id="link_category"
                name="link_category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="link_description">Description</Label>
              <Input
                id="link_description"
                name="link_description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
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
