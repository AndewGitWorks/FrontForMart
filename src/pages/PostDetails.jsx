import { useLoaderData, Link } from "react-router-dom";
import defaultPhoto from "../assets/defaultPhoto.jpg";

const PostDetails = () => {
  const post = useLoaderData();

  return (
    <div className="post-details">
      {/* Баннер */}
      <div className="post-hero">
        <img src={defaultPhoto} alt={post.title} />
      </div>

      <div className="post-content">
        <h1>{post.title}</h1>

        {/* Мета */}
        <div className="post-meta">
          <span>⏱ 30 мин</span>
          <span>🍽 2 порции</span>
          <span>⭐ Легко</span>
        </div>

        {/* Кнопки */}
        <div className="post-actions">
          <button className="fav-btn">❤️ В избранное</button>
          <button className="print-btn" onClick={() => window.print()}>
            🖨 Печать
          </button>
        </div>

        <p className="post-description">{post.description}</p>

        {/* Ингредиенты */}
        <section className="ingredients">
          <h2>Ингредиенты</h2>
          <ul>
            <li>🥕 Морковь — 2 шт</li>
            <li>🧅 Лук — 1 шт</li>
            <li>🧄 Чеснок — 2 зубчика</li>
            <li>🧂 Соль, перец — по вкусу</li>
          </ul>
        </section>

        {/* Шаги */}
        <section className="steps">
          <h2>Способ приготовления</h2>
          <ol>
            <li>Подготовьте все ингредиенты.</li>
            <li>Обжарьте овощи на среднем огне.</li>
            <li>Добавьте специи и готовьте 10–15 минут.</li>
            <li>Подавайте горячим.</li>
          </ol>
        </section>

        {/* Комментарии */}
        <section className="comments">
          <h2>Комментарии</h2>

          <div className="comment">
            <strong>Анна</strong>
            <p>Очень вкусно! Готовлю уже второй раз ❤️</p>
          </div>

          <div className="comment">
            <strong>Игорь</strong>
            <p>Просто и быстро, спасибо!</p>
          </div>

          {/* Форма */}
          <form className="comment-form">
            <textarea placeholder="Оставьте комментарий..." />
            <button type="submit">Отправить</button>
          </form>
        </section>

        <Link to="/" className="back-link">
          ← Назад к рецептам
        </Link>
      </div>
    </div>
  );
};

export default PostDetails;


export const postDetailLoader = async ({ params }) => {
    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  
    if (!res.ok) {
      throw new Response("Not Found", { status: 404 });
    }
  
    return res.json();
};