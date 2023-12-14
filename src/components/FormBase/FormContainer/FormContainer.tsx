import { type ReactNode } from "react";
import {
  type ButtonProps,
  Stack,
  Button,
  Group,
  type DefaultProps,
  Box,
} from "@mantine/core";
import { useFormContext } from "react-hook-form";

export const FormContainer = ({
  onSubmit,
  children,
  buttonProps,
  reset,
  submit = true,
  ...props
}: {
  onSubmit?: () => void;
  children: ReactNode;
  buttonProps?: Omit<ButtonProps, "type" | "loading"> & {
    label?: string;
  };
  submit?: boolean;
  reset?: boolean;
} & DefaultProps) => {
  const { label: buttonLabel, ...buttonOtherProps } = buttonProps ?? {};
  const form = useFormContext();

  return (
    <Box component="form" onSubmit={onSubmit} {...props}>
      <Stack>{children}</Stack>
      {(submit || reset) && (
        <Group position="apart" mt={"lg"}>
          {submit && (
            <Button
              type="submit"
              loading={form?.formState?.isSubmitting}
              {...buttonOtherProps}
            >
              {buttonLabel ? buttonLabel : "Submit"}
            </Button>
          )}
          {reset && (
            <Button
              variant="default"
              onClick={() => {
                form.reset();
              }}
            >
              Reset
            </Button>
          )}
        </Group>
      )}
    </Box>
  );
};
