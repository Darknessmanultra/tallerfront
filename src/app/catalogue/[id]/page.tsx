import { ApiBackend } from "@/clients/axios";
import { Product } from "@/interfaces/Product"; // adjust path if needed
import { getProductById } from "@/services/ProductServices";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  let product;
  try {
    product = await getProductById(params.id);
  } catch (error) {
    console.error("Failed to load product", error);
    notFound(); // Render 404 page
  }
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.urls?.[0] || "/placeholder.jpg"}
            alt={product.name}
            className="rounded w-full h-auto object-cover"
          />
          {/* Optional carousel for multiple images */}
          {product.urls.length > 1 && (
            <div className="flex gap-2 mt-4">
              {product.urls.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Thumbnail ${idx}`}
                  className="w-16 h-16 object-cover rounded border"
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-lg font-medium text-gray-800">Brand: {product.brand}</p>
          <p className="text-lg font-medium text-gray-800">Category: {product.category}</p>
          <p className="text-lg font-medium text-gray-800">Condition: {product.condition === 1 ? "Used" : "New"}</p>
          <p className="text-2xl font-bold text-green-600 mt-4">${product.price}</p>
          <p className="text-sm text-gray-500 mt-1">In stock: {product.stock}</p>

          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}