import {defineType} from 'sanity'

export default defineType({
  name: 'home',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'banner',
      type: 'string',
      title: 'Banner Text',
      description: 'The text that appears on the banner of the home page',
      validation: (Rule) => Rule.required().min(10).max(50),
    },
    {
      name: 'bannerImage',
      type: 'image',
      title: 'Banner Image',
      description: 'The image that appears on the banner make it in landscape',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'keyPoints',
      type: 'array',
      title: 'Key Points',
      description: 'The key points that appear on the home page',
      of: [{type: 'reference', to: {type: 'keyPoints'}}],
      validation: (Rule) => Rule.required().min(2),
    },
  ],
})
