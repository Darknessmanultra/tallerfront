import { useAuthGuard } from "@/hooks/useAuthGuard";
import ProfileView from "@/views/account/ProfileView";

export default function ProfilePage() {
  useAuthGuard();
  return <ProfileView />;
}