import { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  Loader,
  SegmentedControl,
  Stack,
  rem,
} from "@mantine/core";
import { FormBase } from "@/components";
import { TransactionSchema, TransactionTransferSchema } from "./schema";
import { useCategoryOptions } from "@/lib/utils/category";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAccountOptions } from "@/lib/utils/account";
import {
  ArrowDownLeft,
  ArrowRightLeft,
  ArrowUpRight,
  MoveRight,
} from "lucide-react";
import { TransactionType } from "@prisma/client";
import { useUpdateEffect } from "usehooks-ts";
// import { type FormSchemaType, type TransactionSchemaType } from "./types";
import dayjs from "dayjs";
import { type z } from "zod";
// import useZodForm from "@/lib/hooks/form";
import { TransactionFormSchema, type TransactionFormInput } from "./types";
import { MaskedField } from "@/components/FormInputs/MaskedField";
import { SelectField } from "@/components/FormInputs/SelectField";
import { SegmentField } from "@/components/FormInputs/SegmentField";
import { DateField } from "@/components/FormInputs/DateField";
import { TextField } from "@/components/FormInputs/TextField";

type TransactionFormProps = {
  onInput?: (data: Partial<TransactionFormInput>) => void;
  onSubmit: (data: TransactionFormInput) => Promise<void>;
  type?: TransactionType;
  // date?: TransactionSchemaType["date"];
  // accountId?: TransactionSchemaType["accountId"];
  // categoryId?: TransactionSchemaType["categoryId"];
  // amount?: TransactionSchemaType["amount"];
  // description?: TransactionSchemaType["description"];
  // destinationAccountId?: TransactionSchemaType["destinationAccountId"];
  // amountDestination?: TransactionSchemaType["amountDestination"];
};

export const INITIAL_FORM_TYPE = TransactionType.INCOME;

const defaultValues = (): Partial<TransactionFormInput> => ({
  type: INITIAL_FORM_TYPE,
  date: dayjs().toDate(),
  accountId: "",
  categoryId: "",
  description: "",
});

export const TransactionForm = ({
  onInput,
  onSubmit,
}: TransactionFormProps) => {
  const form = useForm<TransactionFormInput>({
    resolver: zodResolver(TransactionFormSchema),
    defaultValues: {
      ...defaultValues(),
    },
  });

  const { watch, resetField, reset, formState, handleSubmit } = form;
  const type = watch("type");

  const { data: categoryOptions, isLoading: isCategoriesLoading } =
    useCategoryOptions({
      enabled: !!type,
      type: type,
    });

  const { data: accountOptions, isLoading: isAccountsLoading } =
    useAccountOptions();

  useEffect(() => {
    const subscription = watch((values, { name }) => {
      if (name === "type" && values.type !== type) {
        resetField("categoryId");
      }

      if (name === "type" && values.type !== "TRANSFER") {
        resetField("destinationAccountId");
        resetField("amountDestination");
      }

      onInput?.(values);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, resetField, onInput, type]);

  useUpdateEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        ...defaultValues(),
        type,
      } as TransactionFormInput);
    }
  }, [formState.isSubmitSuccessful]);

  return (
    <FormProvider {...form}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid gutter={rem(16)} columns={2}>
          <Grid.Col span={2}>
            <SegmentField
              name="type"
              data={[
                {
                  value: "INCOME",
                  label: (
                    <Center>
                      <ArrowDownLeft size={"1rem"} />
                      <Box ml={8}>Income</Box>
                    </Center>
                  ),
                },
                {
                  value: "OUTCOME",
                  label: (
                    <Center>
                      <ArrowUpRight size={"1rem"} />
                      <Box ml={8}>Outcome</Box>
                    </Center>
                  ),
                },
                {
                  value: "TRANSFER",
                  label: (
                    <Center>
                      <ArrowRightLeft size={"1rem"} />
                      <Box ml={8}>Transfer</Box>
                    </Center>
                  ),
                },
              ]}
            />
          </Grid.Col>
          <Grid.Col span={1}>
            <DateField name="date" label="Date" maxDate={new Date()} />
          </Grid.Col>
          <Grid.Col span={1}>
            <SelectField
              name="categoryId"
              data={categoryOptions ?? []}
              label="Category"
              searchable
              readOnly={!categoryOptions.length}
              rightSection={isCategoriesLoading ? <Loader size="xs" /> : null}
            />
          </Grid.Col>
          {type === "TRANSFER" ? (
            <Grid.Col span={2}>
              <Flex align="center">
                <Stack spacing={rem(16)} sx={{ flexGrow: 1 }}>
                  <SelectField
                    name="accountId"
                    data={accountOptions ?? []}
                    label="Account"
                    searchable
                    readOnly={!accountOptions.length}
                    rightSection={
                      isAccountsLoading ? <Loader size="xs" /> : null
                    }
                  />
                  <MaskedField name="amount" label="Amount" />
                </Stack>
                <Box
                  sx={{
                    flexShrink: 0,
                  }}
                  mx="lg"
                >
                  <MoveRight size={rem(16)} />
                </Box>

                <Stack spacing={rem(16)} sx={{ flexGrow: 1 }}>
                  <SelectField
                    name="destinationAccountId"
                    data={accountOptions ?? []}
                    label="Destination Account"
                    searchable
                    readOnly={!accountOptions.length}
                    rightSection={
                      isAccountsLoading ? <Loader size="xs" /> : null
                    }
                  />
                  <MaskedField
                    name="amountDestination"
                    label="Destination Amount"
                  />
                </Stack>
              </Flex>
            </Grid.Col>
          ) : (
            <>
              <Grid.Col span={1}>
                <SelectField
                  name="accountId"
                  data={accountOptions ?? []}
                  label="Account"
                  searchable
                  readOnly={!accountOptions.length}
                  rightSection={isAccountsLoading ? <Loader size="xs" /> : null}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <MaskedField name="amount" label="Amount" />
              </Grid.Col>
            </>
          )}
          <Grid.Col span={2}>
            <TextField name="description" label="Description" />
          </Grid.Col>
          <Grid.Col span={2}>
            <Group position="apart">
              <Button type="submit">Create</Button>
              <Button
                variant="default"
                onClick={() =>
                  reset({
                    ...defaultValues(),
                    type: type,
                  } as TransactionFormInput)
                }
              >
                Reset
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </form>
    </FormProvider>
  );
};
