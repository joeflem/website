import styles from "./CardBody.module.css";

interface CardBodyProps {
  text: string;
}

const CardBody = ({ text }: CardBodyProps) => {
  return (
    <div className={styles.cardBody}>
      <p>{text}</p>
    </div>
  );
};

export default CardBody;
