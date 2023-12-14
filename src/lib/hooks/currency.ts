/* eslint-disable */
import type { Prisma, Currency } from '@prisma/client';
import { useContext } from 'react';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { RequestHandlerContext } from '@zenstackhq/tanstack-query/runtime/react';
import { query, postMutation, putMutation, deleteMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';

export function useCreateCurrency(
    options?: Omit<UseMutationOptions<Currency | undefined, unknown, Prisma.CurrencyCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.CurrencyCreateArgs, Currency, true>(
        'Currency',
        `${endpoint}/currency/create`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CurrencyCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CurrencyCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Currency, Prisma.CurrencyGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CurrencyCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Currency, Prisma.CurrencyGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyCurrency(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CurrencyCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.CurrencyCreateManyArgs, Prisma.BatchPayload, false>(
        'Currency',
        `${endpoint}/currency/createMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CurrencyCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CurrencyCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CurrencyCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyCurrency<T extends Prisma.CurrencyFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CurrencyFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.CurrencyGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Array<Prisma.CurrencyGetPayload<T>>>(
        'Currency',
        `${endpoint}/currency/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueCurrency<T extends Prisma.CurrencyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.CurrencyGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.CurrencyGetPayload<T>>('Currency', `${endpoint}/currency/findUnique`, args, options, fetch);
}

export function useFindFirstCurrency<T extends Prisma.CurrencyFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CurrencyFindFirstArgs>,
    options?: UseQueryOptions<Prisma.CurrencyGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.CurrencyGetPayload<T>>('Currency', `${endpoint}/currency/findFirst`, args, options, fetch);
}

export function useUpdateCurrency(
    options?: Omit<UseMutationOptions<Currency | undefined, unknown, Prisma.CurrencyUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.CurrencyUpdateArgs, Currency, true>(
        'Currency',
        `${endpoint}/currency/update`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CurrencyUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CurrencyUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Currency, Prisma.CurrencyGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CurrencyUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Currency, Prisma.CurrencyGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyCurrency(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CurrencyUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.CurrencyUpdateManyArgs, Prisma.BatchPayload, false>(
        'Currency',
        `${endpoint}/currency/updateMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CurrencyUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CurrencyUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CurrencyUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertCurrency(
    options?: Omit<UseMutationOptions<Currency | undefined, unknown, Prisma.CurrencyUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.CurrencyUpsertArgs, Currency, true>(
        'Currency',
        `${endpoint}/currency/upsert`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CurrencyUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CurrencyUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Currency, Prisma.CurrencyGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CurrencyUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Currency, Prisma.CurrencyGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteCurrency(
    options?: Omit<UseMutationOptions<Currency | undefined, unknown, Prisma.CurrencyDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.CurrencyDeleteArgs, Currency, true>(
        'Currency',
        `${endpoint}/currency/delete`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CurrencyDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CurrencyDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Currency, Prisma.CurrencyGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CurrencyDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Currency, Prisma.CurrencyGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyCurrency(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CurrencyDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.CurrencyDeleteManyArgs, Prisma.BatchPayload, false>(
        'Currency',
        `${endpoint}/currency/deleteMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CurrencyDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CurrencyDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CurrencyDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateCurrency<T extends Prisma.CurrencyAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetCurrencyAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.GetCurrencyAggregateType<T>>(
        'Currency',
        `${endpoint}/currency/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupByCurrency<
    T extends Prisma.CurrencyGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.CurrencyGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.CurrencyGroupByArgs, OrderByArg> & InputErrors>,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.CurrencyGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.CurrencyGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.CurrencyGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.CurrencyGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.CurrencyGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.CurrencyGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.CurrencyGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.CurrencyGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('Currency', `${endpoint}/currency/groupBy`, args, options, fetch);
}

export function useCountCurrency<T extends Prisma.CurrencyCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CurrencyCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CurrencyCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CurrencyCountAggregateOutputType>
            : number
    >('Currency', `${endpoint}/currency/count`, args, options, fetch);
}
