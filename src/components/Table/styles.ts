import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  table: {
    minWidth: "100%",

    "&[data-hover] > tbody > tr": theme.fn.hover({
      cursor: "pointer",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    }),
  },
}));
