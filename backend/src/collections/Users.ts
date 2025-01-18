import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true, // Enable authentication
  admin: {
    useAsTitle: 'email', // Use the email field as the title in the admin panel
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
};

export default Users;