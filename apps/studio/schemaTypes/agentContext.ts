import {defineType} from 'sanity'

export default defineType({
  name: 'agentContext',
  title: 'Agent Context',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
})
