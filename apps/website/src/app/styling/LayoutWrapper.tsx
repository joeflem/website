import styles from "./LayoutWrapper.module.css";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return <div className={styles.layoutWrapper}>{children}</div>;
};

export default LayoutWrapper;
