export default {
  name: "heroVideo",
  title: "Hero Video",
  type: "document",
  fields: [
    {
      name: "video",
      title: "Video File",
      type: "file", // Ensure this is a 'file' type
      options: {
        accept: "video/*", // Allow only video files
      },
      validation: (Rule) => Rule.required().error("A video file is required"),
    },
  ],
  preview: {
    select: {
      title: "video.asset.originalFilename", // Show the filename in preview
      media: "video", // Use the video file itself for the preview
    },
  },
};
