import { type TransactionType } from "@prisma/client";

export type TransactionCardAmountProps = {
  type: TransactionType;
  amount: number;
  currency?: string;
};
