import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { MyAppShell } from "@/features/site/site-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@mantine/charts/styles.css";

export const metadata = {
  title: "Draco Hackers",
  description: "PSA Hackathon Submission",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <ToastContainer />
          <MyAppShell>{children}</MyAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
