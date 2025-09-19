"use client";
import { createClient } from "@/lib/utlis/supabase/clinte";
import Link from "next/link";
import { redirect } from "next/navigation";

const supabase = createClient();
const user = await supabase.auth.getUser();

if (user.data.user !== null) {
  redirect("/dashboard");
}
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Link href="/auth/login">Login</Link>
    </div>
  );
}
