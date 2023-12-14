import { UnstyledButton } from "@mantine/core";
import { type TransactionCardPaperProps } from "./types";

export const TransactionCardPaper = ({
  children,
  onClick,
}: TransactionCardPaperProps) => {
  return (
    <UnstyledButton
      component="div"
      sx={[
        (theme) =>
          onClick
            ? {
                transition: "border-color 100ms ease",

                ["&:hover"]: {
                  borderColor: theme.colors.gray[4],
                },
              }
            : {
                cursor: "default",
              },
        (theme) => ({
          width: "100%",
          backgroundColor: "white",
          borderRadius: theme.radius.md,
          padding: theme.spacing.sm,
          border: `1px solid ${theme.colors.gray[2]}`,
          position: "relative",
        }),
      ]}
      onClick={onClick}
    >
      {children}
    </UnstyledButton>
  );
};
