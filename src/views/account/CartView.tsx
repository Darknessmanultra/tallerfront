"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/services/CartServices";
import { Cart } from "@/interfaces/Cart";
import CartItem from "@/views/Cart/CartItem";
import { Button } from "@/components/ui/button";

export default function CartView() {
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    getCart().then(setCart);
  }, []);

  if (!cart || cart.items.length === 0) return <p className="p-4">Cart is empty.</p>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Your Cart</h1>

      {cart.items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="flex justify-between pt-4 border-t mt-4">
        <span>Total: ${cart.totalPrice.toFixed(2)}</span>
        <Button asChild>
          <a href="/checkout">Checkout</a>
        </Button>
      </div>
    </div>
  );
}
