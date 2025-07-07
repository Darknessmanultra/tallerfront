"use client";

import Link from "next/link";

export default function UserNav() {
  return (
    <nav className="flex gap-6 px-6 py-4 bg-blue-50 border-b">
      <Link href="/account" className="font-medium hover:underline">
        Dashboard
      </Link>
      <Link href="/account/cart" className="font-medium hover:underline">
        Cart
      </Link>
      <Link href="/account/orders" className="font-medium hover:underline">
        Orders
      </Link>
      <Link href="/account/profile/edit" className="font-medium hover:underline">
        Profile
      </Link>
    </nav>
  );
}
