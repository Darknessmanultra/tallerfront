"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth/AuthContext"; 

export function useAdminGuard() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;
    if (user.role !== "Admin") {
      router.replace("/unauthorized");
    }
  }, [user, router]);
}
