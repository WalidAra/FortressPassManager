import React from "react";
import Logo from "../global/Logo";
import COLORS from "@/constants/COLORS";

export default function AuthLogo() {
  return (
    <div>
      <Logo color={COLORS.primary} size={45} />
    </div>
  );
}
