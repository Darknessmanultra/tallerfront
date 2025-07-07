"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/services/AuthServices";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginInput = z.infer<typeof schema>;



export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginInput>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: LoginInput) => {
    try {
      await loginUser(data);
    } catch (err:any) {
      setError("root", { message: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto p-6">
      <Input {...register("email")} placeholder="Email" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <Input {...register("password")} type="password" placeholder="Password" />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}
