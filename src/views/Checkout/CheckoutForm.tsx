"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { placeOrder } from "@/services/OrderServices";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({
  shippingAddressId: z.coerce.number(),
  paymentMethod: z.string().min(1),
});

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: CheckoutInput) => {
    await placeOrder(data);
    window.location.href = "/orders";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4 p-4">
      <Input {...register("shippingAddressId")} placeholder="Shipping Address ID" />
      {errors.shippingAddressId && <p className="text-red-500">Required</p>}

      <Input {...register("paymentMethod")} placeholder="Payment Method (e.g. CreditCard)" />
      {errors.paymentMethod && <p className="text-red-500">Required</p>}

      <Button type="submit" className="w-full">
        Place Order
      </Button>
    </form>
  );
}
