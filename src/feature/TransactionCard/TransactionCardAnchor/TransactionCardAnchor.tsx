import { forwardRef } from "react";
import { Anchor } from "@mantine/core";
import { type TransactionCardAccountProps } from "./types";

export const TransactionCardAnchor = forwardRef<
  HTMLAnchorElement,
  TransactionCardAccountProps
>(({ name, id, ...props }, ref) => {
  return (
    <Anchor
      ref={ref}
      size="sm"
      color="gray.7"
      truncate
      onClick={(e) => {
        e.stopPropagation();

        console.log("link");

        // navigate({
        //   pathname: "/history",
        //   search: `?categoryId=${category.id}`,
        // });
      }}
      {...props}
    >
      {name}
    </Anchor>
  );
});

TransactionCardAnchor.displayName = "transaction-card-anchor";
