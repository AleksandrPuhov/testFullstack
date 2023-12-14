import { Box, ScrollArea } from "@mantine/core";
import { type PageProps } from "./types";

export const Page = ({ children, hidden, ...rest }: PageProps) => {
  return !hidden ? (
    <ScrollArea.Autosize
      h={"100%"}
      styles={{
        scrollbar: {
          zIndex: 5,
        },
      }}
    >
      <Box {...rest} p="lg">
        {children}
      </Box>
    </ScrollArea.Autosize>
  ) : (
    <Box {...rest} h={"100%"}>
      {children}
    </Box>
  );
};
