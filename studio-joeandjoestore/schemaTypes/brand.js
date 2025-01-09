export default {
    name: 'brand',
    type: 'document',
    title: 'Brand',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Brand Name',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name',
          maxLength: 100,
        },
      },
      {
        name: 'logo',
        type: 'image',
        title: 'Brand Logo',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Optional description or history of the brand.',
      },
    ],
  };
  