import { Paper } from "@mantine/core";
import { type FormPaperProps } from "./types";

export const FormPaper = ({ children }: FormPaperProps) => {
  return (
    <Paper shadow="sm" radius="md" p="lg" maw={"90%"} w={300}>
      {children}
    </Paper>
  );
};
