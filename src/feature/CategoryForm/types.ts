import { type z } from "zod";
import { type Category } from "../CategoryList/types";
import { type CategorySchema } from "./schema";

export type CategoryFormProps = {
  initialValues?: Partial<Category>;
  submitLabel?: string;
  onSubmit: (data: z.infer<typeof CategorySchema>) => Promise<void>;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};
