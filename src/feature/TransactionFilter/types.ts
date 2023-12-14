import { type TransactionFilterSchema } from "./schema";
import { type SchemaType } from "@/lib/types";

export type TransactionFilterSchemaType = SchemaType<
  typeof TransactionFilterSchema
>;

export type TransactionFilterProps = {
  value?: TransactionFilterSchemaType;
  onInput?: (values: TransactionFilterSchemaType) => void;
};
