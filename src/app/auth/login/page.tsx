import AuthForm from "@/components/Form/AuthForm";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Not Authenticated</h1>
      <AuthForm />
    </div>
  );
}
