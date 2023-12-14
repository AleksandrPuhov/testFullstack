import {
  SegmentedControl,
  type SegmentedControlProps,
  Text,
} from "@mantine/core";
import { useTsController } from "@ts-react/form";
import { useMemo } from "react";

export const SegmentField = ({
  enumValues = [],
  data = [],
  ...props
}: Omit<SegmentedControlProps, "value" | "error" | "onChange" | "data"> & {
  enumValues: string[];
  data?: SegmentedControlProps["data"];
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
      <SegmentedControl
        value={field.value ? field.value : "none"}
        data={mantineOptions}
        readOnly={isSubmitting || props.readOnly}
        onChange={(value) => {
          field.onChange(value ?? undefined);
        }}
        {...props}
      />
      {error && <Text>{error?.errorMessage && error.errorMessage}</Text>}
    </>
  );
};
