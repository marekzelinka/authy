import { AuthPanel } from "@/components/auth-panel";
import { NavLink } from "@/components/nav-link";
import { auth } from "@/lib/auth";
import type { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-7xl">
        <div className="min-h-96 w-64 border-r border-gray-200">
          <nav className="flex flex-col space-y-2 p-4">
            <NavLink
              href="/dashboard"
              end
              className="text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:hover:text-foreground/80"
            >
              Overview
            </NavLink>
            <NavLink
              href="/dashboard/profile"
              className="text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:hover:text-foreground/80"
            >
              Profile
            </NavLink>
            <NavLink
              href="/dashboard/settings"
              className="text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:hover:text-foreground/80"
            >
              Settings
            </NavLink>
          </nav>
        </div>
        <div className="flex-1 p-6">{children}</div>
      </div>
      <div className="mx-auto max-w-7xl">
        <AuthPanel session={session} />
      </div>
    </div>
  );
}
