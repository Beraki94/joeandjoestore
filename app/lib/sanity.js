import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "95bcdzf7", // Your Sanity project ID
  dataset: "production", // Dataset name
  apiVersion: "2024-01-01", // API version
  useCdn: process.env.NODE_ENV === "production", // Use CDN only in production for faster response
});
