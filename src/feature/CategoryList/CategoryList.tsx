import { Stack, Text, Box, rem } from "@mantine/core";
import { type Category, type CategoryListProps } from "./types";
import { columns } from "./columns";
import { DataTable } from "mantine-datatable";
import { modals } from "@mantine/modals";
import { CategoryForm, useCategoryForm } from "../CategoryForm";

export const CategoryList = ({ title, value }: CategoryListProps) => {
  const { onUpdateSubmit } = useCategoryForm();

  const onClickEditModal = (row: Category) =>
    modals.open({
      title: `Edit category: ${row.name}`,
      children: (
        <CategoryForm
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
        records={value}
        columns={[
          {
            accessor: "name",
            render: ({ name }) => (
              <Box>
                <Text>{name}</Text>
              </Box>
            ),
          },
          ...columns,
        ]}
        noRecordsText="No categories"
        onRowClick={onClickEditModal}
        rowExpansion={{
          trigger: "always",
          content: (parent) =>
            !!parent.record.categories.length && (
              <DataTable
                noHeader
                idAccessor="id"
                highlightOnHover
                columns={[
                  {
                    accessor: "name",
                    render: ({ name }) => (
                      <Box pl={rem(16)}>
                        <Text>{name}</Text>
                      </Box>
                    ),
                  },
                  ...columns,
                ]}
                records={parent.record.categories}
                onRowClick={onClickEditModal}
              />
            ),
        }}
      />
    </Stack>
  );
};
