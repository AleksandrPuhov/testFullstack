import { type Currency } from "./types";
import { type DataTableColumn } from "mantine-datatable";

export const columns: DataTableColumn<Currency>[] = [
  {
    accessor: "name",
    sortable: true,
  },
  { accessor: "code", width: "15%", sortable: true },
];
