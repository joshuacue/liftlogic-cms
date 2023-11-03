

/**
 * Exports a CollectionConfig object for the 'media' collection. It sets up access rules, admin settings, upload settings, and fields for the collection. The access rules are set to allow all operations, but a TODO comment suggests that access rules for sibling published status should be added. The admin settings specify that the 'alt' field should be used as the title. The upload settings specify that only images are allowed and two image sizes are defined. Finally, two fields are defined for the collection: 'alt' and 'source'.
 * 
 * @param {CollectionConfig} Media - The CollectionConfig object for the 'media' collection.
 * @returns {CollectionConfig}
 */ 


// This code exports a CollectionConfig object for the 'media' collection. It sets up access rules, admin settings, upload settings, and fields for the collection. The access rules are set to allow all operations, but a TODO comment suggests that access rules for sibling published status should be added. The admin settings specify that the 'alt' field should be used as the title. The upload settings specify that only images are allowed and two image sizes are defined. Finally, two fields are defined for the collection: 'alt' and 'source'.
import { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true, // TODO: add access rules for sibling published status
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'alt',
  },
  upload: {
    mimeTypes: ['image/*'],
    imageSizes: [
      { name: 'thumbnail', width: 440, height: 344, position: 'center' },
      { name: 'feature', width: 938, height: 558, position: 'center' },
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
    {
      name: 'source',
      label: 'Source',
      type: 'text',
    },
  ],
};


export default Media;