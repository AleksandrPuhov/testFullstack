import { z } from "zod";

export const CreateAccountGroupSchema = z.object({
  name: z.string().min(1).max(255),
});
