"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
type LayoutWrapperProps = {
  children: ReactNode;
};

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  const hideSticky =
    pathname === "/book-service" || pathname.startsWith("/book-service/");

  return (
    <>
      {children}
    </>
  );
}