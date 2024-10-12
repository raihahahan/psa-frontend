"use client";
import { toast } from "react-toastify";
import { SquareCardAlert } from "./alert-components";
import supabase from "../database/supabase";

class AlertService {
  public static psaAlert(message: string, onClick?: () => void) {
    const alertMessage = message;
    toast(<SquareCardAlert message={alertMessage} title="Warning" />, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      onClick,
    });
  }
  public static alert(
    message: string,
    type: "info" | "success" | "error" | "warn",
    onClick?: () => void
  ) {
    toast[type](message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      onClick,
    });
  }
}

export function AlertListener() {
  const handleInserts = (payload: any) => {
    console.log("Change received!", payload);
    AlertService.psaAlert(payload.new.data);
  };

  // Listen to inserts
  supabase
    .channel("notifications")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "notifications" },
      handleInserts
    )
    .subscribe();
}

export default AlertService;
