import { TransactionType } from "@prisma/client";
import { z } from "zod";

const TransactionSchema = z.object({
  amount: z
    .number({
      errorMap: () => ({ message: "Cумма обязательна для заполнения" }),
    })
    .positive(),
  date: z.coerce.date(),
  description: z.string().optional(),
  categoryId: z.string().min(1),
  accountId: z
    .string({
      errorMap: () => ({ message: "Выберите счет" }),
    })
    .min(1),
});

const DestinactionSchema = z.object({
  amountDestination: z
    .number({
      errorMap: () => ({ message: "Cумма обязательна для заполнения" }),
    })
    .positive(),
  destinationAccountId: z
    .string({
      errorMap: () => ({ message: "Выберите счет" }),
    })
    .min(1),
});

const FormSchemaIncome = z
  .object({
    type: z.literal(TransactionType.INCOME),
  })
  .merge(TransactionSchema);

const FormSchemaOutcome = z
  .object({
    type: z.literal(TransactionType.OUTCOME),
  })
  .merge(TransactionSchema);

const FormSchemaTransfer = z
  .object({
    type: z.literal(TransactionType.TRANSFER),
  })
  .merge(TransactionSchema)
  .merge(DestinactionSchema);

export const TransactionFormSchema = z.discriminatedUnion("type", [
  FormSchemaIncome,
  FormSchemaOutcome,
  FormSchemaTransfer,
]);

export const MultipleFormSchema = z.object({
  transactions: TransactionFormSchema.array(),
});

export type TransactionFormInput = z.infer<typeof TransactionFormSchema>;
