import type { Block } from 'payload/types'

export const AShortFormBlock: Block = {
  slug: 'a-shortformBlock',
  labels: {
    singular: 'A - Short Form Block',
    plural: 'A - Short Form Blocks',
  },
  // graphQL: {
  //   singularName: 'AFormBlock',
  // },
  fields: [
    {
      name: 'attention',
      label: 'Attention Title',
      type: 'text',
    },
    {
      name: 'attentionMessage',
      label: 'Attention Message',
      type: 'text',
    },
    {
      name: 'sectionHeader',
      label: 'Header',
      type: 'text',
    },
    {
      name: 'sectionSubheader',
      label: 'Sub Header',
      type: 'text',
    },
    {
      name: 'form',
      type: 'relationship',
      label: 'Form Component (Form Created in the Forms Collection)',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'callUsMessage',
      label: 'Call Us Message',
      type: 'text'
    },
    {
      name: 'callUsNumber',
      label: 'Call Us Number',
      type: 'text'
    },
    {
      name: 'footerBadges',
      label: 'Form Badges', // renamed
      type: 'array',
      minRows: 1, // Assuming at least one message is required
      fields: [
        {
          name: 'iconUrl',
          label: 'Icon ImageUrl',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          label: 'Text Content',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}