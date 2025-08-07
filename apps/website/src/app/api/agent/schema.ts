import { z } from "zod";

export const explainCompanySchema = z.object({
  name: z.string().describe("Name of the company"),
});

export const explainTermSchema = z.object({
  term: z.string().describe("The technical term"),
});

export const sendMessageSchema = z.object({
  name: z.string(),
  message: z.string(),
});
