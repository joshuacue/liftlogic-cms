import type { Block } from 'payload/types'
import link from '../../../fields/link'

export const SectionWithImageBlock: Block = {
  slug: 'a-sectionWithImageBlock',
  labels: {
    singular: 'A - Section With Imaage Block',
    plural: 'A - Section With Image Blocks',
  },
  fields: [
    {
      type: 'row',
      fields: [
        // backgroundColor({ overrides: { name: 'mediaBlockBackgroundColor' } }),
        {
          name: 'direction',
          type: 'select',
          defaultValue: 'row',
          options: [
            {
              label: 'row',
              value: 'row',
            }, 
            {
              label: 'column',
              value: 'column',
            },
            {
              label: 'row-reversed',
              value: 'row-reversed',
            },
            {
              label: 'column-reversed',
              value: 'column-reversed',
            },
          ],
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
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
