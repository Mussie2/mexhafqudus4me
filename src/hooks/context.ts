import { AuthContextValue } from "@/lib/types";
import { createContext, use, useContext } from "react";

export const AuthProviderContext = createContext<AuthContextValue | object>({});

export default function useUserContext() {
  const user = use(AuthProviderContext);

  if (user !== undefined) {
    throw new Error("useUserContext must be used within a AuthProvider");
  }

  return user;
}

export function useAuth() {
  return useContext(AuthProviderContext);
}
