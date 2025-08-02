import { useContext } from "react";
import { BaseContext } from "@/context/BaseContext";
import styles from "./LayoutWrapper.module.css";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const { theme } = useContext(BaseContext);
  return (
    <div
      className={
        theme === "light"
          ? `${styles.layoutWrapper} ${styles.light}`
          : `${styles.layoutWrapper} ${styles.dark}`
      }
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
