"use client";

import type { Session } from "next-auth";
import { usePathname } from "next/navigation";

export function AuthPanel({ session }: { session: Session | null }) {
  const pathname = usePathname();

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="space-y-1 text-sm text-muted-foreground">
        <p>Current Path: {pathname}</p>
        <p>Auth Status: {session ? "Logged In" : "Logged Out"}</p>
      </div>
    </div>
  );
}
