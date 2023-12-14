import { useAccountGroupList } from "@/lib/utils/account";

export const AccountGroupList = () => {
  const { data } = useAccountGroupList();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
