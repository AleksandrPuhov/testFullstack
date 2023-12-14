/* eslint-disable @typescript-eslint/no-explicit-any */

import { type z } from "zod";

export type SchemaType<T extends z.ZodType<any, any>> = T extends z.ZodType<
  infer U,
  any
>
  ? U
  : never;
