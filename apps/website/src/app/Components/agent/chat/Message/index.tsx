"use client";
import Image from "next/image";
import styles from "./Message.module.scss";

interface MessageProps {
  children: React.ReactNode;
  role: "system" | "user" | "assistant";
}

export default function Message({ children, role }: MessageProps) {
  return (
    <div
      className={`${styles.message} ${
        role === "user" ? styles.user : undefined
      }`}
    >
      {role === "assistant" || role === "system" ? (
        <Image
          className={styles.role}
          alt={role}
          width={32}
          height={32}
          objectFit="cover"
          src="img/jf.svg"
        />
      ) : null}
      {children}
    </div>
  );
}
