"use client";

import { useEffect, useState } from "react";
import { getUserOrders } from "@/services/OrderServices";
import { Order } from "@/interfaces/Order";
import OrderDetail from "./OrderDetail";

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getUserOrders().then(setOrders);
  }, []);

  if (!orders.length) return <p className="p-4">No orders yet.</p>;

  return (
    <div className="space-y-6 p-4">
      {orders.map((order) => (
        <OrderDetail key={order.id} order={order} />
      ))}
    </div>
  );
}
