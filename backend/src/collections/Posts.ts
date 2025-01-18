    import { CollectionConfig } from 'payload/types';

    const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true, // Public read access
    },
    fields: [
        {
        name: 'title',
        type: 'text',
        required: true,
        },
        {
        name: 'body',
        type: 'richText',
        required: true,
        },
        {
        name: 'coverImage',
        type: 'upload',
        relationTo: 'media',
        required: true,
        },
        {
        name: 'publishDate',
        type: 'date',
        required: true,
        },
        {
        name: 'author',
        type: 'relationship',
        relationTo: 'authors',
        required: true,
        },
    ],
    };

    export default Posts;