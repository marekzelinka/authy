"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  const credentialsAction = async (formData: FormData) => {
    const result = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: true,
      redirectTo: "/",
    });

    if (result?.error) {
      setError("Invalid credentials");
    }
  };

  return (
    <form action={credentialsAction}>
      <div className="space-y-4">
        <Label htmlFor="username" className="sr-only">
          Username
        </Label>
        <Input type="text" id="username" name="username" required />
        <Label htmlFor="password" className="sr-only">
          Password
        </Label>
        <Input type="password" id="password" name="password" required />
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </div>
    </form>
  );
}
