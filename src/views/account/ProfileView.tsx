"use client";

import { useAuth } from "@/contexts/auth/AuthContext";

export default function ProfileView() {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4 space-y-2">
      <h1 className="text-xl font-bold">Profile</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}
