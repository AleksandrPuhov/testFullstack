import { DateTimeSchema, NumberMaskedSchema, SelectSchema } from "@/components";
import { z } from "zod";

export const AccountSchema = z.object({
  name: z.string().min(1).max(255),
  type: z.enum(["CASH", "BANK_ACCOUNT", "CREDIT_CARD"]),
  number: z.string().optional(),
  groupId: SelectSchema,
  currencyId: SelectSchema,
  balance: NumberMaskedSchema,
  balanceDate: DateTimeSchema,
  hideInTotal: z.boolean().optional(),
  archived: z.boolean().optional(),
});
