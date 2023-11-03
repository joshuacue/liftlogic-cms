import { CollectionConfig } from "payload/types";

export const RadioOptions: CollectionConfig = {
  slug: 'radio-options',
  fields: [
    {
      name: 'label',
      type: 'text',
    },
    {
      name: 'value',
      type: 'text',
    },
  ],
}