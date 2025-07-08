"use client";

import { useSession } from "next-auth/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Ticket } from "lucide-react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { usePathname } from "next/navigation";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();

  const totalTeacher = useAppSelector((state) => state.faculty.faculty.length);
  const totalTickets = useAppSelector((state) => state.ticket.tickets.length);
  const openTickets = useAppSelector(
    (state) =>
      state.ticket.tickets.filter((ticket) => ticket.status === "OPEN").length
  );
  const resolvedTickets = useAppSelector(
    (state) =>
      state.ticket.tickets.filter((ticket) => ticket.status === "RESOLVED")
        .length
  );
  const totalFAQs = useAppSelector((state) => state.faqState.faqs.length);

  const pathname = usePathname();

  const getDefaultTab = () => {
    const tabHref = pathname.split("/").slice(0, 3).join("/");

    if (tabHref === "/admin") {
      return "/admin/teachers";
    }

    return tabHref;
  };

  const TAB_NAV_ITEMS = [
    { name: "Teachers", href: "/admin/teachers" },
    { name: "Important Links", href: "/admin/important-links" },
    { name: "FAQs", href: "/admin/faqs" },
    { name: "Support Tickets", href: "/admin/support-tickets" },
  ];

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">
            Manage college department information and support tickets
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Teachers
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTeacher}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total FAQs</CardTitle>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalFAQs}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Open Tickets
              </CardTitle>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{openTickets}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Tickets
              </CardTitle>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTickets}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue={getDefaultTab()} className="space-y-6">
          <TabsList>
            {TAB_NAV_ITEMS.map((item) => (
              <TabsTrigger value={item.href} asChild key={item.href}>
                <Link href={item.href}>{item.name}</Link>
              </TabsTrigger>
            ))}
          </TabsList>
          {children}
        </Tabs>
      </div>
    </div>
  );
}
