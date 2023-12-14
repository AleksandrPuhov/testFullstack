import { Stack } from "@mantine/core";
import { columns } from "./columns";
import { type Account, type AccountListProps } from "./types";
import { modals } from "@mantine/modals";
import { AccountForm, useAccountForm } from "../AccountForm";
import { DataTable, type DataTableSortStatus } from "mantine-datatable";
import { useEffect, useState } from "react";
import sortBy from "lodash/sortBy";

export const AccountList = ({ value, title }: AccountListProps) => {
  const { onUpdateSubmit } = useAccountForm();
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "name",
    direction: "asc",
  });
  const [records, setRecords] = useState(sortBy(value, "name"));

  useEffect(() => {
    const data = sortBy(value, sortStatus.columnAccessor as keyof Account);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus, value]);

  const onClickEditModal = (row: Account) =>
    modals.open({
      title: `Edit account: ${row.name}`,
      children: (
        <AccountForm
          initialValues={row}
          onSubmit={(data) => onUpdateSubmit(row.id, data)}
          submitLabel="Save"
        />
      ),
    });

  return (
    <Stack spacing="md">
      {title}
      <DataTable
        withBorder
        borderRadius="sm"
        highlightOnHover
        idAccessor="id"
        records={records}
        columns={columns}
        minHeight={100}
        noRecordsText="No accounts"
        onRowClick={onClickEditModal}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
      />
    </Stack>
  );
};
