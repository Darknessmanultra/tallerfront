import { useAuthGuard } from "@/hooks/useAuthGuard";
import CartView from "@/views/Cart/CartPage";

export default function CartPage() {
    useAuthGuard();
    return <CartView />
}