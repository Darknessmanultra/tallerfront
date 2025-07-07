import { ApiBackend } from "@/clients/axios";

export const getAllUsers = async () => ApiBackend.get("/admin/users").then(res => res.data);
export const toggleUserActive = async (id: string) => ApiBackend.patch(`/admin/users/${id}/toggle-active`);
export const updateUserProfile = async (data: any) =>
  ApiBackend.put("/account/profile", data);