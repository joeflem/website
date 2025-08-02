"use client";
import BaseContextProvider from "@/context/BaseContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <BaseContextProvider>{children}</BaseContextProvider>;
}
