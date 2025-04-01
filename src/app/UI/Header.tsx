"use client";

import Link from "next/link";
import styled from "styled-components";
import Nav from "@/app/UI/Nav";
import ModeSwitcher from "./ModeSwitcher";
import ProfilePic from "./ProfilePic";

interface UnstyledHeaderProps {
  className?: string;
}

const UnstyledHeader = ({ className }: UnstyledHeaderProps) => {
  return (
    <header className={className}>
      <Link href="/">
        <ProfilePic />
      </Link>
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
    display: flex;
    align-items: center;
    &:hover {
      > figure {
        transform: scale(1.05);
      }
    }
    &:active {
      > figure {
        transform: scale(0.95);
      }
    }
  }
`;

export default Header;
