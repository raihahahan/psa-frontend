import { useState } from "react";
import { Group, Code } from "@mantine/core";
import {
  IconBellRinging,
  IconSettings,
  IconLogout,
  IconWorld,
} from "@tabler/icons-react";
import classes from "./navbar.module.css";
import { VERSION } from "@/config";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const data = [
  { link: "/", label: "Dashboard", icon: IconWorld },
  { link: "/notifications", label: "Notifications", icon: IconBellRinging },
  { link: "/settings", label: "Settings", icon: IconSettings },
];

export function NavbarSimple() {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname.toLowerCase().replace("/", ""));
  const router = useRouter();
  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label.toLowerCase() === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label.toLowerCase());
        router.push(item.link);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Code fw={700}>{VERSION}</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}