import { Product,Condition } from "@/interfaces/Product";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const conditionMap: Record<number, "New" | "Used"> = {
  0: "New",
  1: "Used",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/catalogue/${product.id}`}>
        <Card className="hover:shadow-lg transition">
            <CardContent className="p-4">
                <img
                src={product.urls[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
                />
                <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                <p className="text-sm text-gray-400">Stock: {product.stock}</p>
                <p className="text-sm text-gray-400">
                Condition: {conditionMap[product.condition]}
                </p>
                <p className="mt-2 font-bold text-lg">${product.price.toFixed(2)}</p>
            </CardContent>
        </Card>
    </Link>
  );
}