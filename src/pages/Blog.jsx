import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts-page">
      <h1>Blog</h1>

      <div className="posts">
        <h2 className="posts__title">Post list</h2>
        <ul className="posts__list">
          {posts.map(post => (
            <li key={post.id} className="post">
              <Link to={`/blog/${post.id}`}>
                <h3 className="post__title">{post.title}</h3>
                <p className="post__body">{post.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;