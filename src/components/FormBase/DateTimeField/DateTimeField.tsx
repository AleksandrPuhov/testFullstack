import { DateTimePicker, type DateTimePickerProps } from "@mantine/dates";
import { useTsController } from "@ts-react/form";

export const DateTimeField = (
  props: Omit<DateTimePickerProps, "value" | "error" | "onChange">
) => {
  const {
    field,
    error,
    formState: { isSubmitting },
  } = useTsController<Date>();

  return (
    <DateTimePicker
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
