"use client";
import { toast } from "react-toastify";

class AlertService {
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
  const ws = new WebSocket("ws://127.0.0.1:8000/alerts");
  ws.addEventListener("message", (event) => {
    console.log("message");
    AlertService.alert(event.data, "info");
  });
}

export default AlertService;
