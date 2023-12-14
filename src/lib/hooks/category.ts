/* eslint-disable */
import type { Prisma, Category } from '@prisma/client';
import { useContext } from 'react';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { RequestHandlerContext } from '@zenstackhq/tanstack-query/runtime/react';
import { query, postMutation, putMutation, deleteMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';

export function useCreateCategory(
    options?: Omit<UseMutationOptions<Category | undefined, unknown, Prisma.CategoryCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.CategoryCreateArgs, Category, true>(
        'Category',
        `${endpoint}/category/create`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CategoryCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CategoryCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Category, Prisma.CategoryGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CategoryCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Category, Prisma.CategoryGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyCategory(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CategoryCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.CategoryCreateManyArgs, Prisma.BatchPayload, false>(
        'Category',
        `${endpoint}/category/createMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CategoryCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CategoryCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CategoryCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyCategory<T extends Prisma.CategoryFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.CategoryGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Array<Prisma.CategoryGetPayload<T>>>(
        'Category',
        `${endpoint}/category/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueCategory<T extends Prisma.CategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.CategoryGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.CategoryGetPayload<T>>('Category', `${endpoint}/category/findUnique`, args, options, fetch);
}

export function useFindFirstCategory<T extends Prisma.CategoryFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CategoryFindFirstArgs>,
    options?: UseQueryOptions<Prisma.CategoryGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.CategoryGetPayload<T>>('Category', `${endpoint}/category/findFirst`, args, options, fetch);
}

export function useUpdateCategory(
    options?: Omit<UseMutationOptions<Category | undefined, unknown, Prisma.CategoryUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.CategoryUpdateArgs, Category, true>(
        'Category',
        `${endpoint}/category/update`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CategoryUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CategoryUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Category, Prisma.CategoryGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CategoryUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Category, Prisma.CategoryGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyCategory(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CategoryUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.CategoryUpdateManyArgs, Prisma.BatchPayload, false>(
        'Category',
        `${endpoint}/category/updateMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CategoryUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CategoryUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CategoryUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertCategory(
    options?: Omit<UseMutationOptions<Category | undefined, unknown, Prisma.CategoryUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.CategoryUpsertArgs, Category, true>(
        'Category',
        `${endpoint}/category/upsert`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CategoryUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CategoryUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Category, Prisma.CategoryGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CategoryUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Category, Prisma.CategoryGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteCategory(
    options?: Omit<UseMutationOptions<Category | undefined, unknown, Prisma.CategoryDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.CategoryDeleteArgs, Category, true>(
        'Category',
        `${endpoint}/category/delete`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CategoryDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CategoryDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Category, Prisma.CategoryGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CategoryDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Category, Prisma.CategoryGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyCategory(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CategoryDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.CategoryDeleteManyArgs, Prisma.BatchPayload, false>(
        'Category',
        `${endpoint}/category/deleteMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CategoryDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CategoryDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CategoryDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateCategory<T extends Prisma.CategoryAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetCategoryAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.GetCategoryAggregateType<T>>(
        'Category',
        `${endpoint}/category/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupByCategory<
    T extends Prisma.CategoryGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.CategoryGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.CategoryGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.CategoryGroupByArgs, OrderByArg> & InputErrors>,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.CategoryGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.CategoryGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.CategoryGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.CategoryGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.CategoryGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.CategoryGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.CategoryGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.CategoryGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('Category', `${endpoint}/category/groupBy`, args, options, fetch);
}

export function useCountCategory<T extends Prisma.CategoryCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CategoryCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CategoryCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CategoryCountAggregateOutputType>
            : number
    >('Category', `${endpoint}/category/count`, args, options, fetch);
}
