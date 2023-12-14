import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { type z } from "zod";
import { type CategorySchema } from "./schema";
import { useCreateCategory, useUpdateCategory } from "@/lib/hooks";

export const useCategoryForm = () => {
  const { data: session } = useSession();
  const create = useCreateCategory({}, true);
  const update = useUpdateCategory({}, true);

  const onCreateSubmit = async (data: z.infer<typeof CategorySchema>) => {
    try {
      await create.mutateAsync({
        // @ts-ignore
        data: {
          ...data,
          user: { connect: { id: session!.user.id } },
        },
      });

      notifications.show({
        title: "Category created",
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
    data: z.infer<typeof CategorySchema>
  ) => {
    try {
      await update.mutateAsync({
        where: {
          id,
        },
        // @ts-ignore
        data: {
          ...data,
          userId: session!.user.id,
        },
      });

      notifications.show({
        title: "Category updated",
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
