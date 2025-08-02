import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from "./CardHeader.module.css";

interface CardHeaderProps {
  logo: string | StaticImport;
  title: string;
  subTitle: string;
}

const CardHeader = ({ logo, title, subTitle }: CardHeaderProps) => {
  return (
    <div className={styles.cardHeader}>
      <Image src={logo} alt={title} width={40} height={40} />
      <div>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default CardHeader;
