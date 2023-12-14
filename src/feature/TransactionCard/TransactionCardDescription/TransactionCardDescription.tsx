import { Highlight, Text } from "@mantine/core";

export const TransactionCardDescription = ({
  search,
  description,
}: {
  search?: string;
  description?: string | null;
}) => {
  return description ? (
    <Highlight highlight={search ?? ""} size="sm" truncate>
      {description}
    </Highlight>
  ) : (
    <Text size="sm" color="gray.5" italic>
      Без описания
    </Text>
  );
};
