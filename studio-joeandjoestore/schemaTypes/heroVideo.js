export default {
    name: "heroVideo",
    title: "Hero Video",
    type: "document",
    fields: [
      {
        name: "video",
        title: "Video File",
        type: "file",
        options: {
          accept: "video/*",
        },
        validation: (Rule) => Rule.required().error("A video file is required"),
      },
    ],
    preview: {
      select: {
        title: "video.asset.originalFilename",
        media: "video",
      },
      prepare(selection) {
        return {
          title: selection.title || "No Video File Uploaded",
          media: selection.media,
        };
      },
    },
  };
  