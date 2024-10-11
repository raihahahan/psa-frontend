import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { MyAppShell } from "@/features/site/site-components";

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
          <MyAppShell>{children}</MyAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
