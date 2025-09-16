"use client";
import { signInWithGoogle } from "@/lib/utlis/actions";
import React, { useEffect } from "react";
import { Button } from "./Button";
import { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/context";

export default function AuthForm() {
  const { user } = useAuth() as { user: User | null };

  useEffect(() => {
    if (user) {
      redirect("/dashboard");
    }
  }, [user]);

  return (
    <div>
      <form>
        <Button formAction={signInWithGoogle}>Sign in with Google</Button>
      </form>
    </div>
  );
}
