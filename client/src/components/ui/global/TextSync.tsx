"use client";

import { RootState } from "@/features/store/store";
import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

type Props = {
  text: string;
  style?: string;
};

export default function TextSync({ text, style }: Props) {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <span className={clsx(style, `text-${theme.color.trim()}`)}>{text}</span>
  );
}
