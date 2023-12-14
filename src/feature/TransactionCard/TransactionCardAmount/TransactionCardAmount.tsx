import { MoneyTag } from "@/components/MoneyTag";
import { type TransactionCardAmountProps } from "./types";
import { TransactionType } from "@prisma/client";

export const TransactionCardAmount = ({
  amount,
  currency,
  type,
}: TransactionCardAmountProps) => {
  const isIncome = type === TransactionType.INCOME;
  const isOutcome = type === TransactionType.OUTCOME;
  const isTransfer = type === TransactionType.TRANSFER;

  return (
    <MoneyTag
      sx={(theme) => ({
        fontWeight: 600,
        fontSize: theme.fontSizes.sm,
        color: isTransfer
          ? theme.colors.blue[8]
          : isIncome
          ? theme.colors.green[8]
          : theme.colors.orange[8],
      })}
      count={amount}
      currency={currency}
      prefix={isOutcome ? "-" : isIncome ? "+" : ""}
    />
  );
};
