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
      name: 'primaryLogo',
      type: 'image',
      title: 'Primary Logo',
      options: {
        hotspot: true,
      },
      description: 'Main logo for the brand, used prominently.',
    },
    {
      name: 'secondaryLogo',
      type: 'image',
      title: 'Secondary Logo',
      options: {
        hotspot: true,
      },
      description: 'Alternative logo for the brand, used in other contexts.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Optional description or history of the brand.',
    },
  ],
};
