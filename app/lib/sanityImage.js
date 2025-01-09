import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

// Generate image URLs
export function urlFor(source) {
  return builder.image(source);
}

// Generate video URLs
export function getVideoUrl(source) {
  const videoId = source?.asset?._ref?.split("-")[1]; // Extract the video ID from the reference
  return `https://cdn.sanity.io/files/${client.config.projectId}/${client.config.dataset}/${videoId}.mp4`; // Construct the video URL
}
