import { type TextInputProps, TextInput } from "@mantine/core";
import { useController, useFormContext } from "react-hook-form";

export const TextField = ({
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

  return (
    <TextInput
      {...props}
      value={field.value ? field.value : ""}
      error={error?.message}
      readOnly={isSubmitting || props.readOnly}
      onChange={(e) => {
        field.onChange(e.currentTarget.value);
      }}
    />
  );
};
