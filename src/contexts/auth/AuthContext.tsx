'use client';

import { User } from "@/interfaces/User"
import { authReducer, AuthState } from "./AuthReducer";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: { id: string; email:string, role: string } | null;
};

const AuthContext = createContext<AuthContextType>({ user: null });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthContextType["user"]>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser({ id: payload.sub, email: payload ,role: payload.role });
      } catch {}
    }
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);