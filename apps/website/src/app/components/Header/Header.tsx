import Link from "next/link";
import ModeSwitcher from "@/app/components/ModeSwitcher/ModeSwitcher";
import ProfilePic from "@/app/components/ProfilePic/ProfilePic";
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
