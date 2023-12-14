import { useTransactionList } from "@/lib/utils/transaction";
import { TransactionCard } from "../TransactionCard";
import { Box, Button, Center, LoadingOverlay, Stack, rem } from "@mantine/core";
import dayjs from "dayjs";
import { forwardRef, memo, useRef, useState, useMemo, useEffect } from "react";
import { type Components, GroupedVirtuoso } from "react-virtuoso";
import { group, flat } from "radash";
import { type TransactionCardProps } from "../TransactionCard/types";
import { useUpdateEffect } from "usehooks-ts";
import { type TransactionListProps } from "./types";

const TopItemList: Components["TopItemList"] = function TopItemList({
  style,
  children,
}) {
  return <div style={{ ...style, top: 0, padding: 0 }}>{children}</div>;
};

const List: Components["List"] = forwardRef(function List(
  { style, children },
  listRef
) {
  return (
    <Stack
      ref={listRef}
      style={style}
      sx={(theme) => ({
        padding: `0 ${theme.spacing.lg}`,
        margin: 0,
      })}
      spacing={rem(6)}
    >
      {children}
    </Stack>
  );
});

const MemoTransactionCard = memo(function MemoTransactionCard(
  item: TransactionCardProps
) {
  return <TransactionCard {...item} />;
});

export const TransactionList = ({
  page = 1,
  perPage = 50,
  children: listChildren,
  groupProps,
  onPageChange,
  filter,
}: TransactionListProps) => {
  const loadedItems = useRef(0);
  const currentPage = useRef(page);
  const {
    data: infiniteData,
    isFetched,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    fetchNextPage,
    refetch,
    // count, // TODO
  } = useTransactionList({
    page: page,
    size: perPage,
    filter,
  });

  const data = useMemo(
    () => (infiniteData ? flat(infiniteData.pages) : null),
    [infiniteData]
  );

  const grouped = useMemo(
    () =>
      data
        ? group(data, (item) => dayjs(item.date).startOf("day").toISOString())
        : [],
    [data]
  );
  const groupCounts = useMemo(
    () => Object.values(grouped).map((items) => items?.length ?? 0),
    [grouped]
  );
  const groups = useMemo(() => Object.keys(grouped), [grouped]);

  const [currentGroupCounts, setCurrentGroupCounts] = useState(
    () => groupCounts
  );

  useUpdateEffect(() => {
    if (isFetched && data) {
      loadedItems.current = data.length;
      currentPage.current = Math.ceil(data.length / perPage);
      setCurrentGroupCounts(groupCounts);
      onPageChange?.(currentPage.current);
    }
  }, [isFetched, data]);

  const handleLoadMore = () => {
    void fetchNextPage();
  };

  useEffect(() => {
    if (isFetched) {
      void refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        position: "relative",
        flexDirection: "column",
      }}
    >
      <GroupedVirtuoso
        style={{ height: "100%" }}
        groupCounts={currentGroupCounts}
        endReached={handleLoadMore}
        components={{
          List,
          TopItemList,
          Header: () => {
            return <>{listChildren}</>;
          },
          Group: ({ children, style, ...props }) => {
            return (
              <Box
                {...props}
                component="div"
                style={style}
                sx={(theme) => ({
                  paddingTop: theme.spacing.xs,
                  paddingBottom: rem(6),
                  fontSize: theme.fontSizes.md,
                  fontWeight: 500,
                })}
                {...groupProps}
              >
                {children}
              </Box>
            );
          },
          Footer: () => {
            return (
              !!loadedItems.current && (
                <Center py="xl">
                  <Button
                    loading={isLoading || isFetchingNextPage}
                    onClick={handleLoadMore}
                    disabled={!hasNextPage}
                  >
                    {isFetchingNextPage
                      ? "Loading more..."
                      : hasNextPage
                      ? "Load Newer"
                      : "Nothing more to load"}
                  </Button>
                </Center>
              )
            );
          },
        }}
        groupContent={(index) => {
          return <div>{dayjs(groups[index]).format("DD MMMM YYYY")}</div>;
        }}
        itemContent={(index) => {
          const item = data?.[index];

          return (
            item && (
              <MemoTransactionCard
                {...item}
                onClick={() => console.log(item)}
              />
            )
          );
        }}
      />
      <LoadingOverlay visible={isRefetching} overlayBlur={1} zIndex={10} />
    </Box>
  );
};
