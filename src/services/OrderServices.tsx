import { ApiBackend } from "@/clients/axios";

export const getUserOrders = async () => ApiBackend.get("/orders/user").then(res => res.data);
export const placeOrder = async (data: CheckoutInput) =>
  ApiBackend.post("/orders/checkout", data).then(res => res.data);
