import React from 'react';
import PostList from '../components/PostList';

const Home = ({ posts, onPostClick }) => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h1>
      <PostList posts={posts} onPostClick={onPostClick} />
    </div>
  );
};

export default Home;