import { useAuthGuard } from "@/hooks/useAuthGuard";
import OrdersView from "@/views/account/OrdersView";
export default function OrdersPage() {
  useAuthGuard();
  return <OrdersView />;
}