export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'items',
      title: 'Experience Items',
      type: 'array',
      of: [{type: 'experienceItem'}],
    },
  ],
}
