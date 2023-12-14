import { type Category } from "./types";
import { type DataTableColumn } from "mantine-datatable";
import { Text } from "@mantine/core";

export const columns: DataTableColumn<Category>[] = [
  { accessor: "description", width: "40%" },
  {
    accessor: "archived",
    width: 160,
    sortable: true,
    render: ({ archived }) => <Text>{archived ? "Yes" : "No"}</Text>,
  },
];
