import type { CollectionConfig } from 'payload/types'

import { Sites } from './Sites'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'site',
      type: 'relationship',
      relationTo: Sites.slug,
      hasMany: false,
      index: true,
    },
    {
      name: 'title',
      type: 'text',
    },
  ],
}

export default Categories
