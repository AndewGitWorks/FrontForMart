import React from 'react'
import { Link, useLoaderData } from 'react-router'
import defaultPhoto from '../assets/defaultPhoto.jpg'
const Post = () => {
    const postData = useLoaderData();
  
    if (!Array.isArray(postData)) return null;
  
    return (
        <div>
        {postData.map(post => (
          <Link
            key={post.id}
            to={`/posts/${post.id}`}
          >
            
              <h4>{post.title}</h4>
              <p>{post.description}</p>
            
          </Link>
        ))}
      </div>
    );
  };

export default Post

export const postLoader = async () => {
    const res = await fetch("http://localhost:5000/posts");
  
    if (!res.ok) {
      throw new Error("Ошибка загрузки постов");
    }
  
    return res.json();
  };