import { type PasswordInputProps, PasswordInput } from "@mantine/core";
import { useTsController } from "@ts-react/form";

export const PasswordField = (
  props: Omit<PasswordInputProps, "value" | "error" | "onChange">
) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<string>();

  return (
    <PasswordInput
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
