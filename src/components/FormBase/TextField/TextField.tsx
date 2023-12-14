import { type TextInputProps, TextInput } from "@mantine/core";
import { useTsController } from "@ts-react/form";

export const TextField = (
  props: Omit<TextInputProps, "value" | "error" | "onChange">
) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<string>();

  return (
    <TextInput
      {...props}
      value={field.value ? field.value : ""}
      error={error?.errorMessage}
      readOnly={isSubmitting || props.readOnly}
      onChange={(e) => {
        field.onChange(e.currentTarget.value);
      }}
    />
  );
};
