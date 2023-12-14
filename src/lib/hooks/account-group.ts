/* eslint-disable */
import type { Prisma, AccountGroup } from '@prisma/client';
import { useContext } from 'react';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { RequestHandlerContext } from '@zenstackhq/tanstack-query/runtime/react';
import { query, postMutation, putMutation, deleteMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';

export function useCreateAccountGroup(
    options?: Omit<UseMutationOptions<AccountGroup | undefined, unknown, Prisma.AccountGroupCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.AccountGroupCreateArgs, AccountGroup, true>(
        'AccountGroup',
        `${endpoint}/accountGroup/create`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountGroupCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountGroupCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, AccountGroup, Prisma.AccountGroupGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.AccountGroupCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, AccountGroup, Prisma.AccountGroupGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyAccountGroup(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.AccountGroupCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.AccountGroupCreateManyArgs, Prisma.BatchPayload, false>(
        'AccountGroup',
        `${endpoint}/accountGroup/createMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountGroupCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountGroupCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.AccountGroupCreateManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyAccountGroup<T extends Prisma.AccountGroupFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AccountGroupFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.AccountGroupGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Array<Prisma.AccountGroupGetPayload<T>>>(
        'AccountGroup',
        `${endpoint}/accountGroup/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueAccountGroup<T extends Prisma.AccountGroupFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountGroupFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.AccountGroupGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.AccountGroupGetPayload<T>>(
        'AccountGroup',
        `${endpoint}/accountGroup/findUnique`,
        args,
        options,
        fetch,
    );
}

export function useFindFirstAccountGroup<T extends Prisma.AccountGroupFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AccountGroupFindFirstArgs>,
    options?: UseQueryOptions<Prisma.AccountGroupGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.AccountGroupGetPayload<T>>(
        'AccountGroup',
        `${endpoint}/accountGroup/findFirst`,
        args,
        options,
        fetch,
    );
}

export function useUpdateAccountGroup(
    options?: Omit<UseMutationOptions<AccountGroup | undefined, unknown, Prisma.AccountGroupUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.AccountGroupUpdateArgs, AccountGroup, true>(
        'AccountGroup',
        `${endpoint}/accountGroup/update`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountGroupUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountGroupUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, AccountGroup, Prisma.AccountGroupGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.AccountGroupUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, AccountGroup, Prisma.AccountGroupGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyAccountGroup(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.AccountGroupUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.AccountGroupUpdateManyArgs, Prisma.BatchPayload, false>(
        'AccountGroup',
        `${endpoint}/accountGroup/updateMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountGroupUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountGroupUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.AccountGroupUpdateManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertAccountGroup(
    options?: Omit<UseMutationOptions<AccountGroup | undefined, unknown, Prisma.AccountGroupUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.AccountGroupUpsertArgs, AccountGroup, true>(
        'AccountGroup',
        `${endpoint}/accountGroup/upsert`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountGroupUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountGroupUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, AccountGroup, Prisma.AccountGroupGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.AccountGroupUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, AccountGroup, Prisma.AccountGroupGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteAccountGroup(
    options?: Omit<UseMutationOptions<AccountGroup | undefined, unknown, Prisma.AccountGroupDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.AccountGroupDeleteArgs, AccountGroup, true>(
        'AccountGroup',
        `${endpoint}/accountGroup/delete`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountGroupDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountGroupDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, AccountGroup, Prisma.AccountGroupGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.AccountGroupDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, AccountGroup, Prisma.AccountGroupGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyAccountGroup(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.AccountGroupDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.AccountGroupDeleteManyArgs, Prisma.BatchPayload, false>(
        'AccountGroup',
        `${endpoint}/accountGroup/deleteMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AccountGroupDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountGroupDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.AccountGroupDeleteManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateAccountGroup<T extends Prisma.AccountGroupAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountGroupAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetAccountGroupAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.GetAccountGroupAggregateType<T>>(
        'AccountGroup',
        `${endpoint}/accountGroup/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupByAccountGroup<
    T extends Prisma.AccountGroupGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.AccountGroupGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.AccountGroupGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<
        T,
        Prisma.SubsetIntersection<T, Prisma.AccountGroupGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.AccountGroupGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.AccountGroupGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.AccountGroupGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.AccountGroupGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.AccountGroupGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.AccountGroupGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.AccountGroupGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.AccountGroupGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('AccountGroup', `${endpoint}/accountGroup/groupBy`, args, options, fetch);
}

export function useCountAccountGroup<T extends Prisma.AccountGroupCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AccountGroupCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AccountGroupCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AccountGroupCountAggregateOutputType>
            : number
    >('AccountGroup', `${endpoint}/accountGroup/count`, args, options, fetch);
}
