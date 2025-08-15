import {defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}], // WYSIWYG
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'experienceIntro',
      title: 'Experience Section Intro',
      type: 'array',
      of: [{type: 'block'}], // WYSIWYG
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'agentIntro',
      title: 'Agent Section Intro',
      type: 'array',
      of: [{type: 'block'}], // WYSIWYG
      validation: (Rule) => Rule.required(),
    },
  ],
})
