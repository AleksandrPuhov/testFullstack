/* eslint-disable */
import type { Prisma, Contractor } from '@prisma/client';
import { useContext } from 'react';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { RequestHandlerContext } from '@zenstackhq/tanstack-query/runtime/react';
import { query, postMutation, putMutation, deleteMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';

export function useCreateContractor(
    options?: Omit<UseMutationOptions<Contractor | undefined, unknown, Prisma.ContractorCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.ContractorCreateArgs, Contractor, true>(
        'Contractor',
        `${endpoint}/contractor/create`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ContractorCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContractorCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Contractor, Prisma.ContractorGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ContractorCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Contractor, Prisma.ContractorGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyContractor(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ContractorCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.ContractorCreateManyArgs, Prisma.BatchPayload, false>(
        'Contractor',
        `${endpoint}/contractor/createMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ContractorCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContractorCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ContractorCreateManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyContractor<T extends Prisma.ContractorFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ContractorFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.ContractorGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Array<Prisma.ContractorGetPayload<T>>>(
        'Contractor',
        `${endpoint}/contractor/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueContractor<T extends Prisma.ContractorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContractorFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.ContractorGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.ContractorGetPayload<T>>(
        'Contractor',
        `${endpoint}/contractor/findUnique`,
        args,
        options,
        fetch,
    );
}

export function useFindFirstContractor<T extends Prisma.ContractorFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ContractorFindFirstArgs>,
    options?: UseQueryOptions<Prisma.ContractorGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.ContractorGetPayload<T>>(
        'Contractor',
        `${endpoint}/contractor/findFirst`,
        args,
        options,
        fetch,
    );
}

export function useUpdateContractor(
    options?: Omit<UseMutationOptions<Contractor | undefined, unknown, Prisma.ContractorUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.ContractorUpdateArgs, Contractor, true>(
        'Contractor',
        `${endpoint}/contractor/update`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ContractorUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContractorUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Contractor, Prisma.ContractorGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ContractorUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Contractor, Prisma.ContractorGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyContractor(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ContractorUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.ContractorUpdateManyArgs, Prisma.BatchPayload, false>(
        'Contractor',
        `${endpoint}/contractor/updateMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ContractorUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContractorUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ContractorUpdateManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertContractor(
    options?: Omit<UseMutationOptions<Contractor | undefined, unknown, Prisma.ContractorUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.ContractorUpsertArgs, Contractor, true>(
        'Contractor',
        `${endpoint}/contractor/upsert`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ContractorUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContractorUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Contractor, Prisma.ContractorGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ContractorUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Contractor, Prisma.ContractorGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteContractor(
    options?: Omit<UseMutationOptions<Contractor | undefined, unknown, Prisma.ContractorDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.ContractorDeleteArgs, Contractor, true>(
        'Contractor',
        `${endpoint}/contractor/delete`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ContractorDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContractorDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Contractor, Prisma.ContractorGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ContractorDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Contractor, Prisma.ContractorGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyContractor(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ContractorDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.ContractorDeleteManyArgs, Prisma.BatchPayload, false>(
        'Contractor',
        `${endpoint}/contractor/deleteMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ContractorDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ContractorDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ContractorDeleteManyArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateContractor<T extends Prisma.ContractorAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContractorAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetContractorAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.GetContractorAggregateType<T>>(
        'Contractor',
        `${endpoint}/contractor/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupByContractor<
    T extends Prisma.ContractorGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ContractorGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ContractorGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.ContractorGroupByArgs, OrderByArg> & InputErrors>,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.ContractorGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ContractorGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ContractorGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ContractorGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.ContractorGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ContractorGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ContractorGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ContractorGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('Contractor', `${endpoint}/contractor/groupBy`, args, options, fetch);
}

export function useCountContractor<T extends Prisma.ContractorCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ContractorCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ContractorCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ContractorCountAggregateOutputType>
            : number
    >('Contractor', `${endpoint}/contractor/count`, args, options, fetch);
}
