import React from "react";
import ColorSync from "../global/ColorSync";

type Props = {
  children: React.ReactNode;
};

const AuthBoard = ({ children }: Props) => {
  return (
    <ColorSync
      styles={"center_div w-full h-screen"}
      onDark={""}
      onLight={"bg-whiteBoard"}
    >
      {children}
    </ColorSync>
  );
};

export default AuthBoard;
