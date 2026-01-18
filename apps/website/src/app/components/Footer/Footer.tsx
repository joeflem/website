import styles from "./Footer.module.css";
import Social from "@/app/components/Social/Social";
import CurrentYear from "@/app/components/Footer/CurrentYear";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Joe Fleming &copy; <CurrentYear />
      </p>
      <Social />
    </footer>
  );
};

export default Footer;
