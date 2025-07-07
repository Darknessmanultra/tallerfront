import { Card, CardContent } from "@/components/ui/card";
import { CartItem as CartItemType } from "@/interfaces/Cart";
export default function CartItem({ item }: { item: CartItemType }) {
  const { product, quantity } = item;

  return (
    <Card>
      <CardContent className="flex gap-4 p-4">
        <img
          src={product.urls[0]}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-muted-foreground">${product.price}</p>
          </div>
          <p>Qty: {quantity}</p>
        </div>
      </CardContent>
    </Card>
  );
}