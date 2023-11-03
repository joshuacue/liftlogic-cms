import seo from '@payloadcms/plugin-seo';
import { Sites } from '../collections/Sites';
import { Media } from '../collections/Media';

export const SiteSEO = seo({
  collections: [Sites.slug],
  uploadsCollection: Media.slug,
  generateTitle: ({ doc }: { doc: any }) => {
    const title = doc['title']?.value;
    if (!title) return;
    return title;
  },
  generateDescription: ({ doc }: { doc: any }) => {
    return doc['description'].value || null;
  },
  generateImage: ({ doc }: { doc: any }) => doc['logo'].value,
});
