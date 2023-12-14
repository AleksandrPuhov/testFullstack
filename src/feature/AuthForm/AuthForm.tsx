import Router from "next/router";
import { type z } from "zod";
import { FormBase } from "@/components";
import { SignInSchema } from "./schema";
import { signIn } from "next-auth/react";

export const AuthForm = () => {
  const onSubmit = async ({
    email,
    password,
  }: z.infer<typeof SignInSchema>) => {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      await Router.push("/");
    } else {
      alert("Signin failed");
    }
  };

  return (
    <FormBase
      schema={SignInSchema}
      onSubmit={onSubmit}
      props={{
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
        },
        remember: {
          label: "Remember me",
        },
      }}
      formProps={{
        buttonProps: {
          fullWidth: true,
          label: "Sign in",
        },
      }}
    />
  );
};
