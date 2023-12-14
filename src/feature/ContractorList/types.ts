export type Contractor = {
  id: string;
  name: string;
  inn: string | null;
  accountNumber: string | null;
  description: string | null;
  archived: boolean;
};

export type ContractorListProps = {
  value: Contractor[];
};
