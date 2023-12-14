import { type LucideIcon } from "lucide-react";

export type LinkProps = {
  icon: LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
};

export type CollapseMenuProps = React.PropsWithChildren<{
  title: string;
}>;
