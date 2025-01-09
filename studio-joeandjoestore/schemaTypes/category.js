export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Category Title',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 100,
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
  