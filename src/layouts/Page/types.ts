import { type DefaultProps } from "@mantine/core";

export type PageProps = React.PropsWithChildren<{
  hidden?: boolean;
}> &
  DefaultProps;
