/* eslint-disable */
import type { Prisma, Profile } from '@prisma/client';
import { useContext } from 'react';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { RequestHandlerContext } from '@zenstackhq/tanstack-query/runtime/react';
import { query, postMutation, putMutation, deleteMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';

export function useCreateProfile(
    options?: Omit<UseMutationOptions<Profile | undefined, unknown, Prisma.ProfileCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.ProfileCreateArgs, Profile, true>(
        'Profile',
        `${endpoint}/profile/create`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProfileCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProfileCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Profile, Prisma.ProfileGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProfileCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Profile, Prisma.ProfileGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyProfile(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProfileCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.ProfileCreateManyArgs, Prisma.BatchPayload, false>(
        'Profile',
        `${endpoint}/profile/createMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProfileCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProfileCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.ProfileCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyProfile<T extends Prisma.ProfileFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProfileFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.ProfileGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Array<Prisma.ProfileGetPayload<T>>>('Profile', `${endpoint}/profile/findMany`, args, options, fetch);
}

export function useFindUniqueProfile<T extends Prisma.ProfileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.ProfileGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.ProfileGetPayload<T>>('Profile', `${endpoint}/profile/findUnique`, args, options, fetch);
}

export function useFindFirstProfile<T extends Prisma.ProfileFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProfileFindFirstArgs>,
    options?: UseQueryOptions<Prisma.ProfileGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.ProfileGetPayload<T>>('Profile', `${endpoint}/profile/findFirst`, args, options, fetch);
}

export function useUpdateProfile(
    options?: Omit<UseMutationOptions<Profile | undefined, unknown, Prisma.ProfileUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.ProfileUpdateArgs, Profile, true>(
        'Profile',
        `${endpoint}/profile/update`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProfileUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProfileUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Profile, Prisma.ProfileGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProfileUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Profile, Prisma.ProfileGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyProfile(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProfileUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = putMutation<Prisma.ProfileUpdateManyArgs, Prisma.BatchPayload, false>(
        'Profile',
        `${endpoint}/profile/updateMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProfileUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProfileUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.ProfileUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertProfile(
    options?: Omit<UseMutationOptions<Profile | undefined, unknown, Prisma.ProfileUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = postMutation<Prisma.ProfileUpsertArgs, Profile, true>(
        'Profile',
        `${endpoint}/profile/upsert`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProfileUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProfileUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Profile, Prisma.ProfileGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProfileUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Profile, Prisma.ProfileGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteProfile(
    options?: Omit<UseMutationOptions<Profile | undefined, unknown, Prisma.ProfileDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.ProfileDeleteArgs, Profile, true>(
        'Profile',
        `${endpoint}/profile/delete`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProfileDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProfileDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Profile, Prisma.ProfileGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ProfileDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Profile, Prisma.ProfileGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyProfile(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ProfileDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const _mutation = deleteMutation<Prisma.ProfileDeleteManyArgs, Prisma.BatchPayload, false>(
        'Profile',
        `${endpoint}/profile/deleteMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.ProfileDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ProfileDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.ProfileDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateProfile<T extends Prisma.ProfileAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetProfileAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<Prisma.GetProfileAggregateType<T>>('Profile', `${endpoint}/profile/aggregate`, args, options, fetch);
}

export function useGroupByProfile<
    T extends Prisma.ProfileGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ProfileGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ProfileGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.ProfileGroupByArgs, OrderByArg> & InputErrors>,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.ProfileGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ProfileGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ProfileGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ProfileGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.ProfileGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ProfileGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ProfileGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ProfileGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('Profile', `${endpoint}/profile/groupBy`, args, options, fetch);
}

export function useCountProfile<T extends Prisma.ProfileCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ProfileCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ProfileCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ProfileCountAggregateOutputType>
            : number
    >('Profile', `${endpoint}/profile/count`, args, options, fetch);
}
