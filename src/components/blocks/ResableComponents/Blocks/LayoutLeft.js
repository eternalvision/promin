import React from "react";
import { Link } from "react-router-dom";

import { pngIcoSmall } from "../../../../img/50";

function LayoutLeft() {
  return (
    <section className="Layout-left">
      <ul>
        <li>
          <Link to="/popular">
            <img width={20} height={20} src={pngIcoSmall.fire} alt="" />
            Популярное
          </Link>
        </li>
        <li>
          <Link to="/new">
            <img width={20} height={20} src={pngIcoSmall.newpost} alt="" />
            Свежее
          </Link>
        </li>
        <li>
          <Link to="/my/new">
            <img width={20} height={20} src={pngIcoSmall.mynew} alt="" />
            Моя лента
          </Link>
        </li>
        <li>
          <Link to="/bookmarks">
            <img width={20} height={20} src={pngIcoSmall.bookmark} alt="" />
            Закладки
          </Link>
        </li>
        <li>
          <Link to="/articles">
            <img width={20} height={20} src={pngIcoSmall.articles} alt="" />
            Статьи
          </Link>
        </li>
        <li>
          <Link to="/development">
            <img width={20} height={20} src={pngIcoSmall.developing} alt="" />
            Разработка
          </Link>
        </li>
        <li>
          <Link to="/design">
            <img width={20} height={20} src={pngIcoSmall.design} alt="" />
            Дизайн
          </Link>
        </li>
        <li>
          <Link to="/photos">
            <img width={20} height={20} src={pngIcoSmall.camera} alt="" />
            Фото
          </Link>
        </li>
        <li>
          <Link to="/videos">
            <img width={20} height={20} src={pngIcoSmall.video} alt="" />
            Видео
          </Link>
        </li>
        <li>
          <Link to="/music">
            <img width={20} height={20} src={pngIcoSmall.music} alt="" />
            Музыка
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img width={20} height={20} src={pngIcoSmall.aboutauthor} alt="" />О Авторе
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default LayoutLeft;
