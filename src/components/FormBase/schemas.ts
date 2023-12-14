import { z } from "zod";
import { createUniqueFieldSchema } from "@ts-react/form";

export const EmailSchema = createUniqueFieldSchema(
  z.string().email("Enter a real email please."),
  "email"
);

export const PasswordSchema = createUniqueFieldSchema(
  z.string().min(6, "Must be 6 characters in length"),
  "password"
);

export const SelectSchema = createUniqueFieldSchema(
  z.string().min(1),
  "select"
);

export const OptionalSelectSchema = createUniqueFieldSchema(
  z.string().nullish(),
  "selectOptional"
);

export const DateTimeSchema = createUniqueFieldSchema(
  z.coerce.date(),
  "datetime"
);

export const DateRangeSchema = createUniqueFieldSchema(
  z.tuple([z.coerce.date(), z.coerce.date()]),
  "daterange"
);

export const DateSchema = createUniqueFieldSchema(z.date(), "date");

export const OptionalDateRangeSchema = createUniqueFieldSchema(
  z.tuple([z.date().nullish(), z.date().nullish()]).nullish(),
  "daterange"
);

export const NumberMaskedSchema = createUniqueFieldSchema(
  z.number().min(1),
  "masked"
);

export const OptionalNumberMaskedSchema = createUniqueFieldSchema(
  z.number().nullish(),
  "maskedOptional"
);

export const SegmentSchema = createUniqueFieldSchema(z.string(), "segment");

export const MultiSelectSchema = createUniqueFieldSchema(
  z.string().array(),
  "multiSelect"
);

export const OptionalMultiSelectSchema = createUniqueFieldSchema(
  z.string().array().nullish(),
  "multiSelect"
);
