"use client";

import { Product } from "@/interfaces/Product";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateProduct, createProduct } from "@/services/ProductServices"

const schema = z.object({
  name: z.string().min(1),
  description: z.string(),
  price: z.coerce.number().nonnegative(),
  stock: z.coerce.number().int().nonnegative(),
  imageUrl: z.string().url(),
});

export type ProductFormInput = z.infer<typeof schema>;

export default function ProductForm({
  product,
  onSuccess,
}: {
  product?: Product;
  onSuccess?: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormInput>({
    resolver: zodResolver(schema),
    defaultValues: product ?? {},
  });

  const onSubmit = async (data: ProductFormInput) => {
    if (product?.id) {
      await updateProduct(product.id, data);
    } else {
      await createProduct(data);
    }
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 max-w-md">
      <Input {...register("name")} placeholder="Name" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <Input {...register("description")} placeholder="Description" />
      <Input {...register("price")} type="number" placeholder="Price" />
      <Input {...register("stock")} type="number" placeholder="Stock" />
      <Input {...register("imageUrl")} placeholder="Image URL" />

      <Button type="submit">{product ? "Update" : "Create"} Product</Button>
    </form>
  );
}
