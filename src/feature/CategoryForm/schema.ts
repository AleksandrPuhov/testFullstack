import { OptionalSelectSchema, SegmentSchema } from "@/components";
import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string().min(1).max(255),
  type: SegmentSchema,
  parentId: OptionalSelectSchema,
  description: z.string().optional(),
  archived: z.boolean().optional(),
});
