import { Suspense } from "react";
import styles from "./pageSection.module.css";
import Loader from "../Loader/Loader";

interface PageSectionProps {
  intro: React.ReactElement;
  children: React.ReactNode;
}

const PageSection = ({ intro, children }: PageSectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.overview}>
        <div className={styles.overviewText}>
          <Suspense fallback={<Loader />}>{intro}</Suspense>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default PageSection;
