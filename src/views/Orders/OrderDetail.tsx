import { Card, CardContent } from "@/components/ui/card";
import { Order } from "@/interfaces/Order";

export default function OrderDetail({ order }: { order: Order }) {
  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">Order #{order.id}</h3>
        <p>Status: {order.status}</p>
        <p>Total: ${order.totalAmount.toFixed(2)}</p>

        <ul className="list-disc pl-5">
          {order.items.map((item) => (
            <li key={item.id}>
              {item.product.name} × {item.quantity} — $
              {(item.unitPrice * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}