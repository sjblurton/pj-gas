import {defineType} from 'sanity'

export default defineType({
  name: 'about',
  type: 'document',
  title: 'About Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: 'A longer description of the company',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Banner Image',
      description: 'The image that appears on the banner make it landscape',
      validation: (Rule) => Rule.required(),
    },
  ],
})
