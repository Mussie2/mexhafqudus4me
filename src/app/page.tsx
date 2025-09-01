"use client";
import { Button } from "@/components/Form/Button";
import { signOut } from "./lib/utlis/actions";
import { useEffect, useState } from "react";
import { createClient } from "./lib/utlis/supabase/clinte";
import { User } from "@supabase/supabase-js";
import Image from "next/image";

export default function Home() {
  const [profile, setProfile] = useState<User | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await createClient().auth.getUser();
      setProfile(user);
    };
    fetchProfile();
  }, []);
  return (
    <div className="flex flex-row items-center justify-center h-screen gap-4">
      <nav className="fixed top-0 left-0 p-4 justify-between">
        <a className="mr-4" href="/dashboard">
          Dashboard
        </a>
        <a className="mr-4" href="/chapters">
          Chapters
        </a>
      </nav>
      <div>
        <h1 className="text-4xl font-bold">
          {profile ? `Welcome, ${profile.user_metadata.name}` : "Welcome"}
        </h1>
      </div>
      <Image
        src={profile?.user_metadata.avatar_url || "https://i.pravatar.cc/150"}
        alt="avatar"
        width={35}
        height={35}
        style={{ borderRadius: "50%" }}
      />
      <div>
        <Button onClick={signOut}>Sign out</Button>
      </div>
    </div>
  );
}
