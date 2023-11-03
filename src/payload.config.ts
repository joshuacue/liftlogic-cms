import FormBuilder from '@payloadcms/plugin-form-builder'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import redirects from '@payloadcms/plugin-redirects'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import path from 'path'
import { buildConfig } from 'payload/config';
import Categories from './collections/Categories'
import { LandingPage } from './collections/LandingPage'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Sites } from './collections/Sites'
import Users from './collections/Users'
import { Footer } from './collections/Footer'
import { Header } from './collections/Header'
import { SiteSEO } from './seo/sites.seo'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { adapter} from './adapter/s3-adapter'
import { seed } from './seed'
const generateTitle: GenerateTitle = () => {
  return 'My Website'
}

const mockPath = path.resolve(__dirname, './payload/mock/index');
const s3AdapterPath = path.resolve(__dirname, './payload/adapter/s3-adapter');
const requestLoggerMiddleware = (req, res, next) => {
  req.payload.logger.info(`${req.method} ${req.url} Received`);
  next();
};

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      // beforeDashboard: [BeforeDashboard],
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        // alias: {
        //   ...config.resolve?.alias,
        //   express: mockModulePath,
        // },
        // extensions: ['.mjs', '.json', '.ts'],
        // symlinks: false,
        // cacheWithContext: false,
        alias: {
          ...config?.resolve?.alias,
          // express: mockModulePath,
          sharp: path.resolve(__dirname, '__mockfiles__', 'sharp.mock.js'),
          [s3AdapterPath]: mockPath,
        },
      },
    }),
  },
  express: {
    preMiddleware: [requestLoggerMiddleware],
  },
  onInit: async (payload) => {
    if (process.env.PAYLOAD_SEED) {
      await seed(payload);
    }
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Sites, LandingPage, Users, Categories, Pages, Posts, Media],
  // globals: [Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  ...(process.env.PAYLOAD_PUBLIC_SITE_URL
    ? {
        //allow all by using *
        cors: "*",//[process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
        csrf: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
      }
    : {}),
  plugins: [
    SiteSEO,
    FormBuilder({
      fields: {
        payment: false
      }
    }),
    nestedDocs({
      collections: ['pages', 'posts', 'categories'],
    }),
    redirects({
      collections: ['pages', 'posts'],
    }),
    seo({
      collections: ['pages', 'posts'],
      generateTitle,
      uploadsCollection: 'media',
    }),
    cloudStorage({
      collections: {
        [Media.slug]: {
          adapter,
          disableLocalStorage: true,
          prefix: 'liftlogic',
        },
      },
    }),
    
    // payloadCloud(),
    // adapter(),
  ],
})
