import { Text, packSx } from "@mantine/core";
import { formatPrice } from "./utils";
import { type MoneyTagProps } from "./types";

export const MoneyTag = ({
  count,
  currency,
  prefix = "",
  sx,
  ...props
}: MoneyTagProps) => {
  return (
    <Text sx={[{ whiteSpace: "nowrap" }, ...packSx(sx)]} {...props}>
      {prefix}
      {formatPrice(count, { currency })}
    </Text>
  );
};
