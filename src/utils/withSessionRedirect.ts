import { getServerAuthSession } from "@/server/auth";
import { type Redirect, type GetServerSidePropsContext } from "next";

export async function withSessionRedirect(
  ctx: GetServerSidePropsContext,
  path: string
): Promise<{ redirect: Redirect } | void> {
  const session = await getServerAuthSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: path,
        permanent: false,
      },
    };
  }
}
