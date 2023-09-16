"use client";

import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/app/styling/GlobalStyles";
import { lightTheme, darkTheme } from "@/app/styling/themes";

interface UnstyledLayoutWrapperProps {
  className?: string;
  children: React.ReactNode;
}
const UnstyledLayoutWrapper = ({
  className,
  children,
}: UnstyledLayoutWrapperProps) => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className={className}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </div>
  );
};

const LayoutWrapper = styled(UnstyledLayoutWrapper)`
  --border-color: ${(props) => props.theme.border};
  background: red;
`;

export default LayoutWrapper;
