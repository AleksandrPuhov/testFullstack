import { createTsForm } from "@ts-react/form";
import { z } from "zod";
import {
  DateSchema,
  DateTimeSchema,
  EmailSchema,
  NumberMaskedSchema,
  OptionalNumberMaskedSchema,
  OptionalSelectSchema,
  PasswordSchema,
  SelectSchema,
  SegmentSchema,
  MultiSelectSchema,
  DateRangeSchema,
} from "./schemas";
import { FormContainer } from "./FormContainer";
import { PasswordField } from "./PasswordField";
import { TextField } from "./TextField";
import { CheckBoxField } from "./CheckboxField";
import { SelectField } from "./SelectField";
import { MultiSelectField } from "./MultiSelectField";
import { DateField } from "./DateField";
import { DateTimeField } from "./DateTimeField";
import { MaskedField } from "./MaskedField";
import { SegmentField } from "./SegmentField";
import { DatesField } from "./DatesField";

const mapping = [
  [z.string(), TextField],
  [z.number(), TextField],
  [z.date(), TextField],
  [z.boolean(), CheckBoxField],
  [z.enum([""]), SelectField],
  [EmailSchema, TextField],
  [PasswordSchema, PasswordField],
  [DateSchema, DateField],
  [DateTimeSchema, DateTimeField],
  [SelectSchema, SelectField],
  [OptionalSelectSchema, SelectField],
  [SegmentSchema, SegmentField],
  [NumberMaskedSchema, MaskedField],
  [OptionalNumberMaskedSchema, MaskedField],
  [MultiSelectSchema, MultiSelectField],
  [DateRangeSchema, DatesField],
] as const;

export const FormBase = createTsForm(mapping, { FormComponent: FormContainer });
