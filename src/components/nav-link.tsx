"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

export function NavLink({ ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return <Link aria-current={isActive ? "page" : undefined} {...props} />;
}
