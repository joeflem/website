import styles from "./Experience.module.css";
import Card from "../Card/Card";
import { ExperienceItemType } from "@/lib/sanity/types";

interface ExperienceProps {
  experience: ExperienceItemType[];
}

const Experience = ({ experience }: ExperienceProps) => {
  const fromDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const toDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className={styles.experience}>
      {experience &&
        experience.map((item) => (
          <Card
            key={item._key}
            title={item.company}
            subTitle={item.jobTitle}
            logo={item.logo}
            bodyText={item.description}
            active={!item.to}
            footerText={`${fromDate(item.from)} - ${
              item.to ? toDate(item.to) : "Present"
            }`}
          />
        ))}
    </div>
  );
};

export default Experience;
