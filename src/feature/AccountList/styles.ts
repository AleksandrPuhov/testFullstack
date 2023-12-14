import { createStyles, getStylesRef } from "@mantine/core";

export const useStyles = createStyles(() => ({
  headerCell: {
    position: "relative",

    [`&:hover > .${getStylesRef("resizer")}`]: {
      opacity: 1,
    },
  },

  resizer: {
    ref: getStylesRef("resizer"),

    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    width: "5px",
    background: "rgba(0, 0, 0, 0.5)",
    cursor: "col-resize",
    userSelect: "none",
    touchAction: "none",
    opacity: 0,
  },

  isResizing: {
    background: "blue",
    opacity: 1,
  },
}));
