"use client";
import { toast } from "react-toastify";
import { SquareCardAlert } from "./alert-components";
import supabase from "../database/supabase";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface AlertMessage {
  data: string;
  id: string;
}

class AlertService {
  public static psaAlert(message: AlertMessage, router: AppRouterInstance) {
    const alertMessage = message;
    toast(<SquareCardAlert message={alertMessage.data} title="Warning" />, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      onClick: () => router.push(`/notifications/${alertMessage.id}`),
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

export function AlertListener(router: AppRouterInstance) {
  const handleInserts = (payload: any) => {
    console.log("Change received!", payload);
    AlertService.psaAlert(payload.new, router);
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
