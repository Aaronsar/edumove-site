import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export const metadata = {
  title: "Edumove Admin",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if Supabase env vars are configured
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return <>{children}</>;
  }

  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Allow login page to render without auth
    if (!user) {
      return <>{children}</>;
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
    // If Supabase fails, render children without layout (login page)
    return <>{children}</>;
  }
}
