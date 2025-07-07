"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/services/CartServices";
import { placeOrder } from "@/services/OrderServices";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CheckoutView() {
  const [cart, setCart] = useState<any>(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    getCart().then(setCart);
  }, []);

  const handleCheckout = async () => {
    await placeOrder({ shippingAddress: address });
    alert("Order placed!");
  };

  if (!cart) return <p className="p-4">Loading cart...</p>;

  return (
    <div className="p-4 space-y-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Checkout</h1>

      <div className="space-y-2">
        {cart.items.map((item: any) => (
          <div key={item.id} className="flex justify-between">
            <span>{item.product.name}</span>
            <span>${item.product.price} x {item.quantity}</span>
          </div>
        ))}
        <hr />
        <p className="font-semibold">Total: ${cart.totalPrice}</p>
      </div>

      <div>
        <Input
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <Button onClick={handleCheckout} disabled={!address}>
        Confirm Order
      </Button>
    </div>
  );
}
