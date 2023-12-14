import { useSession } from "next-auth/react";
import { useFindManyContractor } from "../hooks";

export const useContractorList = () => {
  const { data: session } = useSession();

  return useFindManyContractor(
    {
      where: {
        userId: session?.user.id,
      },
    },
    {
      enabled: !!session?.user.id,
    }
  );
};

export const useContractorOptions = () => {
  const { data, ...queryProps } = useFindManyContractor({
    where: {
      archived: false,
    },
    select: {
      id: true,
      name: true,
    },
  });

  return {
    ...queryProps,
    data:
      data?.map((contractor) => ({
        value: contractor.id,
        label: contractor.name,
      })) ?? [],
  };
};
