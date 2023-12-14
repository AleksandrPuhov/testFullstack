import { AppShell, useMantineTheme } from "@mantine/core";
import { type DefaultLayoutProps } from "./types";
import { Navbar } from "../Navbar";

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const theme = useMantineTheme();

  return (
    <AppShell
      styles={{
        main: {
          overflow: "hidden",
          height: "100vh",
          minHeight: 600,
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
        body: {
          height: "100%",
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 240 }} />
      }
      padding={0}
      layout="alt"
    >
      {children}
    </AppShell>
  );
};
