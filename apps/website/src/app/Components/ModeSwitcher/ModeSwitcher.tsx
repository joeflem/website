import Image from "next/image";
import { useContext } from "react";
import styles from "./ModeSwitcher.module.css";
import { BaseContext } from "@/context/BaseContext";
import Dark from "public/icons/dark.svg";
import Light from "public/icons/light.svg";

interface UnstyledModeSwitcherProps {
  className?: string;
}

const ModeSwitcher = ({ className }: UnstyledModeSwitcherProps) => {
  const { theme, toggleTheme } = useContext(BaseContext);
  return (
    <div className={className ? className : styles.modeSwitcher}>
      <button className={styles.button} onClick={() => toggleTheme()}>
        <Image
          alt={`${theme === "dark" ? "Dark" : "Light"} Mode`}
          src={theme === "dark" ? Light : Dark}
          width={22}
          height={22}
        />
      </button>
    </div>
  );
};

export default ModeSwitcher;
