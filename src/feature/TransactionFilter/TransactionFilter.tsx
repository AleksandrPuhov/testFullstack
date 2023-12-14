import { FormBase } from "@/components";
import { useAccountOptions } from "@/lib/utils/account";
import { useCategoryOptions } from "@/lib/utils/category";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Flex, Grid, Loader, rem } from "@mantine/core";
import { X } from "lucide-react";
import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TransactionFilterSchema } from "./schema";
import {
  type TransactionFilterProps,
  type TransactionFilterSchemaType,
} from "./types";
import { type z } from "zod";

type FormSchema = z.infer<typeof TransactionFilterSchema>;

const defaultValues: TransactionFilterSchemaType = {
  date: [undefined, undefined],
  type: [],
  account: [],
  category: [],
};

export const TransactionFilter = ({
  value = {},
  onInput,
}: TransactionFilterProps) => {
  const { data: categoryOptions, isLoading: isCategoriesLoading } =
    useCategoryOptions({
      type: null,
      enabled: true,
    });

  const { data: accountOptions, isLoading: isAccountsLoading } =
    useAccountOptions();

  const form = useForm<FormSchema>({
    resolver: zodResolver(TransactionFilterSchema),
    defaultValues: defaultValues as FormSchema,
  });

  const {
    watch,
    setValue,
    reset,
    formState: { isDirty },
  } = form;
  const type = watch("type");

  const filteredCategories = useMemo(
    () =>
      type?.length
        ? categoryOptions?.filter((group) => type.includes(group.type!))
        : categoryOptions,
    [categoryOptions, type]
  );

  useEffect(() => {
    const subscription = watch((values) => {
      // TODO: clear not existing values
      // if (name === "type" && values.category && values.type) {
      //   const categories = categoryOptions
      //     .filter((c) => (values.category as string[]).includes(c.value))
      //     .filter((c) => (values.type as string[]).includes(c.type ?? ""));

      //   setValue(
      //     "category",
      //     categories.map(
      //       (c) => c.value
      //     ) as TransactionFilterSchemaType["category"]
      //   );
      // }

      if (onInput && typeof onInput === "function") {
        onInput(values as TransactionFilterSchemaType);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, categoryOptions, setValue, onInput]);

  useEffect(() => {
    reset(value as Partial<FormSchema>);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormProvider {...form}>
      <FormBase
        form={form}
        schema={TransactionFilterSchema}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSubmit={() => {}}
        props={{
          type: {
            data: [
              { value: "INCOME", label: "Income" },
              { value: "OUTCOME", label: "Outcome" },
              { value: "TRANSFER", label: "Transfer" },
            ],
          },
          category: {
            data: filteredCategories ?? [],
            searchable: true,
            readOnly: !filteredCategories.length,
            rightSection: isCategoriesLoading ? <Loader size="xs" /> : null,
          },
          account: {
            data: accountOptions ?? [],
            searchable: true,
            readOnly: !accountOptions.length,
            rightSection: isAccountsLoading ? <Loader size="xs" /> : null,
          },
        }}
        formProps={{
          submit: false,
          reset: false,
          sx: (theme) => ({
            padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
            backgroundColor: theme.fn.rgba(theme.white, 0.8),
            borderBottom: `1px solid ${theme.colors.gray[2]}`,
            position: "sticky",
            zIndex: 100,
            top: 0,
            backdropFilter: "blur(10px)",
          }),
        }}
      >
        {({ date, type: typeField, account, category }) => {
          return (
            <Flex>
              <Box sx={{ flexGrow: 1 }}>
                <Grid columns={4}>
                  <Grid.Col span={1}>{date}</Grid.Col>
                  <Grid.Col span={1}>{typeField}</Grid.Col>
                  <Grid.Col span={1}>{category}</Grid.Col>
                  <Grid.Col span={1}>{account}</Grid.Col>
                </Grid>
              </Box>
              {isDirty && (
                <Box sx={{ flexShrink: 0, marginLeft: rem(16) }}>
                  <Button
                    variant="light"
                    color="red"
                    size="sm"
                    leftIcon={<X size={rem(16)} />}
                    onClick={() => reset(defaultValues as FormSchema)}
                  >
                    Clear
                  </Button>
                </Box>
              )}
            </Flex>
          );
        }}
      </FormBase>
    </FormProvider>
  );
};
