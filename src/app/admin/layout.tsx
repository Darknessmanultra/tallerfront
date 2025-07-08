"use client"
import { useAdminGuard } from "@/hooks/useAdminGuard";
import AdminNav from "@/components/Mycomponents/AdminNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  useAdminGuard();

  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-100 p-4">
        <AdminNav />
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}