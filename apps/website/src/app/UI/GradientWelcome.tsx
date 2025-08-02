import styles from "./GradientWelcome.module.css";
import React from "react";

export const GradientWelcome = ({
  children,
}: {
  children: React.ReactNode;
}) => <span className={styles.gradientWelcome}>{children}</span>;
