import type { Block } from 'payload/types'

export const ConsultationSectionBlock: Block = {
  slug: 'a-consultationSectionBlock',
  labels: {
    singular: 'A - Consultation Section Block',
    plural: 'A - Consultation Section Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'backgroundColor',
      label: 'Background Color (optional)',
      type: 'text',
    },
    {
      name: 'formLink',
      label: 'Form Link (optional)',
      type: 'text',
    },
    {
      name: 'formLinkLabel',
      label: 'Form Link Label (optional)',
      type: 'text',
    },
  ]
}