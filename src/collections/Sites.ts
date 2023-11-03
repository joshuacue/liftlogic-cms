import type { CollectionConfig } from 'payload/types'

import { faq } from '../fields/faq'
import { Media } from './Media'

export const socialMediaLinkOptions = [
  'twitter',
  'instagram',
  'facebook',
  'youtube',
  'tiktok',
  'discord',
  'pinterest',
]

export const Sites: CollectionConfig = {
  slug: 'sites',
  admin: {
    useAsTitle: 'title',
    group: 'Admin',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, unique: true },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 260,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: Media.slug,
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: 'social',
      type: 'array',
      fields: [
        { name: 'profileLink', type: 'text', required: true },
        {
          name: 'site',
          type: 'select',
          required: true,
          options: socialMediaLinkOptions,
        },
      ],
    },
    {
      name: 'faqs',
      type: 'array',
      fields: [{ name: 'name', type: 'text' }, faq],
    },
  ],
}
