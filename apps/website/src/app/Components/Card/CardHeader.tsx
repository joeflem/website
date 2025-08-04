import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from "./CardHeader.module.css";
import { GeistMono } from "geist/font/mono";

interface CardHeaderProps {
  logo: string | StaticImport;
  title: string;
  subTitle: string;
}

const CardHeader = ({ logo, title, subTitle }: CardHeaderProps) => {
  return (
    <div className={styles.cardHeader}>
      {logo && <Image src={logo} alt={title} width={40} height={40} />}
      <div>
        <h3>{title}</h3>
        <p className={GeistMono.className}>{subTitle}</p>
      </div>
    </div>
  );
};

export default CardHeader;
