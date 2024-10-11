"use client";
import { Button } from "@mantine/core";
import AlertService from "../alert/AlertService";

export function AlertButton() {
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
