"use client";

import { useEffect, useState } from "react";
import { getAllUsers, toggleUserActive } from "@/services/UserServices";
import { User } from "@/interfaces/User";
import UserItem from "./UserItem";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  const handleToggle = async (id: string) => {
    await toggleUserActive(id);
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isActive: !u.isActive } : u))
    );
  };

  return (
    <div className="space-y-4 p-4">
      {users.map((user) => (
        <UserItem key={user.id} user={user} onToggleActive={handleToggle} />
      ))}
    </div>
  );
}
