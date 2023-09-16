"use client";

import { createContext, useState } from "react";

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
  };

  return (
    <BaseContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </BaseContext.Provider>
  );
};

export default BaseContextProvider;
