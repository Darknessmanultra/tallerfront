import { Product } from "./Product";

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

export interface Cart {
  id: number;
  userId: string;
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  updatedAt: string;
}