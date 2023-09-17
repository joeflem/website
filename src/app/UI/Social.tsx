"use client";

import styled, { useTheme } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import linkedin from "/public/icons/linkedin.svg";
import github from "/public/icons/github.svg";
import linkedinwhite from "/public/icons/linkedin-white.svg";
import githubwhite from "/public/icons/github-white.svg";

interface UnstyledSocialProps {
  className?: string;
}

const UnstyledSocial = ({ className }: UnstyledSocialProps) => {
  const theme = useTheme();
  return (
    <nav className={className}>
      <ul>
        <li>
          <Link href="https://github.com/ciavuc">
            <Image
              alt="GitHub"
              src={theme.name === "dark" ? githubwhite : github}
              width="22"
              height="22"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/joe-fleming-3b1b5a1a8/">
            <Image
              alt="LinkedIn"
              src={theme.name === "dark" ? linkedinwhite : linkedin}
              width="22"
              height="22"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Social = styled(UnstyledSocial)`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      a {
        padding: 0 5px;
        opacity: 0.75;
        transition: 0.25s ease;
        text-decoration: none;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

export default Social;
