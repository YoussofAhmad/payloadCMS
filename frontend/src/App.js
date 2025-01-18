import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import PostDetailPage from './pages/PostDetailPage';

const API_URL = 'http://localhost:3000'; // Your backend URL

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/posts`);
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data.docs); // Payload returns data in a `docs` array
      } catch (error) {
        setError(error.message);
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (postId) => {
    setCurrentPostId(postId);
    window.history.pushState({}, '', `/post/${postId}`);
  };

  const handleBackClick = () => {
    setCurrentPostId(null);
    window.history.pushState({}, '', '/');
  };

  return (
    <Layout>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      ) : currentPostId ? (
        <PostDetailPage postId={currentPostId} onBackClick={handleBackClick} />
      ) : (
        <Home posts={posts} onPostClick={handlePostClick} />
      )}
    </Layout>
  );
};

export default App;