"use server";

import { Provider } from "@supabase/supabase-js";
import { createClient } from "./supabase/server";
import { redirect } from "next/navigation";

export async function sginInWith(provider: Provider) {
  const supabase = await createClient();
  const auth_callback = "http://localhost:3000/auth/callback";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: auth_callback,
    },
  });
  console.log(data);
  if (error) {
    console.log(error);
  }
  if (data.url) {
    redirect(data.url);
  }
}

// Export an async function, not a value!
export async function signInWithGoogle() {
  return sginInWith("google");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/auth");
}
