import { type Account } from "./types";
import { MoneyTag } from "@/components/MoneyTag";
import { type DataTableColumn } from "mantine-datatable";
import { Text } from "@mantine/core";

export const columns: DataTableColumn<Account>[] = [
  {
    accessor: "name",
    width: "40%",
    sortable: true,
  },
  { accessor: "number", width: "20%" },
  { accessor: "currency.code", width: 160, sortable: true },
  {
    accessor: "balance",
    sortable: true,
    render: ({ balance, currency }) => (
      <MoneyTag count={balance} currency={currency.code} />
    ),
  },
  {
    accessor: "hideInTotal",
    width: 160,
    sortable: true,
    render: ({ hideInTotal }) => <Text>{hideInTotal ? "Yes" : "No"}</Text>,
  },
];
