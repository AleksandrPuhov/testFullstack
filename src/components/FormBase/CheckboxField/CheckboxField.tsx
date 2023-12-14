import { type CheckboxProps, Checkbox } from "@mantine/core";
import { useTsController } from "@ts-react/form";

export const CheckBoxField = (
  props: Omit<CheckboxProps, "value" | "error" | "onChange">
) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<boolean>();

  return (
    <Checkbox
      {...props}
      checked={field.value ? field.value : false}
      error={error?.errorMessage}
      readOnly={isSubmitting || props.readOnly}
      onChange={(e) => {
        field.onChange(e.currentTarget.checked);
      }}
    />
  );
};
