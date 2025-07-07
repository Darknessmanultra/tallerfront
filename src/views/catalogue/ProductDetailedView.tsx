"use client";

import { useEffect, useState } from "react";
import { Product } from "@/interfaces/Product";
import { getProductById } from "@/services/ProductServices";
import { Button } from "@/components/ui/button";

const conditionMap: Record<number, "New" | "Used"> = {
  0: "New",
  1: "Used",
};

export default function ProductDetailView({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p className="p-4">Loading product...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.urls[0]}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded"
        />

        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          <p className="text-sm text-muted-foreground">
            Brand: <strong>{product.brand}</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            Category: <strong>{product.category}</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            Condition: <strong>{conditionMap[product.condition]}</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            Stock: <strong>{product.stock}</strong>
          </p>

          <p className="text-xl font-bold">${product.price.toFixed(2)}</p>

          <Button disabled={product.stock === 0}>Add to Cart</Button>
        </div>
      </div>

      {product.urls.length > 1 && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {product.urls.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`${product.name} ${i + 1}`}
              className="h-40 w-full object-cover rounded border"
            />
          ))}
        </div>
      )}
    </div>
  );
}
