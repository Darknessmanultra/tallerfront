import { User } from "@/interfaces/User";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function UserItem({
  user,
  onToggleActive,
}: {
  user: User;
  onToggleActive: (id: string) => void;
}) {
  return (
    <Card>
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <p className="font-medium">{user.Name}</p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
          <p className="text-sm">Role: {user.role}</p>
        </div>
        <Button
          variant={user.isActive ? "destructive" : "default"}
          onClick={() => onToggleActive(user.id)}
        >
          {user.isActive ? "Deactivate" : "Reactivate"}
        </Button>
      </CardContent>
    </Card>
  );
}
