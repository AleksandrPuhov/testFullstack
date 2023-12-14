import {
  Box,
  UnstyledButton,
  Button,
  type ButtonProps,
  ScrollArea,
  createPolymorphicComponent,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { type ModalButtonProps } from "./types";
import { modals } from "@mantine/modals";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const _ModalButton = forwardRef<HTMLButtonElement, ModalButtonProps>(
  ({ children, content, title, ...other }, ref) => {
    const isMobile = useMediaQuery("(max-width: 50em)");

    const open = () => {
      modals.open({
        title,
        children: <>{content}</>,
        fullScreen: isMobile,
        scrollAreaComponent: ScrollArea.Autosize,
      });
    };

    return (
      <UnstyledButton onClick={open} component="div">
        <Box ref={ref} component={Button} {...other}>
          {children}
        </Box>
      </UnstyledButton>
    );
  }
);

export const ModalButton = createPolymorphicComponent<
  typeof Button,
  ModalButtonProps
>(_ModalButton);
