import type { Block } from 'payload/types'

export const CallToAction: Block = {
  slug: 'a-callToActionBlock',
  labels: {
    singular: 'A - Call To Action Block',
    plural: 'A - Call To Action Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'backgroundColor',
      type: 'text',
    },
    {
      name: 'phoneNumber',
      type: 'text',
    },
    {
      name: 'clickToCallLabel',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    }
  ]
}