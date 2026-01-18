"use client";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import type { UIMessage } from "ai";
import { useEffect, useState } from "react";
import styles from "./agent.module.scss";
import ChatInput from "./ChatInput";
import Message from "./Message";

const STORAGE_KEY = "ai-agent.messages.v1";

export default function Agent() {
  const [hasLoadedMessages, setHasLoadedMessages] = useState(false);
  const { messages, sendMessage, setMessages } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/agent",
    }),
  });

  useEffect(() => {
    try {
      const storedMessages = window.localStorage.getItem(STORAGE_KEY);
      if (!storedMessages) {
        return;
      }

      const parsed = JSON.parse(storedMessages) as UIMessage[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        setMessages(parsed);
      }
    } catch (error) {
      console.warn("Failed to load stored chat messages.", error);
    } finally {
      setHasLoadedMessages(true);
    }
  }, [setMessages]);

  useEffect(() => {
    if (!hasLoadedMessages) return;

    if (messages.length === 0) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.warn("Failed to persist chat messages.", error);
    }
  }, [hasLoadedMessages, messages]);

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

      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}
