import { type TransactionType } from "@prisma/client";
import type React from "react";

export type Category = {
  id: string;
  name: string;
  type: TransactionType;
  description?: string | null;
  archived: boolean;
  parentId?: string | null;
  parent: {
    id: string;
    name: string;
  } | null;
  categories: Category[];
};

export type CategoryListProps = {
  value: Category[];
  title: React.ReactNode;
};
