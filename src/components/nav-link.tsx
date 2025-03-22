"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

export function NavLink({
  end,
  ...props
}: ComponentProps<typeof Link> & { end?: boolean }) {
  const pathname = usePathname();
  const isActive = end
    ? pathname === props.href
    : pathname.includes(String(props.href));

  return <Link aria-current={isActive ? "page" : undefined} {...props} />;
}
