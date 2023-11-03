import type { Block } from 'payload/types'
import link from '../../../fields/link'

export const ListSectionBlock: Block = {
  slug: 'a-listSectionBlock',
  labels: {
    singular: 'A - List Section Block',
    plural: 'A - List Section Blocks',
  },
  fields: [
    {
      name: 'backgroundColor',
      type: 'text',
    },
    {
      name: 'listItems',
      label: 'List Items',
      type: 'textarea',
    },
    //section image background image
    {
      name: 'sectionFooter',
      label: 'Footer Message',
      type: 'textarea',
    },
    {
      name: 'enableLink',
      type: 'checkbox',
    },
    link({
      overrides: {
        admin: {
          condition: (_, { enableLink }) => Boolean(enableLink),
        },
      },
    }),
  ],
}