import { LoaderCircle } from "lucide-react";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderCircle />
    </div>
  );
};
export default Loader;
