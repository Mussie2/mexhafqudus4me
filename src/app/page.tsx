"use client";
import { createClient } from "../lib/utlis/supabase/clinte";
import { redirect } from "next/navigation";

const supabase = createClient();
const user = supabase.auth.getUser();
if (user != null) {
  redirect("/dashboard");
}

export default function Home() {
  return (
    <div>
      <h1>Mexhafqdus</h1>
    </div>
  );
}
