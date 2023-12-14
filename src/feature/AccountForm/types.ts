import { type z } from "zod";
import { type Account } from "../AccountList/types";
import { type AccountSchema } from "./schema";

export type AccountFormProps = {
  initialValues?: Partial<Account>;
  submitLabel?: string;
  onSubmit: (data: z.infer<typeof AccountSchema>) => Promise<void>;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};
