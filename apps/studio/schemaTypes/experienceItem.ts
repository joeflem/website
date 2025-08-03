import {defineType} from 'sanity'

export default defineType({
  name: 'experienceItem',
  title: 'Experience Item',
  type: 'object',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'from',
      title: 'From',
      type: 'date',
      options: {dateFormat: 'YYYY-MM'},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'to',
      title: 'To',
      type: 'date',
      options: {dateFormat: 'YYYY-MM'},
    },
  ],
})
