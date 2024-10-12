"use client";
import { Button } from "@mantine/core";
import AlertService, { AlertListener } from "../alert/AlertService";
import { useEffect } from "react";

export function AlertButton() {
  useEffect(() => {
    AlertListener();
  }, []);

  return (
    <Button
      onClick={() => {
        AlertService.alert("Alert", "error");
      }}
    >
      Click to test alert
    </Button>
  );
}
