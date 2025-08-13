"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import styles from "./agent.module.scss";
import ChatInput from "./ChatInput";
import Message from "./Message";

export default function Agent() {
  const [input, setInput] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const { messages, sendMessage, addToolResult } = useChat({
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
              switch (part.type) {
                // render text parts as simple text:
                case "text":
                  return <p key={`${message.id}-text`}>{part.text}</p>;

                case "tool-sendEnquiry": {
                  const callId = part.toolCallId;

                  switch (part.state) {
                    case "input-streaming":
                      return <p key={callId}>Preparing message...</p>;
                    case "input-available":
                      return <p key={callId}>Sending message...</p>;
                    case "output-available":
                      return <p key={callId}>Message: {String(part.output)}</p>;
                    case "output-error":
                      return (
                        <p key={callId}>
                          Error sending message: {part.errorText}
                        </p>
                      );
                  }
                  break;
                }
              }
            })}
          </Message>
        ))}
      </div>

      <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
}
