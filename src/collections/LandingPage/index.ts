import type { CollectionConfig } from 'payload/types'
import { CallToAction as ACallToAction } from '../../blocks/ThemeA/CallToAction'
// import { Content } from '../../blocks/ThemeA/Content'
import { FormBlock as AFormBlock } from '../../blocks/ThemeA/Form'
import { Sites } from '../Sites'
import { HeaderBlock as AHeaderBlock } from '../../blocks/ThemeA/Header'
import { FooterBlock as AFooterBlock } from '../../blocks/ThemeA/Footer'
import { ListSectionBlock as AListSectionBlock } from '../../blocks/ThemeA/ListSection'
import { SectionWithImageBlock as ASectionWithImageBlock } from '../../blocks/ThemeA/SectionWithImage'
import { ConsultationSectionBlock as AConsultationSectionBlock } from '../../blocks/ThemeA/ConsultationSection'
import { Archive } from '../../blocks/ThemeA/Archive'
import { MediaBlock } from '../../blocks/Media'

export const LandingPage: CollectionConfig = {
  slug: 'landingPage',
  admin: {
    group: 'Content',
    useAsTitle: 'site',
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
      unique: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [
        ACallToAction, 
        // Content, 
        AFormBlock, 
        ASectionWithImageBlock,
        AConsultationSectionBlock,
        AListSectionBlock,
        AHeaderBlock,
        AFooterBlock,
        Archive, 
        MediaBlock, 
      ],
    },
  ],
}
