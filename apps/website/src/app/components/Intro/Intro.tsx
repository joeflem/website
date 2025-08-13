import styles from "./Intro.module.css";

interface IntroProps {
  children: React.ReactNode;
}

export const Intro = ({ children }: IntroProps) => {
  return <div className={styles.intro}>{children}</div>;
};
