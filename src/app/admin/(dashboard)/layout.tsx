import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      redirect("/admin/login");
    }

    return (
      <div className="flex min-h-screen bg-[#f0f1f5]">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <AdminHeader email={user.email} />
          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
      </div>
    );
  } catch {
    redirect("/admin/login");
  }
}
