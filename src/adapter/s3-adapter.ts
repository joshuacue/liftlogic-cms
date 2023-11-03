import '@aws-sdk/client-s3';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

console.log({
  config: {
    // endpoint: process.env.AWS_S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
    },
    region: process.env.AWS_REGION,
  },
})

export const adapter = s3Adapter({
  config: {
    // endpoint: process.env.AWS_S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
    },
    region: process.env.AWS_REGION,
  },
  bucket: process.env.AWS_S3_BUCKET_NAME,
});

export default adapter