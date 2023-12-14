import { type Currency, type CurrencyListProps } from "./types";
import { DataTable, type DataTableSortStatus } from "mantine-datatable";
import { sortBy } from "lodash";
import { useState, useEffect } from "react";
import { columns } from "./columns";
import { Box } from "@mantine/core";

export const CurrencyList = ({ value }: CurrencyListProps) => {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "name",
    direction: "asc",
  });
  const [records, setRecords] = useState(sortBy(value, "name"));

  useEffect(() => {
    const data = sortBy(value, sortStatus.columnAccessor as keyof Currency);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus, value]);

  const onClickEditModal = (row: Currency) => {
    console.log("edit", row);
  };

  return (
    <Box>
      <DataTable
        withBorder
        borderRadius="sm"
        idAccessor="id"
        records={records}
        columns={columns}
        minHeight={100}
        noRecordsText="No accounts"
        onRowClick={onClickEditModal}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
      />
    </Box>
  );
};
