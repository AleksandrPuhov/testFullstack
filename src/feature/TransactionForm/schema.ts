import { z } from "zod";
import {
  DateTimeSchema,
  NumberMaskedSchema,
  // OptionalSelectSchema,
  SelectSchema,
  OptionalNumberMaskedSchema,
  SegmentSchema,
} from "@/components";

export const TransactionSchema = z.object({
  type: SegmentSchema,
  date: DateTimeSchema,
  amount: NumberMaskedSchema,
  // amountDestination: OptionalNumberMaskedSchema,
  accountId: SelectSchema,
  // destinationAccountId: SelectSchema,
  categoryId: SelectSchema,
  description: z.string().optional(),
});

export const TransactionTransferSchema = z.object({
  type: SegmentSchema,
  date: DateTimeSchema,
  amount: NumberMaskedSchema,
  amountDestination: OptionalNumberMaskedSchema,
  accountId: SelectSchema,
  destinationAccountId: SelectSchema,
  categoryId: SelectSchema,
  description: z.string().optional(),
});
