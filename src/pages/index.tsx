import {
  type GetServerSidePropsContext,
  type GetServerSidePropsResult,
} from "next";
import { loadCatalog } from "translations/utils";
import { type Messages } from "@lingui/core";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <div>{status}</div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<
  GetServerSidePropsResult<{
    translation: Messages;
  }>
> {
  return {
    props: {
      translation: await loadCatalog(ctx.locale!),
    },
  };
}
