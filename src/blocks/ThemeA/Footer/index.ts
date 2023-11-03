import type { Block } from 'payload/types'
import link from '../../../fields/link'

export const FooterBlock: Block = {
  slug: 'a-footerBlock',
  labels: {
    singular: 'A - Footer Block',
    plural: 'A - Footer Blocks',
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      minRows: 1,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
