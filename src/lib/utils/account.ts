import { type Prisma } from "@prisma/client";
import { useFindManyAccount, useFindManyAccountGroup } from "../hooks";
import { useSession } from "next-auth/react";
import { group, listify } from "radash";
import { useMemo } from "react";

export const useAccountGroupList = () => {
  const { data: session } = useSession({
    required: true,
  });

  return useFindManyAccountGroup(
    {
      select: {
        id: true,
        name: true,
        archived: true,
      },
      where: {
        userId: session?.user.id,
      },
    },
    {
      enabled: !!session?.user.id,
    }
  );
};

export const useAccountGroupOptions = () => {
  const { data, ...queryProps } = useAccountGroupList();

  return {
    ...queryProps,
    data: data?.map((group) => ({
      value: group.id,
      label: group.name,
    })),
  };
};

export const useAccountList = () => {
  const { data: session } = useSession({
    required: true,
  });

  const { data, isLoading, isInitialLoading, isFetched } = useFindManyAccount(
    {
      where: {
        userId: session?.user.id,
      },
      select: {
        id: true,
        name: true,
        archived: true,
        type: true,
        number: true,
        hideInTotal: true,
        balance: true,
        balanceDate: true,
        currencyId: true,
        groupId: true,
        currency: {
          select: {
            id: true,
            name: true,
            code: true,
            symbol: true,
          },
        },
        group: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    },
    {
      enabled: !!session?.user.id,
    }
  );

  const memoData = useMemo(
    () =>
      listify(
        group(data ?? [], (account) =>
          [account.group.id, account.group.name].join("|")
        ),
        (key, value) => {
          const [id, name] = key.split("|");
          // todo
          return {
            accounts:
              value?.map((item) => ({
                ...item,
                number: item.number ?? "",
                balance: item.balance.toNumber(),
              })) ?? [],
            name,
            id,
          };
        }
      ),
    [data]
  );

  return {
    isLoading,
    isInitialLoading,
    isFetched,
    data: memoData,
  };
};

type AccountOption = {
  value: string;
  label: string;
  group?: string;
};

export const useAccountOptions = () => {
  const { data: session } = useSession({
    required: true,
  });

  const {
    data: accounts,
    isLoading,
    isFetched,
  } = useFindManyAccountGroup(
    {
      where: {
        archived: false,
        userId: session?.user.id,
      },
      select: {
        id: true,
        name: true,
        accounts: {
          where: {
            userId: session?.user.id,
            archived: false,
          },
          select: {
            id: true,
            name: true,
          },
          orderBy: {
            name: "asc",
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    },
    {
      enabled: !!session?.user.id,
    }
  );

  const data = useMemo(() => {
    if (!accounts?.length) return [];

    return accounts.reduce((acc, item) => {
      if (!item.accounts.length) return acc;

      return [
        ...acc,
        ...item.accounts.map((category) => ({
          value: category.id,
          label: category.name,
          group: item.name,
        })),
      ];
    }, [] as AccountOption[]);
  }, [accounts]);

  return {
    isLoading,
    isFetched,
    accounts,
    data,
  };
};

const AccountWidgetItemSelect = {
  id: true,
  name: true,
  type: true,
  balance: true,
  hideInTotal: true,
  currency: {
    select: {
      code: true,
      symbol: true,
    },
  },
} satisfies Prisma.AccountSelect;

export type AccountWidgetItem = Prisma.AccountGetPayload<{
  select: typeof AccountWidgetItemSelect;
}>;

const AccountWidgetSelect = {
  id: true,
  name: true,
  accounts: {
    select: AccountWidgetItemSelect,
  },
} satisfies Prisma.AccountGroupSelect;

export type AccountWidget = Prisma.AccountGroupGetPayload<{
  select: typeof AccountWidgetSelect;
}>;

export const useAccountWidget = () => {
  const { data: session } = useSession({
    required: true,
  });

  const { data, isLoading, isFetched } = useFindManyAccountGroup(
    {
      select: AccountWidgetSelect,
      where: {
        archived: false,
        userId: session?.user.id,
        accounts: {
          some: {
            archived: false,
          },
        },
      },
    },
    {
      enabled: !!session?.user.id,
    }
  );

  return {
    data,
    isLoading,
    isFetched,
  };
};
