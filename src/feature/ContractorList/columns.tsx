import { type Contractor } from "./types";
import { type DataTableColumn } from "mantine-datatable";
import { Text } from "@mantine/core";

export const columns: DataTableColumn<Contractor>[] = [
  { accessor: "name", width: "30%", sortable: true },
  { accessor: "accountNumber", width: "20%" },
  { accessor: "description" },
  {
    accessor: "archived",
    width: 160,
    sortable: true,
    render: ({ archived }) => <Text>{archived ? "Yes" : "No"}</Text>,
  },
];
