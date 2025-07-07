import { useAuthGuard } from "@/hooks/useAuthGuard";
import OrderHistoryView from "@/views/account/OrderHistoryView";

export default function OrderHistoryPage() {
  useAuthGuard();
  return <OrderHistoryView />;
}