import { Center, Loader } from "@mantine/core";
import React from "react";

export const DataLoader = ({
  loading,
  children,
}: React.PropsWithChildren<{ loading: boolean }>) => {
  return loading ? (
    <Center>
      <Loader />
    </Center>
  ) : (
    <>{children}</>
  );
};
