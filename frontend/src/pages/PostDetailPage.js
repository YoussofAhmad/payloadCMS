import React, { useEffect, useState } from 'react';

// Helper function to render rich text content
const RichText = ({ content }) => {
  if (!content) return null;
  
  return content.map((node, i) => {
    if (node.type === 'paragraph') {
      return <p key={i} className="mb-4">{node.children.map(child => child.text).join('')}</p>;
    }
    if (node.type === 'heading') {
      const HeadingTag = `h${node.level}`;
      return <HeadingTag key={i} className="font-bold text-2xl mb-4">{node.children.map(child => child.text).join('')}</HeadingTag>;
    }
    // Add more conditions for other types of content (lists, blockquotes, etc.)
    return null;
  });
};

const PostDetailPage = ({ postId, onBackClick }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/posts/${postId}`);
        if (!response.ok) throw new Error('Post not found');
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );

  if (error) return (
    <div className="bg-red-50 p-4 rounded-lg">
      <p className="text-red-700">{error}</p>
    </div>
  );

  if (!post) return null;

  return (
    <article className="max-w-3xl mx-auto">
      <button 
        onClick={onBackClick}
        className="mb-6 text-gray-600 hover:text-gray-900 flex items-center"
      >
        ← Back to Posts
      </button>
      {post.coverImage && (
        <img
          src={`http://localhost:3000/media/${post.coverImage.filename}`}
          alt={post.coverImage.alt || post.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
        />
      )}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-200">
        {post.author?.profilePicture && (
          <img
            src={`http://localhost:3000/media/${post.author.profilePicture.filename}`}
            alt={post.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="text-gray-900 font-medium">{post.author?.name}</p>
          <p className="text-gray-500">{formatDate(post.publishDate)}</p>
        </div>
      </div>
      <div className="text-gray-800 leading-relaxed max-w-none">
        <RichText content={post.body} />
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Author</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center space-x-4 mb-4">
            {post.author?.profilePicture && (
              <img
                src={`http://localhost:3000/media/${post.author.profilePicture.filename}`}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{post.author?.name}</h3>
            </div>
          </div>
          <p className="text-gray-700">{post.author?.bio}</p>
        </div>
      </div>
    </article>
  );
};

export default PostDetailPage;