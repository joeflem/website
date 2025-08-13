import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { client } from "@/lib/sanity/client";
import "dotenv/config";
import { AgentContextType } from "@/lib/sanity/types";
import z from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/Email/default";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const AGENT_CONTEXT_QUERY = `*[
  _type == "agentContext"
]|order(publishedAt desc)[0]{_id, description}`;
  const agentContext = await client.fetch<AgentContextType>(
    AGENT_CONTEXT_QUERY
  );
  const result = streamText({
    model: "openai/gpt-5-mini",
    system: agentContext.description.toString(),
    messages: convertToModelMessages(messages),
    tools: {
      askForMessage: {
        description:
          "The user can ask to speak to me, send me a message or an email, ask the user what they want to send to me",
        inputSchema: z.object({
          message: z
            .string()
            .describe("The message / email the user wants to send to me"),
        }),
      },
      sendEnquiry: {
        description:
          "send the message the user has provided via email to my email address",
        inputSchema: z.object({ message: z.string() }),
        execute: async ({ message }: { message: string }) => {
          const resend = new Resend(process.env.RESEND_API_KEY);
          await resend.emails.send({
            from: "noreply@joefleming.co.uk",
            to: "joe@joefleming.co.uk",
            subject: "New Enquiry from Website",
            react: EmailTemplate({ message }),
          });
          return "Message sent successfully!";
        },
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
