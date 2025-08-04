import { PortableText, PortableTextBlock } from "next-sanity";
import styles from "./CardBody.module.css";

interface CardBodyProps {
  text: PortableTextBlock[];
}

const CardBody = ({ text }: CardBodyProps) => {
  return (
    <div className={styles.cardBody}>
      <PortableText value={text} />
    </div>
  );
};

export default CardBody;
