import {
  type GetServerSidePropsContext,
  type GetServerSidePropsResult,
} from "next";
import { loadCatalog } from "translations/utils";
import { type Messages } from "@lingui/core";
import { INITIAL_FORM_TYPE, TransactionForm } from "@/feature/TransactionForm";
import { TransactionList } from "@/feature/TransactionList";
import { AccountWidget } from "@/feature/AccountWidget";
import { Box, Paper, ScrollArea, Title } from "@mantine/core";
import { PageHeader } from "@/layouts";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { type TransactionFormInput } from "@/feature/TransactionForm/types";
import { type TransactionType } from "@prisma/client";

const createTransactionPost = async (data: TransactionFormInput) => {
  const response = await fetch("/api/transaction", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export default function Transactions() {
  const [type, setType] = useState<TransactionType>(INITIAL_FORM_TYPE);

  const handleInput = (values: Partial<TransactionFormInput>) =>
    values.type ? setType(values.type) : null;

  const queryClient = useQueryClient();

  const createTransaction = useMutation({
    mutationFn: createTransactionPost,
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["transaction-list"] });
    },
  });

  const handleSubmit = async (data: TransactionFormInput) => {
    try {
      await createTransaction.mutateAsync({
        ...data,
      });

      notifications.show({
        title: "Transaction created",
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
    <>
      <PageHeader title="Transactions" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
            }}
            p="lg"
          >
            <Paper withBorder p="lg">
              <TransactionForm onInput={handleInput} onSubmit={handleSubmit} />
            </Paper>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              overflow: "hidden",
            }}
            px="lg"
            pb="lg"
          >
            <Paper
              withBorder
              mb="lg"
              h={"100%"}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                px="lg"
                py="sm"
                sx={(theme) => ({
                  borderBottom: `1px solid ${theme.colors.gray[2]}`,
                })}
              >
                <Title order={5}>Последние транзакции</Title>
              </Box>
              <TransactionList
                perPage={15}
                groupProps={{
                  bg: "white",
                }}
                filter={{
                  type: [type],
                }}
              />
            </Paper>
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
            minWidth: "400px",
            flexShrink: 0,
            overflow: "hidden",
            display: "flex",
          }}
        >
          <Box component={ScrollArea} w={"100%"}>
            <Box py="lg" pr="lg">
              <AccountWidget />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<
  GetServerSidePropsResult<{
    translation: Messages;
  }>
> {
  return {
    props: {
      translation: await loadCatalog(ctx.locale!),
    },
  };
}
