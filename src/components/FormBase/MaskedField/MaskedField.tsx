import { useMaskito } from "@maskito/react";
import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from "@maskito/kit";
import { TextInput, type TextInputProps } from "@mantine/core";
import { useTsController } from "@ts-react/form";
import { useUpdateEffect } from "usehooks-ts";
import { useMemo, useState } from "react";

const options = maskitoNumberOptionsGenerator({
  precision: 2,
  decimalSeparator: ".",
  min: 0,
});

export const MaskedField = (
  props: Omit<TextInputProps, "value" | "error" | "onChange">
) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<number>();
  const inputRef = useMaskito({ options });

  const [value, setValue] = useState(field.value?.toString() ?? "");

  const number = useMemo(() => maskitoParseNumber(value) ?? "", [value]);

  useUpdateEffect(() => {
    if (number !== field.value) {
      setValue(field.value ? field.value.toString() : "");
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
      error={error?.errorMessage}
      readOnly={isSubmitting || props.readOnly}
      onInput={(e) => setValue(e.currentTarget.value)}
    />
  );
};
