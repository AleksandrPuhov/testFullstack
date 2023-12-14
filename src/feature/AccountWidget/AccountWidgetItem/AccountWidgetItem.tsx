import { useHover } from "@mantine/hooks";
import { type AccountWidgetItemProps } from "./types";
import { MoneyTag } from "@/components/MoneyTag";
import { Flex, Tooltip, ActionIcon, Text, rem, Group } from "@mantine/core";
import {
  Landmark,
  CreditCard,
  History,
  Banknote,
  // Wallet,
  // PiggyBank,
} from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

export const AccountWidgetItem = (item: AccountWidgetItemProps) => {
  const { hovered, ref } = useHover();

  const balance = useMemo(() => item.balance.toNumber() ?? 0, [item.balance]);

  return (
    <Flex
      ref={ref}
      gap="md"
      justify="space-between"
      align="flex-start"
      direction="row"
      wrap="nowrap"
    >
      {/* <Center inline> */}
      <Group spacing={"xs"}>
        {hovered ? (
          <Tooltip label="История операций" withArrow openDelay={100}>
            <ActionIcon
              component={Link}
              href={{
                pathname: "/history",
                query: { accountId: item.id },
              }}
              variant="default"
              color="gray.8"
            >
              <History size={rem(16)} />
            </ActionIcon>
          </Tooltip>
        ) : (
          <ActionIcon variant="light" color="gray.6">
            {item.type === "BANK_ACCOUNT" && <Landmark size={rem(16)} />}
            {item.type === "CREDIT_CARD" && <CreditCard size={rem(16)} />}
            {item.type === "CASH" && <Banknote size={rem(16)} />}
            {/* {item.type === "electron" && <Wallet size={rem(16)} />}
            {item.type === "acquiring" && (
              <PiggyBank size={rem(16)} color="gray" />
            )} */}
          </ActionIcon>
        )}

        <Text>{item.name}</Text>
      </Group>
      {(balance ?? balance === 0) && (
        <MoneyTag
          sx={(theme) => ({
            fontWeight: 600,
            color: item.hideInTotal
              ? theme.colors.gray[4]
              : balance === 0
              ? ""
              : balance && balance > 0
              ? theme.colors.green[8]
              : theme.colors.orange[8],
          })}
          count={balance}
          currency={item.currency.code}
        />
      )}
    </Flex>
  );
};
