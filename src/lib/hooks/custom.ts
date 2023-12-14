import { type Prisma } from "@prisma/client";
import {
  useInfiniteQuery,
  type UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import { RequestHandlerContext } from "@zenstackhq/tanstack-query/runtime/react";
import { useContext } from "react";
import axios from "axios";
import { deserialize } from "superjson";

export function useFindManyInfiniteTransaction<
  T extends Prisma.TransactionFindManyArgs
>(
  args?: Prisma.SelectSubset<T, Prisma.TransactionFindManyArgs>,
  options?: UseInfiniteQueryOptions<Array<Prisma.TransactionGetPayload<T>>>,
  params?: { page?: number; total?: number; size?: number }
) {
  const { endpoint } = useContext(RequestHandlerContext);
  const startPage = params?.page ?? 1;
  const pageSize = params?.size ?? 50;
  const maxPages = params?.total ? Math.ceil(params.total / pageSize) : 1;

  return useInfiniteQuery<Array<Prisma.TransactionGetPayload<T>>>(
    ["Transaction"],
    async ({ pageParam = startPage }) => {
      const { data } = await axios.get<Array<Prisma.TransactionGetPayload<T>>>(
        `${endpoint}/transaction/findMany`,
        {
          params: {
            q: JSON.stringify({
              skip: (pageParam - 1) * pageSize,
              take: pageSize,
              ...args,
            }),
          },
          transformResponse: (data: string) => {
            const parsed = JSON.parse(data);

            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (parsed.data?.length === 0) {
              return [];
            }

            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return deserialize({
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              json: parsed.data,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              meta: parsed.meta.serialization,
            });
          },
        }
      );

      return data;
    },
    {
      getPreviousPageParam: (_, allPages) => {
        const prevPage = Math.max(allPages.length + (startPage - 1) - 1, 1);

        return prevPage > 1 ? prevPage : undefined;
      },
      getNextPageParam: (_, allPages) => {
        const lastPage = maxPages + 1;
        const nextPage = Math.min(
          allPages.length + (startPage - 1) + 1,
          lastPage
        );

        return nextPage !== lastPage ? nextPage : undefined;
      },
      ...options,
    }
  );
}
