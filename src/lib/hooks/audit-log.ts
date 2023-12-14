/* eslint-disable */
import type { Prisma, AuditLog } from '@prisma/client';
import { useContext } from 'react';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { RequestHandlerContext } from '@zenstackhq/tanstack-query/runtime/react';
import { query, postMutation, putMutation, deleteMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';

export function useCreateAuditLog(
    options?: Omit<UseMutationOptions<AuditLog | undefined, unknown, Prisma.AuditLogCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.AuditLogCreateArgs, AuditLog, true>(
        'AuditLog',
        `${endpoint}/auditLog/create`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AuditLogCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.AuditLogCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyAuditLog(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.AuditLogCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.AuditLogCreateManyArgs, Prisma.BatchPayload, false>(
        'AuditLog',
        `${endpoint}/auditLog/createMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AuditLogCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.AuditLogCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyAuditLog<T extends Prisma.AuditLogFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AuditLogFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.AuditLogGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Array<Prisma.AuditLogGetPayload<T>>>(
        'AuditLog',
        `${endpoint}/auditLog/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueAuditLog<T extends Prisma.AuditLogFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuditLogFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.AuditLogGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.AuditLogGetPayload<T>>('AuditLog', `${endpoint}/auditLog/findUnique`, args, options, fetch);
}

export function useFindFirstAuditLog<T extends Prisma.AuditLogFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AuditLogFindFirstArgs>,
    options?: UseQueryOptions<Prisma.AuditLogGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.AuditLogGetPayload<T>>('AuditLog', `${endpoint}/auditLog/findFirst`, args, options, fetch);
}

export function useUpdateAuditLog(
    options?: Omit<UseMutationOptions<AuditLog | undefined, unknown, Prisma.AuditLogUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.AuditLogUpdateArgs, AuditLog, true>(
        'AuditLog',
        `${endpoint}/auditLog/update`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AuditLogUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.AuditLogUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyAuditLog(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.AuditLogUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.AuditLogUpdateManyArgs, Prisma.BatchPayload, false>(
        'AuditLog',
        `${endpoint}/auditLog/updateMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AuditLogUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.AuditLogUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertAuditLog(
    options?: Omit<UseMutationOptions<AuditLog | undefined, unknown, Prisma.AuditLogUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.AuditLogUpsertArgs, AuditLog, true>(
        'AuditLog',
        `${endpoint}/auditLog/upsert`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AuditLogUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.AuditLogUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteAuditLog(
    options?: Omit<UseMutationOptions<AuditLog | undefined, unknown, Prisma.AuditLogDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.AuditLogDeleteArgs, AuditLog, true>(
        'AuditLog',
        `${endpoint}/auditLog/delete`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AuditLogDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.AuditLogDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyAuditLog(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.AuditLogDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.AuditLogDeleteManyArgs, Prisma.BatchPayload, false>(
        'AuditLog',
        `${endpoint}/auditLog/deleteMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.AuditLogDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.AuditLogDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateAuditLog<T extends Prisma.AuditLogAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuditLogAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetAuditLogAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.GetAuditLogAggregateType<T>>(
        'AuditLog',
        `${endpoint}/auditLog/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupByAuditLog<
    T extends Prisma.AuditLogGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.AuditLogGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.AuditLogGroupByArgs, OrderByArg> & InputErrors>,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.AuditLogGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.AuditLogGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.AuditLogGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.AuditLogGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.AuditLogGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.AuditLogGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.AuditLogGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.AuditLogGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('AuditLog', `${endpoint}/auditLog/groupBy`, args, options, fetch);
}

export function useCountAuditLog<T extends Prisma.AuditLogCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AuditLogCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AuditLogCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AuditLogCountAggregateOutputType>
            : number
    >('AuditLog', `${endpoint}/auditLog/count`, args, options, fetch);
}
