"use client";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import UserNav from "@/components/Mycomponents/UserNav";
import Footer from "@/components/Mycomponents/Footer";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  useAuthGuard();

  return (
    <div>
      <UserNav />
      <main className="min-h-screen p-4">{children}</main>
      <Footer />
    </div>
  );
}
