"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/auth/AuthContext";

export default function MainNav() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-white">
      <Link href="/" className="text-xl font-bold">
        🛍️ E-Commerce
      </Link>
      
      <div className="flex justify-between items-center">
        <span>Hello {user?.Name}</span>
        <button onClick={logout} className="text-red-500">Logout</button>
      </div>
      
      <div className="flex gap-4">
        <Link href="/catalogue" className="text-sm hover:underline">
          Catalogo
        </Link>
        {user ? (
          <Link href="/account" className="text-sm hover:underline">
            My Account
          </Link>
        ) : (
          <>
            <Link href="/login" className="text-sm hover:underline">
              Login
            </Link>
            <Link href="/register" className="text-sm hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}