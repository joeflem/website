import { tool, type ToolSet, type InferUITools } from "ai";
import { z } from "zod";

export const tools: ToolSet = {
  summarise_me: tool({
    description: "Summarises Joe’s background for a visitor",
    outputSchema: z.object({
      summary: z.string(),
    }),
    execute: async () => ({
      summary:
        "Joe is a senior engineering leader who’s currently Head of Engineering at Huler. He’s built modern frontend platforms, led cross-functional teams, and obsesses over clean UX, quality, and speed. Also a bit obsessed with his RS3.",
    }),
  }),

  explain_company: tool({
    description: "Explains a company Joe has worked for",
    inputSchema: z.object({
      companyName: z.string(),
    }),
    outputSchema: z.object({
      summary: z.string(),
    }),
    execute: async ({ companyName }) => {
      const companies: Record<string, string> = {
        huler:
          "Huler is a modern SaaS platform helping businesses build personalised digital experiences for employees.",
        // add more if needed
      };
      return {
        summary:
          companies[companyName.toLowerCase()] ??
          "Sorry, I don’t have info on that company.",
      };
    },
  }),

  define_term: tool({
    description: "Explains a tech or business term Joe uses often",
    inputSchema: z.object({
      term: z.string(),
    }),
    outputSchema: z.object({
      definition: z.string(),
    }),
    execute: async ({ term }) => {
      const definitions: Record<string, string> = {
        DX: "DX stands for Developer Experience. It’s about making tools, processes, and systems smooth and enjoyable for devs to use.",
        monorepo:
          "A monorepo is a single git repository holding multiple projects or packages, typically sharing tooling and dependencies.",
      };
      return {
        definition:
          definitions[term] ?? "That term isn’t in Joe’s glossary yet.",
      };
    },
  }),

  send_message: tool({
    description: "Sends a message from a visitor to Joe",
    inputSchema: z.object({
      name: z.string(),
      message: z.string(),
    }),
    outputSchema: z.object({
      status: z.string(),
    }),
    execute: async ({ name, message }) => {
      // Replace with real logic (e.g. email, webhook, DB)
      console.log(`📩 Message from ${name}: ${message}`);
      return { status: "Message sent!" };
    },
  }),
};

export type AgentTools = InferUITools<typeof tools>;
