"use client";

import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface UnstyledCardProps {
  className?: string;
  title: string;
  subTitle: string;
  bodyText: string;
  logo: string | StaticImport;
  footerText?: string;
  active?: boolean;
}

const UnstyledCard = ({
  className,
  bodyText,
  logo,
  title,
  subTitle,
  footerText,
}: UnstyledCardProps) => {
  return (
    <div className={className}>
      <CardHeader title={title} subTitle={subTitle} logo={logo} />
      <CardBody text={bodyText} />
      {footerText && <CardFooter text={footerText} />}
    </div>
  );
};

interface CardProps {
  active?: boolean;
}

const Card = styled(UnstyledCard)<CardProps>`
  box-shadow: 0 0 #0000, 0 0 #0000, ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 10px;
  width: 300px;
  flex-shrink: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  ${(props) =>
    props.active &&
    `    &:before {
    width: 102%;
    height: 102%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    z-index: -1;
    background-image: linear-gradient(
      125deg,
      #e642ed,
      #7f32d4,
      #2327ea,
      #5bb0d3,
      #4ce0a0
    );
    background-size: 400%;
    animation: bganimation 15s infinite;
    border-radius: 13px;
    box-shadow: 0 0 #0000, 0 0 #0000, ${(props) => props.theme.shadow};
  }`}
`;

export default Card;
