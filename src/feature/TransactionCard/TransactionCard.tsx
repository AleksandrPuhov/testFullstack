import {
  Box,
  Group,
  Stack,
  Tooltip,
  rem,
  type MantineNumberSize,
  type StackProps,
  Flex,
} from "@mantine/core";
// import dayjs from "dayjs";
import { MoveRight } from "lucide-react";
import { TransactionCardDescription } from "./TransactionCardDescription";
import { TransactionCardPaper } from "./TransactionCardPaper";
import { TransactionCardIcon } from "./TransactionCardIcon";
import { TransactionCardAmount } from "./TransactionCardAmount";
import { TransactionCardAnchor } from "./TransactionCardAnchor";
import { type TransactionCardProps } from "./types";
import { TransactionType } from "@prisma/client";

const AccountStack = ({
  children,
  ...props
}: React.PropsWithChildren & StackProps) => {
  return (
    <Stack spacing={rem(4)} {...props}>
      {children}
    </Stack>
  );
};

const AccountArrowGroup = ({
  left,
  right,
  spacing,
}: {
  left: React.ReactNode;
  right?: React.ReactNode;
  spacing?: MantineNumberSize;
}) => {
  return (
    <Group
      sx={(theme) => ({
        color: theme.colors.gray[7],
      })}
      spacing={spacing}
    >
      {left}
      {!!right && <MoveRight size={rem(14)} />}
      {right}
    </Group>
  );
};

export const TransactionCard = ({
  onClick,
  type,
  category,
  contractor,
  account,
  amount,
  amountDestination: amountDestinationDecimal,
  destinationAccount,
  description,
  search = "",
  currency,
  currencyDestination,
}: TransactionCardProps) => {
  const amountDestination = amountDestinationDecimal
    ? amountDestinationDecimal.toNumber()
    : 0;
  const isIncome = type === TransactionType.INCOME;
  const isOutcome = type === TransactionType.OUTCOME;

  return (
    <TransactionCardPaper onClick={onClick}>
      <Flex align="center" gap="md">
        <Box sx={{ flexShrink: 0 }}>
          <TransactionCardIcon type={type} />
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <AccountStack maw={700}>
            <Box>
              <Tooltip label={"Статья"} withArrow openDelay={500}>
                <TransactionCardAnchor {...category} fw={700} />
              </Tooltip>
            </Box>

            <TransactionCardDescription
              search={search}
              description={description}
            />
          </AccountStack>
        </Box>
        <Box sx={{ flexShrink: 0 }}>
          <AccountArrowGroup
            spacing={rem(16)}
            left={
              <AccountStack w={140}>
                <AccountArrowGroup
                  spacing={rem(8)}
                  left={
                    !!contractor && isIncome ? (
                      <Tooltip label={"Контрагент"} withArrow openDelay={500}>
                        <TransactionCardAnchor {...contractor} />
                      </Tooltip>
                    ) : (
                      <Tooltip
                        label={!destinationAccount ? "Cчет" : "Счет списания"}
                        withArrow
                        openDelay={500}
                      >
                        <TransactionCardAnchor {...account} />
                      </Tooltip>
                    )
                  }
                  right={
                    !!contractor &&
                    isOutcome && (
                      <Tooltip label={"Контрагент"} withArrow openDelay={500}>
                        <TransactionCardAnchor {...contractor} />
                      </Tooltip>
                    )
                  }
                />
                <TransactionCardAmount
                  amount={amount.toNumber()}
                  type={type}
                  currency={currency}
                />
              </AccountStack>
            }
            right={
              !!amountDestination && (
                <AccountStack w={140}>
                  <Tooltip label={"Счет зачисления"} withArrow openDelay={500}>
                    <TransactionCardAnchor {...destinationAccount!} />
                  </Tooltip>
                  <TransactionCardAmount
                    amount={amountDestination}
                    type={type}
                    currency={currencyDestination ?? ""}
                  />
                </AccountStack>
              )
            }
          />
        </Box>
      </Flex>
    </TransactionCardPaper>
  );
};
