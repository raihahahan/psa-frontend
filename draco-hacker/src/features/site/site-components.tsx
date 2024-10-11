"use client";

import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavbarSimple } from "./navbar";
import { PRODUCT_NAME } from "@/config";

export function MyAppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <code>{PRODUCT_NAME}</code>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavbarSimple />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
