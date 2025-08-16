"use client";
import { Send } from "lucide-react";
import { track } from "@vercel/analytics";
import styles from "./ChatInput.module.scss";
import { ChatRequestOptions, UIDataTypes, UIMessage, UITools } from "ai";
import { useState } from "react";

interface ChatInputProps {
  sendMessage: (
    message?:
      | (Omit<UIMessage<unknown, UIDataTypes, UITools>, "id" | "role"> & {
          id?: string;
          role?: "system" | "user" | "assistant";
        })
      | { files: FileList | any[]; metadata?: unknown; messageId?: string }
      | undefined,
    options?: ChatRequestOptions | undefined
  ) => Promise<any>;
}

export default function ChatInput({ sendMessage }: ChatInputProps) {
  const [input, setInput] = useState("");
  return (
    <div className={styles.chatFooter}>
      <input
        className={styles.chatInput}
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={async (event) => {
          if (event.key === "Enter") {
            sendMessage({
              parts: [{ type: "text", text: input }],
            });
            track("AI Chat Message", {
              content: input,
            });
            setInput("");
          }
        }}
        placeholder="Ask me... anything"
      />
      <button
        className={styles.sendButton}
        onClick={async () => {
          if (input.trim() === "") return;
          await sendMessage({
            parts: [{ type: "text", text: input }],
          });
          track("AI Chat Message", {
            content: input,
          });
          setInput("");
        }}
      >
        <Send size={20} />
      </button>
    </div>
  );
}
