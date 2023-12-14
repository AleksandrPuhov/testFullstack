import Head from "next/head";
import { type NextPageWithLayout } from "./_app";
import { type ReactElement } from "react";
import { AuthLayout } from "@/layouts";
import { FormPaper } from "@/components";
import { RegistrationForm } from "@/feature/RegistrationForm";
import { Anchor, Center } from "@mantine/core";
import Link from "next/link";
import { type Messages } from "@lingui/core";
import {
  type GetServerSidePropsContext,
  type GetServerSidePropsResult,
} from "next";
import { loadCatalog } from "translations/utils";
import { withSessionRedirect } from "@/utils/withSessionRedirect";

const RegistrationPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FormPaper>
        <RegistrationForm />
        <Center mt="lg">
          <Anchor component={Link} href="/login">
            Login
          </Anchor>
        </Center>
      </FormPaper>
    </>
  );
};

RegistrationPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default RegistrationPage;

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
