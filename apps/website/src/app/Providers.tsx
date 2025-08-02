"use client";

import BaseContextProvider from "@/context/BaseContext";
import { ThemeProvider } from "@/app/styling/ThemeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BaseContextProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </BaseContextProvider>
  );
}
