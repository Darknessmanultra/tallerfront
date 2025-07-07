"use client";

import UserList from "@/views/admin/users/UserList";
import { useAdminGuard } from "@/hooks/useAdminGuard";

export default function AdminUsersPage() {
  useAdminGuard();

  return <UserList />;
}
