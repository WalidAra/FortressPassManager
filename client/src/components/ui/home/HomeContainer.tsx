import React from "react";
import ColorSync from "../global/ColorSync";

export default function HomeContainer({ children }: Children) {
  return (
    <ColorSync styles={""} onDark={""} onLight={""}>
      {children}
    </ColorSync>
  );
}
