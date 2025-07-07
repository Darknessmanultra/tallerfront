"use client";

import { useEffect, useState } from "react";
import { getUserOrders } from "@/services/OrderServices";
import { Order } from "@/interfaces/Order";
import OrderDetail from "@/views/Orders/OrderDetail";

export default function OrdersView() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getUserOrders().then(setOrders);
  }, []);

  const activeOrders = orders.filter(order => order.status !== "Delivered");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Orders</h1>
      {activeOrders.length === 0 ? (
        <p>No current orders.</p>
      ) : (
        activeOrders.map(order => <OrderDetail key={order.id} order={order} />)
      )}
    </div>
  );
}
