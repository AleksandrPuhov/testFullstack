import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { type z } from "zod";
import { type AccountSchema } from "./schema";
import { useCreateAccount, useUpdateAccount } from "@/lib/hooks";

export const useAccountForm = () => {
  const { data: session } = useSession();
  const create = useCreateAccount({}, true);
  const update = useUpdateAccount({}, true);

  const onCreateSubmit = async (data: z.infer<typeof AccountSchema>) => {
    try {
      await create.mutateAsync({
        data: {
          ...data,
          userId: session!.user.id,
        },
      });

      notifications.show({
        title: "Account created",
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
    data: z.infer<typeof AccountSchema>
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
        title: "Account updated",
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
