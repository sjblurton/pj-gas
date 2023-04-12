import {defineType} from 'sanity'

export default defineType({
  name: 'company',
  type: 'document',
  title: 'Company',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: 'A short description of the company',
      validation: (Rule) => Rule.required().min(50).max(200),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) =>
        Rule.required().custom((email) => {
          if (!email) return true
          if (typeof email !== 'string') return 'Please enter a valid email address'
          if (!email.includes('@')) {
            return 'Please enter a valid email address'
          }
          return true
        }),
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
      description: '11 digits 07743645540',
      validation: (Rule) => Rule.required().regex(/^\d{11}$/, 'Please enter a valid phone number'),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'maps',
      type: 'string',
      title: 'Google Maps Link',
      validation: (Rule) =>
        Rule.required().custom((maps) => {
          if (!maps) return true
          if (typeof maps !== 'string') return 'Please enter a valid Google Maps link'
          if (!maps.includes('https://www.google.com/maps')) {
            return 'Please enter a valid Google Maps link'
          }
          return true
        }),
    },
  ],
})
