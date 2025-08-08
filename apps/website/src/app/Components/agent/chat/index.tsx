"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import styles from "./chat.module.scss";
import ChatInput from "./ChatInput";
import Message from "./Message";

export default function Page() {
  const [input, setInput] = useState("");

  const { messages, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/agent",
    }),
  });

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div key={index}>
            {message.parts.map((part) => {
              if (part.type === "text") {
                return <Message key={`${message.id}-text`} text={part.text} />;
              }
            })}
          </div>
        ))}
      </div>

      <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
}
