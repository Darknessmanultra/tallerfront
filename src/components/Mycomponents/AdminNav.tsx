"use client";

import Link from "next/link";

export default function AdminNav() {
  return (
    <nav className="flex gap-6 px-6 py-4 bg-blue-50 border-b">
      <Link href="/admin/products" className="font-medium hover:underline">
        Gestion de Productos
      </Link>
      <Link href="/admin/users" className="font-medium hover:underline">
        Gestion de Usuarios
      </Link>
    </nav>
  );
}