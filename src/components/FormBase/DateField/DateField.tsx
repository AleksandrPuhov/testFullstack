import { type DateInputProps, DateInput } from "@mantine/dates";
import { useTsController } from "@ts-react/form";

export const DateField = (
  props: Omit<DateInputProps, "value" | "error" | "onChange">
) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<Date>();

  return (
    <DateInput
      {...props}
      value={field.value ? field.value : null}
      error={error?.errorMessage}
      readOnly={isSubmitting || props.readOnly}
      onChange={(value) => {
        field.onChange(value ?? undefined);
      }}
    />
  );
};
