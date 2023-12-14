import { type z } from "zod";
import { type Contractor } from "../ContractorList/types";
import { type ContractorSchema } from "./schema";

export type ContractorFormProps = {
  initialValues?: Partial<Contractor>;
  submitLabel?: string;
  onSubmit: (data: z.infer<typeof ContractorSchema>) => Promise<void>;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};
