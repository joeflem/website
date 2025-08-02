import styles from "./CardFooter.module.css";

interface CardFooterProps {
  text: string;
}

const CardFooter = ({ text }: CardFooterProps) => {
  return (
    <div className={styles.cardFooter}>
      <p>{text}</p>
    </div>
  );
};

export default CardFooter;
