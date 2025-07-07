"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerUser } from "@/services/AuthServices";
import { useRouter } from "next/navigation";

const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    phoneNumber: z.string().min(8),
    birthdate: z.string(), // or z.coerce.date() if you're parsing into date
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterInput = z.infer<typeof schema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: RegisterInput) => {
    try {
      await registerUser({
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        birthdate: data.birthdate,
        password: data.password,
      });
      router.push("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto p-6">
      <Input {...register("name")} placeholder="Full Name" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <Input {...register("email")} placeholder="Email" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <Input {...register("phoneNumber")} placeholder="Phone Number" />
      {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}

      <Input {...register("birthdate")} type="date" placeholder="Birthdate" />
      {errors.birthdate && <p className="text-red-500">{errors.birthdate.message}</p>}

      <Input {...register("password")} type="password" placeholder="Password" />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <Input {...register("confirmPassword")} type="password" placeholder="Confirm Password" />
      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword.message}</p>
      )}

      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
}
