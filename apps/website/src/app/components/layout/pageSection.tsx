import styles from "./pageSection.module.css";

interface PageSectionProps {
  intro: { title: string; description: string };
  children: React.ReactNode;
}

const PageSection = ({ intro, children }: PageSectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.overview}>
        <div className={styles.overviewText}>
          <h2>{intro.title}</h2>
          <p>{intro.description}</p>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default PageSection;
