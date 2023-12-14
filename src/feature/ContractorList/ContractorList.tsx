import { type Contractor, type ContractorListProps } from "./types";
import { columns } from "./columns";
import { DataTable, type DataTableSortStatus } from "mantine-datatable";
import sortBy from "lodash/sortBy";
import { useState, useEffect } from "react";
import { ContractorForm } from "../ContractorForm";
import { useContractorForm } from "../ContractorForm/hooks";
import { modals } from "@mantine/modals";

export const ContractorList = ({ value }: ContractorListProps) => {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "name",
    direction: "asc",
  });
  const [records, setRecords] = useState(sortBy(value, "name"));
  const { onUpdateSubmit } = useContractorForm();

  useEffect(() => {
    const data = sortBy(value, sortStatus.columnAccessor as keyof Contractor);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus, value]);

  const onClickEditModal = (row: Contractor) =>
    modals.open({
      title: `Edit contractor: ${row.name}`,
      children: (
        <ContractorForm
          initialValues={row}
          onSubmit={(data) => onUpdateSubmit(row.id, data)}
          submitLabel="Save"
        />
      ),
    });

  return (
    <DataTable
      withBorder
      borderRadius="sm"
      highlightOnHover
      idAccessor="id"
      records={records}
      columns={columns}
      minHeight={100}
      noRecordsText="No categories"
      onRowClick={onClickEditModal}
      sortStatus={sortStatus}
      onSortStatusChange={setSortStatus}
    />
  );
};
