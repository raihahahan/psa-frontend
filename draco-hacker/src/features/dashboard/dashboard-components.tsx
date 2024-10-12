"use client";

import { AlertListener } from "../alert/AlertService";
import { useEffect } from "react";

export function AlertButton() {
  useEffect(() => {
    AlertListener();
  }, []);

  return <></>;
}
