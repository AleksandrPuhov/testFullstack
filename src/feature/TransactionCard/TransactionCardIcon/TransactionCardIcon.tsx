import { Box, rem } from "@mantine/core";
import {
  ArrowDownLeft,
  ArrowUpRight,
  ArrowRightLeft,
  type LucideProps,
} from "lucide-react";
import { useStyles } from "./styles";
import { type TransactionCardIconProps } from "./types";
import { TransactionType } from "@prisma/client";

export const TransactionCardIcon = ({ type }: TransactionCardIconProps) => {
  const { classes, cx } = useStyles();

  const isIncome = type === TransactionType.INCOME;
  const isOutcome = type === TransactionType.OUTCOME;
  const isTransfer = type === TransactionType.TRANSFER;

  const arrowProps: LucideProps = {
    size: rem(16),
    strokeWidth: 3,
  };

  const iconClasses = cx(classes.icon, {
    [classes.iconIncome]: isIncome,
    [classes.iconOutcome]: isOutcome,
    [classes.iconTransfer]: isTransfer,
  });

  return (
    <Box className={iconClasses}>
      {isIncome && <ArrowDownLeft {...arrowProps} />}
      {isOutcome && <ArrowUpRight {...arrowProps} />}
      {isTransfer && <ArrowRightLeft {...arrowProps} />}
    </Box>
  );
};
