import React from "react";
import ColorSync from "../global/ColorSync";

const AuthContainer = ({ children }: Children) => {
  return (
    <ColorSync
      styles={"w-96 rounded-xl shadow-sm p-4 gap-5 flex flex-col "}
      onDark={""}
      onLight={"bg-white"}
    >
      {children}
    </ColorSync>
  );
};

export default AuthContainer;
