import { type TransactionListItem } from "@/lib/utils/transaction";

export type TransactionCardProps = TransactionListItem & {
  search?: string;
  onClick?: () => void;
};
