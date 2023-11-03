import type { Block } from 'payload/types'
import link from '../../../fields/link'

export const SectionBlock: Block = {
  slug: 'a-sectionBlock',
  labels: {
    singular: 'A - Section Block',
    plural: 'A - Section Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'backgroundMedia',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'enableLink1',
      type: 'checkbox',
    },
    link({
      overrides: {
        admin: {
          condition: (_, { enableLink1 }) => Boolean(enableLink1),
        },
      },
    }),
    {
      name: 'enableLink2',
      type: 'checkbox',
    },
    link({
      overrides: {
        admin: {
          condition: (_, { enableLink2 }) => Boolean(enableLink2),
        },
      },
    }),
  ],
}
