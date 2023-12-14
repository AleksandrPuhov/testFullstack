import { useMaskito } from "@maskito/react";
import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from "@maskito/kit";
import { TextInput, type TextInputProps } from "@mantine/core";
import { useUpdateEffect } from "usehooks-ts";
import { useMemo, useState } from "react";
import { useController, useFormContext } from "react-hook-form";

const options = maskitoNumberOptionsGenerator({
  precision: 2,
  decimalSeparator: ".",
  min: 0,
});

export const MaskedField = ({
  name,
  shouldUnregister,
  ...props
}: Omit<TextInputProps, "value" | "error" | "onChange"> & {
  name: string;
  shouldUnregister?: boolean;
}) => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, shouldUnregister });
  const inputRef = useMaskito({ options });
  const [value, setValue] = useState<string>(
    (field.value as number)?.toString() ?? ""
  );
  const number = useMemo(() => {
    return value ? maskitoParseNumber(value) : "";
  }, [value]);

  useUpdateEffect(() => {
    if (number !== field.value) {
      setValue(field.value ? (field.value as number).toString() : "");
    }
  }, [field.value]);

  useUpdateEffect(() => {
    field.onChange(number);
  }, [value]);

  return (
    <TextInput
      {...props}
      ref={inputRef}
      value={value}
      error={error?.message}
      readOnly={isSubmitting || props.readOnly}
      onInput={(e) => setValue(e.currentTarget.value)}
    />
  );
};
