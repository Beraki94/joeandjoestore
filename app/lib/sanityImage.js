import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

// Generate image URLs
export function urlFor(source) {
  return builder.image(source);
}

// Generate video URLs
export function getFileUrl(asset) {
  if (!asset || !asset._ref) {
    return ''; // Return empty if the asset is not valid
  }

  // Construct the video URL for video files using the asset reference
  return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${asset._ref}`;
}
