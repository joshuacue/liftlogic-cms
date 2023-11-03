import type { Block } from 'payload/types'
import richText from '../../../fields/richText'

export const APrivacyPolicyBlock: Block = {
  slug: 'a-privacyPolicy',
  labels: {
    singular: 'A - Privacy Policy  Block',
    plural: 'A - Privacy Policy  Blocks',
  },
  // graphQL: {
  //   singularName: 'AFormBlock',
  // },
  fields: [
    richText({
      name: 'privacyPolicy',
      label: 'Privacy Policy Content',
    }),
  ],
}