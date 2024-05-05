import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const SinglePost = (props) => {
  const { data: posts } = props;
  const { id } = useParams();
  const postId = parseInt(id);
  const post = posts.find(item => item.id === postId);

  console.log(post);

  return (
    <div className="single-post-page">
      <h1>Single page</h1>
      <Link to="/blog">Назад к блогу</Link>

      {
        post 
          ? (
            <div className="post">
              <h3 className="post__title">{post.title}</h3>
              <p className="post__body">{post.body}</p>
            </div>
          )
          : <h3>Пост не найден</h3> 
      }
    </div>
  );
};
