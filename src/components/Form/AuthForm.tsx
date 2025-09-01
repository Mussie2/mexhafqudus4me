"use client";
import { signInWithGoogle } from "@/utlis/actions";
import React from "react";
import { Button } from "./Button";

export default function AuthForm() {
  return (
    <div>
      <form>
        <Button formAction={signInWithGoogle}>Sign in with Google</Button>
      </form>
    </div>
  );
}
