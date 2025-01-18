import { buildConfig } from 'payload/config';
import path from 'path';
import Posts from './collections/Posts';
import Authors from './collections/Authors';
import Media from './collections/Media';
import Users from './collections/Users'; 

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: 'users', // This refers to the automatically created Users collection
  },
  collections: [
    Posts,
    Authors,
    Media,
    Users,
],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});