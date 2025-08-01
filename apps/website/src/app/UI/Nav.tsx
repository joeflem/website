"use client";

import styled from "styled-components";
import Link from "next/link";

interface UnstyledNavProps {
  className?: string;
}

const UnstyledNav = ({ className }: UnstyledNavProps) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <Link href="/">Info</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const Nav = styled(UnstyledNav)`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      a {
        color: ${(props) => props.theme.text};
        padding: 0 10px;
        opacity: 0.75;
        transition: 0.25s ease;
        text-decoration: none;
        &:hover {
          color: ${(props) => props.theme.primaryColor};
          opacity: 1;
        }
      }
    }
  }
`;

export default Nav;
