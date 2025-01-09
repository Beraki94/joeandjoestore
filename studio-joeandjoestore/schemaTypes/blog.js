export default {
  name: 'blog',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Enter the blog post title (max 100 characters)',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Unique identifier for the blog post (auto-generated from the title)',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description: 'A brief summary of the blog post for previews (max 200 characters)',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
      description: 'Main content of the blog post',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      description: 'Image representing the blog post',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
          description: 'Describe the image for accessibility and SEO',
          validation: (Rule) => Rule.required().max(150),
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      description: 'Date and time the blog post was published',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      type: 'object',
      title: 'Author',
      fields: [
        {
          name: 'firstName',
          type: 'string',
          title: 'First Name',
          validation: (Rule) => Rule.required().max(50),
        },
        {
          name: 'lastName',
          type: 'string',
          title: 'Last Name',
          validation: (Rule) => Rule.required().max(50),
        },
      ],
      description: 'Author of the blog post',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Tags for the blog post (e.g., "bags", "fashion")',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
};
