import { type DefaultProps } from "@mantine/core";
import { type Components } from "react-virtuoso";
import { type TransactionFilterSchemaType } from "../TransactionFilter";

type TransactionListPairProps = {
  count: number;
};

export type TransactionListProps = {
  search?: string;
  onClick?: () => void;
  page?: number;
  perPage?: number;
  components?: (props: TransactionListPairProps) => Components;
  groupProps?: DefaultProps;
  children?: React.ReactNode;
  filter?: TransactionFilterSchemaType;
  onPageChange?: (page: number) => void;
};
