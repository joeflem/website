"use client";

import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  subTitle: string;
  bodyText: string;
  logo: string | StaticImport;
  footerText?: string;
  active?: boolean;
  linkedRight?: boolean;
}

const Card = ({
  bodyText,
  logo,
  title,
  subTitle,
  footerText,
  active,
  linkedRight,
}: CardProps) => {
  const classNames = [styles.card];
  if (active) classNames.push(styles.active);
  if (linkedRight) classNames.push(styles.linkedRight);
  return (
    <div className={classNames.join(" ")}>
      <CardHeader title={title} subTitle={subTitle} logo={logo} />
      <CardBody text={bodyText} />
      {footerText && <CardFooter text={footerText} />}
    </div>
  );
};

export default Card;
