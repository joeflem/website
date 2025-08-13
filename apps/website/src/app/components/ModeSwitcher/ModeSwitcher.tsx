"use client";
import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./ModeSwitcher.module.css";
import { BaseContext } from "@/context/BaseContext";

interface UnstyledModeSwitcherProps {
  className?: string;
}

const ModeSwitcher = ({ className }: UnstyledModeSwitcherProps) => {
  const { theme, toggleTheme } = useContext(BaseContext);
  return (
    <div className={className ? className : styles.modeSwitcher}>
      <button className={styles.button} onClick={() => toggleTheme()}>
        {theme === "dark" ? (
          <Sun size={22} className={styles.icon} />
        ) : (
          <Moon size={22} className={styles.icon} />
        )}
      </button>
    </div>
  );
};

export default ModeSwitcher;
