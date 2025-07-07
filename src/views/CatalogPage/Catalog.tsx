"use client";
import { Product } from "@/interfaces/Product";
import { getAllProducts } from "@/services/ProductServices";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function CatalogPage(){
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

