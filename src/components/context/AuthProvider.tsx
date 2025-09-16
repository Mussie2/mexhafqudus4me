"use client";
import { createClient } from "@/lib/utlis/supabase/server";
import { AuthProviderContext } from "@/hooks/context";
import { User } from "@supabase/supabase-js";
import { useEffect, useMemo, useState } from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loadingInital, setLoadingInitial] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setUser(null);
      setIsLoading(true);
      const supabase = await createClient();
      try {
        const jsonValue = await supabase.auth.getUser();
        if (jsonValue.data.user) {
          setUser(jsonValue.data.user);
        }
      } catch (e) {
        console.error("Error getting user:", e);
        setError(e as Error);
      } finally {
        setLoadingInitial(false);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const memoValue = useMemo(
    () => ({
      isLoading,
      error,
      user,
    }),
    [isLoading, error, user]
  );

  return (
    <AuthProviderContext.Provider value={memoValue}>
      {!loadingInital ? null : children}
    </AuthProviderContext.Provider>
  );
}

export default AuthProvider;
