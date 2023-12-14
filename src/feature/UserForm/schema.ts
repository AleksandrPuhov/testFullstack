import { EmailSchema, PasswordSchema } from "@/components";
import { z } from "zod";

export const EditUserSchema = z
  .object({
    name: z.string().nonempty({ message: "Name is required!" }),
    email: EmailSchema,
    password: PasswordSchema,
    confirmPassword: PasswordSchema,
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  );
