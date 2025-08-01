"use client";

import styled from "styled-components";
import Social from "./Social";

interface UnstyledFooterProps {
  className?: string;
}

const UnstyledFooter = ({ className }: UnstyledFooterProps) => {
  return (
    <footer className={className}>
      <p>Joe Fleming &copy; {new Date().getFullYear()}</p>
      <Social />
    </footer>
  );
};

const Footer = styled(UnstyledFooter)`
  padding: 30px 0;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }
  p {
    font-size: 14px;
  }
`;

export default Footer;
