import { Flex } from "@mantine/core";
import { type AuthLayoutProps } from "./types";

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Flex h={"100vh"} bg={"gray.1"} align={"center"} justify={"center"}>
      {children}
    </Flex>
  );
};
