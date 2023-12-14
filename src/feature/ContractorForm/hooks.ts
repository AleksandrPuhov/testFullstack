import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { type z } from "zod";
import { type ContractorSchema } from "./schema";
import { useCreateContractor, useUpdateContractor } from "@/lib/hooks";

export const useContractorForm = () => {
  const { data: session } = useSession();
  const create = useCreateContractor({}, true);
  const update = useUpdateContractor({}, true);

  const onCreateSubmit = async (data: z.infer<typeof ContractorSchema>) => {
    try {
      await create.mutateAsync({
        data: {
          ...data,
          userId: session!.user.id,
        },
      });

      notifications.show({
        title: "Contractor created",
        color: "green",
        message: undefined,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);

      // todo: notify user of error

      return;
    }
  };

  const onUpdateSubmit = async (
    id: string,
    data: z.infer<typeof ContractorSchema>
  ) => {
    try {
      await update.mutateAsync({
        where: {
          id,
        },
        data: {
          ...data,
          userId: session!.user.id,
        },
      });

      notifications.show({
        title: "Contractor updated",
        color: "green",
        message: undefined,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);

      // todo: notify user of error

      return;
    }
  };

  return {
    onCreateSubmit,
    onUpdateSubmit,
  };
};
