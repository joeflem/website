"use client";

import { createContext, useState, useEffect } from "react";

interface BaseContextValueType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const BaseContext = createContext<BaseContextValueType>({
  theme: "light",
  toggleTheme: () => {},
});

interface BaseContextProviderProps {
  children: React.ReactNode;
}

const BaseContextProvider = ({ children }: BaseContextProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme as "light" | "dark");
    }
  }, []);

  return (
    <BaseContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </BaseContext.Provider>
  );
};

export default BaseContextProvider;
