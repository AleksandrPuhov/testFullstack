import { type z } from "zod";
import { FormBase } from "@/components";
import { ContractorSchema } from "./schema";
import { type ContractorFormProps } from "./types";

export const ContractorForm = ({
  initialValues,
  onSubmit,
  submitLabel = "Submit",
  onSuccess,
  onError,
}: ContractorFormProps) => {
  const handleOnSubmit = async (data: z.infer<typeof ContractorSchema>) => {
    try {
      await onSubmit(data);

      onSuccess?.();
    } catch (error) {
      onError?.(error);
    }
  };

  return (
    <FormBase
      schema={ContractorSchema}
      // @ts-ignore: TODO: fix this
      defaultValues={initialValues}
      onSubmit={handleOnSubmit}
      props={{
        name: {
          label: "Name",
        },
        inn: {
          label: "INN",
        },
        accountNumber: {
          label: "Account number",
        },
        description: {
          label: "Description",
        },
        archived: {
          label: "Archived",
        },
      }}
      formProps={{
        buttonProps: {
          label: submitLabel,
        },
      }}
    />
  );
};
