"use client";
import { Send } from "lucide-react";
import styles from "./ChatInput.module.scss";
import { ChatRequestOptions, UIDataTypes, UIMessage, UITools } from "ai";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
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

export default function ChatInput({
  input,
  setInput,
  sendMessage,
}: ChatInputProps) {
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
          setInput("");
        }}
      >
        <Send size={20} />
      </button>
    </div>
  );
}
