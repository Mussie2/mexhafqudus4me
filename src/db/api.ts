"use server";
import { createClient } from "@/lib/utlis/supabase/server";
import { Book } from "@/lib/types";
import { console } from "inspector";

export default async function getBooks() {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();
  if (user.data.user === null) return [];
  console.log("user:", user.data.user?.email);
  const { data } = await supabase.from("book").select("*").range(0, 9);
  return data as Book[];
}
