import type { CollectionConfig } from 'payload/types'
import link from '../fields/link'

export const Header: CollectionConfig = {
  slug: 'header',
  labels: {
    singular: 'Header Nav Links',
    plural: 'Header Nav Links',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'site',
      relationTo: 'sites',
      type: 'relationship',
    },
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
