import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import styles from "./Social.module.css";

const Social = () => {
  return (
    <nav className={styles.social}>
      <ul>
        <li>
          <Link href="https://github.com/joeflem" target="_blank">
            <Github size={22} />
          </Link>
          <Link href="https://www.linkedin.com/in/j-flem/" target="_blank">
            <Linkedin size={22} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Social;
