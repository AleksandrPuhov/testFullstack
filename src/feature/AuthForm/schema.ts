import { EmailSchema, PasswordSchema } from "@/components";
import { z } from "zod";

export const SignInSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
  remember: z.boolean().optional(),
});
