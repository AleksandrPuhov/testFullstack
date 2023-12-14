import { Box, Table as MantineTable, type TableProps } from "@mantine/core";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
  type PaginationState,
  type Row,
} from "@tanstack/react-table";
import { Fragment, useMemo } from "react";
import { useStyles } from "./styles";

interface ReactTableProps<T extends object> {
  data: T[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[];
  renderSubComponent?: (props: { row: Row<T> }) => React.ReactElement;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  onPaginationChange?: (pagination: PaginationState) => void;
  className?: string;
  tableProps?: TableProps;
  noDataText?: React.ReactNode;
  onRowClick?: (row: T) => void;
}

export const Table = <T extends object>({
  data,
  columns,
  renderSubComponent,
  className,
  tableProps,
  noDataText = "No data",
  onRowClick,
}: ReactTableProps<T>) => {
  const { cx, classes } = useStyles();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rows = useMemo(() => table.getRowModel().rows, [table, data]);

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        border: `1px solid ${theme.colors.gray[3]}`,
        borderRadius: theme.radius.sm,
        overflow: "hidden",
      })}
    >
      <Box
        sx={{
          overflowX: "auto",
        }}
      >
        <Box
          sx={{
            minWidth: "100%",
            display: "inline-block",
            float: "left",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
            }}
          >
            <MantineTable
              {...tableProps}
              className={cx(classes.table, className)}
            >
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody>
                {!rows.length && (
                  <tr>
                    <Box component="td" colSpan={columns.length} ta="center">
                      {noDataText}
                    </Box>
                  </tr>
                )}
                {rows.map((row) => (
                  <Fragment key={row.id}>
                    <tr
                      className={cx({
                        "bg-gray-50 transition-colors dark:bg-black-300":
                          row.getIsExpanded(),
                      })}
                      onClick={() => onRowClick?.(row.original)}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          style={{
                            width: cell.column.getSize(),
                          }}
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>

                    {renderSubComponent ? (
                      <tr key={row.id + "-expanded"}>
                        <td colSpan={columns.length}>
                          {renderSubComponent({ row })}
                        </td>
                      </tr>
                    ) : null}
                  </Fragment>
                ))}
              </tbody>
            </MantineTable>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
