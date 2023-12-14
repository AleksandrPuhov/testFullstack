import { z } from "zod";

export const ContractorSchema = z.object({
  name: z.string().min(1).max(255),
  accountNumber: z.string().optional(),
  inn: z.string().optional(),
  description: z.string().optional(),
  archived: z.boolean().optional(),
});
