import { ApiBackend } from "@/clients/axios";

export async function loginUser(data: { email: string; password: string }) {
  const res = await ApiBackend.post("/auth/login", data);
  const { token, user } = res.data;

  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  return res.data;
}

export async function registerUser(data: {
  name: string;
  email: string;
  phoneNumber: string;
  birthdate: string;
  password: string;
}) {
  return await ApiBackend.post("/auth/register", data);
}
