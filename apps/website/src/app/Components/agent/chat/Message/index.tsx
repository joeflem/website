"use client";
import styles from "./Message.module.scss";

interface MessageProps {
  text: string;
}

export default function Message({ text }: MessageProps) {
  return <div className={styles.message}>{text}</div>;
}
