"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth/AuthContext"; 
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/AuthServices";

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
  const { setUser } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: LoginInput) => {
    try {
      const { token, user } = await loginUser(data);
      setUser(user);
      router.push("/account");
    } catch (err: any) {
      if (err.response?.status === 401) {
        setError("email", {
          message: "Invalid email or password",
        });
      } else {
        setError("email", {
          message: "Server error",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto">
      <div>
        <Input {...register("email")} placeholder="Email" />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <Input type="password" {...register("password")} placeholder="Password" />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>

      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}

