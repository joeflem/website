"use client";

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
      <div className={styles.overview}>
        <div className={styles.overviewText}>
          <h2>Experience</h2>
          <p>
            I’ve had the pleasure of working with some great teams at fantastic
            companies. Along the way, I’ve learned a lot—especially from the
            things that didn’t go to plan. Those lessons have shaped how I work
            today.
          </p>
        </div>
      </div>
      <div className={styles.items}>
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
    </div>
  );
};

export default Experience;
