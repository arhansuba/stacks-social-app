import React, { useState, useEffect } from 'react';
import { StacksTestnet } from '@stacks/network';
import { callReadOnlyFunction, cvToValue } from '@stacks/transactions';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const result = await callReadOnlyFunction({
        contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
        contractName: 'social-app',
        functionName: 'get-posts',
        network: new StacksTestnet(),
      });
      setPosts(cvToValue(result).value);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div>
      <h2>Recent Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.content}</p>
          <small>Posted by: {post.author}</small>
        </div>
      ))}
    </div>
  );
}

export default PostList;