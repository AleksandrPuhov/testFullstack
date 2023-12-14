import { Select, type SelectProps } from "@mantine/core";
import { useTsController } from "@ts-react/form";
import { useMemo } from "react";

export const SelectField = ({
  enumValues = [],
  data = [],
  ...props
}: Omit<SelectProps, "value" | "error" | "onChange" | "data"> & {
  enumValues: string[];
  data?: SelectProps["data"];
}) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<string>();

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
      <Select
        value={field.value ? field.value : ""}
        data={mantineOptions}
        error={error?.errorMessage && error.errorMessage}
        readOnly={isSubmitting || props.readOnly}
        onChange={(value) => {
          field.onChange(value ?? undefined);
        }}
        {...props}
      />
    </>
  );
};
