"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import styles from "./agent.module.scss";
import ChatInput from "./ChatInput";
import Message from "./Message";

export default function Agent() {
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
          <Message key={index} role={message.role}>
            {message.parts.map((part) => {
              if (part.type === "text") {
                return <p key={`${message.id}-text`}>{part.text}</p>;
              }
            })}
          </Message>
        ))}
      </div>

      <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
}
