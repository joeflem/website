"use client";

import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "./Card.module.css";
import { PortableTextBlock } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface CardProps {
  title: string;
  subTitle: string;
  bodyText: PortableTextBlock[];
  logo: SanityImageSource;
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
  // Set up the image URL builder
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source).width(800).url();
  }
  return (
    <div className={classNames.join(" ")}>
      <CardHeader title={title} subTitle={subTitle} logo={urlFor(logo)} />
      <CardBody text={bodyText} />
      {footerText && <CardFooter text={footerText} />}
    </div>
  );
};

export default Card;
