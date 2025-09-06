"use client";
import { createClient } from "./lib/utlis/supabase/clinte";
import { redirect } from "next/navigation";

const supabase = createClient();
const user = supabase.auth.getUser();
if (!user) {
  redirect("/auth");
}

export default function Home() {
  return <div></div>;
}
