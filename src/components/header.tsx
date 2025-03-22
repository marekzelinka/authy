import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { NavLink } from "./nav-link";

export async function Header() {
  const session = await auth();

  return (
    <div className="w-full border-b border-gray-200 bg-white p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex gap-4">
          <NavLink
            href="/"
            className="text-foreground/80 hover:text-foreground aria-[current=page]:text-foreground"
          >
            Home
          </NavLink>
          {session ? (
            <NavLink
              href="/dashboard"
              className="text-foreground/80 hover:text-foreground aria-[current=page]:text-foreground"
            >
              Dashboard
            </NavLink>
          ) : (
            <NavLink
              href="/login"
              className="text-foreground/80 hover:text-foreground aria-[current=page]:text-foreground"
            >
              Login
            </NavLink>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-2 w-2 rounded-full",
              session ? "bg-green-700" : "bg-red-700",
            )}
          ></div>
          <span>{session ? "Authenticated" : "Not Authenticated"}</span>
        </div>
      </div>
    </div>
  );
}
