import { type z } from "zod";
import { FormBase } from "@/components";
import { CreateAccountGroupSchema } from "./schema";
import { useCreateAccountGroup } from "@/lib/hooks";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";

export const AccountGroupForm = () => {
  const { data: session } = useSession();
  const createAccountGroup = useCreateAccountGroup();

  const onSubmit = async ({
    name,
  }: z.infer<typeof CreateAccountGroupSchema>) => {
    try {
      await createAccountGroup.mutateAsync({
        data: { name, user: { connect: { id: session!.user.id } } },
      });

      notifications.show({
        title: "Account group created",
        color: "green",
        message: undefined,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);

      return;
    }
  };

  return (
    <FormBase
      schema={CreateAccountGroupSchema}
      onSubmit={onSubmit}
      props={{
        name: {
          label: "Group name",
        },
      }}
      formProps={{
        // loading: createAccountGroup.isLoading,
        buttonProps: {
          label: "Create group",
        },
      }}
    />
  );
};
