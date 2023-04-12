import {defineType} from 'sanity'

export default defineType({
  name: 'contact',
  type: 'document',
  title: 'Contact Page',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Banner Image',
      description: 'The image that appears on the banner make it landscape',
      validation: (Rule) => Rule.required(),
    },
  ],
})
