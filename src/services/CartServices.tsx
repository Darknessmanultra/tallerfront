import { ApiBackend } from "@/clients/axios";

export const getCart = async () => ApiBackend.get("/cart").then(res => res.data);