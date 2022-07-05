import React from "react";

import { pngIcoSmall } from "../../../../../img/50";

function CentralContent() {
  return (
    <>
      <li className="d1">
        <form action="" method="get">
          <input name="s" placeholder="Введите текст" type="search" />
          <button type="submit">
            <img width={30} height={30} src={pngIcoSmall.searchwhite} alt="" />
          </button>
        </form>
      </li>
    </>
  );
}

export default CentralContent;
