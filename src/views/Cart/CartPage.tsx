"use client";

import { Button } from "@/components/ui/button";
import { Cart } from "@/interfaces/Cart";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { getCart } from "@/services/CartServices";

export default function CartView() {
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    getCart().then(setCart);
  }, []);

  if (!cart || cart.items.length === 0) {
    return <p className="p-4">Your cart is empty.</p>;
  }

  return (
    <div className="p-4 space-y-4">
      {cart.items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold">
          Total: ${cart.totalPrice.toFixed(2)}
        </span>
        <Button asChild>
          <a href="/checkout">Go to Checkout</a>
        </Button>
      </div>
    </div>
  );
}