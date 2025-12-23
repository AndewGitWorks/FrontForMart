import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import defaultPhoto from '../assets/defaultPhoto.jpg';

const HomePage = () => {
  const posts = useLoaderData();

  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('all');

  // собираем все теги
  const allTags = [
    'all',
    ...new Set(posts.flatMap(post => post.tags || []))
  ];

  // фильтрация
  const filteredPosts = posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase());

    const matchesTag =
      activeTag === 'all' || post.tags?.includes(activeTag);

    return matchesSearch && matchesTag;
  });

  return (
    <>
      {/* 🔍 + 🏷 ВЕРХНИЙ БЛОК */}
  <div className="home-filters">
    <div className="search-bar">
      <input
        type="text"
        placeholder="Поиск рецептов..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    <div className="tags-filter">
      {allTags.map(tag => (
        <button
          key={tag}
          className={activeTag === tag ? 'active' : ''}
          onClick={() => setActiveTag(tag)}
        >
          #{tag}
        </button>
      ))}
    </div>
  </div>

      {/* 🍽 КАРТОЧКИ */}
      <div className="container-home">
        {filteredPosts.slice(0, 9).map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <div className="homepage-catalog">
              <img src={defaultPhoto} alt="" />
              <h4>{post.title}</h4>
              <p>{post.description}</p>

              <div className="status-homepage">
                👍 💬
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
export const homeLoader = async () => {
    const res = await fetch("http://localhost:5000/posts");
  
    if (!res.ok) {
      throw new Error("Ошибка загрузки постов");
    }
  
    return res.json();
  };