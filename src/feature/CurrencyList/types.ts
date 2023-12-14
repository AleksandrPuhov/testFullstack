export type Currency = {
  id: string;
  name: string;
  symbol: string;
  code: string;
  decimalDigits: number;
};

export type CurrencyListProps = {
  value: Currency[];
};
