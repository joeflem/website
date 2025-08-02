"use client";

import Link from "next/link";
import ModeSwitcher from "./ModeSwitcher";
import ProfilePic from "./ProfilePic";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <ProfilePic />
      </Link>
      <ModeSwitcher />
    </header>
  );
};

export default Header;
