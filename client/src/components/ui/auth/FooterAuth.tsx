/* eslint-disable react/no-unescaped-entities */
import { Link } from "@chakra-ui/react";
import React from "react";

type Props = {
  login: boolean;
};

export default function FooterAuth({ login }: Props) {
  return (
    <p className="w-full text-center font-medium text-sm text-pLight2">
      {login ? " Don't have an account?" : "Already have an account?"}

      <Link href={login ? "/sign-up" : "/sign-in"}>
        <span className="hover:underline cursor-pointer text-primary">
          {login ? " Sign-up" : " Sign-in"}
        </span>
      </Link>
    </p>
  );
}
