import Head from "next/head";
import { Header, Group, rem, Title } from "@mantine/core";
import { type PageHeaderProps } from "./types";

export const PageHeader = ({ title, actions }: PageHeaderProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header
        height={rem(60)}
        px="md"
        py="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Group position="apart">
          <Title order={4}>{title}</Title>
          {actions}
        </Group>
      </Header>
    </>
  );
};
