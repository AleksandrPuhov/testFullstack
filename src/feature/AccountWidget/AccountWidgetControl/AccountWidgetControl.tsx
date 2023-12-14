import {
  Group,
  Box,
  Flex,
  Tooltip,
  ActionIcon,
  Text,
  rem,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { ChevronDown, History } from "lucide-react";
import { type AccountWidgetControlProps } from "./types";
import Link from "next/link";

export const AccountWidgetControl = ({
  label,
  id,
  children,
}: AccountWidgetControlProps) => {
  const { hovered, ref } = useHover();

  return (
    <Flex justify={"space-between"} w="100%">
      <Group spacing={"xs"}>
        <Box ref={ref}>
          {hovered ? (
            <Tooltip
              label="История операций"
              withArrow
              openDelay={100}
              withinPortal
            >
              <ActionIcon
                component={Link}
                href={{
                  pathname: "/history",
                  query: { groupId: id },
                }}
                variant="default"
              >
                <History size={rem(16)} />
              </ActionIcon>
            </Tooltip>
          ) : (
            <ActionIcon variant="light" component="div">
              <ChevronDown size="1rem" />
            </ActionIcon>
          )}
        </Box>
        <Text>{label}</Text>
      </Group>
      {children}
    </Flex>
  );
};
