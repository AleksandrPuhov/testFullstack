import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  icon: {
    width: rem(32),
    height: rem(32),
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  iconIncome: {
    backgroundColor: theme.colors.green[0],
    color: theme.colors.green[9],
  },

  iconOutcome: {
    backgroundColor: theme.colors.orange[0],
    color: theme.colors.orange[9],
  },

  iconTransfer: {
    backgroundColor: theme.colors.blue[0],
    color: theme.colors.blue[9],
  },
}));
