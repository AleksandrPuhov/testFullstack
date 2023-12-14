export type AccountListProps = {
  title?: React.ReactNode;
  value: Account[];
};

export type Account = {
  id: string;
  name: string;
  number?: string;
  groupId: string;
  currencyId: string;
  currency: {
    code: string;
  };
  balance: number;
  hideInTotal: boolean;
};
