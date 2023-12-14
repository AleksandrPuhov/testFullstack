/* eslint-disable */
import type { Prisma, Transaction } from '@prisma/client';
import { useContext } from 'react';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { RequestHandlerContext } from '@zenstackhq/tanstack-query/runtime/react';
import { query, postMutation, putMutation, deleteMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';

export function useCreateTransaction(
    options?: Omit<UseMutationOptions<Transaction | undefined, unknown, Prisma.TransactionCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.TransactionCreateArgs, Transaction, true>(
        'Transaction',
        `${endpoint}/transaction/create`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TransactionCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TransactionCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Transaction, Prisma.TransactionGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TransactionCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Transaction, Prisma.TransactionGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyTransaction(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.TransactionCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.TransactionCreateManyArgs, Prisma.BatchPayload, false>(
        'Transaction',
        `${endpoint}/transaction/createMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TransactionCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TransactionCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TransactionCreateManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyTransaction<T extends Prisma.TransactionFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TransactionFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.TransactionGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Array<Prisma.TransactionGetPayload<T>>>(
        'Transaction',
        `${endpoint}/transaction/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueTransaction<T extends Prisma.TransactionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.TransactionGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.TransactionGetPayload<T>>(
        'Transaction',
        `${endpoint}/transaction/findUnique`,
        args,
        options,
        fetch,
    );
}

export function useFindFirstTransaction<T extends Prisma.TransactionFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TransactionFindFirstArgs>,
    options?: UseQueryOptions<Prisma.TransactionGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.TransactionGetPayload<T>>(
        'Transaction',
        `${endpoint}/transaction/findFirst`,
        args,
        options,
        fetch,
    );
}

export function useUpdateTransaction(
    options?: Omit<UseMutationOptions<Transaction | undefined, unknown, Prisma.TransactionUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.TransactionUpdateArgs, Transaction, true>(
        'Transaction',
        `${endpoint}/transaction/update`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TransactionUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TransactionUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Transaction, Prisma.TransactionGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TransactionUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Transaction, Prisma.TransactionGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyTransaction(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.TransactionUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.TransactionUpdateManyArgs, Prisma.BatchPayload, false>(
        'Transaction',
        `${endpoint}/transaction/updateMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TransactionUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TransactionUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TransactionUpdateManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertTransaction(
    options?: Omit<UseMutationOptions<Transaction | undefined, unknown, Prisma.TransactionUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.TransactionUpsertArgs, Transaction, true>(
        'Transaction',
        `${endpoint}/transaction/upsert`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TransactionUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.TransactionUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Transaction, Prisma.TransactionGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TransactionUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Transaction, Prisma.TransactionGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteTransaction(
    options?: Omit<UseMutationOptions<Transaction | undefined, unknown, Prisma.TransactionDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.TransactionDeleteArgs, Transaction, true>(
        'Transaction',
        `${endpoint}/transaction/delete`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TransactionDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.TransactionDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Transaction, Prisma.TransactionGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TransactionDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Transaction, Prisma.TransactionGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyTransaction(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.TransactionDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.TransactionDeleteManyArgs, Prisma.BatchPayload, false>(
        'Transaction',
        `${endpoint}/transaction/deleteMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TransactionDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TransactionDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TransactionDeleteManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateTransaction<T extends Prisma.TransactionAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetTransactionAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.GetTransactionAggregateType<T>>(
        'Transaction',
        `${endpoint}/transaction/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupByTransaction<
    T extends Prisma.TransactionGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.TransactionGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.TransactionGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.TransactionGroupByArgs, OrderByArg> & InputErrors>,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.TransactionGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.TransactionGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.TransactionGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.TransactionGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.TransactionGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.TransactionGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.TransactionGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.TransactionGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('Transaction', `${endpoint}/transaction/groupBy`, args, options, fetch);
}

export function useCountTransaction<T extends Prisma.TransactionCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TransactionCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TransactionCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TransactionCountAggregateOutputType>
            : number
    >('Transaction', `${endpoint}/transaction/count`, args, options, fetch);
}
