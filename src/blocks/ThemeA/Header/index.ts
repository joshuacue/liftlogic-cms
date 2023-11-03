

// This code defines a HeaderBlock object that contains fields for a title, phone number, phone number label, company logo, and link. The link field has an override condition that is dependent on the enableLink boolean.

import type { Block } from 'payload/types';
import link from '../../../fields/link';

export const HeaderBlock: Block = {
  slug: 'a-headerBlock',
  labels: {
    singular: 'A - Header Block',
    plural: 'A - Header Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'phoneNumber',
      type: 'text',
    },
    {
      name: 'phoneNumberLabel',
      type: 'text',
    },
    {
      name: 'companylogo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};