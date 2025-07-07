"use client";

import { useEffect, useState } from "react";
import { getUserOrders } from "@/services/OrderServices";
import { Order } from "@/interfaces/Order";
import OrderDetail from "@/views/Orders/OrderDetail";

export default function OrderHistoryView() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getUserOrders().then(setOrders);
  }, []);

  const deliveredOrders = orders.filter(order => order.status === "Delivered");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Order History</h1>
      {deliveredOrders.length === 0 ? (
        <p>No completed orders yet.</p>
      ) : (
        deliveredOrders.map(order => <OrderDetail key={order.id} order={order} />)
      )}
    </div>
  );
}
