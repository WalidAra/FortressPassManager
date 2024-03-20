import { Box } from "@chakra-ui/react";
import React from "react";
import Block from "../global/Block";
import AuthLogo from "./AuthLogo";

type Props = {
  text: string;
  title:string
};

export default function AuthHead({ text , title }: Props) {
  return (
    <Box className="w-full flex flex-col gap-1 items-center justify-center">
      <Block className="w-full center_div">
        <AuthLogo />
      </Block>
      <h1 className="font-bold text-hLight text-xl"> {title}</h1>
      <p className="text-pLight2 text-sm font-medium">{text}</p>
    </Box>
  );
}
