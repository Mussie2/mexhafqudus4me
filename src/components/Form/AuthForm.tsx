"use client";
import { signInWithGoogle } from "@/lib/utlis/actions";
import React from "react";
import { Button } from "./Button";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/utlis/supabase/clinte";

const supabase = createClient();
const user = await supabase.auth.getUser();

if (user.data.user !== null) {
  redirect("/dashboard");
}

export default function AuthForm() {
  return (
    <div>
      <form>
        <Button formAction={signInWithGoogle}>Sign in with Google</Button>
      </form>
    </div>
  );
}
