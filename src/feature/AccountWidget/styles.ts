import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
    gap: theme.spacing.xs,
    fontSize: theme.fontSizes.md,
  },

  control: {
    fontSize: theme.fontSizes.sm,
  },

  label: {
    paddingBottom: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    fontWeight: 600,
  },

  content: {
    paddingBottom: theme.spacing.sm,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    border: `${rem(1)} solid transparent`,
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease, border-color 150ms ease",

    "&:hover": {
      borderColor: theme.colors.gray[4],
    },

    "&:not(:last-of-type)": {
      marginBottom: rem(4),
    },

    "&[data-active]": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },
}));
