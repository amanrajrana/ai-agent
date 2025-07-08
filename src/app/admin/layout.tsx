"use client";

import type React from "react";

import { SessionProvider } from "next-auth/react";
import AdminDashboardLayout from "@/components/admin/base-dashboard-layout";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { fetchAllFaculty } from "@/lib/features/faculty/faculitySlice";
import { fetchAllTickets } from "@/lib/features/tickets/ticketSlice";
import { fetchAllFAQs } from "@/lib/features/faqs/faqs.slice";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const facultyLoading = useAppSelector((state) => state.faculty.loading);
  const ticketLoading = useAppSelector((state) => state.ticket.loading);
  const faqsLoading = useAppSelector((state) => state.faqState.loading);

  useEffect(() => {
    if (facultyLoading === "idle") {
      dispatch(fetchAllFaculty());
    }

    if (ticketLoading === "idle") {
      dispatch(fetchAllTickets());
    }

    if (faqsLoading === "idle") {
      dispatch(fetchAllFAQs());
    }
  }, []);

  return (
    <SessionProvider>
      <AdminDashboardLayout>{children}</AdminDashboardLayout>
    </SessionProvider>
  );
}
