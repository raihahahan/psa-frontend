"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { MyAppShell } from "../site/site-components";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    } else if (pathname === "/login" && user) {
      router.replace("/");
    }
  }, [isLoading, user, pathname]); // Include the variables in the dependency array

  if (pathname == "/login" || pathname == "/logout") {
    return <>{children}</>;
  } else {
    return <MyAppShell>{children}</MyAppShell>;
  }
}
