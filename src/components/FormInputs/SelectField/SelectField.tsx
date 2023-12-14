import { Select, type SelectProps } from "@mantine/core";
import { useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";

export const SelectField = ({
  enumValues = [],
  data = [],
  name,
  shouldUnregister,
  ...props
}: Omit<SelectProps, "value" | "error" | "onChange" | "data"> & {
  name: string;
  data?: SelectProps["data"];
  enumValues?: string[];
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
        error={error?.message}
        readOnly={isSubmitting || props.readOnly}
        onChange={(value) => {
          field.onChange(value ?? undefined);
        }}
        {...props}
      />
    </>
  );
};
