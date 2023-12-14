import { type z } from "zod";
import { FormBase } from "@/components";
import { useCreateUser } from "@/lib/hooks";
import { SignUpSchema } from "./schema";
import Router from "next/router";
import { signIn } from "next-auth/react";

export const RegistrationForm = () => {
  const signup = useCreateUser();

  const onSubmit = async ({
    email,
    password,
  }: z.infer<typeof SignUpSchema>) => {
    try {
      await signup.mutateAsync({ data: { email, password } });

      await signIn("credentials", { redirect: false, email, password });
      await Router.push("/");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (err.info?.prisma && err.info?.code === "P2002") {
        // P2002 is Prisma's error code for unique constraint violations
        alert("User alread exists");
      } else {
        alert("An unknown error occurred");
      }
      return;
    }
  };

  return (
    <FormBase
      schema={SignUpSchema}
      onSubmit={onSubmit}
      props={{
        name: {
          label: "Name",
        },
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
        },
        confirmPassword: {
          label: "Confirm password",
        },
        confirm: {
          label: "Confirm rules",
        },
      }}
      formProps={{
        // loading: signup.isLoading,
        buttonProps: {
          fullWidth: true,
          label: "Sign up",
        },
      }}
    />
  );
};
