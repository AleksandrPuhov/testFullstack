import {
  UnstyledButton,
  TextInput,
  Navbar as MantineNavbar,
  type NavbarProps,
  Text,
  rem,
  ScrollArea,
  Divider,
  Box,
  Collapse,
  Group,
} from "@mantine/core";
import {
  Banknote,
  Coins,
  Home,
  LogOut,
  MenuSquare,
  Search,
  Settings,
  User,
  Users,
  Wallet,
  ChevronDown,
} from "lucide-react";
import { useStyles } from "./styles";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useDisclosure } from "@mantine/hooks";
import { type LinkProps, type CollapseMenuProps } from "./types";

const links = [
  { icon: Home, label: "Homepage", href: "/" },
  { icon: Coins, label: "Transactions", href: "/transactions" },
];

const handbooks = [
  { icon: MenuSquare, label: "Categories", href: "/categories" },
  { icon: Wallet, label: "Accounts", href: "/accounts" },
  { icon: Users, label: "Contractors", href: "/contractors" },
  { icon: Banknote, label: "Currencies", href: "/currencies" },
];

const optional = [
  { icon: User, label: "Users", href: "/users" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

const footer = [{ icon: LogOut, label: "Logout", onClick: () => signOut() }];

const CollapseMenu = ({ children, title }: CollapseMenuProps) => {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <Box>
      <UnstyledButton
        component={Group}
        mb="xs"
        spacing={rem(6)}
        className={classes.collapseMenuLink}
        onClick={toggle}
      >
        <ChevronDown
          className={classes.chevron}
          size={rem(15)}
          style={{
            transform: opened ? `rotate(-180deg)` : "none",
          }}
        />
        <Text fw="bold" size={rem(11)}>
          {title}
        </Text>
      </UnstyledButton>

      <Collapse in={opened}>{children}</Collapse>
    </Box>
  );
};

export const Navbar = (props: Omit<NavbarProps, "children">) => {
  const { classes } = useStyles();

  const mainLinks = (props: LinkProps[]) =>
    props.map(({ label, onClick, ...link }) => {
      return link.href ? (
        <UnstyledButton
          key={label}
          component={Link}
          href={link.href}
          className={classes.mainLink}
        >
          <Box className={classes.mainLinkInner}>
            <link.icon
              size={20}
              className={classes.mainLinkIcon}
              strokeWidth={1.5}
            />
            <span>{label}</span>
          </Box>
        </UnstyledButton>
      ) : (
        <UnstyledButton
          key={label}
          onClick={onClick}
          className={classes.mainLink}
        >
          <Box className={classes.mainLinkInner}>
            <link.icon
              size={20}
              className={classes.mainLinkIcon}
              strokeWidth={1.5}
            />
            <span>{label}</span>
          </Box>
        </UnstyledButton>
      );
    });

  return (
    <MantineNavbar
      height={"100%"}
      width={{ sm: 300 }}
      p="md"
      {...props}
      className={classes.navbar}
    >
      <TextInput
        placeholder="Search"
        size="xs"
        icon={<Search size="0.8rem" strokeWidth={1.5} />}
        styles={{ rightSection: { pointerEvents: "none" } }}
        mb="sm"
      />

      <MantineNavbar.Section
        className={classes.section}
        component={ScrollArea}
        grow
      >
        <Box className={classes.mainLinks}>{mainLinks(links)}</Box>

        <CollapseMenu title="Handbooks">
          <Box className={classes.mainLinks}>{mainLinks(handbooks)}</Box>
        </CollapseMenu>
      </MantineNavbar.Section>
      <MantineNavbar.Section className={classes.section}>
        <Box className={classes.mainLinks} pb={0}>
          {mainLinks(optional)}
        </Box>
        <Divider my="sm" color="gray.2" />
        <Box className={classes.mainLinks} pb={0}>
          {mainLinks(footer)}
        </Box>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};
