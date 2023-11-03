import type { Block } from 'payload/types'
import richText from '../../../fields/richText'

export const FormBlock: Block = {
  slug: 'a-formBlock',
  labels: {
    singular: 'A - Form Block',
    plural: 'A - Form Blocks',
  },
  // graphQL: {
  //   singularName: 'AFormBlock',
  // },
  fields: [
    {
      name: 'sectionImage',
      label: 'Section Background Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'sectionHeader',
      label: 'Section Header - Big Yellow Title on the Left Side',
      type: 'text',
    },
    {
      name: 'sectionSubheader',
      label: 'Section Subheader(White text with Red background on the Left Side below Section Header)',
      type: 'text',
    },
    {
      name: 'noteTitle',
      label: 'Note Title (Title of the Bottom Note on the Left Side)',
      type: 'text',
    },
    {
      name: 'noteContent',
      label: 'Note (Bottom Note on the Left Side)',
      type: 'text',
    },
    richText({
      name: 'sectionDescription',
      label: 'Section Description(Text below the Section Subheader)',
    }),
    {
      name: 'formHeader',
      label: 'Title of the Form',
      type: 'text',
    },
    {
      name: 'formSubheader',
      label: 'Sub-title of the form',
      type: 'text',
    },
    {
      name: 'form',
      type: 'relationship',
      label: 'Form Component (Form Created in the Forms Collection)',
      relationTo: 'forms',
      required: true,
    },
  ],
}