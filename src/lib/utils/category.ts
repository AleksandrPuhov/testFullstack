import { useMemo } from "react";
import { useFindManyCategory } from "../hooks";
import { type TransactionType } from "@prisma/client";
import { useSession } from "next-auth/react";

type CategoryOption = {
  value: string;
  label: string;
  group?: string;
  type?: string;
};

export const useCategoryOptions = ({
  type = "INCOME",
  enabled = false,
}: {
  type?: TransactionType | null;
  enabled?: boolean;
} = {}) => {
  const { data: session } = useSession({
    required: true,
  });

  const additionalWhere = useMemo(() => {
    if (!type) return {};

    return {
      type,
    };
  }, [type]);

  const { data: categories, ...queryProps } = useFindManyCategory(
    {
      orderBy: [
        {
          type: "asc",
        },
        {
          parent: {
            name: "asc",
          },
        },
        {
          name: "asc",
        },
      ],
      where: {
        parentId: null,
        archived: false,
        userId: session?.user.id,
        ...additionalWhere,
      },
      select: {
        id: true,
        name: true,
        type: true,
        categories: {
          select: {
            id: true,
            name: true,
            type: true,
          },
          orderBy: {
            name: "asc",
          },
        },
      },
    },
    {
      enabled: enabled && !!session?.user.id,
    }
  );

  const data = useMemo(() => {
    if (!categories?.length) return [];

    return categories.reduce((acc, item) => {
      if (!item.categories.length) return acc;

      return [
        ...acc,
        ...item.categories.map((category) => ({
          value: category.id,
          label: category.name,
          group: item.name,
          type: category.type,
        })),
      ];
    }, [] as CategoryOption[]);
  }, [categories]);

  return {
    ...queryProps,
    data,
    categories,
  };
};

export const useCategoryParents = ({
  type = "INCOME",
  enabled = false,
}: {
  type?: TransactionType;
  enabled?: boolean;
}) => {
  const { data: session } = useSession({
    required: true,
  });

  const { data: categories, ...queryProps } = useFindManyCategory(
    {
      orderBy: {
        name: "asc",
      },
      where: {
        type,
        parentId: null,
        archived: false,
        userId: session?.user.id,
      },
      select: {
        id: true,
        name: true,
        type: true,
      },
    },
    {
      enabled: enabled && !!session?.user.id,
    }
  );

  const data = useMemo(() => {
    if (!categories?.length) return [];

    return categories.reduce(
      (acc, category) => [
        ...acc,
        {
          value: category.id,
          label: category.name,
        },
      ],
      [] as CategoryOption[]
    );
  }, [categories]);

  return {
    data,
    ...queryProps,
  };
};

export const useCategoryList = () => {
  const { data: session } = useSession({
    required: true,
  });

  return useFindManyCategory(
    {
      orderBy: {
        name: "asc",
      },
      where: {
        userId: session?.user.id,
        parentId: null,
      },
      select: {
        id: true,
        name: true,
        type: true,
        description: true,
        archived: true,
        parentId: true,
        parent: {
          select: {
            id: true,
            name: true,
          },
        },
        categories: {
          select: {
            id: true,
            name: true,
            type: true,
            description: true,
            archived: true,
            parentId: true,
          },
          orderBy: {
            name: "asc",
          },
        },
      },
    },
    {
      enabled: !!session?.user.id,
    }
  );
};
