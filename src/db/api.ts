"use server";
import { createClient } from "@/lib/utlis/supabase/server";
import { Book } from "@/lib/types";

export default async function getBooks() {
  const supabase = await createClient();
  const { data } = await supabase.from("book").select("*").range(0, 9);
  return data as Book[];
}
