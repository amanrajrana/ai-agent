"use client";

import { useRef, useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { ImportantLink } from "@/prisma/generated/client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { DialogClose } from "@radix-ui/react-dialog";
import { updateLink } from "@/lib/features/links/links.slice";

export function LinksTable() {
  const links = useAppSelector((state) => state.impLinks.links);
  const dispatch = useAppDispatch();
  const [selectedLink, setSelectedLink] = useState<ImportantLink | null>(null);

  const dialogCloseButtonRef = useRef<HTMLButtonElement>(null);

  const handleChangeStatus = (linkId: string, value: string) => {
    dispatch(
      updateLink({
        id: linkId,
        data: {
          isActive: value === "ACTIVE",
        },
      })
    );
  };

  const handleLinkUpdate = () => {
    if (selectedLink) {
      dispatch(
        updateLink({
          id: selectedLink.id,
          data: {
            title: selectedLink.title,
            url: selectedLink.url,
            category: selectedLink.category,
            description: selectedLink.description,
            isActive: selectedLink.isActive,
          },
        })
      );
      setSelectedLink(null);
      dialogCloseButtonRef.current?.click();
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {links.map((link) => (
            <TableRow key={link.id}>
              <TableCell className="font-medium max-w-[200px] truncate">
                {link.title}
              </TableCell>
              <TableCell>{link.url}</TableCell>
              <TableCell>{link.description}</TableCell>
              <TableCell>{link.category}</TableCell>
              <TableCell>
                <Select
                  value={link.isActive ? "ACTIVE" : "INACTIVE"}
                  onValueChange={(value) => handleChangeStatus(link.id, value)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACTIVE">Active</SelectItem>
                    <SelectItem value="INACTIVE">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                {new Date(link.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedLink(link);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Link Details</DialogTitle>
                    </DialogHeader>
                    {selectedLink && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Title</h4>
                          <p>{selectedLink.title}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Description</h4>
                          <p className="whitespace-pre-wrap">
                            {selectedLink.description}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold">Category</h4>
                            <p>{selectedLink.category}</p>
                          </div>
                        </div>

                        <Button onClick={handleLinkUpdate}>Update Link</Button>
                      </div>
                    )}
                    <DialogClose ref={dialogCloseButtonRef} />
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
