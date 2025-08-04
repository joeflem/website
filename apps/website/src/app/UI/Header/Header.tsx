"use client";

import Link from "next/link";
import ModeSwitcher from "@/app/UI/ModeSwitcher/ModeSwitcher";
import ProfilePic from "@/app/UI/ProfilePic/ProfilePic";
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
