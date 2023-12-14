import { MultiSelect, type MultiSelectProps } from "@mantine/core";
import { useTsController } from "@ts-react/form";
import { useMemo } from "react";

export const MultiSelectField = ({
  enumValues = [],
  data = [],
  ...props
}: Omit<MultiSelectProps, "value" | "error" | "onChange" | "data"> & {
  enumValues: string[];
  data?: MultiSelectProps["data"];
}) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<string[]>();

  const mantineOptions = useMemo(() => {
    return data.length
      ? data
      : enumValues.map((option) => ({
          value: option,
          label: option,
        }));
  }, [data, enumValues]);

  return (
    <>
      <MultiSelect
        value={field.value}
        data={mantineOptions}
        error={error?.errorMessage && error.errorMessage}
        readOnly={isSubmitting || props.readOnly}
        onChange={(value) => {
          field.onChange(value ?? []);
        }}
        {...props}
      />
    </>
  );
};
