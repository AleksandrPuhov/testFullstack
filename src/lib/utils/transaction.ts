import { useSession } from "next-auth/react";
import { useCountTransaction } from "../hooks";
import { type TransactionType, type Prisma } from "@prisma/client";
import { useFindManyInfiniteTransaction } from "../hooks/custom";
import { type TransactionFilterSchemaType } from "@/feature/TransactionFilter";
import { useUpdateEffect } from "usehooks-ts";
import { useMemo } from "react";
import { construct, crush, isEqual, shake } from "radash";
import { usePrevious } from "@mantine/hooks";

const TransactionListSelect = {
  id: true,
  type: true,
  date: true,
  amount: true,
  amountDestination: true,
  createdAt: true,
  description: true,
  currency: true,
  currencyDestination: true,
  creator: {
    select: {
      id: true,
      name: true,
    },
  },
  category: {
    select: {
      id: true,
      name: true,
    },
  },
  contractor: {
    select: {
      id: true,
      name: true,
    },
  },
  account: {
    select: {
      id: true,
      name: true,
    },
  },
  destinationAccount: {
    select: {
      id: true,
      name: true,
    },
  },
} satisfies Prisma.TransactionSelect;

export type TransactionListItem = Prisma.TransactionGetPayload<{
  select: typeof TransactionListSelect;
}>;

export const useTransactionList = ({
  page = 1,
  size = 50,
  filter,
}: {
  page?: number;
  size?: number;
  filter?: TransactionFilterSchemaType;
} = {}) => {
  const { data: session } = useSession();
  const previousFilter = usePrevious(filter);

  const additionalFilter: Prisma.TransactionWhereInput = useMemo(() => {
    const where: Prisma.TransactionWhereInput = {
      AND: {
        date: {
          gte: filter?.date?.[0]?.toISOString(),
          lte: filter?.date?.[1]?.toISOString(),
        },
        type: {
          in: (filter?.type as TransactionType[]) ?? undefined,
        },
        categoryId: {
          in: filter?.category ?? undefined,
        },
        OR: [
          { accountId: { in: filter?.account ?? undefined } },
          { destinationAccountId: { in: filter?.account ?? undefined } },
        ],
      },
    };

    return construct(shake(crush(where)));
  }, [filter]);

  const { data: count } = useCountTransaction(
    {
      where: {
        creatorId: session?.user?.id,
        ...additionalFilter,
      },
    },
    {
      enabled: !!session?.user?.id,
      staleTime: Infinity,
    }
  );

  const {
    data,
    isFetched,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    fetchNextPage,
    refetch,
  } = useFindManyInfiniteTransaction(
    {
      where: {
        creatorId: session?.user?.id,
        ...additionalFilter,
      },
      orderBy: {
        date: "desc",
      },
      select: TransactionListSelect,
    },
    {
      queryKey: ["transaction-list", page],
    },
    {
      total: count,
      size,
      page,
    }
  );

  useUpdateEffect(() => {
    if (filter && !isEqual(filter, previousFilter)) {
      void refetch();
    }
  }, [filter]);

  return {
    data,
    isFetched,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    fetchNextPage,
    refetch,
    count,
  };
};
