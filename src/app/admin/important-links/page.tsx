"use client";

import LinkForm from "@/components/admin/link-form";
import { LinksTable } from "@/components/admin/link-table";
import { Button } from "@/components/ui/button";
import { fetchAllLinks } from "@/lib/features/links/links.slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Plus } from "lucide-react";
import { useEffect } from "react";

export default function ImportantLinks() {
  const linksState = useAppSelector((state) => state.impLinks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (linksState.loading === "idle") {
      dispatch(fetchAllLinks());
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Important Links Management</h2>
        <LinkForm
          button={
            <Button>
              <Plus className="h-4 w-4" />
              Add New Link
            </Button>
          }
        />
      </div>
      <LinksTable />
    </div>
  );
}
