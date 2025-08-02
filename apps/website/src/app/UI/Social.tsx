"use client";

import Link from "next/link";
import Image from "next/image";
import linkedin from "/public/icons/linkedin.svg";
import github from "/public/icons/github.svg";
import linkedinwhite from "/public/icons/linkedin-white.svg";
import githubwhite from "/public/icons/github-white.svg";
import styles from "./Social.module.css";
import { useContext } from "react";
import { BaseContext } from "@/context/BaseContext";

const Social = () => {
  const { theme } = useContext(BaseContext);
  return (
    <nav className={styles.social}>
      <ul>
        <li>
          <Link href="https://github.com/joeflem" target="_blank">
            <Image
              alt="GitHub"
              src={theme === "dark" ? githubwhite : github}
              width={22}
              height={22}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joe-c-4646a7107/"
            target="_blank"
          >
            <Image
              alt="LinkedIn"
              src={theme === "dark" ? linkedinwhite : linkedin}
              width={22}
              height={22}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Social;
