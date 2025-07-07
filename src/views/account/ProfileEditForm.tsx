"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth/AuthContext";
import { updateUserProfile } from "@/services/UserServices";

const schema = z.object({
  name: z.string().min(1),
  phoneNumber: z.string().min(8),
  birthdate: z.string(),
  password: z.string().optional(),
});

type ProfileInput = z.infer<typeof schema>;

export default function ProfileEditForm() {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user?.Name || "",
      phoneNumber: user?.phoneNumber || "",
      birthdate: user?.birthdate || "",
    },
  });

  const onSubmit = async (data: ProfileInput) => {
    await updateUserProfile(data);
    alert("Profile updated!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm p-4 mx-auto">
      <Input {...register("name")} placeholder="Name" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <Input {...register("phoneNumber")} placeholder="Phone" />
      <Input {...register("birthdate")} type="date" />
      <Input {...register("password")} type="password" placeholder="New password (optional)" />

      <Button type="submit">Update Profile</Button>
    </form>
  );
}
