import { type z } from "zod";
import { Loader } from "@mantine/core";
import { FormBase } from "@/components";
import { useCurrencyOptions } from "@/lib/utils/currency";
import { useAccountGroupOptions } from "@/lib/utils/account";
import { AccountSchema } from "./schema";
import { type AccountFormProps } from "./types";

export const AccountForm = ({
  initialValues,
  onSubmit,
  submitLabel = "Submit",
  onSuccess,
  onError,
}: AccountFormProps) => {
  const { data: currencyOptions, isLoading: isCurrenciesLoading } =
    useCurrencyOptions();
  const {
    data: groupOptions,
    isLoading: isGroupsLoading,
    isInitialLoading,
  } = useAccountGroupOptions();

  const handleOnSubmit = async (data: z.infer<typeof AccountSchema>) => {
    try {
      await onSubmit(data);

      onSuccess?.();
    } catch (error) {
      onError?.(error);
    }
  };

  return (
    <FormBase
      schema={AccountSchema}
      defaultValues={initialValues}
      onSubmit={handleOnSubmit}
      props={{
        name: {
          label: "Name",
        },
        balance: {
          label: "Balance",
          // maskOptions: {
          //   mask: Number,
          // },
        },
        type: {
          label: "Type",
        },
        number: {
          label: "Account Number",
        },
        currencyId: {
          label: "Currency",
          data: currencyOptions ?? [],
          placeholder: isCurrenciesLoading
            ? "Currencies loading..."
            : "Select currency",
          readOnly: isCurrenciesLoading,
          rightSection: isCurrenciesLoading ? <Loader size="xs" /> : null,
        },
        groupId: {
          label: "Group",
          data: groupOptions ?? [],
          placeholder: isInitialLoading ? "Groups loading..." : "Select group",
          readOnly: isGroupsLoading,
          rightSection: isGroupsLoading ? <Loader size="xs" /> : null,
        },
        balanceDate: {
          label: "Balance date",
          maxDate: new Date(),
        },
        hideInTotal: {
          label: "Hide in total",
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
