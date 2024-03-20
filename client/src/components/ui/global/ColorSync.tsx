"use client";

import { RootState } from "@/features/store/store";
import clsx from "clsx";
import { useSelector } from "react-redux";
type Props = {
  styles: string;
  children?: React.ReactNode;
  onDark: string;
  onLight: string;
  key?: string | undefined;
  onClick?: () => any;
};

const ColorSync = ({
  styles,
  children,
  key,
  onDark,
  onLight,
  onClick,
}: Props) => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <div
      onClick={onClick}
      className={clsx(styles, theme.theme === "dark" ? onDark : onLight)}
      key={key}
    >
      {children}
    </div>
  );
};

export default ColorSync;
