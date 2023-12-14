import { type DefaultProps } from "@mantine/core";

export interface MoneyTagProps extends DefaultProps {
  count: number;
  currency?: string;
  prefix?: string;
}

export type FormatMoneyOptions = { locale?: string; currency?: string };
