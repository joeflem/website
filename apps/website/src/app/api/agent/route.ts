// /app/api/ai/route.ts

import { openai } from "@ai-sdk/openai";
import {
  createUIMessageStreamResponse,
  createUIMessageStream,
  streamText,
  convertToModelMessages,
  stepCountIs,
} from "ai";

import { tools } from "@/lib/agent-tools";

export async function POST(req: Request): Promise<Response> {
  const { messages } = await req.json();

  const stream = createUIMessageStream({
    async execute({ writer }) {
      const result = await streamText({
        model: openai("gpt-4o"),
        messages: convertToModelMessages(messages),
        tools,
        // Optional: stop after a few steps if needed
        stopWhen: stepCountIs(5),
      });

      writer.merge(result.toUIMessageStream({ originalMessages: messages }));
    },
  });

  return createUIMessageStreamResponse({ stream });
}
