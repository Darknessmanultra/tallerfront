"use client";
import { useAdminGuard } from "@/hooks/useAdminGuard";
import ProductList from "@/views/admin/products/ProductList";
export default function AdminProductsPage() {
    useAdminGuard();
  return <ProductList />;
}