import { type Prisma } from "@prisma/client";

export const currencies: Prisma.CurrencyCreateInput[] = [
  { code: "RUB", name: "Russian Ruble", decimalDigits: 2, symbol: "₽" },
  { code: "USD", name: "US Dollar", decimalDigits: 2, symbol: "$" },
  { code: "EUR", name: "Euro", decimalDigits: 2, symbol: "€" },
  {
    code: "GBP",
    name: "British Pound Sterling",
    decimalDigits: 2,
    symbol: "£",
  },
];
