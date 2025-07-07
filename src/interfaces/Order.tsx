import { Product } from "./Product";
import { Address } from "./User";

export interface OrderItem {
  id: number;
  product: Product;
  quantity: number;
  unitPrice: number; // price at the time of order
}

export interface Order {
  id: number;
  userId: string;
  items: OrderItem[];
  shippingAddress: Address;
  status: OrderStatus;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus =
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled";