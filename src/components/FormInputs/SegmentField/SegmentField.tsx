import {
  SegmentedControl,
  type SegmentedControlProps,
  Text,
} from "@mantine/core";
import { useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";

export const SegmentField = ({
  name,
  shouldUnregister,
  enumValues = [],
  data = [],
  ...props
}: Omit<SegmentedControlProps, "value" | "error" | "onChange" | "data"> & {
  name: string;
  shouldUnregister?: boolean;
  enumValues?: string[];
  data?: SegmentedControlProps["data"];
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
      <SegmentedControl
        value={field.value ? field.value : "none"}
        data={mantineOptions}
        readOnly={isSubmitting || props.readOnly}
        onChange={(value) => {
          field.onChange(value ?? undefined);
        }}
        {...props}
      />
      {error && <Text>{error?.message}</Text>}
    </>
  );
};
