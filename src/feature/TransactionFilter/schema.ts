import {
  OptionalDateRangeSchema,
  OptionalMultiSelectSchema,
} from "@/components";
import { z } from "zod";

export const TransactionFilterSchema = z.object({
  date: OptionalDateRangeSchema,
  type: OptionalMultiSelectSchema,
  category: OptionalMultiSelectSchema,
  account: OptionalMultiSelectSchema,
});

export const TransactionFilterRouterSchema = z.object({
  date: z
    .tuple([z.coerce.date().optional(), z.coerce.date().optional()])
    .optional(),
  type: z.array(z.string()).optional(),
  category: z.array(z.string()).optional(),
  account: z.array(z.string()).optional(),
});
