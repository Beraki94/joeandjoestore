export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
        validation: (Rule) => Rule.required().max(100),
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
        name: 'price',
        type: 'number',
        title: 'Price',
        validation: (Rule) => Rule.required().positive(),
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true, // Enables focal point selection
            },
          },
        ],
        validation: (Rule) =>
          Rule.max(5).error('You can only upload up to 5 images for a product.'),
      },
      {
        name: 'brand',
        type: 'array',
        title: 'Brand',
        of: [{ type: 'reference', to: [{ type: 'brand' }] }],
        validation: (Rule) =>
          Rule.min(1).error('Each product must belong to at least one category.'),
      },
      {
        name: 'categories',
        type: 'array',
        title: 'Categories',
        of: [{ type: 'reference', to: [{ type: 'category' }] }],
        validation: (Rule) =>
          Rule.min(1).error('Each product must belong to at least one category.'),
      },
    ],
  };
  