"use client";

import { useEffect, useState } from "react";
import { getAllProductsAdmin, toggleProductActive } from "@/services/ProductServices";
import { Product } from "@/interfaces/Product";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProductsAdmin().then(setProducts);
  }, []);

  const handleToggle = async (id: string) => {
    await toggleProductActive(id);
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isActive: !p.isDeleted } : p))
    );
  };

  return (
    <div className="space-y-4 p-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onToggleActive={handleToggle} />
      ))}
    </div>
  );
}
