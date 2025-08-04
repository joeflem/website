"use client";
import { useContext, useEffect } from "react";
import { BaseContext } from "@/context/BaseContext";

const ThemeInjector = () => {
  const { theme } = useContext(BaseContext);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.body;
    if (theme === "dark") {
      root.style.setProperty("--body-bg", "#000");
      root.style.setProperty("--text-color", "#f5f5f5");
      root.style.setProperty("--primary-color", "#1e90ff");
      root.style.setProperty("--card-background", "rgb(11, 12, 14)");
      root.style.setProperty("--card-background", "rgb(11, 12, 14)");
      root.style.setProperty("--card-shadow", "0 2px 8px 0 rgba(0, 0, 0, 0.1)");
      root.style.setProperty("--border", "1px solid rgba(255, 255, 255, 0.1)");
      root.style.setProperty("--dots-color", "rgba(255, 255, 255, 0.1)");
      root.style.setProperty(
        "--radial-gradient",
        "radial-gradient(circle,rgba(139, 92, 246, 0.25) 0%,transparent 70%)0% 0% / 100% 100% rgb(0, 0, 0)"
      );
    } else {
      root.style.setProperty("--body-bg", "#fff");
      root.style.setProperty("--text-color", "#222");
      root.style.setProperty("--primary-color", "#0070f3");
      root.style.setProperty("--card-background", "#ffffff");
      root.style.setProperty("--card-shadow", "0 2px 8px 0 rgba(0, 0, 0, 0.1)");
      root.style.setProperty("--border", "1px solid rgba(0, 0, 0, 0.1)");
      root.style.setProperty("--dots-color", "rgba(0, 0, 0, 0.1)");
      root.style.setProperty(
        "--radial-gradient",
        "radial-gradient(circle,rgba(139, 92, 246, 0.2) 0%,transparent 70%)0% 0% / 100% 100% rgb(255, 255, 255)"
      );
    }
  }, [theme]);
  return null;
};

export default ThemeInjector;
