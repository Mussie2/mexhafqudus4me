"use server";
import { createClient } from "@/app/lib/utlis/supabase/server";
import { Book } from "@/app/lib/types";

export default async function getBooks() {
  const supabase = await createClient();
  const { data } = await supabase.from("book").select("*").range(0, 9);
  return data as Book[];
}
