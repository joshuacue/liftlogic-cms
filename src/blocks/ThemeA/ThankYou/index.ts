import type { Block } from 'payload/types';

export const AThankYouBlock: Block = {
  slug: 'a-thankYouBlock',
  labels: {
    singular: 'A - Thank You Block',
    plural: 'A - Thank You Blocks',
  },
  fields: [
    {
      name: 'messages',
      label: 'Loader Messages', // renamed
      type: 'array',
      minRows: 1, // Assuming at least one message is required
      fields: [
        {
          name: 'action',
          label: 'Action Message',
          type: 'text',
          required: true,
        },
        {
          name: 'status',
          label: 'Status Message',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'header',
      label: 'Header', // renamed
      type: 'text',
      required: true,
      defaultValue: 'Great News!',
    },
    {
      name: 'subMessage',
      label: 'Sub Message', // renamed
      type: 'text',
      required: true,
      defaultValue: 'You may qualify for significant compensation.',
    },
    {
      name: 'congratsMessageList',
      label: 'Congrats Messages', // renamed
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'message',
          label: 'Message',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'initialTime',
      label: 'Initial Time', // renamed
      type: 'number',
      required: true,
      defaultValue: 5 * 60, // 5 minutes
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number', // renamed
      type: 'text',
      required: true,
      defaultValue: '1-800-000-0000',
    },
    {
      name: 'callButtonText',
      label: 'Call Button Text', // renamed
      type: 'text',
      required: true,
      defaultValue: 'Call',
    },
    {
      name: 'obligationMessage',
      label: 'Obligation Message', // renamed
      type: 'text',
      required: true,
      defaultValue: '100% No Obligation Case Review',
    },
  ],
};
