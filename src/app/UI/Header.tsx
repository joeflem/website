"use client";

import Link from "next/link";
import styled from "styled-components";
import Nav from "@/app/UI/Nav";
import ModeSwitcher from "./ModeSwitcher";

interface UnstyledHeaderProps {
  className?: string;
}

const UnstyledHeader = ({ className }: UnstyledHeaderProps) => {
  return (
    <header className={className}>
      <Link href="/">@joefleming</Link>
      <ModeSwitcher />
    </header>
  );
};

const Header = styled(UnstyledHeader)`
  padding: 30px 0;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }
`;

export default Header;
