"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoggingOut } from "./components";

export function LogoutHelper() {
  const router = useRouter();
  useEffect(() => {
    router.push("/api/auth/logout");
  }, []);

  return <LoggingOut />;
}
