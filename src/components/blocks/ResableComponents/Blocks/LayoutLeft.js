import React from "react";
import { Link } from "react-router-dom";

function LayoutLeft() {
  return (
    <section className="Layout-left">
      <ul>
        <li>
          <Link to="/popular">Популярное</Link>
        </li>
        <li>
          <Link to="/new">Свежее</Link>
        </li>
        <li>
          <Link to="/my/new">Моя лента</Link>
        </li>
        <li>
          <Link to="/bookmarks">Закладки</Link>
        </li>
        <li>
          <Link to="/design">Дизайн</Link>
        </li>
        <li>
          <Link to="/development">Разработка</Link>
        </li>
        <li>
          <Link to="/videos">Видео</Link>
        </li>
        <li>
          <Link to="/music">Музыка</Link>
        </li>
        <li>
          <Link to="/articles">Статьи</Link>
        </li>
      </ul>
    </section>
  );
}

export default LayoutLeft;
