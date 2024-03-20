// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: Children) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
