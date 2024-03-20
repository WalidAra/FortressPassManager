import React, { HTMLAttributes } from "react";

export default function Block({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={className}> {children} </div>;
}
