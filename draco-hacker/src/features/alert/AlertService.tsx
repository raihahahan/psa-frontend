"use client";
import { toast } from "react-toastify";
import { SquareCardAlert } from "./alert-components";

class AlertService {
  public static psaAlert(message: string, onClick?: () => void) {
    const alertMessage = JSON.parse(message.replaceAll("'", '"')).data;
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
  const ws = new WebSocket("ws://127.0.0.1:8000/alerts");
  ws.addEventListener("message", (event) => {
    console.log("message");
    AlertService.psaAlert(event.data);
  });
}

export default AlertService;
