"use client";

import { useAuth } from "@/contexts/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user.role !== "admin") {
      router.push("/account");
    }
  }, [user, router]);

  if (!user || user.role !== "admin") return null;

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, {user.Name}</p>

      <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold">Manage Products</h2>
          <p className="text-sm text-gray-600">Create, update or delete products</p>
        </div>

        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold">Manage Users</h2>
          <p className="text-sm text-gray-600">Activate, deactivate or edit users</p>
        </div>
      </div>
    </div>
  );
}
