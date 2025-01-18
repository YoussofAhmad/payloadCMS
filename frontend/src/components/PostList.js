import React from 'react';

const PostList = ({ posts, onPostClick }) => {
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    {post.coverImage && (
                        <img
                            src={`http://localhost:3000/media/${post.coverImage.filename}`}
                            alt={post.coverImage.alt || post.title}
                            className="w-full h-48 object-cover"
                        />
                    )}
                    <div className="p-6">
                        <button
                            onClick={() => onPostClick(post.id)}
                            className="text-left w-full"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 mb-2">
                                {post.title}
                            </h2>
                        </button>
                        <div className="flex items-center space-x-4 mb-4">
                            {post.author?.profilePicture && (
                                <img
                                    src={post.author.profilePicture.url}
                                    alt={post.author.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            )}
                            <div>
                                <p className="text-gray-700 font-medium">{post.author?.name}</p>
                                <p className="text-gray-500 text-sm">
                                    {formatDate(post.publishDate)}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default PostList;