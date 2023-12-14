import Head from "next/head";
import { type NextPageWithLayout } from "./_app";
import { type ReactElement } from "react";
import { AuthLayout } from "@/layouts";
import { AuthForm } from "@/feature/AuthForm";
import { FormPaper } from "@/components";
import { Anchor, Center } from "@mantine/core";
import Link from "next/link";
import { type Messages } from "@lingui/core";
import {
  type GetServerSidePropsContext,
  type GetServerSidePropsResult,
} from "next";
import { loadCatalog } from "translations/utils";
import { withSessionRedirect } from "@/utils/withSessionRedirect";

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FormPaper>
        <AuthForm />
        <Center mt="lg">
          <Anchor component={Link} href="/join">
            Registration
          </Anchor>
        </Center>
      </FormPaper>
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default LoginPage;

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<
  GetServerSidePropsResult<{
    translation: Messages;
  }>
> {
  const session = await withSessionRedirect(ctx, "/");

  return {
    redirect: session?.redirect,
    props: {
      translation: await loadCatalog(ctx.locale!),
    },
  };
}
