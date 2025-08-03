import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "w1oom6ii",
  apiVersion: "2025-08-03",
  dataset: "production",
  useCdn: true,
});
