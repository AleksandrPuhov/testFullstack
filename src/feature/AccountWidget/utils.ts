import { type Prisma } from "@prisma/client";

export const sum = <
  T extends { balance: Prisma.Decimal; hideInTotal: boolean }
>(
  options: T[]
) => {
  // TOOD: currencies
  return options.reduce(
    (sum: number, item) =>
      !item.hideInTotal ? sum + item.balance.toNumber() : sum,
    0
  );
};
