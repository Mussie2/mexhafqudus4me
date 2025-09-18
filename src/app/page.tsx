"use client";
import { useAuth } from "@/hooks/context";
import { User } from "@supabase/supabase-js";
import Link from "next/link";

export default function Home() {
  const { user } = useAuth() as { user: User | null };
  console.log("user:", user);
  if (user !== null) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Link href="/dashboard">Dashboard</Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Link href="/auth">Login</Link>
    </div>
  );
}
