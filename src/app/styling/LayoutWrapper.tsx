"use client";

import { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/app/styling/GlobalStyles";
import { lightTheme, darkTheme } from "@/app/styling/themes";
import { BaseContext } from "@/context/BaseContext";

interface UnstyledLayoutWrapperProps {
  className?: string;
  children: React.ReactNode;
}
const UnstyledLayoutWrapper = ({
  className,
  children,
}: UnstyledLayoutWrapperProps) => {
  const { theme } = useContext(BaseContext);
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
  width: 700px;
  margin: 0 auto;
`;

export default LayoutWrapper;
