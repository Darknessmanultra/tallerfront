import { ApiBackend } from "@/clients/axios";
import { Product } from "@/interfaces/Product";


export async function getAllProducts() {
  const response = await ApiBackend.get("/products");
  return response.data;
}

export const getAllProductsAdmin = async () => ApiBackend.get("/admin/products").then(res => res.data);
export const toggleProductActive = async (id: string) => ApiBackend.patch(`/admin/products/${id}/toggle-active`);
export const updateProduct = async (id: string, data: any) =>
  ApiBackend.put(`/admin/products/${id}`, data);

export const createProduct = async (data: any) =>
  ApiBackend.post(`/admin/products`, data);

export interface ProductQueryParams {
  query?: string;
  category?: string;
  brand?: string;
  condition?: number;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  pageSize?: number;
}

export interface ProductResponse {
  items: Product[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export const getProducts = async (params: ProductQueryParams): Promise<ProductResponse> => {
  const response = await ApiBackend.get("/Product/filtered", {
    params,
  });

  return response.data;
};

export async function getProductById(id: string): Promise<Product> {
  const res = await ApiBackend.get<Product>(`/products/${id}`);
  return res.data;
}