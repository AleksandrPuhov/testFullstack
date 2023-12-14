import { useUsersList } from "@/lib/utils/user";

export const UserList = () => {
  const { data } = useUsersList();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
