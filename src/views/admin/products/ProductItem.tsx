import { Product } from "@/interfaces/Product";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductItem({
  product,
  onToggleActive,
}: {
  product: Product;
  onToggleActive: (id: string) => void;
}) {
  return (
    <Card>
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground">
            ${product.price} — {product.brand} — Stock: {product.stock}
          </p>
        </div>
        <Button
          variant={product.isDeleted ? "destructive" : "default"}
          onClick={() => onToggleActive(product.id)}
        >
          {product.isDeleted ? "Deactivate" : "Reactivate"}
        </Button>
      </CardContent>
    </Card>
  );
}
