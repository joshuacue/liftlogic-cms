import type { Field } from 'payload/types'

export const faq: Field = {
  name: 'faq',
  type: 'array',
  label: 'FAQ',
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
    },
  ],
}
