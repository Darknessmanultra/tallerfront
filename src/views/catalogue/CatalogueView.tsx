"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/ProductServices";
import ProductCard from "./ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { Product } from "@/interfaces/Product";

export default function CatalogueView() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [query, category, brand, condition, page]);

  async function fetchProducts() {
    const res = await getProducts({ query, category, brand, condition: condition ? parseInt(condition) : undefined, page, pageSize: 10, });
    setProducts(res.items);
    setTotalPages(res.totalPages);
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex gap-4 flex-wrap">
        <Input
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <Select onValueChange={setCategory}>
          <SelectItem value="">All Categories</SelectItem>
          <SelectItem value="electronics">Electronics</SelectItem>
          <SelectItem value="fashion">Fashion</SelectItem>
        </Select>
        <Select onValueChange={setBrand}>
          <SelectItem value="">All Brands</SelectItem>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="nike">Nike</SelectItem>
        </Select> */}
        {/* <Select onValueChange={(val) => setCondition(val)}>
            <SelectItem value="">All Conditions</SelectItem>
            <SelectItem value="0">New</SelectItem>
            <SelectItem value="1">Used</SelectItem>
        </Select> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Previous</Button>
        <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
      </div>
    </div>
  );
}
