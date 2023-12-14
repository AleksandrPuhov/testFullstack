import { DateTimePicker, type DateTimePickerProps } from "@mantine/dates";
import dayjs from "dayjs";
import { useController, useFormContext } from "react-hook-form";

export const DateField = ({
  name,
  shouldUnregister,
  ...props
}: Omit<DateTimePickerProps, "value" | "error" | "onChange"> & {
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

  const date = field.value ? dayjs(field.value).toDate() : null;

  return (
    <DateTimePicker
      {...props}
      value={date}
      error={error?.message}
      readOnly={isSubmitting || props.readOnly}
      onChange={(value) => {
        field.onChange(dayjs(value).toISOString() ?? undefined);
      }}
    />
  );
};
