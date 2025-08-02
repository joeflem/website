"use client";
import { useContext, useEffect } from "react";
import { BaseContext } from "@/context/BaseContext";

const ThemeInjector = () => {
  const { theme } = useContext(BaseContext);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.body;
    if (theme === "dark") {
      root.style.setProperty("--body-bg", "#181818");
      root.style.setProperty("--text-color", "#f5f5f5");
      root.style.setProperty("--primary-color", "#1e90ff");
    } else {
      root.style.setProperty("--body-bg", "#fff");
      root.style.setProperty("--text-color", "#222");
      root.style.setProperty("--primary-color", "#0070f3");
    }
  }, [theme]);
  return null;
};

export default ThemeInjector;
