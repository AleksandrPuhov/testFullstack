import { type ButtonProps } from "@mantine/core";

export type ModalButtonProps = React.PropsWithChildren<
  {
    title: string;
    content: React.ReactNode;
  } & ButtonProps
>;
