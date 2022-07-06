import React from "react";
import { Dropdown } from "semantic-ui-react";
import { pngIcoSmall } from "../../../../../img/50";
import DarkMode from "./DarkMode";

function CentralContent() {
  return (
    <>
      <li className="Central-header-content">
        <section className="d1">
          <form action="" method="get">
            <input name="s" placeholder="Введите текст" type="search" />
            <button type="submit">
              <img width={25} height={25} src={pngIcoSmall.searchwhite} alt="" />
            </button>
          </form>
        </section>
        <section className="d2">
          <Dropdown text="Создать">
            <Dropdown.Menu>
              <Dropdown.Item
                text={
                  <>
                    <img width={25} height={25} src={pngIcoSmall.entry} alt="" />
                    <span className="spancreated">Запись</span>
                  </>
                }
              />
              <Dropdown.Item
                text={
                  <>
                    <img width={25} height={25} src={pngIcoSmall.blog} alt="" />
                    <span className="spancreated">Блог</span>
                  </>
                }
              />
              <Dropdown.Item
                text={
                  <>
                    <img width={25} height={25} src={pngIcoSmall.camera} alt="" />
                    <span className="spancreated">Фото</span>
                  </>
                }
              />
              <Dropdown.Item
                text={
                  <>
                    <img width={25} height={25} src={pngIcoSmall.video} alt="" />
                    <span className="spancreated">Видео</span>
                  </>
                }
              />
              <Dropdown.Item
                text={
                  <>
                    <img width={25} height={25} src={pngIcoSmall.music} alt="" />
                    <span className="spancreated">Музыка</span>
                  </>
                }
              />
            </Dropdown.Menu>
          </Dropdown>
        </section>
        <section className="d3">
          <DarkMode />
        </section>
      </li>
    </>
  );
}

export default CentralContent;
