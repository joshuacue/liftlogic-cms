import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/ThemeA/Archive'
import { CallToAction as ACallToAction } from '../../blocks/ThemeA/CallToAction'
import { Content as AContent } from '../../blocks/ThemeA/Content'
import { FormBlock as AFormBlock } from '../../blocks/ThemeA/Form'
import { MediaBlock } from '../../blocks/Media'
import { slugField } from '../../fields/slug'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { formatAppURL, revalidatePage } from '../../hooks/revalidatePage'
import { Sites } from '../Sites'
import { AShortFormBlock } from '../../blocks/ThemeA/ShortForm'
import { AThankYouBlock } from '../../blocks/ThemeA/ThankYou'
import { APrivacyPolicyBlock } from '../../blocks/ThemeA/PrivacyPolicy'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppURL({ doc })}`,
  },
  hooks: {
    beforeChange: [populatePublishedDate],
    // afterRead: [populateArchiveBlock],
    afterChange: [revalidatePage],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
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
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [ACallToAction, AContent, AFormBlock, AShortFormBlock, Archive, MediaBlock, AThankYouBlock, APrivacyPolicyBlock],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
