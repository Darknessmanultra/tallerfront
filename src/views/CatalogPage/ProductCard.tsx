import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/interfaces/Product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <img src={product.urls[0]} alt={product.name} className="h-40 w-full object-cover rounded-md" />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-muted-foreground">${product.price}</p>
      </CardContent>
    </Card>
  );
}